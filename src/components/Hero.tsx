import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MaterialIcon } from './MaterialIcon';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-valentines');

  return (
    <section className="px-4 md:px-20 lg:px-40 py-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative overflow-hidden rounded-xl bg-primary/5 dark:bg-primary/10">
          <div className="relative flex min-h-[550px] flex-col items-center justify-center p-8 text-center">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-semibold border border-white/30 animate-pulse">
                <MaterialIcon icon="schedule" className="text-sm" />
                Cupos limitados para el 14 de febrero
              </div>
              <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
                Sorprende este <span className="text-primary">14 de Febrero</span> 💖
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-medium max-w-lg mx-auto">
                No solo envías flores, envías un mensaje que perdurará para
                siempre. Arreglos exclusivos para corazones que aman de verdad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  className="bg-primary text-primary-foreground rounded-full px-10 py-4 text-base font-bold shadow-xl hover:bg-primary/90 hover:scale-105 transition-all text-center"
                  href="#catalogo"
                >
                  Ver Colección de Amor
                </a>
                <a
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-10 py-4 text-base font-bold hover:bg-white/20 transition-all text-center"
                  href="#como-pedir"
                >
                  ¿Cómo funciona?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
