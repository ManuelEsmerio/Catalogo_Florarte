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

interface PromotionModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function PromotionModal({ isOpen, onOpenChange }: PromotionModalProps) {
  const promoImage = PlaceHolderImages.find(
    (img) => img.id === 'promo-modal-valentines'
  );

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 bg-transparent border-none shadow-none">
        <DialogHeader className="sr-only">
          <DialogTitle>Promoción especial de San Valentín</DialogTitle>
          <DialogDescription>
            Aprovecha el 10% de descuento en todos nuestros arreglos con rosas.
          </DialogDescription>
        </DialogHeader>
        <div className="relative aspect-[3/4] w-full">
          {promoImage && (
            <Image
              src={`${promoImage.imageUrl}?v=${imageCacheVersion}`}
              alt={promoImage.description}
              fill
              className="object-cover rounded-xl"
              data-ai-hint={promoImage.imageHint}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
