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
            Creando momentos inolvidables desde 1995. Tu cómplice en cada
            celebración, entregando amor pétalo a pétalo.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Contacto Directo</h3>
          <ul className="text-sm space-y-4 text-muted-foreground">
            <li className="flex items-center gap-3">
              <MaterialIcon icon="call" className="text-primary" /> +52 374 110 9133
            </li>
            <li className="flex items-center gap-3">
              <MaterialIcon icon="mail" className="text-primary" />
              <span className="break-all">manuel_florarte@hotmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MaterialIcon icon="location_on" className="text-primary" /> Tequila, Jalisco
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
