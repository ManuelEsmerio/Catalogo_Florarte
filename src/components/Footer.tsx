import { MaterialIcon } from './MaterialIcon';

export function Footer() {
  return (
    <footer
      className="bg-background border-t border-primary/10 px-4 md:px-20 lg:px-40 py-12 pb-24 md:pb-12"
      id="contacto"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6 col-span-1 md:col-span-2">
          <div className="flex items-center gap-2">
            <MaterialIcon icon="local_florist" className="text-primary text-3xl" />
            <h2 className="text-2xl font-bold">Florería Florarte</h2>
          </div>
          <p className="text-base text-muted-foreground max-w-xs leading-relaxed">
            Creando momentos inolvidables desde 2010. Tu cómplice en cada
            celebración, entregando amor pétalo a pétalo.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Contacto Directo</h3>
          <ul className="text-sm space-y-4 text-muted-foreground">
            <li className="flex items-center gap-3">
              <MaterialIcon icon="call" className="text-primary" /> +52 123 456
              7890
            </li>
            <li className="flex items-center gap-3">
              <MaterialIcon icon="mail" className="text-primary" />{' '}
              hola@florarte.com
            </li>
            <li className="flex items-center gap-3">
              <MaterialIcon icon="location_on" className="text-primary" /> Ciudad
              de México
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Horarios Especiales</h3>
          <ul className="text-sm space-y-4 text-muted-foreground">
            <li className="flex justify-between">
              <span>Lun - Vie:</span>{' '}
              <span className="font-medium text-foreground">
                9:00 - 19:00
              </span>
            </li>
            <li className="flex justify-between">
              <span>Sab - Dom:</span>{' '}
              <span className="font-medium text-foreground">
                10:00 - 16:00
              </span>
            </li>
            <li className="bg-primary/10 p-3 rounded-lg border border-primary/10">
              <span className="text-primary font-extrabold block">
                14 de Febrero:
              </span>
              <span className="text-primary text-xs font-bold uppercase">
                Servicio 24 Horas
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
