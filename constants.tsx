import type {
  NavLink,
  Experience,
  FaqItem,
  Stat,
  SearchTag,
  CabinFeature,
  PerfectForItem,
  DistancePoint,
  PrivacyPoint,
} from './types';

// ─── Assets ───────────────────────────────────────────────────────────────────
const CDN = 'https://res.cloudinary.com/dkqocgknd/image/upload/f_auto,q_auto';
const CDN_VIDEO = 'https://res.cloudinary.com/dkqocgknd/video/upload/q_auto,w_1280';
export const ASSETS = {
  HERO_BG:         `${CDN},w_1600/lpet/romantico-hero.jpg`,
  HERO_VIDEO_MP4:  `${CDN_VIDEO}/lpet/romantico-hero-video.mp4`,
  HERO_VIDEO_WEBM: `${CDN_VIDEO}/lpet/romantico-hero-video.webm`,
  TINA_VIDEO_MP4:  `${CDN_VIDEO}/lpet/romantico-tina-video.mp4`,
  TINA_VIDEO_WEBM: `${CDN_VIDEO}/lpet/romantico-tina-video.webm`,
  CAMA_VIDEO_MP4:  `${CDN_VIDEO}/lpet/romantico-cama-video.mp4`,
  CAMA_VIDEO_WEBM: `${CDN_VIDEO}/lpet/romantico-cama-video.webm`,
  CABANA:    `${CDN},w_1000/lpet/romantico-cabana.jpg`,
  TINA:      `${CDN},w_1000/lpet/romantico-tina.jpg`,
  SUNSET:    `${CDN},w_1000/lpet/romantico-sunset.jpg`,
  EXTERIOR:  `${CDN},w_1000/lpet/romantico-exterior.jpg`,
  BOSQUE:    `${CDN},w_1000/lpet/romantico-bosque.jpg`,
  // Imágenes genéricas finca (respaldo)
  CAFETALES: 'https://res.cloudinary.com/dsylu9a7k/image/upload/f_auto,q_auto,w_900/lpet/cafetales.png',
  DEGUSTACION: 'https://res.cloudinary.com/dsylu9a7k/image/upload/f_auto,q_auto,w_900/lpet/degustacion-cafe.png',
} as const;

// ─── Contact & CTAs ───────────────────────────────────────────────────────────
export const WHATSAPP_URL =
  'https://wa.me/573189565617?text=Hola%2C%20quiero%20información%20sobre%20las%20cabañas%20románticas';
export const CLOUDBEDS_URL = 'https://hotels.cloudbeds.com/es/reservation/yB0fEt?ga_sess_id=885637364.1682640000&currency=cop';
export const EMAIL = 'reservas@lapalmayeltucan.com';

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Cabañas', href: '#cabanas' },
  { label: 'Experiencia', href: '#experiencias' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Reservar', href: '#reservar' },
];

// ─── Stats Bar ────────────────────────────────────────────────────────────────
export const STATS: Stat[] = [
  {
    value: '90 min',
    label: 'Desde Bogotá',
    sublabel: 'Acceso fácil en carro',
  },
  {
    value: '100%',
    label: 'Privado',
    sublabel: 'Hotel boutique con pocas cabañas',
  },
  {
    value: 'Todas',
    label: 'Con tina privada',
    sublabel: 'Baño en madera natural',
  },
  {
    value: '☕',
    label: 'Desayuno incluido',
    sublabel: 'Artesanal cada mañana',
  },
];

// ─── Search Tags ──────────────────────────────────────────────────────────────
export const SEARCH_TAGS: SearchTag[] = [
  { text: 'Cabañas cerca a Bogotá' },
  { text: 'Plan romántico con tina' },
  { text: 'Hotel boutique en naturaleza' },
  { text: 'Escapada de fin de semana' },
  { text: 'Hotel para aniversario' },
  { text: 'Finca cafetera cerca a Bogotá' },
  { text: 'Cabañas con tina privada' },
  { text: 'Escape del ruido de la ciudad' },
];

