import { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Car,
  Check,
  Star,
  Mail,
  Shield,
  Trees,
  Coffee,
  UtensilsCrossed,
  Mountain,
  Bird,
  Heart,
  Wine,
  Flame,
} from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logo from './components/Logo';

import { useScrollReveal } from './hooks/useScrollReveal';
import { useAnalytics } from './hooks/useAnalytics';

import {
  ASSETS,
  STATS,
  CABIN_FEATURES,
  EXPERIENCES,
  FAQ_ITEMS,
  WHATSAPP_URL,
  EMAIL,
  NAV_LINKS,
  WHY_CARDS,
  PRICE_CARDS,
  REVIEWS,
  COPY,
} from './constants';

// ─── Icon map for experiences ─────────────────────────────────────────────────
const EXPERIENCE_ICONS: Record<string, React.ReactNode> = {
  Coffee: <Coffee className="w-6 h-6" />,
  Mountain: <Mountain className="w-6 h-6" />,
  Bird: <Bird className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  Wine: <Wine className="w-6 h-6" />,
  Flame: <Flame className="w-6 h-6" />,
};

// ─── Icon map for why cards ───────────────────────────────────────────────────
const WHY_ICONS: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-6 h-6" />,
  Trees: <Trees className="w-6 h-6" />,
  Coffee: <Coffee className="w-6 h-6" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6" />,
};

