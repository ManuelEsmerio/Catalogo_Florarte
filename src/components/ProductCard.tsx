import Image from 'next/image';
import type { Product } from '@/lib/products';
import { generateProductWhatsAppLink } from '@/lib/whatsapp';
import { MaterialIcon } from './MaterialIcon';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { name, price, description, image, imageAlt, badge, badgeColor, badgeTextColor, code } = product;

  return (
    <div className="group flex flex-col bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary/20">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
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
      <div className="p-6 space-y-4 flex flex-col flex-1">
        <div className="space-y-2 flex-1">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-xl font-bold text-foreground">{name}</h3>
            <p className="text-primary font-bold text-xl whitespace-nowrap">
              ${price} MXN
            </p>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed italic">
            &quot;{description}&quot;
          </p>
        </div>
        <a
          className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full py-4 font-bold transition-all shadow-md hover:shadow-lg active:scale-95 mt-4"
          href={generateProductWhatsAppLink(name, price, code)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MaterialIcon icon="chat" className="text-xl" />
          Pedir por WhatsApp
        </a>
      </div>
    </div>
  );
}
