import { MaterialIcon } from "./MaterialIcon";

export function HowToOrder() {
  const steps = [
    {
      icon: "grid_view",
      title: "1. Elige tus favoritos",
      description:
        "Explora el catalogo y revisa los detalles de cada arreglo para elegir los que mas te gusten.",
    },
    {
      icon: "shopping_cart",
      title: "2. Agrega al carrito",
      description:
        "Agrega todos los productos que quieras al carrito, ajusta cantidades y elimina los que no necesites.",
    },
    {
      icon: "chat",
      title: "3. Confirma por WhatsApp",
      description:
        "Pulsa Continuar y te abrimos WhatsApp con tu pedido listo para confirmar entrega y horario.",
    },
  ];

  return (
    <section
      className="bg-card dark:bg-card/50 px-4 md:px-20 lg:px-40 py-20"
      id="como-pedir"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Crea tu pedido en 3 pasos
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            Hacemos que pedir sea rapido, claro y sin complicaciones
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center space-y-5"
            >
              <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary border-2 border-primary/5">
                <MaterialIcon icon={step.icon} className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
