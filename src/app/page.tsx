'use client';

import { useState } from 'react';
import { Catalog } from '@/components/Catalog';
import { CtaSection } from '@/components/CtaSection';
import { FloatingWhatsAppButton } from '@/components/FloatingWhatsAppButton';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HowToOrder } from '@/components/HowToOrder';
import { LoginModal } from '@/components/LoginModal';
import { AdminModal } from '@/components/AdminModal';
import { products as initialProducts, type Product } from '@/lib/products';

export default function Home() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

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
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        <FloatingWhatsAppButton />
        <Header
          isAuthenticated={isAuthenticated}
          onLoginClick={() => setIsLoginModalOpen(true)}
          onAdminClick={() => setIsAdminModalOpen(true)}
        />
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
