import { PlaceHolderImages } from './placeholder-images';

export interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  code: string;
}

const findImage = (id: string) =>
  PlaceHolderImages.find((img) => img.id === id)?.imageUrl || '/placeholder.jpg';

export const products: Product[] = [
  {
    name: 'Amor Eterno',
    price: 850,
    description:
      '24 rosas clásicas para decir te amo sin palabras, el símbolo perfecto de una pasión que nunca termina.',
    image: findImage('product-amor-eterno'),
    imageAlt: 'Classic bouquet of 24 premium red roses',
    badge: 'El favorito de todos',
    badgeColor: 'bg-primary',
    badgeTextColor: 'text-primary-foreground',
    code: 'FE01',
  },
  {
    name: 'Rocío de Pasión',
    price: 1200,
    description:
      'Una danza vibrante de tulipanes y lirios para celebrar un amor fresco, único y lleno de vida.',
    image: findImage('product-rocio-de-pasion'),
    imageAlt: 'Vibrant arrangement of fresh tulips and lilies',
    badge: 'Exclusivo',
    badgeColor: 'bg-amber-500',
    badgeTextColor: 'text-white',
    code: 'FE02',
  },
  {
    name: 'Detalle Romántico',
    price: 950,
    description:
      'Rosas que cautivan y chocolates que endulzan el alma. La combinación perfecta para un "Te Quiero" inolvidable.',
    image: findImage('product-detalle-romantico'),
    imageAlt: 'Gift box with roses and gourmet chocolates',
    badge: 'El Dúo Perfecto',
    badgeColor: 'bg-zinc-800',
    badgeTextColor: 'text-white',
    code: 'FE03',
  },
];
