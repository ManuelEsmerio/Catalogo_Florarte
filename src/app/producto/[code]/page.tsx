import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { generateProductWhatsAppLink } from '@/lib/whatsapp';
import { MaterialIcon } from '@/components/MaterialIcon';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';

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
  const product = products.find((p) => p.code === params.code);

  if (!product) {
    notFound();
  }

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
      <div className="max-w-4xl mx-auto my-12 px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-4 sm:p-8 rounded-2xl shadow-lg border">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 767px) 100vw, 50vw"
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
              <div className="flex flex-col">
                  <div className="text-left">
                      <h1 className="text-3xl lg:text-4xl font-bold">{name}</h1>
                      <p className="text-sm text-muted-foreground pt-2">
                          Código: {code}
                      </p>
                  </div>
                  <div className="my-6 flex-1">
                      <p className="text-base text-muted-foreground leading-relaxed">
                          &quot;{description}&quot;
                      </p>
                  </div>
                  <div className="flex flex-col gap-2">
                      <div className="text-right">
                          <p className="text-3xl font-bold text-primary leading-none">
                          ${price}
                          </p>
                          <p className="text-lg font-bold text-primary leading-tight -mt-1">
                          MXN
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">+ ENVÍO</p>
                      </div>
                      {isAvailable ? (
                          <a
                          className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full py-3.5 px-5 font-bold text-base whitespace-nowrap transition-all shadow-md hover:shadow-lg active:scale-95 mt-2"
                          href={generateProductWhatsAppLink(name, price, code)}
                          target="_blank"
                          rel="noopener noreferrer"
                          >
                          <MaterialIcon icon="chat" className="text-xl" />
                          Pedir por WhatsApp
                          </a>
                      ) : (
                          <Button disabled className="w-full py-3.5 px-5 text-base mt-2" size="lg">
                          <MaterialIcon icon="block" className="text-xl mr-2" />
                          Producto Agotado
                          </Button>
                      )}
                       <Button asChild variant="outline" className="mt-2">
                          <Link href="/">
                              <MaterialIcon icon="arrow_back" className="mr-2" />
                              Volver al Catálogo
                          </Link>
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                          El diseño, colores y presentación de los arreglos florales,
                          globos, peluches y demás complementos pueden variar según
                          disponibilidad, conservando siempre la calidad y el estilo del
                          producto mostrado.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
