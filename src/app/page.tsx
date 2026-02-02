import { Catalog } from '@/components/Catalog';
import { CtaSection } from '@/components/CtaSection';
import { FloatingWhatsAppButton } from '@/components/FloatingWhatsAppButton';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HowToOrder } from '@/components/HowToOrder';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <FloatingWhatsAppButton />
      <Header />
      <main>
        <Hero />
        <Catalog />
        <HowToOrder />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
