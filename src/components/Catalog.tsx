'use client';

import { useMemo, useState } from 'react';
import { products } from '@/lib/products';
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

const PRODUCTS_PER_PAGE = 8;

export function Catalog() {
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const [sortBy, setSortBy] = useState('recent');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'recent':
        default:
          // Assuming the original order is by most recent
          return products.indexOf(a) - products.indexOf(b);
      }
    });
  }, [sortBy]);

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

  return (
    <>
      <section className="px-4 md:px-20 lg:px-40 pt-12" id="catalogo">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-4 border-l-4 border-primary pl-6">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-widest">
                Colección Inolvidable 2024
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-1">
                Regalos que Roban Suspiros
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20">
                Últimas Unidades Disponibles
              </span>
              <Select onValueChange={setSortBy} defaultValue="recent">
                <SelectTrigger className="w-[220px] text-sm">
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
        {visibleCount < products.length && (
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
              Mostrando {visibleCount} de {products.length} arreglos exclusivos
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