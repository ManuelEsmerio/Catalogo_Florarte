"use client";

import Image from "next/image";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { CartUpsellDialog } from "@/components/CartUpsellDialog";

const formatMXN = (value: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);

export function CartDrawer() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  const {
    items,
    isCartOpen,
    closeCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <>
      <Sheet
        open={isCartOpen}
        onOpenChange={(open) => (open ? undefined : closeCart())}
      >
        <SheetContent side="right" className="w-full p-0 sm:max-w-md">
          <div className="flex h-full flex-col">
            <SheetHeader className="border-b border-border px-5 py-4 text-left">
              <SheetTitle className="flex items-center gap-2">
                <ShoppingCart className="size-5" />
                Tu carrito ({totalItems})
              </SheetTitle>
              <SheetDescription>
                Revisa tus productos antes de continuar al pedido por WhatsApp.
              </SheetDescription>
            </SheetHeader>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                <div className="rounded-full bg-muted p-4">
                  <ShoppingCart className="size-8 text-muted-foreground" />
                </div>
                <p className="mt-4 text-lg font-semibold">
                  Tu carrito esta vacio
                </p>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  Agrega productos desde el catalogo y apareceran aqui para
                  completar tu pedido.
                </p>
              </div>
            ) : (
              <>
                <ScrollArea className="flex-1 px-4 py-4">
                  <div className="space-y-4">
                    {items.map((item) => {
                      const subtotal = item.product.price * item.quantity;
                      return (
                        <article
                          key={item.product.code}
                          className="rounded-xl border border-border bg-card p-3"
                        >
                          <div className="flex items-start gap-3">
                            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-muted/30">
                              <Image
                                src={item.product.image}
                                alt={item.product.imageAlt}
                                fill
                                className="object-contain"
                                sizes="80px"
                              />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <p className="line-clamp-2 text-sm font-semibold text-foreground">
                                    {item.product.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    COD: {item.product.code}
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() =>
                                    removeFromCart(item.product.code)
                                  }
                                  className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                                  aria-label={`Eliminar ${item.product.name} del carrito`}
                                >
                                  <Trash2 className="size-4" />
                                </button>
                              </div>

                              <div className="mt-2 flex items-center justify-between gap-2">
                                <div className="inline-flex items-center overflow-hidden rounded-full border border-primary/20">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      decrementQuantity(item.product.code)
                                    }
                                    className="grid h-8 w-8 place-items-center text-foreground transition-colors hover:bg-primary/10"
                                    aria-label={`Disminuir cantidad de ${item.product.name}`}
                                  >
                                    <Minus className="size-4" />
                                  </button>
                                  <span className="w-8 text-center text-sm font-bold">
                                    {item.quantity}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      incrementQuantity(item.product.code)
                                    }
                                    className="grid h-8 w-8 place-items-center text-foreground transition-colors hover:bg-primary/10"
                                    aria-label={`Incrementar cantidad de ${item.product.name}`}
                                  >
                                    <Plus className="size-4" />
                                  </button>
                                </div>
                                <div className="text-right">
                                  <p className="text-xs text-muted-foreground">
                                    {formatMXN(item.product.price)} c/u
                                  </p>
                                  <p className="text-sm font-bold text-primary">
                                    {formatMXN(subtotal)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </ScrollArea>

                <div className="space-y-3 border-t border-border bg-background/95 px-5 py-4">
                  <div className="flex items-center justify-end">
                    <Button
                      type="button"
                      variant="ghost"
                      className="h-8 px-2 text-xs text-destructive hover:bg-destructive/10 hover:text-destructive"
                      onClick={clearCart}
                    >
                      Vaciar carrito
                    </Button>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Total del carrito
                    </span>
                    <span className="text-xl font-extrabold text-primary">
                      {formatMXN(totalPrice)}
                    </span>
                  </div>
                  <p className="rounded-md bg-muted/60 px-3 py-2 text-xs text-muted-foreground">
                    El costo de envio se calcula por separado.
                  </p>
                  <Button
                    type="button"
                    className="h-11 w-full rounded-full text-base font-bold shadow-lg shadow-primary/20"
                    onClick={() => {
                      closeCart();
                      setIsUpsellOpen(true);
                    }}
                  >
                    Continuar
                  </Button>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
      <CartUpsellDialog open={isUpsellOpen} onOpenChange={setIsUpsellOpen} />
    </>
  );
}
