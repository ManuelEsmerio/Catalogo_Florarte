import { products, type Product } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { generateProductWhatsAppLink } from '@/lib/whatsapp';
import { MaterialIcon } from '@/components/MaterialIcon';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ProductCard } from '@/components/ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  params: { code: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.code === params.code);

  if (!product) {
    return {
      title: 'Producto no encontrado',
    };
  }

  return {
    title: `${product.name} - Florería Florarte`,
    description: product.description,
  };
}


export default function ProductPage({ params }: Props) {
  const productIndex = products.findIndex((p) => p.code === params.code);

  if (productIndex === -1) {
    notFound();
  }

  const product = products[productIndex];
  const prevProduct = products[(productIndex - 1 + products.length) % products.length];
  const nextProduct = products[(productIndex + 1) % products.length];


  const recommendedProducts = products
    .filter((p) => {
      if (p.code === product.code) return false;

      const currentCategory = product.category;
      const pCategory = p.category;

      if (currentCategory === 'flores') {
        return pCategory === 'complementos' || pCategory === 'paquetes';
      }
      if (currentCategory === 'complementos') {
        return pCategory === 'flores' || pCategory === 'paquetes';
      }
      if (currentCategory === 'paquetes') {
        return pCategory === 'flores' || pCategory === 'complementos';
      }
      return false; 
    })
    .sort(() => 0.5 - Math.random()) 
    .slice(0, 8);


  const {
    name,
    price,
    description,
    image,
    imageAlt,
    code,
    badge,
    badgeColor,
    badgeTextColor,
    isAvailable,
  } = product;

  return (
    <>
      <div className="max-w-6xl mx-auto my-12 px-4">
        <div className="relative">
          <Link
            href={`/producto/${prevProduct.code}`}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-12 bg-card/80 backdrop-blur-sm p-2 rounded-full border shadow-lg hover:scale-110 transition-transform hidden lg:flex items-center justify-center"
            aria-label="Anterior Producto"
            scroll={false}
          >
            <ChevronLeft className="size-8 text-primary" />
          </Link>
          <Link
            href={`/producto/${nextProduct.code}`}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-12 bg-card/80 backdrop-blur-sm p-2 rounded-full border shadow-lg hover:scale-110 transition-transform hidden lg:flex items-center justify-center"
            aria-label="Siguiente Producto"
            scroll={false}
          >
            <ChevronRight className="size-8 text-primary" />
          </Link>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 bg-card p-4 sm:p-8 rounded-2xl shadow-lg border">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  />
                  {badge && (
                  <div className="absolute top-4 left-4 z-10">
                      <span
                      className={`text-xs font-bold uppercase px-3 py-1 rounded-full shadow-lg ${badgeColor} ${badgeTextColor}`}
                      >
                      {badge}
                      </span>
                  </div>
                  )}
                  {!isAvailable && (
                  <div className="absolute top-4 right-4 z-10">
                      <span
                      className="text-xs font-bold uppercase px-3 py-1 rounded-full shadow-lg bg-destructive text-destructive-foreground"
                      >
                      Agotado
                      </span>
                  </div>
                  )}
              </div>
              <div className="flex flex-col justify-center">
                  <div className="text-left">
                      <h1 className="text-4xl lg:text-5xl font-bold">{name}</h1>
                      <p className="text-sm text-muted-foreground pt-2">
                          Código: {code}
                      </p>
                  </div>
                  <div className="my-8 flex-1">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                          &quot;{description}&quot;
                      </p>
                  </div>
                  <div className="flex flex-col gap-2">
                      <div className="text-right">
                          <p className="text-4xl font-bold text-primary leading-none">
                          ${price}
                          </p>
                          <p className="text-xl font-bold text-primary leading-tight -mt-1">
                          MXN
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">+ ENVÍO</p>
                      </div>
                      {isAvailable ? (
                          <a
                          className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full py-4 px-5 font-bold text-base whitespace-nowrap transition-all shadow-md hover:shadow-lg active:scale-95 mt-2"
                          href={generateProductWhatsAppLink(name, price, code)}
                          target="_blank"
                          rel="noopener noreferrer"
                          >
                          <MaterialIcon icon="chat" className="text-xl" />
                          Pedir por WhatsApp
                          </a>
                      ) : (
                          <Button disabled className="w-full py-4 px-5 text-base mt-2" size="lg">
                              <MaterialIcon icon="block" className="text-xl mr-2" />
                              Producto Agotado
                          </Button>
                      )}
                       <Button asChild variant="outline" className="mt-2 py-4 text-base">
                          <Link href="/">
                              <MaterialIcon icon="arrow_back" className="mr-2" />
                              Volver al Catálogo
                          </Link>
                      </Button>
                      <p className="text-xs text-muted-foreground mt-4 text-center">
                          El diseño, colores y presentación de los arreglos florales,
                          globos, peluches y demás complementos pueden variar según
                          disponibilidad, conservando siempre la calidad y el estilo del
                          producto mostrado.
                      </p>
                  </div>
              </div>
          </div>
        </div>
      </div>
      {recommendedProducts.length > 0 && (
        <section className="py-16 bg-background/50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">También te puede interesar</h2>
              <p className="text-muted-foreground mt-2 text-lg max-w-2xl mx-auto">
                Completa tu sorpresa con estos detalles o explora otras opciones encantadoras.
              </p>
            </div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {recommendedProducts.map((p) => (
                  <CarouselItem key={p.code} className="pl-4 md:basis-1/2 lg:basis-1/4">
                      <ProductCard product={p} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex" />
              <CarouselNext className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex" />
            </Carousel>
          </div>
        </section>
      )}
    </>
  );
}
