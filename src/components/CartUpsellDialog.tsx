"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { generateCartWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const formatMXN = (value: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);

const getRandomProducts = (excludedCodes: Set<string>, limit: number) => {
  const available = products.filter(
    (product) => product.isAvailable && !excludedCodes.has(product.code),
  );

  const shuffled = [...available];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled.slice(0, limit);
};

type CartUpsellDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CartUpsellDialog({
  open,
  onOpenChange,
}: CartUpsellDialogProps) {
  const { items, addToCart, totalPrice } = useCart();
  const [suggestedProducts, setSuggestedProducts] = useState(
    () => [] as typeof products,
  );

  useEffect(() => {
    if (!open) return;

    const excludedCodes = new Set(items.map((item) => item.product.code));
    setSuggestedProducts(getRandomProducts(excludedCodes, 6));
  }, [open, items]);

  const checkoutUrl = useMemo(
    () =>
      generateCartWhatsAppLink(
        items.map((item) => ({
          name: item.product.name,
          quantity: item.quantity,
          subtotal: item.product.price * item.quantity,
          code: item.product.code,
          price: item.product.price,
        })),
        totalPrice,
      ),
    [items, totalPrice],
  );

  const handleContinue = () => {
    window.open(checkoutUrl, "_blank", "noopener,noreferrer");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border-none p-0">
        <div className="flex max-h-[90vh] flex-col overflow-hidden">
          <DialogHeader className="border-b border-border px-6 py-5 text-left">
            <DialogTitle className="text-2xl">Antes de continuar</DialogTitle>
            <DialogDescription>
              Agrega algo mas a tu pedido. Seleccionamos algunas recomendaciones
              que no estan en tu carrito.
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            {suggestedProducts.length > 0 ? (
              <Carousel
                opts={{ align: "start" }}
                className="w-full px-10 sm:px-12"
              >
                <CarouselContent className="-ml-4">
                  {suggestedProducts.map((product) => (
                    <CarouselItem
                      key={product.code}
                      className="pl-4 sm:basis-1/2 xl:basis-1/3"
                    >
                      <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-4 shadow-sm">
                        <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-xl bg-muted/20">
                          <Image
                            src={product.image}
                            alt={product.imageAlt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <p className="text-sm text-muted-foreground">
                            {product.code}
                          </p>
                          <h3 className="mt-1 line-clamp-2 text-lg font-bold">
                            {product.name}
                          </h3>
                          <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                            {product.description}
                          </p>
                          <div className="mt-4 flex items-center justify-between gap-3">
                            <div>
                              <p className="text-lg font-extrabold text-primary">
                                {formatMXN(product.price)}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                + envio
                              </p>
                            </div>
                            <Button
                              type="button"
                              size="sm"
                              className="rounded-full"
                              onClick={() =>
                                addToCart(product, { openCart: false })
                              }
                            >
                              Agregar
                            </Button>
                          </div>
                        </div>
                      </article>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 h-9 w-9" />
                <CarouselNext className="right-0 h-9 w-9" />
              </Carousel>
            ) : (
              <div className="flex min-h-56 flex-col items-center justify-center rounded-2xl border border-dashed border-border px-6 text-center">
                <ShoppingBag className="size-10 text-muted-foreground" />
                <p className="mt-4 text-lg font-semibold">
                  No hay recomendaciones disponibles
                </p>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  Tu carrito ya incluye todos los productos disponibles para
                  este flujo. Puedes continuar con tu pedido.
                </p>
              </div>
            )}
          </div>

          <DialogFooter className="border-t border-border px-6 py-5 sm:justify-between sm:space-x-0">
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Total actual</p>
              <p className="text-2xl font-extrabold text-primary">
                {formatMXN(totalPrice)}
              </p>
            </div>
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Seguir viendo
              </Button>
              <Button
                type="button"
                className="rounded-full px-6"
                onClick={handleContinue}
              >
                Continuar
              </Button>
            </div>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
