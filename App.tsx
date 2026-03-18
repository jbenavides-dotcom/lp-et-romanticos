import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, MapPin, Clock, Mountain, Wifi } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logo from './components/Logo';

import { useScrollReveal } from './hooks/useScrollReveal';
import { useAnalytics } from './hooks/useAnalytics';
import { useI18n } from './i18n';

import {
  ASSETS,
  STATS,
  CLOUDBEDS_URL,
  WHATSAPP_URL,
  EMAIL,
  NAV_LINKS,
} from './constants';

// ─── WhatsApp floating button ─────────────────────────────────────────────────
function FloatingCTA() {
  const { trackWhatsAppClick } = useAnalytics();
  const { t } = useI18n();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick('floating_button')}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-brand-pink text-white shadow-lg hover:bg-brand-pink/90 hover:shadow-xl hover:shadow-brand-pink/40 hover:-translate-y-1 transition-all duration-300"
      aria-label={t('floating.aria')}
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </a>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
function StatsBar() {
  const { t } = useI18n();

  const STATS_I18N = [
    { value: STATS[0].value, label: t('stats.booking.label'), sublabel: t('stats.booking.sublabel') },
    { value: STATS[1].value, label: t('stats.tripadvisor.label'), sublabel: t('stats.tripadvisor.sublabel') },
    { value: STATS[2].value, label: t('stats.distance.label'), sublabel: t('stats.distance.sublabel') },
    { value: STATS[3].value, label: t('stats.breakfast.label'), sublabel: t('stats.breakfast.sublabel') },
  ];

  return (
    <section className="bg-brand-dark py-10" aria-label={t('stats.aria')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS_I18N.map((stat) => (
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
  const { t } = useI18n();

  const POETIC_ITEMS = [
    t('search.poetic.1'),
    t('search.poetic.2'),
    t('search.poetic.3'),
    t('search.poetic.4'),
  ];

  const PHOTO_GRID = [
    { src: ASSETS.BOSQUE,    alt: t('search.photo.bosque') },
    { src: ASSETS.SUNSET,    alt: t('search.photo.sunset') },
    { src: ASSETS.EXTERIOR,  alt: t('search.photo.exterior') },
    { src: ASSETS.CABANA,    alt: t('search.photo.cabana') },
  ];

  return (
    <section
      id="busqueda"
      ref={ref}
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="busqueda-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column — text */}
          <div>
            <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
              {t('search.badge')}
            </p>
            <h2
              id="busqueda-titulo"
              className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-5"
            >
              {t('search.h2')}
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-7">
              {t('search.body')}
            </p>
            <ul className="space-y-3 mb-7">
              {POETIC_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-pink mt-2"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-serif text-brand-dark text-lg italic">
              {t('search.closing')}
            </p>
          </div>

          {/* Right column — 2×2 photo grid */}
          <div className="grid grid-cols-2 gap-3">
            {PHOTO_GRID.map((photo) => (
              <div
                key={photo.src}
                className="rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Cabin Section ────────────────────────────────────────────────────────────
function CabinSection() {
  const { ref, isVisible } = useScrollReveal();
  const { trackAvailabilityClick, trackWhatsAppClick } = useAnalytics();
  const { t } = useI18n();

  const CABIN_FEATURES_I18N = [
    t('cabin.feat.1'),
    t('cabin.feat.2'),
    t('cabin.feat.3'),
    t('cabin.feat.4'),
    t('cabin.feat.5'),
    t('cabin.feat.6'),
  ];

  const PERFECT_FOR_I18N = [
    { emoji: '💑', label: t('cabin.perfectfor.1') },
    { emoji: '🎂', label: t('cabin.perfectfor.2') },
    { emoji: '🌿', label: t('cabin.perfectfor.3') },
    { emoji: '✨', label: t('cabin.perfectfor.4') },
  ];

  const taglineLines = t('cabin.tagline').split('\n');

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
            {t('cabin.badge')}
          </p>
          <h2
            id="cabanas-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-3"
          >
            {t('cabin.h2')}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-4">{t('cabin.body')}</p>
          <p className="font-serif text-brand-dark text-xl font-medium italic">
            {taglineLines[0]}<br />{taglineLines[1]}
          </p>
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
                <img src={ASSETS.CABANA} alt={t('cabin.img.tina')} className="w-full h-[180px] object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-brand-dark mb-6">
              {t('cabin.features.title')}
            </h3>
            <ul className="space-y-4 mb-8">
              {CABIN_FEATURES_I18N.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
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
                  <span className="text-gray-700">{feat}</span>
                </li>
              ))}
            </ul>

            {/* Perfect for */}
            <div className="bg-brand-light rounded-2xl p-5 mb-8">
              <p className="text-brand-dark font-semibold mb-3 text-sm uppercase tracking-wide">
                {t('cabin.perfectfor.title')}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {PERFECT_FOR_I18N.map((item) => (
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
                {t('cabin.cta.availability')}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('cabanas_section')}
                className="flex-1 text-center bg-brand-pink text-white py-3.5 rounded-full font-semibold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-lg hover:shadow-brand-pink/30 hover:-translate-y-0.5"
              >
                {t('cabin.cta.book')}
              </a>
            </div>
          </div>
        </div>

        {/* Gallery strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { src: ASSETS.CAFETALES, alt: t('cabin.img.cafetales') },
            { src: ASSETS.BOSQUE, alt: t('cabin.img.bosque') },
            { src: ASSETS.DEGUSTACION, alt: t('cabin.img.degustacion') },
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
  const { t } = useI18n();

  const EXPERIENCES_I18N = [
    { icon: '🍳', title: t('exp.title.1'), description: t('exp.desc.1') },
    { icon: '☕', title: t('exp.title.2'), description: t('exp.desc.2') },
    { icon: '☕', title: t('exp.title.3'), description: t('exp.desc.3') },
    { icon: '🌿', title: t('exp.title.4'), description: t('exp.desc.4') },
    { icon: '🚵', title: t('exp.title.5'), description: t('exp.desc.5') },
    { icon: '🤫', title: t('exp.title.6'), description: t('exp.desc.6') },
  ];

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
            {t('exp.badge')}
          </p>
          <h2
            id="experiencias-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-3"
          >
            {t('exp.h2')}
          </h2>
          <p className="text-gray-500 text-lg">{t('exp.subtitle')}</p>
        </div>

        {/* Experience cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES_I18N.map((exp, i) => (
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
            alt={t('exp.img.exterior')}
            className="w-full h-64 sm:h-80 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-transparent flex items-center">
            <div className="p-8 max-w-lg">
              <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
                {t('exp.overlay.badge')}
              </p>
              <p className="font-serif text-white text-xl font-bold leading-snug mb-3">
                {t('exp.overlay.h3')}
              </p>
              <p className="text-white/80 text-sm leading-relaxed mb-2">
                {t('exp.overlay.body1')}
              </p>
              <p className="text-white/80 text-sm leading-relaxed italic">
                {t('exp.overlay.body2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Reviews Section (carousel) ──────────────────────────────────────────────
function ReviewsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { t } = useI18n();

  const REVIEWS = [
    { textKey: 'reviews.text.1', authorKey: 'reviews.author.1', stars: 5, source: 'Booking' },
    { textKey: 'reviews.text.2', authorKey: 'reviews.author.2', stars: 5, source: 'TripAdvisor' },
    { textKey: 'reviews.text.3', authorKey: 'reviews.author.3', stars: 5, source: 'Booking' },
    { textKey: 'reviews.text.4', authorKey: 'reviews.author.4', stars: 5, source: 'Booking' },
    { textKey: 'reviews.text.5', authorKey: 'reviews.author.5', stars: 5, source: 'Booking' },
    { textKey: 'reviews.text.6', authorKey: 'reviews.author.6', stars: 5, source: 'TripAdvisor' },
  ];

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
      className={`py-20 bg-brand-dark scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="resenas-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-3">
            {t('reviews.badge')}
          </p>
          <h2
            id="resenas-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-white"
          >
            {t('reviews.h2')}
          </h2>
          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-brand-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-bold text-lg">5.0</span>
            <span className="text-white/50 text-sm">/ 5</span>
          </div>
        </div>

        {/* Carousel with arrows */}
        <div className="relative flex items-center gap-4">
          <button
            onClick={() => goTo(page - 1)}
            aria-label={t('reviews.prev')}
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-white/5 shadow-sm flex items-center justify-center text-white/60 hover:border-brand-gold hover:text-brand-gold transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6" aria-live="polite">
            {visible.map((review, i) => (
              <article
                key={`${page}-${i}`}
                className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
              >
                <div className="flex gap-0.5">
                  {[...Array(review.stars)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-brand-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed flex-1 italic">
                  &ldquo;{t(review.textKey)}&rdquo;
                </p>
                <div className="flex items-center justify-between text-xs text-white/50">
                  <span>{t(review.authorKey)}</span>
                  <span className="font-medium text-brand-gold">{review.source}</span>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={() => goTo(page + 1)}
            aria-label={t('reviews.next')}
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-white/5 shadow-sm flex items-center justify-center text-white/60 hover:border-brand-gold hover:text-brand-gold transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              aria-label={`${t('reviews.page')} ${i + 1}`}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === page
                  ? 'w-6 h-2.5 bg-brand-gold'
                  : 'w-2.5 h-2.5 bg-white/20 hover:bg-brand-gold/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Distance Section ─────────────────────────────────────────────────────────
function DistanceSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useI18n();

  const DISTANCE_POINTS_I18N = [
    { icon: '🚗', text: t('distance.pt.1') },
    { icon: '🛣️', text: t('distance.pt.2') },
    { icon: '🌤️', text: t('distance.pt.3') },
    { icon: '🌿', text: t('distance.pt.4') },
  ];

  const PRIVACY_POINTS_I18N = [
    { text: t('privacy.pt.1') },
    { text: t('privacy.pt.2') },
    { text: t('privacy.pt.3') },
    { text: t('privacy.pt.4') },
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
            {t('distance.badge')}
          </p>
          <h2
            id="ubicacion-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark"
          >
            {t('distance.h2')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Distance column */}
          <div className="bg-brand-dark rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-brand-gold" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-semibold">
                {t('distance.col1.h3')}
              </h3>
            </div>
            <ul className="space-y-5">
              {DISTANCE_POINTS_I18N.map((point) => (
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
                <span className="text-brand-gold text-sm font-semibold">{t('distance.route.label')}</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                {t('distance.route.text')}
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
                {t('distance.col2.h3')}
              </h3>
            </div>
            <ul className="space-y-4">
              {PRIVACY_POINTS_I18N.map((point, i) => (
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
                  {t('distance.comfort.label')}
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('distance.comfort.text')}
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
  const { t } = useI18n();

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
          {t('urgency.h2.pre')}{' '}
          <span className="text-brand-pink italic">{t('urgency.h2.highlight')}</span>
        </h2>

        <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          {t('urgency.body')}
        </p>

        {/* Availability indicator */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-pink/15 border border-brand-pink/30 text-brand-pink px-5 py-2.5 rounded-full text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
            {t('urgency.badge')}
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
            {t('urgency.cta.availability')}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('urgency_section')}
            className="w-full sm:w-auto border-2 border-white/40 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-200 hover:-translate-y-1"
          >
            {t('urgency.cta.info')}
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
  const { t } = useI18n();

  const FAQ_I18N = [
    { question: t('faq.q.1'), answer: t('faq.a.1') },
    { question: t('faq.q.2'), answer: t('faq.a.2') },
    { question: t('faq.q.3'), answer: t('faq.a.3') },
    { question: t('faq.q.4'), answer: t('faq.a.4') },
    { question: t('faq.q.5'), answer: t('faq.a.5') },
    { question: t('faq.q.6'), answer: t('faq.a.6') },
  ];

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
            {t('faq.badge')}
          </p>
          <h2
            id="faq-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark"
          >
            {t('faq.h2')}
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_I18N.map((item, index) => {
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
  const { t } = useI18n();

  const STEPS = [
    { number: '1', label: t('cta.step.1') },
    { number: '2', label: t('cta.step.2') },
    { number: '3', label: t('cta.step.3') },
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
          {t('cta.badge')}
        </div>

        <h2
          id="cta-titulo"
          className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          {t('cta.h2')}
        </h2>

        <p className="text-white/70 text-base mb-12">
          {t('cta.subtitle')}
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
            {t('cta.btn.availability')}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('cta_final')}
            className="w-full sm:w-auto flex items-center justify-center bg-brand-pink text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-2xl hover:shadow-brand-pink/50 hover:-translate-y-1"
          >
            {t('cta.btn.email')}
          </a>
        </div>

        {/* Trust note */}
        <p className="text-white/50 text-sm">
          {t('cta.trust')}
        </p>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const { trackWhatsAppClick, trackEmailClick } = useAnalytics();
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  const NAV_KEYS: Record<string, string> = {
    '#cabanas': 'nav.cabanas',
    '#experiencias': 'nav.experiencias',
    '#faq': 'nav.faq',
    '#reservar': 'nav.reservar',
  };

  return (
    <footer className="bg-brand-dark border-t border-white/10 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Logo variant="light" size="lg" />
            <p className="text-white/50 text-sm mt-4 leading-relaxed max-w-xs">
              {t('footer.brand.desc')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              {t('footer.nav.title')}
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
                    {t(NAV_KEYS[link.href] || link.href)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              {t('footer.contact.title')}
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
                  className="text-white/50 hover:text-brand-pink text-sm transition-colors duration-200 break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="text-white/50 text-sm">
                  {t('footer.location')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} {t('footer.copyright')}
          </p>
          <p className="text-white/20 text-xs">
            {t('footer.seo')}
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
        <ReviewsSection />
        <DistanceSection />
        <UrgencySection />
        <FaqSection />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
