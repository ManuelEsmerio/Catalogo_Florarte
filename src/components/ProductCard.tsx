import Image from 'next/image';
import type { Product } from '@/lib/products';
import { Button } from './ui/button';
import { generateProductWhatsAppLink } from '@/lib/whatsapp';
import { MaterialIcon } from './MaterialIcon';

type ProductCardProps = {
  product: Product;
  onOpenModal: () => void;
};

export function ProductCard({ product, onOpenModal }: ProductCardProps) {
  const { name, price, image, imageAlt, badge, badgeColor, badgeTextColor, code } =
    product;

  return (
    <div
      className="group flex flex-col bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-card hover:border-primary/20 cursor-pointer"
      onClick={onOpenModal}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
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
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-4 flex-1">
          <h3 className="text-lg font-bold text-foreground leading-tight">
            {name}
          </h3>
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
            tabIndex={-1} // The whole card is clickable, so this button is just for visual cues
          >
            Ver detalles
          </Button>
          <a
            href={generateProductWhatsAppLink(name, price, code)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-shrink-0 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-green-700 rounded-full p-3 transition-all shadow-sm hover:shadow-md active:scale-95"
            aria-label="Pedir por WhatsApp"
          >
            <MaterialIcon icon="chat_bubble" className="text-xl" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          *El diseño y los colores pueden variar según disponibilidad.
        </p>
      </div>
    </div>
  );
}
