import { ChevronDown } from 'lucide-react';
import { ASSETS, CLOUDBEDS_URL, WHATSAPP_URL } from '../constants';
import { useAnalytics } from '../hooks/useAnalytics';

const TRUST_CHIPS = [
  'Cabañas privadas',
  'Tina privada',
  'Coffee Tour',
  'Bosque de niebla',
];

export default function Hero() {
  const { trackAvailabilityClick, trackWhatsAppClick } = useAnalytics();

  const handleScrollDown = () => {
    const next = document.querySelector('#busqueda');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Inicio — Cabañas privadas La Palma & El Tucán"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={ASSETS.HERO_BG}
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        >
          <source src={ASSETS.HERO_VIDEO_WEBM} type="video/webm" />
          <source src={ASSETS.HERO_VIDEO_MP4} type="video/mp4" />
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Location badge */}
        <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold px-4 py-2 rounded-full text-sm font-medium tracking-widest uppercase mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          Finca Cafetera · Zipacón, Cundinamarca
        </div>

        {/* H1 */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Cabañas privadas en una{' '}
          <span className="text-brand-gold italic">finca cafetera</span>{' '}
          de clase mundial
        </h1>

        {/* H2 italic */}
        <h2 className="font-serif text-xl sm:text-2xl italic text-brand-beige mb-6 font-light">
          A solo 90 minutos de Bogotá
        </h2>

        {/* Subheadline */}
        <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Escápate este fin de semana a una experiencia boutique en medio de la
          naturaleza. Una finca cafetera reconocida mundialmente, con cabañas
          privadas diseñadas para el encuentro y la desconexión.
        </p>

        {/* Trust chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {TRUST_CHIPS.map((chip) => (
            <span
              key={chip}
              className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-sm font-medium"
            >
              <svg
                className="w-3.5 h-3.5 text-brand-gold flex-shrink-0"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7L5.5 10.5L12 3.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {chip}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CLOUDBEDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAvailabilityClick('hero')}
            className="w-full sm:w-auto bg-brand-pink text-white px-8 py-4 rounded-full text-base font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-xl hover:shadow-brand-pink/40 hover:-translate-y-1 text-center"
          >
            Ver disponibilidad
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('hero')}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#1ebe5d] transition-all duration-200 hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-1"
          >
            <svg
              className="w-5 h-5 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Reservar por WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors duration-200 animate-bounce"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
