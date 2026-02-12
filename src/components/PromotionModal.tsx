'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { PlaceHolderImages, imageCacheVersion } from '@/lib/placeholder-images';
import { useState } from 'react';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

interface PromotionModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const findImage = (id: string) => {
  const imageUrl = PlaceHolderImages.find((img) => img.id === id)?.imageUrl;
  if (imageUrl) {
    return `${imageUrl}?v=${imageCacheVersion}`;
  }
  return 'https://placehold.co/800x1000/f8f5f6/1c0d11?text=Imagen+no+disponible';
};


export function PromotionModal({ isOpen, onOpenChange }: PromotionModalProps) {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleOpenChange = (open: boolean) => {
    if (!open && dontShowAgain) {
      localStorage.setItem('hidePromotionModal', 'true');
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden rounded-2xl border-none bg-primary text-primary-foreground">
        <DialogHeader className="sr-only">
          <DialogTitle>Promoción especial de San Valentín</DialogTitle>
          <DialogDescription>
            Aprovecha el 10% de descuento en todos nuestros arreglos con rosas.
          </DialogDescription>
        </DialogHeader>
        <div className="text-primary-foreground p-10 text-center flex flex-col items-center justify-center space-y-2 relative">
            <div className="absolute -bottom-12 -right-12 w-40 h-40 opacity-20 -rotate-12">
                <Image
                src={findImage('arreglo-florarte-7')}
                alt="rosas en corazon"
                width={160}
                height={160}
                className="object-contain"
                />
            </div>
           <p className="text-lg font-medium tracking-wide">Envía tus regalos a distancia</p>
          <div className="py-4">
            <span className="text-8xl md:text-9xl font-extrabold tracking-tighter">10%</span>
            <p className="text-2xl font-bold tracking-wider -mt-4">DE DESCUENTO</p>
          </div>

          <div className="w-3/4 border-t border-primary-foreground/30 py-2"></div>
          
          <p className="text-xl font-medium">Arreglos del Catálogo</p>
          <p className="text-3xl font-bold tracking-wide">14 DE FEBRERO 2026</p>

          <div className="pt-6 flex items-center space-x-2">
            <Checkbox
              id="dont-show-again"
              checked={dontShowAgain}
              onCheckedChange={(checked) => setDontShowAgain(!!checked)}
              className="border-primary-foreground/80 data-[state=checked]:bg-primary-foreground data-[state=checked]:text-primary"
            />
            <Label htmlFor="dont-show-again" className="text-sm font-normal">
              No volver a mostrar
            </Label>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
