import { PlaceHolderImages, imageCacheVersion } from "./placeholder-images";

export interface Product {
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  code: string;
  category: "flores" | "paquetes" | "complementos";
  isAvailable: boolean;
}

const findImage = (id: string) => {
  const imageUrl = PlaceHolderImages.find((img) => img.id === id)?.imageUrl;
  if (imageUrl) {
    return `${imageUrl}?v=${imageCacheVersion}`;
  }
  return "https://placehold.co/800x1000/f8f5f6/1c0d11?text=Imagen+no+disponible";
};

export const products: Product[] = [
  {
    // TODO: Conservar
    name: "Pasión Eterna",
    price: 1250,
    description:
      "24 rosas rojas premium con envoltura elegante. Ideal para decir “te amo” sin palabras.",
    image: findImage("ramo-24-rosas"),
    imageAlt: "Ramo floral de 24 rosas rojas",
    badge: "OFERTA",
    badgeColor: "bg-primary",
    badgeTextColor: "text-primary-foreground",
    code: "FE01",
    category: "flores",
    isAvailable: true,
  },
  {
    // TODO: Conservar
    name: "Dulce Encanto",
    price: 680,
    description:
      "12 rosas rojas con detalles naturales. Perfecto para sorprender en cualquier ocasión.",
    image: findImage("ramo-12-rosas"),
    imageAlt: "Ramo floral de 12 rosas rojas",
    badge: "OFERTA",
    badgeColor: "bg-primary",
    badgeTextColor: "text-primary-foreground",
    code: "FE02",
    category: "flores",
    isAvailable: true,
  },
  {
    // TODO: Conservar
    name: "Elegancia Natural",
    price: 900,
    description:
      "Rosas y lilis en diseño vertical. Un detalle sofisticado y lleno de vida.",
    image: findImage("arreglo-espiral"),
    imageAlt: "Arreglo floral de rosas en espiral",
    badge: "OFERTA",
    badgeColor: "bg-primary",
    badgeTextColor: "text-primary-foreground",
    code: "FE03",
    category: "flores",
    isAvailable: true,
  },
  // {
  //   name: "Amor Total",
  //   originalPrice: 1550,
  //   price: 1390,
  //   description:
  //     "Ramo con globo, peluche y rosas. El paquete ideal para enamorar.",
  //   image: findImage("paquete-ramo-24-globo-peluche"),
  //   imageAlt: "Paquete ramo de 24 rosas rojas",
  //   code: "PA01",
  //   badge: "OFERTA",
  //   badgeColor: "bg-primary",
  //   badgeTextColor: "text-primary-foreground",
  //   category: "paquetes",
  //   isAvailable: true,
  // },
  {
    // TODO: Conservar
    name: "Amor Radiante",
    price: 2430,
    description:
      "50 rosas rojas con girasoles vibrantes. Un detalle lleno de amor y alegría.",
    image: findImage("ramo-50-rosas-girasoles"),
    imageAlt: "Ramo de 50 rosas rojas y 4 girasoles",
    badge: "OFERTA",
    badgeColor: "bg-primary",
    badgeTextColor: "text-primary-foreground",
    code: "FE05",
    category: "flores",
    isAvailable: true,
  },
  {
    // TODO: Conservar
    name: "Clásico Perfecto",
    price: 1100,
    description:
      "24 rosas en florero de cristal. Elegancia que enamora en cualquier momento.",
    image: findImage("florero-24-rosas"),
    imageAlt: "Florero 24 Rosas",
    badge: "OFERTA",
    badgeColor: "bg-primary",
    badgeTextColor: "text-primary-foreground",
    code: "FE06",
    category: "flores",
    isAvailable: true,
  },
  // {
  //   name: "Latido de Amor",
  //   originalPrice: 400,
  //   price: 360,
  //   description:
  //     "Rosas en forma de corazón. Un detalle tierno para decir “te quiero”.",
  //   image: findImage("Arreglo-6-rosas"),
  //   imageAlt: "Arreglo chico de 6 rosas rojas",
  //   badge: "OFERTA",
  //   badgeColor: "bg-primary",
  //   badgeTextColor: "text-primary-foreground",
  //   code: "FE08",
  //   category: "flores",
  //   isAvailable: true,
  // },
  {
    // TODO: Conservar
    name: "Doble Elegancia",
    price: 1150,
    description:
      "Diseño vertical con rosas y lirios. Sofisticación en cada detalle.",
    image: findImage("arreglo-espiral-doble"),
    imageAlt: "Arreglo en espiral doble",
    badge: "OFERTA",
    badgeColor: "bg-primary",
    badgeTextColor: "text-primary-foreground",
    code: "FE09",
    category: "flores",
    isAvailable: true,
  },
  // {
  //   name: "Pasión Infinita",
  //   originalPrice: 7500,
  //   price: 6750,
  //   description:
  //     "Círculo de 150 rosas rojas que representa amor eterno y elegancia total.",
  //   image: findImage("arreglo-espiral-solo-rosas-xl"),
  //   imageAlt: "Pasión Infinita",
  //   badge: "OFERTA",
  //   badgeColor: "bg-primary",
  //   badgeTextColor: "text-primary-foreground",
  //   code: "FE10",
  //   category: "flores",
  //   isAvailable: true,
  // },
  {
    // TODO: Conservar
    name: "Armonía Floral",
    price: 1800,
    description:
      "Combinación de flores frescas y colores vibrantes. Perfecto para cualquier ocasión.",
    image: findImage("arreglo-surtido"),
    imageAlt: "Armonía Floral",
    badge: "OFERTA",
    badgeColor: "bg-primary",
    badgeTextColor: "text-primary-foreground",
    code: "FE11",
    category: "flores",
    isAvailable: true,
  },

  {
    // TODO: Conservar
    name: "Alegría Natural",
    // originalPrice: 650,
    price: 650,
    description:
      "Gerberas y flores mixtas llenas de vida. Un detalle alegre y especial.",
    image: findImage("arreglo-surtido-9"),
    imageAlt: "Alegría Natural",
    code: "FE12",
    // badge: 'OFERTA',
    // badgeColor: 'bg-primary',
    // badgeTextColor: 'text-primary-foreground',
    category: "flores",
    isAvailable: true,
  },
  {
    // TODO: Conservar
    name: "Rosas Imperiales",
    price: 950,
    description:
      "Rosas y lirios en diseño escalonado. Impactante, elegante y sofisticado.",
    image: findImage("arreglo-capaz-rosas"),
    imageAlt: "Rosas Imperiales",
    badge: "OFERTA",
    badgeColor: "bg-primary",
    badgeTextColor: "text-primary-foreground",
    code: "FE13",
    category: "flores",
    isAvailable: true,
  },
  {
    // TODO: Conservar
    name: "Sueño Rosado",
    price: 2600,
    description:
      "Rosas en tonos suaves con detalles delicados. Perfecto para un detalle romántico.",
    image: findImage("ramo-surtido-rosas"),
    imageAlt: "Sueño Rosado",
    badge: "OFERTA",
    badgeColor: "bg-primary",
    badgeTextColor: "text-primary-foreground",
    code: "FE15",
    category: "flores",
    isAvailable: true,
  },
  // {
  //   name: "Encanto Clásico",
  //   originalPrice: 650,
  //   price: 580,
  //   description:
  //     "Rosas rojas con lirios en base elegante. Un regalo fino y especial.",
  //   image: findImage("arreglo-florarte-1"),
  //   imageAlt: "Encanto Clásico",
  //   badge: "OFERTA",
  //   badgeColor: "bg-primary",
  //   badgeTextColor: "text-primary-foreground",
  //   code: "FE16",
  //   category: "flores",
  //   isAvailable: true,
  // },
  {
    // TODO: Conservar
    name: "Diez Razones para Amarte",
    price: 1100,
    description: "10 rosas rojas con follaje natural. Amor puro en cada flor.",
    image: findImage("arreglo-florarte-2"),
    imageAlt: "Diez Razones para Amarte",
    badge: "OFERTA",
    badgeColor: "bg-primary",
    badgeTextColor: "text-primary-foreground",
    code: "FE17",
    category: "flores",
    isAvailable: true,
  },
  // {
  //   name: "Detalle Perfecto",
  //   originalPrice: 200,
  //   price: 180,
  //   description:
  //     "Dos rosas en florero con moño. Pequeño, elegante y significativo.",
  //   image: findImage("arreglo-florarte-3"),
  //   imageAlt: "Detalle Perfecto",
  //   code: "FE18",
  //   badge: "OFERTA",
  //   badgeColor: "bg-primary",
  //   badgeTextColor: "text-primary-foreground",
  //   category: "flores",
  //   isAvailable: true,
  // },
  // {
  //   name: "Seis Promesas",
  //   originalPrice: 450,
  //   price: 400,
  //   description:
  //     "Seis rosas rojas en florero elegante. Un detalle romántico y significativo.",
  //   image: findImage("arreglo-florarte-4"),
  //   imageAlt: "Seis Promesas",
  //   code: "FE19",
  //   badge: "OFERTA",
  //   badgeColor: "bg-primary",
  //   badgeTextColor: "text-primary-foreground",
  //   category: "flores",
  //   isAvailable: true,
  // },
  {
    // TODO: Conservar
    name: "Amor en Dos Tonos",
    price: 1200,
    description:
      "Rosas rojas y rosadas en florero. Perfecto para expresar amor y ternura.",
    image: findImage("arreglo-florarte-6"),
    imageAlt: "Amor en Dos Tonos",
    badge: "OFERTA",
    badgeColor: "bg-primary",
    badgeTextColor: "text-primary-foreground",
    code: "FE21",
    category: "flores",
    isAvailable: true,
  },
  // {
  //   name: "Tentación de Amor",
  //   originalPrice: 2700,
  //   price: 2430,
  //   description:
  //     "Caja en forma de corazón con rosas y chocolates. El regalo más dulce y romántico.",
  //   image: findImage("arreglo-florarte-7"),
  //   imageAlt: "Tentación de Amor",
  //   badge: "OFERTA",
  //   badgeColor: "bg-primary",
  //   badgeTextColor: "text-primary-foreground",
  //   code: "FE22",
  //   category: "flores",
  //   isAvailable: true,
  // },
  {
    // TODO: Conservar
    name: "Amor en Armonía",
    price: 4250,
    description:
      "100 rosas rojas y rosadas en elegante envoltura. Romance y delicadeza en un solo ramo.",
    image: findImage("arreglo-florarte-8"),
    imageAlt: "Amor en Armonía",
    badge: "OFERTA",
    badgeColor: "bg-primary",
    badgeTextColor: "text-primary-foreground",
    code: "FE23",
    category: "flores",
    isAvailable: true,
  },
  {
    // TODO: Conservar
    name: "Amor Radiante Deluxe",
    price: 2500,
    description:
      "Ramo de rosas y girasoles con globo “Love You”. Un regalo completo e inolvidable.",
    image: findImage("ramo-50-rosas-globo"),
    imageAlt: "Amor Radiante Deluxe",
    badge: "OFERTA",
    badgeColor: "bg-primary",
    badgeTextColor: "text-primary-foreground",
    code: "PA03",
    category: "paquetes",
    isAvailable: true,
  },
  // {
  //   name: "Romance Total",
  //   originalPrice: 1560,
  //   price: 1400,
  //   description:
  //     "Ramo floral con peluche, globo y chocolates. Todo lo que necesita para enamorar.",
  //   image: findImage("amor-floral"),
  //   imageAlt: "Romance Total",
  //   code: "PA02",
  //   badge: "OFERTA",
  //   badgeColor: "bg-primary",
  //   badgeTextColor: "text-primary-foreground",
  //   category: "paquetes",
  //   isAvailable: true,
  // },
  {
    name: "Dulce Tentación",
    price: 340,
    description:
      "Caja de Ferrero Rocher con 24 piezas. El complemento perfecto para cualquier detalle.",
    image: findImage("ferrero-24-piezas"),
    imageAlt: "Dulce Tentación",
    code: "CO01",
    category: "complementos",
    isAvailable: true,
  },
  {
    name: "Dulce Oro 16",
    price: 220,
    description:
      "16 chocolates Ferrero Rocher. El detalle ideal para endulzar cualquier sorpresa.",
    image: findImage("ferrero-16-pierzas"),
    imageAlt: "Dulce Oro 16",
    code: "CO02",
    category: "complementos",
    isAvailable: true,
  },
  {
    name: "Mini Tentación",
    price: 140,
    description:
      "Caja con 8 Ferrero Rocher. Pequeño en tamaño, grande en sabor.",
    image: findImage("ferrero-8-piezas"),
    imageAlt: "Mini Tentación",
    code: "CO03",
    category: "complementos",
    isAvailable: true,
  },
  {
    name: "Corazón Dorado",
    price: 130,
    description:
      "Estuche en forma de corazón con chocolates premium. Perfecto para enamorar.",
    image: findImage("ferrero-8-piezas-corazon"),
    imageAlt: "Corazón Dorado",
    code: "CO04",
    category: "complementos",
    isAvailable: true,
  },
  // {
  //   name: "Amor Dulce Deluxe",
  //   price: 35,
  //   description:
  //     "Caja especial en forma de corazón con chocolates. Romance y sabor en un solo regalo.",
  //   image: findImage("ferrero-corazon-2pz"),
  //   imageAlt: "Amor Dulce Deluxeo",
  //   code: "CO05",
  //   category: "complementos",
  //   isAvailable: true,
  // },
  // {
  //   name: "Detalle Dorado",
  //   price: 70,
  //   description:
  //     "Chocolate Ferrero individual. El complemento perfecto para cualquier ramo.",
  //   image: findImage("ferrero-corazon-5pz"),
  //   imageAlt: "Detalle Dorado",
  //   code: "CO06",
  //   category: "complementos",
  //   isAvailable: true,
  // },
  // {
  //   name: 'Globo Metalico "Feliz Dia de las Madres"',
  //   price: 90,
  //   description:
  //     "Globo de helio con mensaje para celebrar a mama. El complemento perfecto para tu sorpresa.",
  //   image: findImage("globo-de-gas-2"),
  //   imageAlt: "Globo Metalico Feliz Dia de las Madres",
  //   code: "CO07",
  //   category: "complementos",
  //   isAvailable: true,
  // },
  {
    name: 'Globo Metalico "Love You"',
    price: 90,
    description:
      "Globo de helio en forma de corazón con mensaje “Love You”. Ideal para expresar tu amor.",
    image: findImage("globo-de-gas"),
    imageAlt: "Globo Metalico Love You",
    code: "CO08",
    category: "complementos",
    isAvailable: true,
  },

  {
  name: "Dúo Escarlata",
  price: 220,
  description:
    "Elegante florero con dos rosas rojas y finos detalles florales. Perfecto para sorprender con un detalle sencillo pero romántico.",
  image: findImage("Arreglo-2-rosas-florero"),
  imageAlt: "Florero con dos rosas rojas y follaje decorativo",
  badge: "ROMÁNTICO",
  badgeColor: "bg-red-600",
  badgeTextColor: "text-white",
  code: "FF01",
  category: "flores",
  isAvailable: true,
},
{
  name: "Jardín Encantado",
  price: 1100,
  description:
    "Arreglo premium con lilies rosas, gerberas, rosas blancas y flores de temporada en tonos pastel. Ideal para cumpleaños y celebraciones especiales.",
  image: findImage("Arreglo-jardin-encantado"),
  imageAlt: "Arreglo floral premium con lilies rosas y flores variadas",
  badge: "PREMIUM",
  badgeColor: "bg-pink-500",
  badgeTextColor: "text-white",
  code: "FF02",
  category: "flores",
  isAvailable: true,
},
{
  name: "Sol de Primavera",
  price: 2100,
  description:
    "Impactante arreglo triangular con girasoles, rosas rojas y lilies blancas. Un diseño lleno de energía y elegancia.",
  image: findImage("Arreglo-sol-primavera"),
  imageAlt: "Arreglo triangular con girasoles y rosas rojas",
  badge: "TOP",
  badgeColor: "bg-yellow-500",
  badgeTextColor: "text-black",
  code: "FF03",
  category: "flores",
  isAvailable: true,
},
{
  name: "Girasoles Elegance",
  price: 750,
  description:
    "Bouquet moderno de girasoles con envoltura negra elegante. Ideal para alegrar cualquier ocasión.",
  image: findImage("Bouquet-girasoles-negro"),
  imageAlt: "Bouquet elegante de girasoles con papel negro",
  badge: "BEST SELLER",
  badgeColor: "bg-black",
  badgeTextColor: "text-yellow-400",
  code: "FF04",
  category: "flores",
  isAvailable: true,
},
{
  name: "Pasión Floral",
  price: 800,
  description:
    "Hermoso ramo con lilies rosas, gerberas y rosas rojas envuelto en tonos vino y rosa. Un regalo sofisticado y lleno de vida.",
  image: findImage("Bouquet-pasion-floral"),
  imageAlt: "Ramo con lilies rosas y rosas rojas",
  badge: "NUEVO",
  badgeColor: "bg-rose-600",
  badgeTextColor: "text-white",
  code: "FF05",
  category: "flores",
  isAvailable: true,
},
{
  name: "Dulce Amanecer",
  price: 1100,
  description:
    "Bouquet delicado de 12 rosas rosas y 4 girasoles acompañado de nube blanca decorativa. Un detalle dulce y romántico.",
  image: findImage("Bouquet-dulce-amanecer"),
  imageAlt: "Bouquet rosa con girasoles y rosas rosas",
  badge: "OFERTA",
  badgeColor: "bg-pink-400",
  badgeTextColor: "text-white",
  code: "FF06",
  category: "flores",
  isAvailable: true,
},
{
  name: "Corazón de Girasoles",
  price: 1700,
  description:
    "Espectacular arreglo circular con 24 rosas rojas y 10 girasoles decorado con mariposas doradas. Un detalle inolvidable.",
  image: findImage("Corazon-girasoles-rosas"),
  imageAlt: "Arreglo circular con girasoles y rosas rojas",
  badge: "EXCLUSIVO",
  badgeColor: "bg-yellow-500",
  badgeTextColor: "text-black",
  code: "FF07",
  category: "flores",
  isAvailable: true,
},
{
  name: "Rosas Eternas",
  price: 1300,
  description:
    "Bouquet clásico de rosas rojas con elegante envoltura tipo periódico y detalles negros modernos.",
  image: findImage("Bouquet-rosas-eternas"),
  imageAlt: "Bouquet clásico de rosas rojas",
  badge: "CLÁSICO",
  badgeColor: "bg-red-700",
  badgeTextColor: "text-white",
  code: "FF08",
  category: "flores",
  isAvailable: true,
},
{
  name: "Noche de Girasoles",
  price: 900,
  description:
    "Bouquet sofisticado con girasoles y lilies blancas en envoltura negra elegante. Ideal para regalos modernos.",
  image: findImage("Bouquet-noche-girasoles"),
  imageAlt: "Bouquet elegante con girasoles y lilies blancas",
  badge: "ELEGANTE",
  badgeColor: "bg-gray-900",
  badgeTextColor: "text-yellow-300",
  code: "FF09",
  category: "flores",
  isAvailable: true,
},
];
