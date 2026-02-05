'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { Product } from '@/lib/products';
import { generateProductWhatsAppLink } from '@/lib/whatsapp';
import Image from 'next/image';
import { MaterialIcon } from './MaterialIcon';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ProductDetailModal({
  product,
  isOpen,
  onOpenChange,
}: ProductDetailModalProps) {
  if (!product) {
    return null;
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
  } = product;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl p-0 gap-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-t-none">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
            {badge && (
              <div className="absolute top-4 left-4">
                <span
                  className={`text-xs font-bold uppercase px-3 py-1 rounded-full shadow-lg ${badgeColor} ${badgeTextColor}`}
                >
                  {badge}
                </span>
              </div>
            )}
          </div>
          <div className="p-6 md:p-8 flex flex-col">
            <DialogHeader className="text-left">
              <DialogTitle className="text-3xl font-bold">{name}</DialogTitle>
            </DialogHeader>
            <div className="my-4 flex-1">
              <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                &quot;{description}&quot;
              </DialogDescription>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-right">
                <p className="text-3xl font-bold text-primary leading-none">
                  ${price}
                </p>
                <p className="text-lg font-bold text-primary leading-tight -mt-1">
                  MXN
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  + ENVÍO
                </p>
              </div>
              <a
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full py-3.5 px-5 font-bold text-base whitespace-nowrap transition-all shadow-md hover:shadow-lg active:scale-95 mt-2"
                href={generateProductWhatsAppLink(name, price, code)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MaterialIcon icon="chat" className="text-xl" />
                Pedir por WhatsApp
              </a>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                *El diseño y los colores pueden variar según disponibilidad.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
