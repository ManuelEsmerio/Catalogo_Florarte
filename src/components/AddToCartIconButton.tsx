"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

interface AddToCartIconButtonProps {
  product: Product;
  className?: string;
  openCartOnAdd?: boolean;
}

export function AddToCartIconButton({
  product,
  className,
  openCartOnAdd = true,
}: AddToCartIconButtonProps) {
  const { addToCart } = useCart();

  return (
    <Button
      type="button"
      size="icon"
      className={cn("shrink-0", className)}
      disabled={!product.isAvailable}
      onClick={() => addToCart(product, { openCart: openCartOnAdd })}
      aria-label={`Agregar ${product.name} al carrito`}
      title={product.isAvailable ? "Agregar al carrito" : "Producto agotado"}
    >
      <ShoppingCart className="size-4" />
    </Button>
  );
}
