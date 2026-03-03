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
export const CLOUDBEDS_URL = 'https://hotels.cloudbeds.com/es/reservation/msPdXG';
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
  { text: 'Baño privado con tina' },
  { text: 'Vista increíble al bosque de niebla' },
  { text: 'Diseño en madera natural' },
  { text: 'Ambiente cálido y elegante' },
  { text: 'Terraza o balcón privado' },
  { text: 'Ropa de cama de lujo' },
];

export const PERFECT_FOR: PerfectForItem[] = [
  { emoji: '💑', label: 'Aniversarios' },
  { emoji: '💍', label: 'Propuestas de matrimonio' },
  { emoji: '🎂', label: 'Cumpleaños especiales' },
  { emoji: '🌿', label: 'Desconexión total' },
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
  { icon: '📍', text: '90 minutos desde Bogotá' },
  { icon: '🚗', text: 'Acceso fácil en carro' },
  { icon: '🌤️', text: 'Altura ideal — clima fresco de montaña' },
  { icon: '📶', text: 'Desconéctate del mundo, no del confort' },
];

export const PRIVACY_POINTS: PrivacyPoint[] = [
  { text: 'Sí. Somos un hotel boutique con pocas cabañas.' },
  { text: 'No es un hotel masivo.' },
  { text: 'Cada cabaña es independiente, rodeada de naturaleza.' },
  { text: 'El espacio público es íntimo, cuidadosamente diseñado para enmarcar los mejores encuentros.' },
];

// ─── FAQ Items ────────────────────────────────────────────────────────────────
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿Todas las cabañas tienen tina?',
    answer:
      'Sí. Todas nuestras cabañas cuentan con baño privado con tina. Es uno de nuestros sellos más apreciados.',
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
