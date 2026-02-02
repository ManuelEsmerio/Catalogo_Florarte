import { generateGeneralWhatsAppLink } from '@/lib/whatsapp';
import { MaterialIcon } from './MaterialIcon';

export function FloatingWhatsAppButton() {
  return (
    <div className="sticky-mobile-cta">
      <a
        className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white rounded-full py-4 font-extrabold text-lg shadow-2xl active:scale-95 transition-transform"
        href={generateGeneralWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MaterialIcon icon="chat" />
        Apartar mi Regalo
      </a>
    </div>
  );
}
