"use client";

import { generateGeneralWhatsAppLink } from "@/lib/whatsapp";
import { MaterialIcon } from "./MaterialIcon";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { ShoppingCart, SlidersHorizontal, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

interface HeaderProps {
  isAuthenticated?: boolean;
  onLoginClick?: () => void;
  onAdminClick?: () => void;
  showAuthButton?: boolean;
}

export function Header({
  isAuthenticated = false,
  onLoginClick,
  onAdminClick,
  showAuthButton = true,
}: HeaderProps) {
  const { totalItems, openCart } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background/80 dark:bg-background/80 backdrop-blur-md border-b border-primary/10 px-4 md:px-20 lg:px-40 py-3">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="size-8 text-primary" />
          <h1 className="text-lg font-bold tracking-tight">Florarte</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/#catalogo"
          >
            Catálogo
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/#como-pedir"
          >
            Cómo Pedir
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/#contacto"
          >
            Contacto
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="relative"
            onClick={openCart}
            aria-label={`Abrir carrito con ${totalItems} productos`}
          >
            <ShoppingCart className="size-4" />
            {totalItems > 0 && (
              <span className="absolute -right-1.5 -top-1.5 grid min-h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Button>
          <a
            className="bg-primary text-primary-foreground rounded-full px-3 sm:px-6 py-2.5 text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            href={generateGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pedir ahora por WhatsApp"
          >
            <MaterialIcon icon="chat" className="text-base" />
            <span className="hidden sm:inline">Pedir Ahora</span>
          </a>
          {showAuthButton &&
            (isAuthenticated ? (
              <Button variant="outline" size="icon" onClick={onAdminClick}>
                <SlidersHorizontal className="size-4" />
              </Button>
            ) : (
              <Button variant="outline" size="icon" onClick={onLoginClick}>
                <User className="size-4" />
              </Button>
            ))}
        </div>
      </div>
    </header>
  );
}
