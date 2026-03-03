import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Clock, Mountain, Wifi } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logo from './components/Logo';

import { useScrollReveal } from './hooks/useScrollReveal';
import { useAnalytics } from './hooks/useAnalytics';

import {
  ASSETS,
  STATS,
  SEARCH_TAGS,
  CABIN_FEATURES,
  PERFECT_FOR,
  EXPERIENCES,
  DISTANCE_POINTS,
  PRIVACY_POINTS,
  FAQ_ITEMS,
  CLOUDBEDS_URL,
  WHATSAPP_URL,
  EMAIL,
  NAV_LINKS,
} from './constants';

// ─── WhatsApp floating button ─────────────────────────────────────────────────
function WhatsAppFloat() {
  const { trackWhatsAppClick } = useAnalytics();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick('floating_button')}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/50 hover:bg-[#1ebe5d] hover:scale-110 transition-all duration-200"
      aria-label="Contactar por WhatsApp"
    >
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <section className="bg-brand-navy py-10" aria-label="Estadísticas clave">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
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

// ─── Search Section ───────────────────────────────────────────────────────────
function SearchSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      id="busqueda"
      ref={ref}
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="busqueda-titulo"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
          ¿Estás buscando esto?
        </p>
        <h2
          id="busqueda-titulo"
          className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-10"
        >
          Si estás buscando esto, estás en el lugar correcto.
        </h2>

        {/* Search tags grid */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SEARCH_TAGS.map((tag) => (
            <span
              key={tag.text}
              className="flex items-center gap-1.5 bg-white border border-brand-beige text-brand-dark px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:border-brand-pink hover:text-brand-pink transition-colors duration-200 cursor-default"
            >
              <svg
                className="w-3 h-3 text-brand-gold flex-shrink-0"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M8.5 8.5L11 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              {tag.text}
            </span>
          ))}
        </div>

        {/* Paragraph */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-beige/50 max-w-2xl mx-auto">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong className="text-brand-dark">La Palma & El Tucán</strong> no es un hotel
            tradicional. Es un refugio íntimo en una finca cafetera reconocida mundialmente.
            Aquí solo vienes a relajarte y desconectarte.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Cabin Section ────────────────────────────────────────────────────────────
function CabinSection() {
  const { ref, isVisible } = useScrollReveal();
  const { trackAvailabilityClick, trackWhatsAppClick } = useAnalytics();

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
            Nuestras cabañas
          </p>
          <h2
            id="cabanas-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-3"
          >
            Cada cabaña, diseñada para el encuentro
          </h2>
          <p className="text-gray-500 text-lg">Baño privado con tina en todas.</p>
        </div>

        {/* Main cabin content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Media Gallery */}
          <div className="flex flex-col gap-2">
            {/* Tina video - main */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <video autoPlay muted loop playsInline poster={ASSETS.TINA} className="w-full h-[280px] object-cover">
                <source src={ASSETS.TINA_VIDEO_WEBM} type="video/webm" />
                <source src={ASSETS.TINA_VIDEO_MP4} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg">
                <p className="text-brand-dark font-bold text-sm">Tina privada</p>
                <p className="text-gray-500 text-xs">En todas las cabañas</p>
              </div>
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
                <img src={ASSETS.CABANA} alt="Interior cabaña romántica" className="w-full h-[180px] object-cover" loading="lazy" />
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
                    <svg
                      className="w-3 h-3 text-brand-pink"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 6L4.5 8.5L10 3"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* Perfect for */}
            <div className="bg-brand-light rounded-2xl p-5 mb-8">
              <p className="text-brand-dark font-semibold mb-3 text-sm uppercase tracking-wide">
                Perfecta para:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {PERFECT_FOR.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-gray-700 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={CLOUDBEDS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAvailabilityClick('cabanas_section')}
                className="flex-1 text-center bg-brand-pink text-white py-3.5 rounded-full font-semibold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-lg hover:shadow-brand-pink/30 hover:-translate-y-0.5"
              >
                Ver disponibilidad
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('cabanas_section')}
                className="flex-1 text-center bg-[#25D366] text-white py-3.5 rounded-full font-semibold hover:bg-[#1ebe5d] transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Gallery strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { src: ASSETS.CAFETALES, alt: 'Cafetales de La Palma & El Tucán' },
            { src: ASSETS.BOSQUE, alt: 'Caminata por el bosque de niebla' },
            { src: ASSETS.DEGUSTACION, alt: 'Degustación de cafés de especialidad' },
          ].map((img) => (
            <div key={img.src} className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
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
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="experiencias-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
            Todo incluido
          </p>
          <h2
            id="experiencias-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-3"
          >
            No es solo hospedaje. Es toda una experiencia.
          </h2>
          <p className="text-gray-500 text-lg">Tu estadía incluye:</p>
        </div>

        {/* Experience cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp, i) => (
            <article
              key={exp.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-brand-beige/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-4xl mb-4">{exp.icon}</div>
              <h3 className="font-serif text-lg font-semibold text-brand-dark mb-2 group-hover:text-brand-pink transition-colors duration-200">
                {exp.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
            </article>
          ))}
        </div>

        {/* Processing station image */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-xl relative">
          <img
            src={ASSETS.EXTERIOR}
            alt="Proceso de beneficio del café en La Palma & El Tucán"
            className="w-full h-64 sm:h-80 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 to-transparent flex items-center">
            <div className="p-8 max-w-md">
              <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-2">
                Finca de clase mundial
              </p>
              <p className="font-serif text-white text-2xl font-bold leading-snug">
                Reconocida por los mejores cafés de especialidad de Colombia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Distance Section ─────────────────────────────────────────────────────────
function DistanceSection() {
  const { ref, isVisible } = useScrollReveal();
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
            Cerca y privado
          </p>
          <h2
            id="ubicacion-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark"
          >
            Cerca de Bogotá. Lejos del mundo.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Distance column */}
          <div className="bg-brand-navy rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-brand-gold" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-semibold">
                ¿A qué distancia estamos?
              </h3>
            </div>
            <ul className="space-y-5">
              {DISTANCE_POINTS.map((point) => (
                <li key={point.text} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0 leading-tight">{point.icon}</span>
                  <span className="text-white/85 leading-relaxed">{point.text}</span>
                </li>
              ))}
            </ul>

            {/* Map snippet hint */}
            <div className="mt-8 bg-white/10 rounded-2xl p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-brand-gold" aria-hidden="true" />
                <span className="text-brand-gold text-sm font-semibold">Ruta sugerida</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Bogotá → Facatativá → Zipacón. Sin vías difíciles ni 4x4.
              </p>
            </div>
          </div>

          {/* Privacy column */}
          <div className="bg-brand-light rounded-3xl p-8 border border-brand-beige">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-pink/15 flex items-center justify-center flex-shrink-0">
                <Mountain className="w-5 h-5 text-brand-pink" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-brand-dark">
                ¿Es privado?
              </h3>
            </div>
            <ul className="space-y-4">
              {PRIVACY_POINTS.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-pink/15 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-brand-pink"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 6L4.5 8.5L10 3"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 leading-relaxed">{point.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-white rounded-2xl p-4 shadow-sm border border-brand-beige/50">
              <div className="flex items-center gap-2 mb-2">
                <Wifi className="w-4 h-4 text-brand-green" aria-hidden="true" />
                <span className="text-brand-green text-sm font-semibold">
                  Confort garantizado
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Toda la comodidad de un hotel boutique, en medio de la naturaleza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Urgency Section ──────────────────────────────────────────────────────────
function UrgencySection() {
  const { ref, isVisible } = useScrollReveal();
  const { trackAvailabilityClick, trackWhatsAppClick } = useAnalytics();
  return (
    <section
      ref={ref}
      className={`py-24 relative overflow-hidden scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="urgencia-titulo"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.SUNSET}
          alt=""
          className="w-full h-full object-cover object-center scale-105"
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Flame icon */}
        <div className="flex justify-center mb-6">
          <span className="text-5xl">🔥</span>
        </div>

        <h2
          id="urgencia-titulo"
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Los fines de semana{' '}
          <span className="text-brand-pink italic">se llenan rápido</span>
        </h2>

        <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Si estás planeando un próximo aniversario, cumpleaños o fin de semana especial —
          te recomendamos revisar disponibilidad hoy mismo.
        </p>

        {/* Availability indicator */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-pink/15 border border-brand-pink/30 text-brand-pink px-5 py-2.5 rounded-full text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
            Disponibilidad limitada este fin de semana
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CLOUDBEDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAvailabilityClick('urgency_section')}
            className="w-full sm:w-auto bg-brand-pink text-white px-10 py-[18px] rounded-full text-lg font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-2xl hover:shadow-brand-pink/50 hover:-translate-y-1"
          >
            Ver disponibilidad ahora
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('urgency_section')}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 border-2 border-[#25D366] text-[#25D366] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#25D366] hover:text-white transition-all duration-200 hover:-translate-y-1"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Reservar por WhatsApp
          </a>
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
            Preguntas frecuentes
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
                    isOpen ? 'max-h-48' : 'max-h-0'
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

// ─── CTA Final ────────────────────────────────────────────────────────────────
function CtaFinal() {
  const { ref, isVisible } = useScrollReveal();
  const { trackAvailabilityClick, trackWhatsAppClick } = useAnalytics();

  const STEPS = [
    { number: '1', label: 'Elige tu fecha' },
    { number: '2', label: 'Confirma disponibilidad' },
    { number: '3', label: 'Prepárate para desconectarte' },
  ];

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
          alt="Cafetales de La Palma & El Tucán al atardecer"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-pink/20 border border-brand-pink/40 text-brand-pink px-4 py-2 rounded-full text-sm font-medium tracking-wide mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse" />
          Disponibilidad limitada
        </div>

        <h2
          id="cta-titulo"
          className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Reserva en 2 minutos
        </h2>

        <p className="text-white/70 text-base mb-12">
          Así de sencillo es empezar tu escapada perfecta.
        </p>

        {/* Steps */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-14">
          {STEPS.map((step, i) => (
            <div key={step.number} className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-brand-pink flex items-center justify-center text-white font-bold text-lg mb-2 shadow-lg shadow-brand-pink/40">
                  {step.number}
                </div>
                <span className="text-white/85 text-sm font-medium text-center max-w-[100px]">
                  {step.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden sm:block w-12 h-0.5 bg-white/20 mt-[-20px]" />
              )}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={CLOUDBEDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAvailabilityClick('cta_final')}
            className="w-full sm:w-auto bg-brand-pink text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-2xl hover:shadow-brand-pink/50 hover:-translate-y-1"
          >
            Ver disponibilidad
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('cta_final')}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#1ebe5d] transition-all duration-200 hover:shadow-2xl hover:shadow-green-500/50 hover:-translate-y-1"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribir por WhatsApp
          </a>
        </div>

        {/* Trust note */}
        <p className="text-white/50 text-sm">
          Respuesta inmediata · Hablamos español · Confirmación al instante
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
              desayuno y Coffee Tour incluido.
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
                  className="flex items-center gap-2 text-white/50 hover:text-[#25D366] text-sm transition-colors duration-200"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  onClick={() => trackEmailClick('footer')}
                  className="text-white/50 hover:text-brand-pink text-sm transition-colors duration-200 break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="text-white/50 text-sm">
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
            Cabañas románticas cerca a Bogotá · Finca cafetera Zipacón
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
        <SearchSection />
        <CabinSection />
        <ExperiencesSection />
        <DistanceSection />
        <UrgencySection />
        <FaqSection />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
