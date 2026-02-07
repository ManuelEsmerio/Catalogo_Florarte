'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import type { Product } from '@/lib/products';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';

interface AdminModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  products: Product[];
  onToggleProduct: (productCode: string, isAvailable: boolean) => void;
  onToggleAllProducts: (isAvailable: boolean) => void;
}

export function AdminModal({
  isOpen,
  onOpenChange,
  products,
  onToggleProduct,
  onToggleAllProducts,
}: AdminModalProps) {
  const allEnabled = products.every((p) => p.isAvailable);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Gestionar Disponibilidad</DialogTitle>
          <DialogDescription>
            Activa o desactiva productos para controlar su visibilidad en la
            tienda.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 my-4">
          <Switch
            id="toggle-all"
            checked={allEnabled}
            onCheckedChange={onToggleAllProducts}
          />
          <Label htmlFor="toggle-all" className="font-bold">
            {allEnabled ? 'Desactivar todos' : 'Activar todos'}
          </Label>
        </div>
        <Separator />
        <ScrollArea className="flex-grow h-[50vh]">
          <div className="py-4 space-y-4">
            {products.map((product) => (
              <div
                key={product.code}
                className="flex items-center justify-between"
              >
                <div className="flex flex-col">
                  <span className="font-medium">{product.name}</span>
                  <span className="text-xs text-muted-foreground">
                    CÓD: {product.code}
                  </span>
                </div>
                <Switch
                  checked={product.isAvailable}
                  onCheckedChange={(checked) =>
                    onToggleProduct(product.code, checked)
                  }
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
