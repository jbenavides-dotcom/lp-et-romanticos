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
  PriceCard,
  Review,
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
  'https://wa.me/573189565617?text=Hola%2C%20quiero%20informacion%20sobre%20escapadas%20romanticas';
export const CLOUDBEDS_URL = 'https://hotels.cloudbeds.com/es/reservation/yB0fEt?ga_sess_id=885637364.1682640000&currency=cop';
export const EMAIL = 'reservations@lapalmayeltucan.com';

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Cabañas', href: '#cabanas' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Precios', href: '#precios' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Reservar', href: '#reservar' },
];

// ─── Stats Bar ────────────────────────────────────────────────────────────────
export const STATS: Stat[] = [
  {
    value: '9.5/10',
    label: 'Booking',
    sublabel: 'Calificación de huéspedes',
  },
  {
    value: '5.0/5',
    label: 'TripAdvisor',
    sublabel: '#1 en Zipacón',
  },
  {
    value: '90 min',
    label: 'Desde Bogotá',
    sublabel: 'Acceso fácil en carro',
  },
  {
    value: '10',
    label: 'Cabañas privadas',
    sublabel: 'Independientes con tina',
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

// ─── Why Cards ────────────────────────────────────────────────────────────────
export interface WhyCard {
  title: string;
  description: string;
  iconName: string;
}

export const WHY_CARDS: WhyCard[] = [
  {
    title: 'Privacidad Total',
    description: '10 cabañas independientes. Tu espacio, tu ritmo, tu silencio.',
    iconName: 'Shield',
  },
  {
    title: 'Naturaleza Inmersiva',
    description: 'Bosque de niebla, senderos entre cafetales, aves exóticas a metros de tu cabaña.',
    iconName: 'Trees',
  },
  {
    title: 'Coffee Tour Incluido',
    description: 'Recorre la finca que produjo el café récord ($303/lb). Incluido en tu estadía.',
    iconName: 'Coffee',
  },
  {
    title: 'Farm-to-Table',
    description: 'Desayuno con ingredientes de la finca, café de especialidad recién tostado cada mañana.',
    iconName: 'UtensilsCrossed',
  },
];

// ─── Cabin Features ───────────────────────────────────────────────────────────
export const CABIN_FEATURES: CabinFeature[] = [
  { text: 'Tina privada en cada cabaña' },
  { text: 'Terraza con vista al valle' },
  { text: 'Ducha al aire libre' },
  { text: 'Malla catamarán suspendida' },
  { text: 'WiFi de alta velocidad' },
  { text: 'Chimenea (cabañas select)' },
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
    icon: 'Coffee',
    title: 'Coffee Tour',
    description: 'Recorre la finca cafetera que produjo el café récord mundial ($303/lb). Aprende todo el proceso del grano al pocillo: desde la selección del cerezo maduro hasta el tueste artesanal. Incluido en todas las estadías.',
  },
  {
    icon: 'Mountain',
    title: 'Senderismo',
    description: 'Caminos entre bosque de niebla y cafetales con vistas panorámicas al valle de Zipacón. Rutas de distintas dificultades, desde paseos suaves de 30 minutos hasta caminatas de 2 horas por el bosque nativo.',
  },
  {
    icon: 'Bird',
    title: 'Avistamiento de Aves',
    description: 'Más de 150 especies documentadas en la finca, incluyendo tucanes, colibríes y tangaras. Zipacón está en un corredor de niebla privilegiado para el birdwatching. Binoculares disponibles.',
  },
  {
    icon: 'Heart',
    title: 'Yoga & Bienestar',
    description: 'Sesiones de yoga al amanecer en la terraza con vista a las montañas. También ofrecemos masajes en pareja y meditación guiada para una desconexión total del estrés de la ciudad.',
  },
  {
    icon: 'Wine',
    title: 'Degustación de Café',
    description: 'Cata profesional de microlotes de especialidad cultivados en la finca. Aprende a distinguir notas de sabor, acidez y cuerpo de la mano de nuestros catadores certificados.',
  },
  {
    icon: 'Flame',
    title: 'Fogata Nocturna',
    description: 'Termina el día alrededor de una fogata bajo un cielo estrellado sin contaminación lumínica. Chocolate caliente con cacao colombiano y marshmallows artesanales. El plan perfecto para una noche romántica.',
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

// ─── Price Cards ──────────────────────────────────────────────────────────────
export const PRICE_CARDS: PriceCard[] = [
  {
    name: 'Entre Semana',
    price: 'Desde $450.000/noche',
    description: 'Cabaña privada con tina, desayuno farm-to-table, coffee tour, WiFi, parqueadero',
    includes: [
      'Cabaña privada con tina',
      'Desayuno farm-to-table',
      'Coffee tour por la finca',
      'WiFi de alta velocidad',
      'Parqueadero privado',
    ],
  },
  {
    name: 'Fin de Semana',
    price: 'Desde $550.000/noche',
    description: 'Todo lo de entre semana + check-out flexible',
    includes: [
      'Cabaña privada con tina',
      'Desayuno farm-to-table',
      'Coffee tour por la finca',
      'WiFi de alta velocidad',
      'Parqueadero privado',
      'Check-out flexible',
    ],
    highlighted: true,
  },
  {
    name: 'Experiencia Completa',
    price: 'Desde $750.000/noche',
    description: 'Todo incluido: cabaña premium, cena romántica, masaje en pareja, cata de café',
    includes: [
      'Cabaña premium con tina',
      'Desayuno farm-to-table',
      'Coffee tour por la finca',
      'Cena romántica',
      'Masaje en pareja',
      'Cata de café de especialidad',
      'WiFi + parqueadero',
      'Check-out flexible',
    ],
  },
];

// ─── Reviews ──────────────────────────────────────────────────────────────────
export const REVIEWS: Review[] = [
  {
    text: 'Un paraíso a solo 1.5 horas de Bogotá. Las cabañas son increíbles, la tina con vista al valle es un sueño. El desayuno con productos de la finca fue lo mejor.',
    author: 'Pareja · Bogotá · 2025',
    rating: 5,
    source: 'Booking',
  },
  {
    text: 'Uno de los mejores hoteles en los que nos hemos hospedado. La atención de Lina y Diego es excepcional, se nota que aman lo que hacen.',
    author: 'Pareja · Medellín · 2025',
    rating: 5,
    source: 'TripAdvisor',
  },
  {
    text: '100 de 100. Literalmente todo es perfecto. La cabaña, el silencio, el café recién tostado cada mañana. Ya reservamos para volver.',
    author: 'Pareja · Bogotá · 2024',
    rating: 5,
    source: 'Booking',
  },
  {
    text: 'Nos encantó absolutamente todo. Acogedor, relajante, emocionante y hermoso al mismo tiempo. El coffee tour fue la cereza del pastel.',
    author: 'Pareja · Cali · 2025',
    rating: 5,
    source: 'TripAdvisor',
  },
  {
    text: 'Buscábamos una escapada romántica cerca de Bogotá y encontramos mucho más. La finca es mágica, las aves, el bosque de niebla... inolvidable.',
    author: 'Pareja · Bogotá · 2024',
    rating: 5,
    source: 'Booking',
  },
  {
    text: 'La ducha al aire libre y la malla catamarán suspendida son experiencias únicas. Despertamos con el sonido de los pájaros y el olor del café.',
    author: 'Pareja · Bucaramanga · 2025',
    rating: 5,
    source: 'Booking',
  },
];

// ─── FAQ Items ────────────────────────────────────────────────────────────────
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿El desayuno está incluido?',
    answer:
      'Sí. Todos nuestros planes incluyen desayuno farm-to-table preparado con ingredientes frescos de la finca. Café de especialidad ilimitado.',
  },
  {
    question: '¿Aceptan mascotas?',
    answer:
      'Actualmente no aceptamos mascotas para garantizar la tranquilidad de todos los huéspedes y la fauna local.',
  },
  {
    question: '¿A cuánto queda de Bogotá?',
    answer:
      'La Palma y el Tucán está a 90 minutos de Bogotá por la vía Facatativá-Anolaima. Carretera pavimentada con los últimos 10 minutos en vía destapada en buen estado.',
  },
  {
    question: '¿Cuál es la mejor época para visitar?',
    answer:
      'Cualquier época es ideal. El clima es templado todo el año (18-24°C). Para avistamiento de aves, los meses de marzo a mayo y octubre a noviembre son especialmente buenos.',
  },
  {
    question: '¿Las cabañas tienen tina privada?',
    answer:
      'Sí. Todas nuestras cabañas cuentan con tina privada, además de ducha al aire libre y terraza con vista al valle.',
  },
  {
    question: '¿Qué incluye la estadía?',
    answer:
      'Incluye cabaña privada, desayuno farm-to-table, coffee tour por la finca, WiFi, parqueadero y acceso a senderos. Experiencias adicionales como masajes y cenas románticas tienen costo extra.',
  },
  {
    question: '¿Se puede hacer coffee tour?',
    answer:
      'Sí, el coffee tour está incluido en todas las estadías. Recorrerás la finca que produjo el café récord mundial ($303/lb en subasta) y aprenderás todo el proceso del grano al pocillo.',
  },
  {
    question: '¿Tienen WiFi?',
    answer:
      'Sí, todas las cabañas y áreas comunes cuentan con WiFi de alta velocidad.',
  },
  {
    question: '¿Hay parqueadero?',
    answer:
      'Sí, parqueadero gratuito y privado dentro de la finca.',
  },
  {
    question: '¿Puedo llegar en transporte público?',
    answer:
      'Es posible pero no recomendado. Desde Bogotá hay buses a Anolaima desde el Terminal del Sur, pero los últimos kilómetros requieren taxi o transporte privado. Recomendamos vehículo propio o servicio de transporte que podemos coordinar.',
  },
];

// ─── SEO Copy Blocks ─────────────────────────────────────────────────────────
export const COPY = {
  WHY_INTRO: `La Palma y el Tucán no es un hotel convencional. Es una finca cafetera de especialidad ubicada en las montañas de Zipacón, Cundinamarca, a solo 90 minutos de Bogotá — el destino ideal para una escapada romántica cerca de Bogotá sin necesidad de vuelos ni viajes largos. Aquí, cada detalle ha sido pensado para que las parejas reconecten: desde cabañas románticas en Cundinamarca con tina privada y terraza con vista al valle, hasta un coffee tour incluido por la finca que produjo el café récord mundial de $303 por libra en el World Barista Championship. Somos el único eco-hotel cafetero de especialidad cerca de Bogotá, con calificación de 9.5/10 en Booking y 5.0/5.0 en TripAdvisor, donde el #1 en Zipacón no es solo un número — es el resultado de años dedicados al turismo regenerativo, la gastronomía farm-to-table y la hospitalidad auténtica. Nuestro compromiso con el medio ambiente es real: paneles solares generan parte de nuestra energía, el compostaje fertiliza los cultivos, y practicamos reciclaje al 100%. Lina y Diego, los fundadores, crearon este proyecto con la visión de ofrecer un hotel boutique para parejas donde cada visita devuelve más a la tierra de lo que toma. Es el lugar perfecto para celebrar aniversarios, cumpleaños especiales o una luna de miel inolvidable en plena naturaleza colombiana.`,

  CABIN_DESCRIPTION: `Nuestras 10 cabañas románticas en Cundinamarca están construidas con madera de la región y techos verdes que se integran al paisaje del bosque de niebla, diseñadas para ofrecer privacidad absoluta. Cada una cuenta con tina privada con agua caliente — imagina bañarte bajo las estrellas mientras escuchas el sonido del agua y los grillos nocturnos — terraza con vista panorámica al valle de Zipacón donde los amaneceres pintan el cielo de naranja y rosa, ducha al aire libre rodeada de naturaleza, y malla catamarán suspendida entre los árboles para descansar con la brisa del bosque de niebla. Las cabañas select además incluyen chimenea para las noches frescas de montaña. No compartirás espacios con otros huéspedes — cada cabaña es completamente independiente, con su propio sendero de acceso rodeado de cafetales y árboles nativos. Al despertar, el canto de más de 150 especies de aves reemplaza cualquier alarma. Cada cabaña tiene nombre propio inspirado en variedades de café de la finca, y los materiales naturales crean una atmósfera cálida que invita a la desconexión total. El silencio aquí no es un lujo, es la norma — una noche romántica en naturaleza como no encontrarás en ningún otro lugar cerca de Bogotá.`,

  EXPERIENCE_INTRO: `En La Palma y el Tucán, la experiencia va más allá del hospedaje. Cada actividad está diseñada para que vivan momentos que no encontrarán en ningún otro plan romántico fuera de Bogotá. Tenemos opciones para parejas aventureras que quieren explorar senderos y avistar aves exóticas, y también para quienes buscan relajarse con yoga al amanecer y masajes en pareja. Desde recorrer los cafetales donde nace uno de los mejores cafés del mundo — más de 150 especies de aves habitan en la finca y el café que se tuesta aquí ha ganado récords mundiales en subastas internacionales — hasta terminar el día junto a una fogata bajo un cielo lleno de estrellas sin contaminación lumínica, aquí cada hora se convierte en un recuerdo. Nuestras experiencias son opcionales excepto el coffee tour, que está incluido en todas las estadías porque creemos que conocer el origen del café que toman cada mañana es parte esencial de la experiencia en esta finca cafetera de Zipacón.`,

  PRICE_INTRO: `Creemos en la transparencia. No hay costos ocultos ni sorpresas al momento del check-out. Todos nuestros planes incluyen lo esencial para una escapada romántica perfecta: cabaña privada con tina, desayuno farm-to-table preparado con ingredientes de nuestra propia finca, coffee tour guiado, WiFi de alta velocidad y parqueadero privado. A diferencia de la competencia que cobra el coffee tour por separado, aquí está incluido en todas las estadías. La diferencia entre planes está en los extras que hacen la experiencia aún más especial. Ofrecemos check-in flexible para que lleguen a su ritmo, y cada plan se puede personalizar con extras como cena romántica, masaje en pareja o cata de café de especialidad. Nuestra política de cancelación es amigable: cancelación gratuita hasta 48 horas antes de la llegada. Aceptamos transferencia bancaria, tarjeta de crédito y pagos por PSE.`,

  LOCATION_DESCRIPTION: `Llegar a La Palma y el Tucán es parte de la experiencia. A medida que dejas atrás el ruido de Bogotá por la vía Facatativá-Anolaima, el paisaje se transforma: los edificios dan paso a montañas verdes, el aire se vuelve fresco y perfumado, y los cafetales comienzan a aparecer a ambos lados de la carretera. La finca se encuentra a aproximadamente 2,000 metros sobre el nivel del mar, en un corredor de bosque de niebla privilegiado por su biodiversidad — hogar de tucanes, colibríes, tangaras y más de 150 especies de aves documentadas. El clima es templado todo el año, con temperaturas entre 18°C y 24°C, perfecto para disfrutar al aire libre sin el calor agobiante ni el frío extremo. Los últimos 10 minutos son por una vía destapada en buen estado que serpentea entre fincas y bosque de niebla hasta llegar a nuestras puertas. Zipacón es un pueblo tranquilo con encanto colonial, lejos del turismo masificado. El trayecto total desde Bogotá toma aproximadamente 90 minutos, lo suficiente para desconectarse sin necesidad de un vuelo o un viaje de horas. Tip: lleva ropa cómoda, una chaqueta ligera para las noches frescas de montaña y zapatos cerrados para los senderos.`,

  CTA_EMOTIONAL: `Los momentos importantes no se posponen. Esa escapada que llevan planeando, ese aniversario que merece algo especial, ese fin de semana que necesitan para reconectar — este es el lugar. En La Palma y el Tucán, las parejas encuentran algo que no se consigue en la ciudad: tiempo real juntos, sin distracciones, rodeados de bosque de niebla y con el mejor café del mundo en la mano. Nuestros huéspedes lo confirman: "Un paraíso a solo 1.5 horas de Bogotá" (9.5/10 en Booking). Solo tenemos 10 cabañas románticas, y los fines de semana suelen llenarse con semanas de anticipación. La reserva es simple: escríbenos por WhatsApp, confirma tus fechas y listo — en menos de 2 minutos aseguras tu plan romántico fuera de Bogotá. Aceptamos transferencia bancaria y tarjeta de crédito. No dejes para después lo que tu relación necesita hoy.`,

  OUR_STORY: `Lina y Diego transformaron una finca cafetera tradicional en un eco-hotel de clase mundial en las montañas de Zipacón, Cundinamarca. Lo que empezó como un sueño familiar se convirtió en un referente del turismo regenerativo en Colombia. El café de La Palma y el Tucán ha roto récords internacionales: $303 por libra en subasta del World Barista Championship, posicionándolo entre los cafés más valiosos del planeta. Cada taza que se sirve en el desayuno viene de los mismos cafetales que rodean las cabañas — no hay intermediarios, no hay marketing vacío, es café de finca a tu mesa en metros, no kilómetros. La filosofía es turismo regenerativo: devolver más a la tierra de lo que se toma. Paneles solares generan parte de la energía, el compostaje fertiliza los cultivos orgánicos, y cada empleado es de la comunidad local de Zipacón, fortaleciendo la economía rural. No es greenwashing — es un compromiso real que se siente en cada detalle, desde la construcción con madera de la región hasta el menú farm-to-table que cambia según la cosecha. Cuando vienes a La Palma y el Tucán, no solo disfrutas una escapada romántica cerca de Bogotá: participas en un modelo de hospitalidad que demuestra que el lujo y la sostenibilidad pueden ir de la mano.`,
} as const;

// ─── Differentiators ──────────────────────────────────────────────────────────
export const DIFFERENTIATORS: string[] = [
  'Único eco-hotel cafetero de especialidad cerca de Bogotá',
  'Coffee Tour incluido (la competencia cobra aparte)',
  '5.0/5.0 TripAdvisor — #1 en Zipacón',
  'Café récord $303/lb (World Barista Championship)',
  'Turismo regenerativo (paneles solares, compostaje, reciclaje 100%)',
  '10 cabañas independientes con tina privada',
];
