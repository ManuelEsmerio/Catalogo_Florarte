import { generateGeneralWhatsAppLink } from '@/lib/whatsapp';
import { MaterialIcon } from './MaterialIcon';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { SlidersHorizontal, User } from 'lucide-react';

interface HeaderProps {
  isAuthenticated: boolean;
  onLoginClick: () => void;
  onAdminClick: () => void;
}

export function Header({
  isAuthenticated,
  onLoginClick,
  onAdminClick,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/80 dark:bg-background/80 backdrop-blur-md border-b border-primary/10 px-4 md:px-20 lg:px-40 py-3">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2">
          <Logo className="size-8 text-primary" />
          <h1 className="text-lg font-bold tracking-tight">Florarte</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#catalogo"
          >
            Catálogo
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#como-pedir"
          >
            Cómo Pedir
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#contacto"
          >
            Contacto
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            className="bg-primary text-primary-foreground rounded-full px-6 py-2.5 text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            href={generateGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MaterialIcon icon="chat" className="text-base" />
            Pedir Ahora
          </a>
          {isAuthenticated ? (
            <Button variant="outline" size="icon" onClick={onAdminClick}>
              <SlidersHorizontal className="size-4" />
            </Button>
          ) : (
            <Button variant="outline" size="icon" onClick={onLoginClick}>
              <User className="size-4" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