// ─── Cabin Features ───────────────────────────────────────────────────────────
export const CABIN_FEATURES: CabinFeature[] = [
  { text: 'Cabaña privada en medio del cafetal' },
  { text: 'Desayuno artesanal preparado con productos frescos' },
  { text: 'Coffee Tour guiado por nuestra finca' },
  { text: 'Degustación de cafés de especialidad' },
  { text: 'Senderos naturales en bosque de niebla' },
  { text: 'Espacios comunes íntimos y rodeados de naturaleza' },
];

export const PERFECT_FOR: PerfectForItem[] = [
  { emoji: '💑', label: 'Aniversarios' },
  { emoji: '🎂', label: 'Cumpleaños especiales' },
  { emoji: '🌿', label: 'Escapadas de fin de semana' },
  { emoji: '✨', label: 'Momentos que merecen atención y tiempo' },
];

// ─── Experiences ──────────────────────────────────────────────────────────────
export const EXPERIENCES: Experience[] = [
  {
    icon: '🍳',
    title: 'Desayuno artesanal incluido',
    description: 'Preparado con productos frescos de la finca cada mañana.',
  },
  {
    icon: '☕',
    title: 'Coffee Tour guiado',
    description: 'Conoce el proceso detrás de uno de los mejores cafés del mundo.',
  },
  {
    icon: '☕',
    title: 'Degustación de cafés de especialidad',
    description: 'Prueba nuestras variedades Gesha, Sidra y más.',
  },
  {
    icon: '🌿',
    title: 'Senderos naturales',
    description: 'Caminatas por el bosque de niebla a 1.800 metros sobre el nivel del mar.',
  },
  {
    icon: '🚵',
    title: 'Pistas de mountain bike',
    description: 'Recorre la finca en bicicleta entre los cafetales.',
  },
  {
    icon: '🤫',
    title: 'Silencio y desconexión total',
    description: 'Sin ruido, sin ciudad. Solo naturaleza, tu pareja y tú.',
  },
];

// ─── Distance & Privacy ───────────────────────────────────────────────────────
export const DISTANCE_POINTS: DistancePoint[] = [
  { icon: '🚗', text: '90 minutos en carro' },
  { icon: '🛣️', text: 'Acceso fácil' },
  { icon: '🌤️', text: 'Clima fresco de montaña' },
  { icon: '🌿', text: 'Privacidad real' },
];

export const PRIVACY_POINTS: PrivacyPoint[] = [
  { text: 'Un cambio de paisaje sin viajes largos.' },
  { text: 'Una pausa verdadera sin renunciar al confort.' },
  { text: 'Cada cabaña es independiente, construida en madera natural.' },
  { text: 'Espacios íntimos diseñados para el descanso y el encuentro.' },
];

// ─── FAQ Items ────────────────────────────────────────────────────────────────
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿Las cabañas tienen baño privado?',
    answer:
      'Sí. Todas nuestras cabañas cuentan con baño privado y están diseñadas para ofrecer privacidad y comodidad en medio de la naturaleza.',
  },
  {
    question: '¿Está incluido el desayuno?',
    answer: 'Sí. El desayuno artesanal está incluido en todas las reservas.',
  },
  {
    question: '¿Qué tan lejos está de Bogotá?',
    answer:
      'A solo 90 minutos en carro. Tomás la vía hacia Facatativá, luego hacia Zipacón. Acceso fácil sin necesidad de 4x4.',
  },
  {
    question: '¿Es un hotel grande?',
    answer:
      'No. Somos un hotel boutique con pocas cabañas independientes. Nada masivo. Todo íntimo.',
  },
  {
    question: '¿Incluye el Coffee Tour?',
    answer:
      'Sí. Todas las estadías incluyen un Coffee Tour guiado por nuestra finca, reconocida mundialmente por sus cafés de especialidad.',
  },
  {
    question: '¿Cómo hago la reserva?',
    answer:
      'Puedes verificar disponibilidad directamente en nuestra plataforma de reservas o escribirnos por WhatsApp. Respondemos en minutos.',
  },
];
