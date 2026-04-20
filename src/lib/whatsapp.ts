const WHATSAPP_NUMBER = "523741109133";
const BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export type WhatsAppCartLineItem = {
  name: string;
  quantity: number;
  subtotal: number;
  code: string;
  price: number;
};

const formatMXN = (value: number) =>
  new Intl.NumberFormat("es-MX", {
    maximumFractionDigits: 0,
  }).format(value);

export const generateProductWhatsAppLink = (
  productName: string,
  productPrice: number,
  productCode: string,
) => {
  const message = `Hola Florarte,

Me interesa el siguiente arreglo para el 10 de mayo (Dia de las Madres):

*Producto:* ${productName}
*Código:* \`${productCode}\`
*Precio:* $${productPrice} MXN

¿Me podrían confirmar disponibilidad y los pasos para realizar el pedido?

¡Muchas gracias!`;
  return `${BASE_URL}?text=${encodeURIComponent(message)}`;
};

export const generateGeneralWhatsAppLink = () => {
  const message =
    "Hola Florarte, ¿Me apoyas con disponibilidad y entrega para el Dia de las Madres?";
  return `${BASE_URL}?text=${encodeURIComponent(message)}`;
};

export const generateCustomWhatsAppLink = () => {
  const message =
    "Hola Florarte, busco un arreglo personalizado. ¿Me apoyas con disponibilidad y entrega?";
  return `${BASE_URL}?text=${encodeURIComponent(message)}`;
};

export const generateCartWhatsAppLink = (
  items: WhatsAppCartLineItem[],
  total: number,
) => {
  const lines = items
    .map((item) =>
      `
*${item.name}*
*Precio unitario:* $${formatMXN(item.price)} MXN
*Cantidad:* ${item.quantity}
*Código:* \`${item.code}\`
*Subtotal:* $${formatMXN(item.subtotal)} MXN
`.trim(),
    )
    .join("\n\n");

  const message = `Hola Florarte,

Me gustaría encargar lo siguiente:

${lines}

*Total: $${formatMXN(total)} MXN*
_Sé que el envío se cotiza por separado._

¿Podrían ayudarme a confirmar disponibilidad y tiempos de entrega?

Muchas gracias`;

  return `${BASE_URL}?text=${encodeURIComponent(message)}`;
};
