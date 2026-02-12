'use client';

import { useState, useEffect } from 'react';
import { Catalog } from '@/components/Catalog';
import { CtaSection } from '@/components/CtaSection';
import { FloatingWhatsAppButton } from '@/components/FloatingWhatsAppButton';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HowToOrder } from '@/components/HowToOrder';
import { LoginModal } from '@/components/LoginModal';
import { AdminModal } from '@/components/AdminModal';
import { PromotionModal } from '@/components/PromotionModal';
import { products as initialProducts, type Product } from '@/lib/products';
import { Flower2 } from 'lucide-react';

export default function Home() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isPromotionModalOpen, setIsPromotionModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPromotionModalOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleToggleProduct = (productCode: string, isAvailable: boolean) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.code === productCode ? { ...p, isAvailable } : p
      )
    );
  };

  const handleToggleAllProducts = (isAvailable: boolean) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => ({ ...p, isAvailable }))
    );
  };

  return (
    <>
      <PromotionModal 
        isOpen={isPromotionModalOpen}
        onOpenChange={setIsPromotionModalOpen}
      />
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        <FloatingWhatsAppButton />
        <Header
          isAuthenticated={isAuthenticated}
          onLoginClick={() => setIsLoginModalOpen(true)}
          onAdminClick={() => setIsAdminModalOpen(true)}
        />
        
        <div className="px-4 pt-4 pb-2 bg-background">
          <div className="relative bg-primary text-primary-foreground rounded-full py-3 px-6 text-center text-sm sm:text-base font-semibold shadow-lg max-w-3xl mx-auto flex items-center justify-center gap-3">
            <Flower2 className="size-5 shrink-0" />
            <span>
              ¡Promoción Especial! 10% de descuento en todos nuestros arreglos con rosas
            </span>
          </div>
        </div>

        <main>
          <Hero />
          <Catalog products={products} />
          <HowToOrder />
          <CtaSection />
        </main>
        <Footer />
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onOpenChange={setIsLoginModalOpen}
        onLoginSuccess={handleLoginSuccess}
      />

      {isAuthenticated && (
        <AdminModal
          isOpen={isAdminModalOpen}
          onOpenChange={setIsAdminModalOpen}
          products={products}
          onToggleProduct={handleToggleProduct}
          onToggleAllProducts={handleToggleAllProducts}
        />
      )}
    </>
  );
}
