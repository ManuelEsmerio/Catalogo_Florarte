'use client';

import { Heart, Share2 } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { MaterialIcon } from './MaterialIcon';
import { Logo } from './Logo';

export function Footer() {
  const [isLiked, setIsLiked] = useState(false);
  const { toast } = useToast();

  const handleLike = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    if (newLikedState) {
      toast({
        title: '¡Gracias por tu apoyo!',
        description: 'Nos alegra que te guste nuestro trabajo. ❤️',
      });
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: '¡Echa un vistazo a esta increíble florería!',
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        toast({
          title: '¡Gracias por compartir!',
        });
      } catch (error) {
        console.error('Error al compartir:', error);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'No se pudo compartir en este momento.',
        });
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: 'Enlace copiado',
          description:
            'El enlace a la página ha sido copiado a tu portapapeles.',
        });
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'No se pudo copiar el enlace.',
        });
      }
    }
  };

  return (
    <footer
      className="bg-background border-t border-primary/10 px-4 md:px-20 lg:px-40 py-12 pb-24 md:pb-12"
      id="contacto"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6 col-span-1 md:col-span-2">
          <div className="flex items-center gap-2">
            <Logo className="size-8 text-primary" />
            <h2 className="text-2xl font-bold">Florería Florarte</h2>
          </div>
          <p className="text-base text-muted-foreground max-w-xs leading-relaxed">
            Creando momentos inolvidables desde 1995. Tu cómplice en cada
            celebración, entregando amor pétalo a pétalo.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={handleLike}
              className="flex items-center justify-center size-12 bg-card rounded-full border shadow-sm hover:shadow-md hover:bg-red-500/10 transition-all group"
              aria-label="Me gusta"
            >
              <Heart
                className={`size-5 text-muted-foreground group-hover:text-red-500 transition-all ${
                  isLiked ? 'fill-red-500 text-red-500' : ''
                }`}
              />
            </button>
            <button
              onClick={handleShare}
              className="flex items-center justify-center size-12 bg-card rounded-full border shadow-sm hover:shadow-md hover:bg-sky-500/10 transition-all group"
              aria-label="Compartir"
            >
              <Share2 className="size-5 text-muted-foreground group-hover:text-sky-500 transition-all" />
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Contacto Directo</h3>
          <ul className="text-sm space-y-4 text-muted-foreground">
            <li className="flex items-center gap-3">
              <MaterialIcon icon="call" className="text-primary" /> +52 374 110
              9133
            </li>
            <li className="flex items-center gap-3">
              <MaterialIcon icon="mail" className="text-primary" />
              <span className="break-all">manuel_florarte@hotmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MaterialIcon icon="location_on" className="text-primary" />{' '}
              Tequila, Jalisco
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Horarios</h3>
          <ul className="text-sm space-y-4 text-muted-foreground">
            <li className="flex justify-between">
              <span>Lun - Sab:</span>{' '}
              <span className="font-medium text-foreground">
                8:30 AM - 8:30 PM
              </span>
            </li>
            <li className="flex justify-between">
              <span>Dom:</span>{' '}
              <span className="font-medium text-foreground">
                8:30 AM - 2:30 PM
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-primary/10 text-center text-xs text-muted-foreground/80 font-medium">
        <p>
          © {new Date().getFullYear()} Florería Florarte. Todos los derechos
          reservados. Amor entregado con puntualidad y cuidado.
        </p>
      </div>
    </footer>
  );
}
