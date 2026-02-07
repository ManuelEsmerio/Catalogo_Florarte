'use client';

import { useMemo, useState, useEffect } from 'react';
import type { Product } from '@/lib/products';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from './ProductDetailModal';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const PRODUCTS_PER_PAGE = 8;
const categories = ['Todos', 'Flores', 'Paquetes', 'Complementos'];
type Category = 'Todos' | 'Flores' | 'Paquetes' | 'Complementos';

export function Catalog({ products }: { products: Product[] }) {
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const [sortBy, setSortBy] = useState('recent');
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    let tempProducts = products;

    // Filter by Category
    if (selectedCategory !== 'Todos') {
      const categoryLower = selectedCategory.toLowerCase() as
        | 'flores'
        | 'paquetes'
        | 'complementos';
      tempProducts = tempProducts.filter(
        (product) => product.category === categoryLower
      );
    }

    // Filter by Search Term
    if (searchTerm.trim()) {
      const lowercasedTerm = searchTerm.toLowerCase().trim();
      tempProducts = tempProducts.filter((product) => {
        const searchableText =
          `${product.name} ${product.description} ${product.code} ${product.category}`.toLowerCase();
        return searchableText.includes(lowercasedTerm);
      });
    }

    return tempProducts;
  }, [selectedCategory, searchTerm, products]);

  const sortedProducts = useMemo(() => {
    const initialSortOrder = products.map(p => p.code);
    return [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'recent':
        default:
          return initialSortOrder.indexOf(a.code) - initialSortOrder.indexOf(b.code);
      }
    });
  }, [sortBy, filteredProducts, products]);

  useEffect(() => {
    setVisibleCount(PRODUCTS_PER_PAGE);
  }, [selectedCategory, sortBy, searchTerm]);

  const visibleProducts = useMemo(
    () => sortedProducts.slice(0, visibleCount),
    [sortedProducts, visibleCount]
  );

  const loadMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + PRODUCTS_PER_PAGE);
  };

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const showingCount = Math.min(visibleCount, sortedProducts.length);

  return (
    <>
      <section className="px-4 md:px-20 lg:px-40 pt-12" id="catalogo">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-4 border-l-4 border-primary pl-6">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-widest">
                Colección Inolvidable 2026
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-1">
                Regalos que Roban Suspiros
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
              <Input
                placeholder="Buscar por rosas, chocolates..."
                className="w-full md:w-[240px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Select onValueChange={setSortBy} defaultValue="recent">
                <SelectTrigger className="w-full md:w-[220px] text-sm">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Más Recientes</SelectItem>
                  <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
                  <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 px-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className="rounded-full font-bold"
                onClick={() => setSelectedCategory(category as Category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 md:px-20 lg:px-40 py-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.code}
              product={product}
              onOpenModal={() => handleOpenModal(product)}
            />
          ))}
        </div>
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No se encontraron productos.
            </p>
          </div>
        )}
        {visibleCount < sortedProducts.length && (
          <div className="text-center mt-12 space-y-2">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base font-bold px-10 py-6 border-primary text-primary hover:bg-primary/5 hover:text-primary"
              onClick={loadMoreProducts}
            >
              Cargar más productos
            </Button>
            <p className="text-xs text-muted-foreground font-medium">
              Mostrando {showingCount} de {sortedProducts.length} arreglos
              exclusivos
            </p>
          </div>
        )}
      </section>

      <ProductDetailModal
        isOpen={!!selectedProduct}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            handleCloseModal();
          }
        }}
        product={selectedProduct}
      />
    </>
  );
}
