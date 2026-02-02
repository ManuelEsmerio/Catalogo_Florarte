const WHATSAPP_NUMBER = '521234567890';
const BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const generateProductWhatsAppLink = (
  productName: string,
  productPrice: number
) => {
  const message = `Hola 👋\nQuiero pedir el arreglo:\n🌹 ${productName}\n💲 $${productPrice} MXN\n📅 14 de febrero\n\n¿Me ayudas con disponibilidad y entrega?`;
  return `${BASE_URL}?text=${encodeURIComponent(message)}`;
};

export const generateGeneralWhatsAppLink = () => {
  const message =
    'Hola Florarte, ¿Me apoyas con disponibilidad y entrega para San Valentín?';
  return `${BASE_URL}?text=${encodeURIComponent(message)}`;
};

export const generateCustomWhatsAppLink = () => {
  const message =
    'Hola Florarte, busco un arreglo personalizado. ¿Me apoyas con disponibilidad y entrega?';
  return `${BASE_URL}?text=${encodeURIComponent(message)}`;
};
