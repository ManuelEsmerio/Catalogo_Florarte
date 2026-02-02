const WHATSAPP_NUMBER = '523741109133';
const BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const generateProductWhatsAppLink = (
  productName: string,
  productPrice: number,
  productCode: string
) => {
  const message = `Hola 👋, estoy interesado en el siguiente arreglo para el 14 de febrero:\n\n*Producto:* ${productName}\n*Código:* ${productCode}\n*Precio:* $${productPrice} MXN\n\n¿Podrían confirmarme la disponibilidad y cómo proceder con el pedido?\n\n¡Gracias!`;
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
