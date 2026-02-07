'use client';

import Image from 'next/image';
import { PlaceHolderImages, imageCacheVersion } from '@/lib/placeholder-images';
import { MaterialIcon } from './MaterialIcon';
import { useEffect, useState } from 'react';

const DeadlineBanner = () => {
  const [isAfterDeadline, setIsAfterDeadline] = useState<boolean | null>(null);

  useEffect(() => {
    // Set the deadline for the next Valentine's Day.
    // Time is set to Mexico City time (UTC-6).
    const deadline = new Date('2025-02-13T18:00:00-06:00');
    const now = new Date();
    setIsAfterDeadline(now > deadline);
  }, []);

  if (isAfterDeadline === null) {
    // Render a placeholder or nothing to avoid hydration mismatch
    return (
      <div className="inline-flex h-[30px] w-[350px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-md">
        <div className="h-4 w-full animate-pulse rounded bg-white/30"></div>
      </div>
    );
  }

  if (isAfterDeadline) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/20 px-4 py-1.5 text-sm font-semibold text-red-200 backdrop-blur-md">
        <MaterialIcon icon="error" className="text-sm" />
        Pedidos cerrados. ¡Aún puedes preguntar por disponibilidad!
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-md">
      <MaterialIcon icon="schedule" className="text-sm" />
      ¡No te quedes fuera! Pedidos hasta el 13 de Feb a las 6:00 PM.
    </div>
  );
};

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-valentines');

  return (
    <section className="px-4 md:px-20 lg:px-40 py-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative overflow-hidden rounded-xl bg-primary/5 dark:bg-primary/10">
          <div className="relative flex min-h-[550px] flex-col items-center justify-center p-8 text-center">
            {heroImage && (
              <Image
                src={`${heroImage.imageUrl}?v=${imageCacheVersion}`}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 max-w-2xl space-y-6">
              <DeadlineBanner />
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
                Sorprende este{' '}
                <span className="text-primary">14 de Febrero</span> 💖
              </h1>
              <p className="mx-auto max-w-lg font-medium text-white/90 md:text-xl">
                No solo envías flores, envías un mensaje que perdurará para
                siempre. Arreglos exclusivos para corazones que aman de verdad.
              </p>
              <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
                <a
                  className="rounded-full bg-primary px-10 py-4 text-center text-base font-bold text-primary-foreground shadow-xl transition-all hover:scale-105 hover:bg-primary/90"
                  href="#catalogo"
                >
                  Ver Colección de Amor
                </a>
                <a
                  className="rounded-full border border-white/20 bg-white/10 px-10 py-4 text-center text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
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
