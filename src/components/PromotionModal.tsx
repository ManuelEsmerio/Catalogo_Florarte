'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
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
