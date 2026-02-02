import { generateCustomWhatsAppLink } from '@/lib/whatsapp';
import { MaterialIcon } from './MaterialIcon';

export function CtaSection() {
  return (
    <section className="px-4 md:px-20 lg:px-40 py-20">
      <div className="max-w-[960px] mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl p-8 md:p-16 text-center text-white space-y-8 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight relative z-10">
          ¿Quieres algo único y personalizado?
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto relative z-10">
          Nuestro equipo de floristas expertos está listo para ayudarte a crear
          el arreglo de tus sueños.
        </p>
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <a
            className="bg-white text-primary rounded-full px-10 py-4 font-extrabold hover:scale-105 transition-all shadow-lg flex items-center gap-2"
            href={generateCustomWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MaterialIcon icon="chat_bubble" />
            Chatear con un experto
          </a>
        </div>
      </div>
    </section>
  );
}
