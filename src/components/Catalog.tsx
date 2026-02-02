import { products } from '@/lib/products';
import { ProductCard } from './ProductCard';

export function Catalog() {
  return (
    <>
      <section className="px-4 md:px-20 lg:px-40 pt-12" id="catalogo">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-4 border-l-4 border-primary pl-6">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-widest">
                Colección Inolvidable 2024
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-1">
                Regalos que Roban Suspiros
              </h2>
            </div>
            <div className="flex gap-2">
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20">
                Últimas Unidades Disponibles
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 md:px-20 lg:px-40 py-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
