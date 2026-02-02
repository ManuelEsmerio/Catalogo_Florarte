import { cn } from '@/lib/utils';

type MaterialIconProps = {
  icon: string;
  className?: string;
};

export function MaterialIcon({ icon, className }: MaterialIconProps) {
  return (
    <span className={cn('material-symbols-outlined', className)}>{icon}</span>
  );
}