// ─── WhatsApp floating button ─────────────────────────────────────────────────
function FloatingCTA() {
  const { trackWhatsAppClick } = useAnalytics();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick('floating_button')}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-brand-pink text-white shadow-lg hover:bg-brand-pink/90 hover:shadow-xl hover:shadow-brand-pink/40 hover:-translate-y-1 transition-all duration-300"
      aria-label="Contáctanos"
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </a>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <section className="bg-brand-dark py-10" aria-label="Estadísticas clave">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-4 ${
                i < STATS.length - 1 ? 'lg:border-r lg:border-brand-gold/30' : ''
              }`}
            >
              <div className="font-serif text-3xl sm:text-4xl font-bold text-brand-gold mb-1">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm sm:text-base mb-0.5">
                {stat.label}
              </div>
              <div className="text-white/50 text-xs sm:text-sm">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Section ──────────────────────────────────────────────────────────────
function WhySection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      id="por-que"
      ref={ref}
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="por-que-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
            Lo que nos hace diferentes
          </p>
          <h2
            id="por-que-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-5"
          >
            ¿Por qué La Palma y el Tucán?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-4xl mx-auto">
            {COPY.WHY_INTRO}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {WHY_CARDS.map((card) => (
            <article
              key={card.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-brand-beige/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-pink/10 flex items-center justify-center text-brand-pink mb-4 group-hover:bg-brand-pink group-hover:text-white transition-colors duration-200">
                {WHY_ICONS[card.iconName]}
              </div>
              <h3 className="font-serif text-lg font-semibold text-brand-dark mb-2">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Our Story Section ───────────────────────────────────────────────────────
function OurStorySection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      ref={ref}
      className={`py-20 bg-white scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="historia-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={ASSETS.DEGUSTACION}
              alt="Degustación de café de especialidad en La Palma y el Tucán"
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white font-serif text-lg italic">
                &ldquo;El café que sirves en el desayuno viene de los mismos cafetales que rodean tu cabaña&rdquo;
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
              Nuestra historia
            </p>
            <h2
              id="historia-titulo"
              className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-6"
            >
              De finca cafetera a destino de clase mundial
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              {COPY.OUR_STORY}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Cabin Section ────────────────────────────────────────────────────────────
function CabinSection() {
  const { ref, isVisible } = useScrollReveal();
  const { trackWhatsAppClick } = useAnalytics();

  return (
    <section
      id="cabanas"
      ref={ref}
      className={`py-20 bg-white scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="cabanas-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
            Tu refugio privado
          </p>
          <h2
            id="cabanas-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark"
          >
            Tu cabaña privada en el bosque
          </h2>
        </div>

        <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto text-center mb-12">
          {COPY.CABIN_DESCRIPTION}
        </p>

        {/* Main cabin content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Media Gallery */}
          <div className="flex flex-col gap-2">
            {/* Tina video - main */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <video autoPlay muted loop playsInline poster={ASSETS.TINA} className="w-full h-[280px] object-cover">
                <source src={ASSETS.TINA_VIDEO_WEBM} type="video/webm" />
                <source src={ASSETS.TINA_VIDEO_MP4} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Bottom row */}
            <div className="grid grid-cols-2 gap-2">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <video autoPlay muted loop playsInline poster={ASSETS.CABANA} className="w-full h-[180px] object-cover">
                  <source src={ASSETS.CAMA_VIDEO_WEBM} type="video/webm" />
                  <source src={ASSETS.CAMA_VIDEO_MP4} type="video/mp4" />
                </video>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img src={ASSETS.EXTERIOR} alt="Exterior cabaña en bosque de niebla" className="w-full h-[180px] object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-brand-dark mb-6">
              Cada cabaña incluye:
            </h3>
            <ul className="space-y-4 mb-8">
              {CABIN_FEATURES.map((feature) => (
                <li key={feature.text} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-pink/15 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-brand-pink" aria-hidden="true" />
                  </span>
                  <span className="text-gray-700">{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('cabanas_section')}
              className="inline-block text-center bg-brand-pink text-white py-3.5 px-8 rounded-full font-semibold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-lg hover:shadow-brand-pink/30 hover:-translate-y-0.5"
            >
              Reserva tu cabaña
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Experiences Section ──────────────────────────────────────────────────────
function ExperiencesSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      id="experiencias"
      ref={ref}
      className={`py-20 bg-brand-dark scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="experiencias-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-3">
            Vive algo único
          </p>
          <h2
            id="experiencias-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-white"
          >
            Más que una estadía, una experiencia
          </h2>
        </div>

        <p className="text-white/70 text-base leading-relaxed max-w-3xl mx-auto text-center mb-12">
          {COPY.EXPERIENCE_INTRO}
        </p>

        {/* Experience cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp, i) => (
            <article
              key={exp.title}
              className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/12 hover:-translate-y-1 transition-all duration-200 group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-gold mb-4 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors duration-200">
                {EXPERIENCE_ICONS[exp.icon as string]}
              </div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                {exp.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{exp.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Price Section ────────────────────────────────────────────────────────────
function PriceSection() {
  const { ref, isVisible } = useScrollReveal();
  const { trackWhatsAppClick } = useAnalytics();

  return (
    <section
      id="precios"
      ref={ref}
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="precios-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
            Planes claros
          </p>
          <h2
            id="precios-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-3"
          >
            Planes y Precios
          </h2>
          <p className="text-gray-500 text-lg">Transparencia total. Sin sorpresas.</p>
        </div>

        <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto text-center mb-12">
          {COPY.PRICE_INTRO}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {PRICE_CARDS.map((card) => {
            const planText = encodeURIComponent(`Hola, quiero reservar el plan ${card.name}`);
            const whatsappUrl = `https://wa.me/573189565617?text=${planText}`;

            return (
              <article
                key={card.name}
                className={`relative bg-white rounded-2xl p-6 shadow-sm border-2 transition-all duration-200 hover:shadow-md hover:-translate-y-1 flex flex-col ${
                  card.highlighted
                    ? 'border-brand-gold'
                    : 'border-brand-beige/40'
                }`}
              >
                {card.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-dark text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Más popular
                  </div>
                )}

                <h3 className="font-serif text-xl font-semibold text-brand-dark mb-2">
                  {card.name}
                </h3>
                <p className="text-brand-pink font-bold text-lg mb-4">
                  {card.price}
                </p>

                <ul className="space-y-3 mb-6 flex-1">
                  {card.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-brand-pink flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(`price_${card.name}`)}
                  className={`text-center py-3 rounded-full font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${
                    card.highlighted
                      ? 'bg-brand-pink text-white hover:bg-brand-pink/90 hover:shadow-brand-pink/30'
                      : 'bg-brand-dark text-white hover:bg-brand-dark/90'
                  }`}
                >
                  Reservar este plan
                </a>
              </article>
            );
          })}
        </div>

        <p className="text-center text-gray-400 text-sm">
          * Precios por cabaña/noche. Sujetos a disponibilidad y temporada.
        </p>
      </div>
    </section>
  );
}

// ─── Reviews Section (3 visible cards carousel) ─────────────────────────────
function ReviewsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 3 cards en desktop, 1 en mobile
  const perPage = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 3;
  const totalPages = Math.ceil(REVIEWS.length / perPage);

  const goTo = (p: number, pause = true) => {
    if (pause) setIsPaused(true);
    setPage(((p % totalPages) + totalPages) % totalPages);
  };

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(() => goTo(page + 1, false), 5000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [page, isPaused]);

  const visible = REVIEWS.slice(page * perPage, page * perPage + perPage);

  return (
    <section
      ref={ref}
      className={`py-20 bg-white scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="resenas-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
            Reseñas verificadas
          </p>
          <h2
            id="resenas-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark"
          >
            Lo que dicen nuestras parejas
          </h2>
        </div>

        {/* Carousel with arrows */}
        <div className="relative flex items-center gap-4">
          {/* Left arrow */}
          <button
            onClick={() => goTo(page - 1)}
            aria-label="Reseñas anteriores"
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-brand-beige bg-white shadow-sm flex items-center justify-center text-brand-dark hover:border-brand-pink hover:text-brand-pink transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* 3 Cards grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6" aria-live="polite">
            {visible.map((review, i) => (
              <article
                key={`${page}-${i}`}
                className="bg-brand-light border border-brand-beige/50 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-brand-gold fill-brand-gold" aria-hidden="true" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-brand-dark text-sm leading-relaxed flex-1 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{review.author}</span>
                  <span className="font-medium text-brand-pink">{review.source}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => goTo(page + 1)}
            aria-label="Siguientes reseñas"
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-brand-beige bg-white shadow-sm flex items-center justify-center text-brand-dark hover:border-brand-pink hover:text-brand-pink transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              aria-label={`Página ${i + 1}`}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === page
                  ? 'w-6 h-2.5 bg-brand-pink'
                  : 'w-2.5 h-2.5 bg-brand-beige hover:bg-brand-pink/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ──────────────────────────────────────────────────────────────
function FaqSection() {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      ref={ref}
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="faq-titulo"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
            Resolvemos tus dudas
          </p>
          <h2
            id="faq-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark"
          >
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={index} className="bg-white rounded-2xl shadow-sm border border-brand-beige/50 overflow-hidden">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-light/50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-brand-dark text-base pr-4">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 ml-auto text-brand-pink">
                    {isOpen ? (
                      <ChevronUp size={20} aria-hidden="true" />
                    ) : (
                      <ChevronDown size={20} aria-hidden="true" />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-brand-beige/40 pt-4">
                    {item.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Location Section ─────────────────────────────────────────────────────────
function LocationSection() {
  const { ref, isVisible } = useScrollReveal();
  const { trackWhatsAppClick } = useAnalytics();

  const STEPS = [
    { number: '1', text: 'Tomar vía Facatativá' },
    { number: '2', text: 'Seguir hacia Anolaima' },
    { number: '3', text: '10 min por vía destapada' },
    { number: '4', text: 'Llegaste (90 min total)' },
  ];

  return (
    <section
      id="ubicacion"
      ref={ref}
      className={`py-20 bg-white scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="ubicacion-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
            Fácil de llegar
          </p>
          <h2
            id="ubicacion-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark"
          >
            ¿Cómo llegar?
          </h2>
        </div>

        <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto text-center mb-12">
          {COPY.LOCATION_DESCRIPTION}
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-pink/15 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-brand-pink" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-brand-dark">Zipacón, Cundinamarca, Colombia</p>
                <p className="text-gray-400 text-sm">4.7547° N, 74.3878° W</p>
              </div>
            </div>

            <h3 className="font-serif text-xl font-semibold text-brand-dark mb-4">
              Desde Bogotá:
            </h3>

            <div className="space-y-4 mb-8">
              {STEPS.map((step) => (
                <div key={step.number} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-pink flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <Car className="w-4 h-4 text-gray-400" aria-hidden="true" />
                    <span className="text-gray-700">{step.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('location_section')}
              className="inline-flex items-center gap-2 text-brand-pink font-semibold hover:text-brand-pink/80 transition-colors duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              ¿Necesitas ayuda con la ruta? Escríbenos
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15907.5!2d-74.3878!3d4.7547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f7c5c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2sLa%20Palma%20y%20el%20Tuc%C3%A1n!5e0!3m2!1ses!2sco!4v1709000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación La Palma y el Tucán"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Final ────────────────────────────────────────────────────────────────
function CtaFinal() {
  const { ref, isVisible } = useScrollReveal();
  const { trackWhatsAppClick, trackEmailClick } = useAnalytics();

  return (
    <section
      id="reservar"
      ref={ref}
      className={`relative py-28 overflow-hidden scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="cta-titulo"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.CAFETALES}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/85" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="cta-titulo"
          className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          El tiempo juntos no se pospone
        </h2>

        <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto mb-6">
          {COPY.CTA_EMOTIONAL}
        </p>

        <p className="text-white/70 text-base sm:text-lg mb-10 max-w-xl mx-auto">
          Reserva en menos de 2 minutos por WhatsApp
        </p>

        {/* CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('cta_final')}
          className="inline-block bg-brand-pink text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-2xl hover:shadow-brand-pink/50 hover:-translate-y-1 mb-6"
        >
          Reservar ahora por WhatsApp
        </a>

        <p className="text-white/50 text-sm">
          O escríbenos a{' '}
          <a
            href={`mailto:${EMAIL}`}
            onClick={() => trackEmailClick('cta_final')}
            className="text-white/70 hover:text-white underline transition-colors duration-200"
          >
            {EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const { trackWhatsAppClick, trackEmailClick } = useAnalytics();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/10 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Logo variant="light" size="lg" />
            <p className="text-white/50 text-sm mt-4 leading-relaxed max-w-xs">
              Finca cafetera boutique a 90 minutos de Bogotá. Cabañas privadas con tina,
              desayuno farm-to-table y Coffee Tour incluido.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Navegación
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(link.href);
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('footer')}
                  className="flex items-center gap-2 text-white/50 hover:text-brand-pink text-sm transition-colors duration-200"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  onClick={() => trackEmailClick('footer')}
                  className="flex items-center gap-2 text-white/50 hover:text-brand-pink text-sm transition-colors duration-200 break-all"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-white/50 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  Zipacón, Cundinamarca, Colombia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} La Palma &amp; El Tucán. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Escapada romántica cerca a Bogotá · Finca cafetera Zipacón
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App root ─────────────────────────────────────────────────────────────────
export default function App() {
  useAnalytics(true);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <WhySection />
        <OurStorySection />
        <CabinSection />
        <ExperiencesSection />
        <PriceSection />
        <ReviewsSection />
        <FaqSection />
        <LocationSection />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
