const WHATSAPP_NUMBER = '523741109133';
const BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const generateProductWhatsAppLink = (
  productName: string,
  productPrice: number,
  productCode: string
) => {
  const message = `Hola 👋✨

Me interesa el siguiente arreglo para el 14 de febrero:

🌹 Producto: ${productName}
🏷️ Código: ${productCode}
💲 Precio: $${productPrice} MXN

¿Me podrían confirmar disponibilidad y los pasos para realizar el pedido?

¡Muchas gracias! 💐`;
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
