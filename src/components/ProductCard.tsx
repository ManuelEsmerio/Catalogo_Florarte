'use client';

import Image from 'next/image';
import type { Product } from '@/lib/products';
import { Button } from './ui/button';
import { generateProductWhatsAppLink } from '@/lib/whatsapp';
import { MaterialIcon } from './MaterialIcon';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const {
    name,
    price,
    image,
    imageAlt,
    badge,
    badgeColor,
    badgeTextColor,
    code,
    isAvailable,
  } = product;

  return (
    <div
      className="group flex flex-col bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-card hover:border-primary/20"
    >
      <Link href={`/producto/${code}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
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
      </Link>
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-4 flex-1">
          <div>
            <h3 className="text-lg font-bold text-foreground leading-tight">
              <Link href={`/producto/${code}`} className="hover:underline">{name}</Link>
            </h3>
            <p className="text-xs text-muted-foreground mt-1">CÓD: {code}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-primary font-bold text-lg whitespace-nowrap">
              ${price}
            </p>
            <p className="text-xs text-muted-foreground -mt-1">+ ENVÍO</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Button
            variant="outline"
            className="w-full font-bold border-primary/20 text-primary hover:bg-primary/5 hover:text-primary"
            asChild
          >
            <Link href={`/producto/${code}`}>
              Ver detalles
            </Link>
          </Button>
          <a
            href={
              isAvailable ? generateProductWhatsAppLink(name, price, code) : undefined
            }
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!isAvailable) {
                e.preventDefault();
              }
              e.stopPropagation();
            }}
            className={cn(
              'flex-shrink-0 rounded-full p-3 transition-all shadow-sm hover:shadow-md active:scale-95',
              isAvailable
                ? 'bg-[#25D366]/20 hover:bg-[#25D366]/30 text-green-700'
                : 'bg-muted text-muted-foreground cursor-not-allowed opacity-70'
            )}
            aria-label={
              isAvailable ? 'Pedir por WhatsApp' : 'Producto agotado'
            }
            aria-disabled={!isAvailable}
          >
            <MaterialIcon icon="chat_bubble" className="text-xl" />
          </a>
        </div>
        <p className="text-[10px] text-muted-foreground mt-2 text-center">
          El diseño, colores y presentación de los arreglos florales, globos,
          peluches y demás complementos pueden variar según disponibilidad,
          conservando siempre la calidad y el estilo del producto mostrado.
        </p>
      </div>
    </div>
  );
}
