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
    imageAlt: 'Ramo floral de 24 rosas rojas',
    badge: 'FAVORITO DE TODOS',
    badgeColor: 'bg-primary',
    badgeTextColor: 'text-primary-foreground',
    code: 'FE01',
    category: 'flores',
  },
  {
    name: 'Ramo 12 Rosas',
    price: 1200,
    description:
      'Ramo con 12 rosas rojas, follaje natural y envoltura en papel coreano con moño decorativo. Ideal para regalo especial. 🌹',
    image: findImage('ramo-12-rosas'),
    imageAlt: 'Ramo floral de 12 rosas rojas',
    badge: 'NUEVO',
    badgeColor: 'bg-primary',
    badgeTextColor: 'text-primary-foreground',
    code: 'FE02',
    category: 'flores',
  },
  {
    name: 'Arreglo Espiral',
    price: 950,
    description:
      'Arreglo con rosas rojas, lirios blancos, follaje natural y base decorativa, ideal para regalar en ocasiones especiales. 🌹🤍',
    image: findImage('arreglo-espiral'),
    imageAlt: 'Arreglo floral de rosas en espiral',
    badge: 'EXCLUSIVO',
    badgeColor: 'bg-primary',
    badgeTextColor: 'text-primary-foreground',
    code: 'FE03',
    category: 'flores',
  },
  {
    name: 'Paquete Romance',
    price: 780,
    description:
      'Incluye ramo de rosas rojas, globo, oso de peluche y moño decorativo. Ideal para sorprender.',
    image: findImage('paquete-ramo-24-globo-peluche'),
    imageAlt: 'Paquete ramo de 24 rosas rojas',
    code: 'PA01',
    badge: 'PROMOCIÓN',
    badgeColor: 'bg-primary',
    badgeTextColor: 'text-primary-foreground',
    category: 'paquetes',
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
    name: 'Florero 24 Rosas',
    price: 1450,
    description:
      'Elegante ramo con 24 rosas rojas en florero, ideal para expresar amor y admiración. ❤️✨',
    image: findImage('florero-24-rosas'),
    imageAlt: 'Florero 24 Rosas',
    badge: 'TOP VENTAS',
    badgeColor: 'bg-pink-500',
    badgeTextColor: 'text-white',
    code: 'FE06',
    category: 'flores',
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
    name: 'Amor Floral',
    price: 990,
    description:
      'Arreglo con rosas, lirios, peluche, chocolates y globo. Perfecto para sorprender con amor. 🌹💖',
    image: findImage('amor-floral'),
    imageAlt: 'Arreglo con rosas, lirios, peluche, chocolates y globo',
    code: 'PA02',
    category: 'paquetes',
  },
  {
    name: 'Ferrero Rocher 24 pzas',
    price: 450,
    description:
      'Estuche con 24 chocolates Ferrero Rocher, ideal para un regalo elegante. 🍫🌟',
    image: findImage('ferrero-24-piezas'),
    imageAlt: 'Ferrero Rocher 24 pzas',
    code: 'CO01',
    category: 'complementos',
  },
  {
    name: 'Ferrero Rocher 16 pzas',
    price: 450,
    description:
      'Caja con 16 chocolates premium, para sorprender en ocasiones especiales. 🍫💛',
    image: findImage('ferrero-16-pierzas'),
    imageAlt: 'Ferrero Rocher 16 pzas',
    code: 'CO02',
    category: 'complementos',
  },
  {
    name: 'Ferrero Rocher 8 pzas',
    price: 450,
    description:
      'Caja con 8 chocolates Ferrero Rocher, ideal para un detalle dulce. 🍫✨',
    image: findImage('ferrero-8-piezas'),
    imageAlt: 'Ferrero Rocher 8 pz',
    code: 'CO03',
    category: 'complementos',
  },
  {
    name: 'Chocolate Ferrero caja corazón',
    price: 450,
    description:
      'Caja de corazón con 8 chocolates Ferrero Rocher, ideal para un detalle dulce. 🍫✨',
    image: findImage('ferrero-8-piezas-corazon'),
    imageAlt: 'Chocolate Ferrero caja corazón',
    code: 'CO04',
    category: 'complementos',
  },
];
