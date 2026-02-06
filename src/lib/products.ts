import { PlaceHolderImages, imageCacheVersion } from './placeholder-images';

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

const findImage = (id: string) => {
  const imageUrl = PlaceHolderImages.find((img) => img.id === id)?.imageUrl;
  if (imageUrl) {
    return `${imageUrl}?v=${imageCacheVersion}`;
  }
  return 'https://placehold.co/800x1000/f8f5f6/1c0d11?text=Imagen+no+disponible';
};

export const products: Product[] = [
  {
    name: 'Ramo Floral 24 Rosas',
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
    name: 'Ramo Floral 12 Rosas',
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
    name: 'Arreglo Espiral Simple',
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
    name: 'Ramo Floral 50 Rosas y Girasole',
    price: 1100,
    description:
      'Ramo de 50 rosas rojas y 4 girasoles',
    image: findImage('ramo-50-rosas-girasoles'),
    imageAlt: 'Ramo de 50 rosas rojas y 4 girasoles',
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
  // {
  //   name: 'Sonrisa Floral',
  //   price: 920,
  //   description:
  //     'Un arreglo floral colorido y llamativo con rosas rojas, gerberas rosas, un girasol, lirios y alstroemerias, acompañado de follaje verde que le da volumen y frescura.',
  //   image: findImage('arreglo-espiral-grande-colores'),
  //   imageAlt: 'Arreglo espiral, floral de colores',
  //   code: 'FE07',
  //   category: 'flores',
  // },
  {
    name: 'Arreglo Corazon Chico',
    price: 650,
    description:
      'Un arreglo romántico con seis rosas rojas, follaje verde y detalles de flores blancas, presentado en una canasta con corazones dorados decorativos.',
    image: findImage('Arreglo-6-rosas'),
    imageAlt: 'Arreglo chico de 6 rosas rojas',
    code: 'FE08',
    category: 'flores',
  },
  {
    name: 'Arreglo Espiral Doble',
    price: 720,
    description:
      'Arreglo en espiral doble de rosas rojas',
    image: findImage('arreglo-espiral-doble'),
    imageAlt: 'Arreglo en espiral doble',
    code: 'FE09',
    category: 'flores',
  },
  {
    name: 'Rojo Infinito',
    price: 650,
    description:
      'Un arreglo grande y elegante de rosas rojas, dispuestas en forma de abanico con hojas verdes al centro, creando una presentación impactante y romántica.',
    image: findImage('arreglo-espiral-solo-rosas-xl'),
    imageAlt: 'Rojo Infinito',
    code: 'FE10',
    category: 'flores',
  },
  {
    name: 'Arreglo Flores Surtidas',
    price: 650,
    description:
      'Un arreglo floral elegante y vertical con rosas rojas, gerberas, lirios blancos y follaje tropical, estructurado con altura y contraste de colores para un efecto sofisticado.',
    image: findImage('arreglo-surtido'),
    imageAlt: 'Arreglo Surtido',
    code: 'FE11',
    category: 'flores',
  },

  {
    name: 'Arreglo Flores Surtidas Gerberas',
    price: 650,
    description:
      'Un arreglo floral elegante y vertical con rosas rojas, gerberas, lirios blancos y follaje tropical, estructurado con altura y contraste de colores para un efecto sofisticado.',
    image: findImage('arreglo-surtido-9'),
    imageAlt: 'Arreglo Surtido Gerberas 9',
    code: 'FE12',
    category: 'flores',
  },
  {
    name: 'Arreglo de Rosas en Capaz',
    price: 650,
    description:
      'Un arreglo floral elegante y vertical con rosas rojas, gerberas, lirios blancos y follaje tropical, estructurado con altura y contraste de colores para un efecto sofisticado.',
    image: findImage('arreglo-capaz-rosas'),
    imageAlt: 'Arreglo Rosas en Capaz',
    code: 'FE13',
    category: 'flores',
  },
  // {
  //   name: 'Arreglo Surtido Colores',
  //   price: 650,
  //   description:
  //     'Un arreglo floral elegante y vertical con rosas rojas, gerberas, lirios blancos y follaje tropical, estructurado con altura y contraste de colores para un efecto sofisticado.',
  //   image: findImage('arreglo-surtido-colores'),
  //   imageAlt: 'Arreglo Surtido Colores',
  //   code: 'FE14',
  //   category: 'flores',
  // },
  {
    name: 'Ramo Surtido de Rosas',
    price: 650,
    description:
      'Un arreglo floral elegante y vertical con rosas rojas, gerberas, lirios blancos y follaje tropical, estructurado con altura y contraste de colores para un efecto sofisticado.',
    image: findImage('ramo-surtido-rosas'),
    imageAlt: 'Ramo Surtido Rosas',
    code: 'FE15',
    category: 'flores',
  },
  {
    name: 'Arreglo en Rosas en Capaz Chica',
    price: 650,
    description:
      'Arreglo en base de madera con rosas rojas, lirios blancos y follaje natural, ideal para sorprender.',
    image: findImage('arreglo-florarte-1'),
    imageAlt: 'Ramo Surtido Rosas',
    code: 'FE16',
    category: 'flores',
  },
  {
    name: 'Arreglo 10 Rosas Rojas',
    price: 650,
    description:
      'Arreglo piramidal con rosas rojas, lirios blancos y follaje natural, ideal para momentos especiales.',
    image: findImage('arreglo-florarte-2'),
    imageAlt: 'Ramo Surtido Rosas',
    code: 'FE17',
    category: 'flores',
  },
  {
    name: 'Florero 2 Rosas Rojas',
    price: 650,
    description:
      'Arreglo en florero con rosas rojas, flores blancas y follaje natural, ideal para expresar amor y cariño.',
    image: findImage('arreglo-florarte-3'),
    imageAlt: 'Ramo Surtido Rosas',
    code: 'FE18',
    category: 'flores',
  },
  {
    name: 'Florero 6 Rosas Rojas',
    price: 650,
    description:
      'Arreglo en florero con rosas rojas, flores blancas y follaje natural, ideal para expresar amor y cariño.',
    image: findImage('arreglo-florarte-4'),
    imageAlt: 'Ramo Surtido Rosas',
    code: 'FE19',
    category: 'flores',
  },
  {
    name: 'Canasta Romance Floral',
    price: 650,
    description:
      'Arreglo en canasta con rosas rojas, lirios blancos, gerberas rosadas y follaje natural, ideal para regalar.',
    image: findImage('arreglo-florarte-5'),
    imageAlt: 'Ramo Surtido Rosas',
    code: 'FE20',
    category: 'flores',
  },





  {
    name: 'Florero 24 Rosas Rojas y Rosas',
    price: 650,
    description:
      'Un arreglo floral elegante y vertical con rosas rojas, gerberas, lirios blancos y follaje tropical, estructurado con altura y contraste de colores para un efecto sofisticado.',
    image: findImage('arreglo-florarte-6'),
    imageAlt: 'Ramo Surtido Rosas',
    code: 'FE21',
    category: 'flores',
  },
  {
    name: 'Caja de Corazon Rosas y Chocolates',
    price: 650,
    description:
      'Un arreglo floral elegante y vertical con rosas rojas, gerberas, lirios blancos y follaje tropical, estructurado con altura y contraste de colores para un efecto sofisticado.',
    image: findImage('arreglo-florarte-7'),
    imageAlt: 'Ramo Surtido Rosas',
    code: 'FE22',
    category: 'flores',
  },
  {
    name: 'Ramo 50 Rosas Rojas y Rosas',
    price: 650,
    description:
      'Un arreglo floral elegante y vertical con rosas rojas, gerberas, lirios blancos y follaje tropical, estructurado con altura y contraste de colores para un efecto sofisticado.',
    image: findImage('arreglo-florarte-8'),
    imageAlt: 'Ramo Surtido Rosas',
    code: 'FE23',
    category: 'flores',
  },




  {
    name: 'Ramo Floral 50 Rosas y Girasoles',
    price: 880,
    description:
      'Ramo elegante de 50 rosas combinadas con girasoles, acompañado de un globo decorativo. Un detalle impactante, lleno de color y significado, ideal para sorprender en cualquier ocasión. 🌻🌹🎈',
    image: findImage('ramo-50-rosas-globo'),
    imageAlt: 'Ramo de 50 rosas y girasoles',
    code: 'PA03',
    category: 'paquetes',
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
    price: 340,
    description:
      'Estuche con 24 chocolates Ferrero Rocher, ideal para un regalo elegante. 🍫🌟',
    image: findImage('ferrero-24-piezas'),
    imageAlt: 'Ferrero Rocher 24 pzas',
    code: 'CO01',
    category: 'complementos',
  },
  {
    name: 'Ferrero Rocher 16 pzas',
    price: 220,
    description:
      'Caja con 16 chocolates premium, para sorprender en ocasiones especiales. 🍫💛',
    image: findImage('ferrero-16-pierzas'),
    imageAlt: 'Ferrero Rocher 16 pzas',
    code: 'CO02',
    category: 'complementos',
  },
  {
    name: 'Ferrero Rocher 8 pzas',
    price: 110,
    description:
      'Caja con 8 chocolates Ferrero Rocher, ideal para un detalle dulce. 🍫✨',
    image: findImage('ferrero-8-piezas'),
    imageAlt: 'Ferrero Rocher 8 pz',
    code: 'CO03',
    category: 'complementos',
  },
  {
    name: 'Chocolate Ferrero caja corazón',
    price: 130,
    description:
      'Caja de corazón con 8 chocolates Ferrero Rocher, ideal para un detalle dulce. 🍫✨',
    image: findImage('ferrero-8-piezas-corazon'),
    imageAlt: 'Chocolate Ferrero caja corazón',
    code: 'CO04',
    category: 'complementos',
  },
  {
    name: 'Chocolate Ferrero caja corazón chico',
    price: 35,
    description:
      'Caja de corazón con 2 chocolates Ferrero Rocher, ideal para un detalle dulce. 🍫✨',
    image: findImage('ferrero-corazon-2pz'),
    imageAlt: 'Chocolate Ferrero caja corazón chico',
    // badge: 'NUEVO',
    // badgeColor: 'bg-green-500',
    // badgeTextColor: 'text-white',
    code: 'CO05',
    category: 'complementos',
  },
  {
    name: 'Chocolate Ferrero 5 pz',
    price: 70,
    description:
      'Caja de corazón con 5 chocolates Ferrero Rocher, ideal para un detalle dulce. 🍫✨',
    image: findImage('ferrero-corazon-5pz'),
    imageAlt: 'Chocolate Ferrero 5 pz',
    // badge: 'NUEVO',
    // badgeColor: 'bg-green-500',
    // badgeTextColor: 'text-white',
    code: 'CO06',
    category: 'complementos',
  },
  {
    name: 'Globo de helio 14 de Febrero',
    price: 85,
    description:
      'Globo metalico de helio, ideal para un regalo especial.',
    image: findImage('globo-de-gas-2'),
    imageAlt: 'Globo de helio 14 de Febrero',
    // badge: 'NUEVO',
    // badgeColor: 'bg-green-500',
    // badgeTextColor: 'text-white',
    code: 'CO07',
    category: 'complementos',
  },
  {
    name: 'Globo de helio "love you" ',
    price: 85,
    description:
      'Globo metalico de helio, ideal para un regalo especial.',
    image: findImage('globo-de-gas'),
    imageAlt: 'Globo de helio "love you"',
    // badge: 'NUEVO',
    // badgeColor: 'bg-green-500',
    // badgeTextColor: 'text-white',
    code: 'CO08',
    category: 'complementos',
  },
];
