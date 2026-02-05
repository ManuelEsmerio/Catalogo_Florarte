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
  category: 'flores' | 'paquetes' | 'complementos';
}

const findImage = (id: string) =>
  PlaceHolderImages.find((img) => img.id === id)?.imageUrl || 'https://placehold.co/800x1000/f8f5f6/1c0d11?text=Imagen+no+disponible';

export const products: Product[] = [
  {
    name: 'Ramo 24 Rosas',
    price: 850,
    description:
      'Ramo con 24 rosas rojas, follaje natural y envoltura en papel coreano con moño decorativo. Ideal para regalo especial. 🌹',
    image: findImage('ramo-24-rosas'),
    imageAlt: 'Classic bouquet of 24 premium red roses',
    badge: 'FAVORITO DE TODOS',
    badgeColor: 'bg-primary',
    badgeTextColor: 'text-primary-foreground',
    code: 'FE01',
    category: 'flores',
  },
  {
    name: 'Rocío de Pasión',
    price: 1200,
    description:
      'Una danza vibrante de tulipanes y lirios para celebrar un amor fresco, único y lleno de vida.',
    image: findImage('product-rocio-de-pasion'),
    imageAlt: 'Vibrant arrangement of fresh tulips and lilies',
    badge: 'EXCLUSIVO',
    badgeColor: 'bg-amber-500',
    badgeTextColor: 'text-white',
    code: 'FE02',
    category: 'flores',
  },
  {
    name: 'Detalle Romántico',
    price: 950,
    description:
      'Rosas que cautivan y chocolates que endulzan el alma. La combinación perfecta para un "Te Quiero" inolvidable.',
    image: findImage('product-detalle-romantico'),
    imageAlt: 'Gift box with roses and gourmet chocolates',
    badge: 'EL DÚO PERFECTO',
    badgeColor: 'bg-zinc-800',
    badgeTextColor: 'text-white',
    code: 'FE03',
    category: 'paquetes',
  },
  {
    name: 'Pureza Blanca',
    price: 780,
    description:
      'Elegancia minimalista con lirios blancos seleccionados. Ideal para expresar paz y amor puro.',
    image: findImage('product-pureza-blanca'),
    imageAlt: 'Bouquet of white lilies',
    code: 'FE04',
    category: 'flores',
  },
  {
    name: 'Pradera Silvestre',
    price: 1100,
    description:
      'Un arreglo desbordante con flores de estación que evoca la libertad de un campo en primavera.',
    image: findImage('product-pradera-silvestre'),
    imageAlt: 'Wildflower arrangement',
    code: 'FE05',
    category: 'flores',
  },
  {
    name: 'Caja de Encanto',
    price: 1450,
    description:
      'Nuestra caja de lujo premium con rosas rojas y detalles en dorado para un regalo que impacta.',
    image: findImage('product-caja-de-encanto'),
    imageAlt: 'Luxury box with red roses',
    badge: 'TOP VENTAS',
    badgeColor: 'bg-pink-500',
    badgeTextColor: 'text-white',
    code: 'FE06',
    category: 'paquetes',
  },
  {
    name: 'Misterio Púrpura',
    price: 920,
    description:
      'Orquídeas y violetas que transmiten nobleza y para personalidades nada obvias y muy seguras.',
    image: findImage('product-misterio-purpura'),
    imageAlt: 'Arrangement of orchids and violets',
    code: 'FE07',
    category: 'flores',
  },
  {
    name: 'Amanecer Dorado',
    price: 650,
    description:
      'Girasoles radiantes que combinan con cualquier espacio y llenan de alegría el corazón de quien los recibe.',
    image: findImage('product-amanecer-dorado'),
    imageAlt: 'Bouquet of sunflowers',
    code: 'FE08',
    category: 'flores',
  },
  {
    name: 'Sonrisa de Sol',
    price: 720,
    description:
      'Gerberas amarillas que irradian alegría y energía positiva, como un rayo de sol en un día especial.',
    image: findImage('product-sonrisa-de-sol'),
    imageAlt: 'Bouquet of yellow gerberas',
    code: 'FE09',
    category: 'flores',
  },
  {
    name: 'Corazón de Rubí',
    price: 880,
    description:
      'Claveles de un rojo intenso que simbolizan el amor profundo y la admiración sincera.',
    image: findImage('product-corazon-de-rubi'),
    imageAlt: 'Bouquet of red carnations',
    code: 'FE10',
    category: 'flores',
  },
  {
    name: 'Beso de Ángel',
    price: 1150,
    description:
      'Una delicada combinación de rosas en tonos pastel, susurrando ternura y dulzura.',
    image: findImage('product-beso-de-angel'),
    imageAlt: 'Bouquet of pastel roses',
    badge: 'NUEVO',
    badgeColor: 'bg-green-500',
    badgeTextColor: 'text-white',
    code: 'FE11',
    category: 'flores',
  },
  {
    name: 'Abrazo Cálido',
    price: 990,
    description:
      'Flores en tonos naranjas y amarillos que evocan la calidez de un abrazo sincero.',
    image: findImage('product-abrazo-calido'),
    imageAlt: 'Bouquet of orange and yellow flowers',
    code: 'FE12',
    category: 'flores',
  },
  {
    name: 'Amigo de Peluche',
    price: 450,
    description:
      'Un adorable oso de peluche, el compañero perfecto para cualquier arreglo floral.',
    image: findImage('product-oso-de-peluche'),
    imageAlt: 'A cute teddy bear',
    code: 'FE13',
    category: 'complementos',
  },
];
