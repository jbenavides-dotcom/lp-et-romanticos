import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Lang = 'es' | 'en';

interface I18nContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

const translations: Record<Lang, Record<string, string>> = {
  es: {
    // ── Navbar ──────────────────────────────────────────────────────────────
    'nav.cta': 'Ver disponibilidad',
    'nav.aria.open': 'Abrir menú',
    'nav.aria.close': 'Cerrar menú',
    'nav.cabanas': 'Cabañas',
    'nav.experiencias': 'Experiencia',
    'nav.faq': 'Preguntas',
    'nav.reservar': 'Reservar',

    // ── Hero ────────────────────────────────────────────────────────────────
    'hero.badge': 'Finca Cafetera · Zipacón, Cundinamarca',
    'hero.h1': 'Tu Escapada Romántica a',
    'hero.h1.highlight': '90 Minutos de Bogotá',
    'hero.subtitle': 'Cabañas privadas en bosque de niebla · Tina · Coffee Tour incluido · Booking 9.5/10',
    'hero.chip.cabanas': 'Cabañas privadas',
    'hero.chip.tina': 'Tina privada',
    'hero.chip.coffeetour': 'Coffee Tour incluido',
    'hero.chip.booking': 'Booking 9.5/10',
    'hero.cta.whatsapp': 'Reservar por WhatsApp',
    'hero.cta.precios': 'Ver planes y precios',
    'hero.scroll': 'Desplazarse hacia abajo',

    // ── FloatingCTA ─────────────────────────────────────────────────────────
    'floating.aria': 'Contáctanos',

    // ── StatsBar ────────────────────────────────────────────────────────────
    'stats.aria': 'Estadísticas clave',
    'stats.booking.label': 'Booking',
    'stats.booking.sublabel': 'Calificación de huéspedes',
    'stats.tripadvisor.label': 'TripAdvisor',
    'stats.tripadvisor.sublabel': '#1 en Zipacón',
    'stats.distance.label': 'Desde Bogotá',
    'stats.distance.sublabel': 'Acceso fácil en carro',
    'stats.breakfast.label': 'Desayuno incluido',
    'stats.breakfast.sublabel': 'Artesanal cada mañana',

    // ── SearchSection ───────────────────────────────────────────────────────
    'search.badge': 'Un refugio para desconectarse juntos',
    'search.h2': 'Si estás buscando esto, estás en el lugar correcto.',
    'search.body': 'Nuestras cabañas privadas, rodeadas de cafetales y bosque de niebla, están diseñadas para ofrecer intimidad, calma y comodidad en su forma más auténtica.',
    'search.poetic.1': 'Despertar con el sonido de los pájaros.',
    'search.poetic.2': 'Disfrutar de un atardecer colorido.',
    'search.poetic.3': 'Caminar entre montañas a 1.800 metros de altura.',
    'search.poetic.4': 'Dormir profundamente en medio del silencio.',
    'search.closing': 'Eso es lo que define una escapada aquí.',
    'search.photo.bosque': 'Bosque de niebla',
    'search.photo.sunset': 'Atardecer desde la cabaña',
    'search.photo.exterior': 'Exterior de la cabaña',
    'search.photo.cabana': 'Interior de la cabaña',

    // ── CabinSection ────────────────────────────────────────────────────────
    'cabin.badge': 'Sobre nuestras cabañas',
    'cabin.h2': 'Cada cabaña es independiente y está construida en madera natural, en armonía con el entorno',
    'cabin.body': 'Cuentan con baño privado, terraza y una atmósfera cálida y serena que invita al descanso profundo.',
    'cabin.tagline': 'El lujo aquí no es exceso.\nEs espacio, silencio y naturaleza.',
    'cabin.features.title': 'Lo que incluye tu estadía:',
    'cabin.feat.1': 'Cabaña privada en medio del cafetal',
    'cabin.feat.2': 'Desayuno artesanal preparado con productos frescos',
    'cabin.feat.3': 'Coffee Tour guiado por nuestra finca',
    'cabin.feat.4': 'Degustación de cafés de especialidad',
    'cabin.feat.5': 'Senderos naturales en bosque de niebla',
    'cabin.feat.6': 'Espacios comunes íntimos y rodeados de naturaleza',
    'cabin.perfectfor.title': 'Ideal para:',
    'cabin.perfectfor.1': 'Aniversarios',
    'cabin.perfectfor.2': 'Cumpleaños especiales',
    'cabin.perfectfor.3': 'Escapadas de fin de semana',
    'cabin.perfectfor.4': 'Momentos que merecen atención y tiempo',
    'cabin.cta.availability': 'Ver disponibilidad',
    'cabin.cta.book': 'Reservar ahora',
    'cabin.img.tina': 'Interior cabaña romántica',
    'cabin.img.cafetales': 'Cafetales de La Palma & El Tucán',
    'cabin.img.bosque': 'Caminata por el bosque de niebla',
    'cabin.img.degustacion': 'Degustación de cafés de especialidad',

    // ── ExperiencesSection ──────────────────────────────────────────────────
    'exp.badge': 'Todo incluido',
    'exp.h2': 'No es solo hospedaje. Es toda una experiencia.',
    'exp.subtitle': 'Tu estadía incluye:',
    'exp.overlay.badge': 'Hotel boutique en una finca de clase mundial',
    'exp.overlay.h3': 'La Palma & El Tucán no es un hotel tradicional.',
    'exp.overlay.body1': 'Es un proyecto de caficultura y humano que ha puesto el nombre de Colombia en las mejores tazas del mundo.',
    'exp.overlay.body2': 'Hospedarte aquí es vivir esa historia desde adentro.',
    'exp.img.exterior': 'Proceso de beneficio del café en La Palma & El Tucán',
    'exp.title.1': 'Desayuno artesanal incluido',
    'exp.desc.1': 'Preparado con productos frescos de la finca cada mañana.',
    'exp.title.2': 'Coffee Tour guiado',
    'exp.desc.2': 'Conoce el proceso detrás de uno de los mejores cafés del mundo.',
    'exp.title.3': 'Degustación de cafés de especialidad',
    'exp.desc.3': 'Prueba nuestras variedades Gesha, Sidra y más.',
    'exp.title.4': 'Senderos naturales',
    'exp.desc.4': 'Caminatas por el bosque de niebla a 1.800 metros sobre el nivel del mar.',
    'exp.title.5': 'Pistas de mountain bike',
    'exp.desc.5': 'Recorre la finca en bicicleta entre los cafetales.',
    'exp.title.6': 'Silencio y desconexión total',
    'exp.desc.6': 'Sin ruido, sin ciudad. Solo naturaleza, tu pareja y tú.',

    // ── ReviewsSection ──────────────────────────────────────────────────────
    'reviews.badge': 'Lo que dicen nuestros huéspedes',
    'reviews.h2': 'Experiencias reales',
    'reviews.prev': 'Reseñas anteriores',
    'reviews.next': 'Siguientes reseñas',
    'reviews.page': 'Página',
    'reviews.text.1': 'Una experiencia que no esperaba encontrar tan cerca de la ciudad. Las cabañas son acogedoras, el silencio es real y el Coffee Tour fue lo mejor del viaje. Volvimos al mes siguiente.',
    'reviews.author.1': 'Visitante desde Bogotá',
    'reviews.text.2': 'Llegamos por nuestro aniversario y fue mucho mejor de lo que imaginamos. Desayuno delicioso, cabaña íntima, atardecer espectacular. El tipo de lugar al que uno quiere volver.',
    'reviews.author.2': 'Pareja de aniversario',
    'reviews.text.3': 'Sabía que La Palma & El Tucán era conocida por el café, pero no imaginé que el hospedaje fuera tan especial. La combinación de naturaleza, arquitectura en madera y el café de especialidad lo hace único en Colombia.',
    'reviews.author.3': 'Viajero de Medellín',
    'reviews.text.4': 'Ya es la tercera vez que venimos. El bosque de niebla, el silencio y el desayuno artesanal son razones suficientes para repetir. Un refugio real a 90 minutos de Bogotá.',
    'reviews.author.4': 'Huésped recurrente',
    'reviews.text.5': 'Un paraíso a solo 1.5 horas de Bogotá. Las cabañas son increíbles, la tina con vista al valle es un sueño. El desayuno con productos de la finca fue lo mejor.',
    'reviews.author.5': 'Pareja · Bogotá',
    'reviews.text.6': 'Nos encantó absolutamente todo. Acogedor, relajante, emocionante y hermoso al mismo tiempo. El coffee tour fue la cereza del pastel.',
    'reviews.author.6': 'Pareja · Cali',

    // ── DistanceSection ─────────────────────────────────────────────────────
    'distance.badge': 'Cerca y privado',
    'distance.h2': 'Cerca de Bogotá. Lejos del ruido.',
    'distance.col1.h3': '¿A qué distancia estamos?',
    'distance.route.label': 'Ruta sugerida',
    'distance.route.text': 'Bogotá → Facatativá → Zipacón. Sin vías difíciles ni 4x4.',
    'distance.col2.h3': '¿Es privado?',
    'distance.comfort.label': 'Confort garantizado',
    'distance.comfort.text': 'Toda la comodidad de un hotel boutique, en medio de la naturaleza. Sin aglomeraciones, sin ruido.',
    'distance.pt.1': '90 minutos en carro',
    'distance.pt.2': 'Acceso fácil',
    'distance.pt.3': 'Clima fresco de montaña',
    'distance.pt.4': 'Privacidad real',
    'privacy.pt.1': 'Un cambio de paisaje sin viajes largos.',
    'privacy.pt.2': 'Una pausa verdadera sin renunciar al confort.',
    'privacy.pt.3': 'Cada cabaña es independiente, construida en madera natural.',
    'privacy.pt.4': 'Espacios íntimos diseñados para el descanso y el encuentro.',

    // ── UrgencySection ──────────────────────────────────────────────────────
    'urgency.h2.pre': 'Los fines de semana',
    'urgency.h2.highlight': 'suelen llenarse con anticipación',
    'urgency.body': 'Si estás planeando una pausa en pareja, te recomendamos revisar disponibilidad con tiempo. Reserva directamente con nosotros y vive la experiencia completa.',
    'urgency.badge': 'Disponibilidad limitada este fin de semana',
    'urgency.cta.availability': 'Ver disponibilidad ahora',
    'urgency.cta.info': 'Más información',

    // ── FaqSection ──────────────────────────────────────────────────────────
    'faq.badge': 'Resolvemos tus dudas',
    'faq.h2': 'Preguntas frecuentes',
    'faq.q.1': '¿Cuál es el mejor plan romántico cerca de Bogotá?',
    'faq.a.1': 'La Palma & El Tucán, en Zipacón, Cundinamarca, es una de las mejores opciones. A solo 90 minutos en carro, ofrece cabañas privadas en una finca cafetera #14 del mundo según Taste Atlas 2025. Incluye desayuno artesanal, Coffee Tour guiado y senderos en bosque de niebla a 1.800 metros de altitud.',
    'faq.q.2': '¿Qué incluye la estadía?',
    'faq.a.2': 'Cabaña privada con baño privado y terraza, desayuno artesanal con productos frescos de la finca, Coffee Tour guiado, degustación de cafés de especialidad (Gesha, Sidra, Mokka) y acceso a senderos en bosque de niebla.',
    'faq.q.3': '¿A cuánto está desde Bogotá?',
    'faq.a.3': 'A 90 minutos en carro. Ruta sencilla: Bogotá → Facatativá → Zipacón. Sin vías difíciles ni necesidad de 4x4.',
    'faq.q.4': '¿Por qué La Palma & El Tucán es reconocida mundialmente?',
    'faq.a.4': 'Está clasificada #14 en el ranking mundial Taste Atlas 2025 de los mejores cafés del mundo. Cultiva variedades como Gesha, Sidra y Mokka. Su barista Sebastián Villamizar ganó el II Campeonato Colombiano de Cafés Filtrados en 2017. Su programa "Vecinos y Cultivos" apoya a pequeños productores locales de Cundinamarca.',
    'faq.q.5': '¿Las cabañas tienen baño privado?',
    'faq.a.5': 'Sí. Todas las cabañas cuentan con baño privado y están diseñadas para ofrecer privacidad y comodidad en medio de la naturaleza. Son independientes, en madera natural, con terraza y vistas al cafetal o bosque de niebla.',
    'faq.q.6': '¿Cómo hacer una reserva?',
    'faq.a.6': 'Puedes verificar disponibilidad en nuestra plataforma de reservas en línea o escribirnos por WhatsApp. El equipo responde en minutos y confirma al instante.',

    // ── CtaFinal ────────────────────────────────────────────────────────────
    'cta.badge': 'Disponibilidad limitada',
    'cta.h2': 'Reserva en 2 minutos',
    'cta.subtitle': 'Así de sencillo es empezar tu escapada perfecta.',
    'cta.step.1': 'Elige tu fecha',
    'cta.step.2': 'Confirma disponibilidad',
    'cta.step.3': 'Prepárate para desconectarte',
    'cta.btn.availability': 'Ver disponibilidad',
    'cta.btn.email': 'Escribir por correo',
    'cta.trust': 'Respuesta inmediata · Hablamos español · Confirmación al instante',

    // ── Footer ──────────────────────────────────────────────────────────────
    'footer.brand.desc': 'Finca cafetera boutique a 90 minutos de Bogotá. Cabañas privadas con tina, desayuno y Coffee Tour incluido.',
    'footer.nav.title': 'Navegación',
    'footer.contact.title': 'Contacto',
    'footer.location': 'Zipacón, Cundinamarca, Colombia',
    'footer.copyright': 'La Palma & El Tucán. Todos los derechos reservados.',
    'footer.seo': 'Cabañas románticas cerca a Bogotá · Finca cafetera Zipacón',
  },

  en: {
    // ── Navbar ──────────────────────────────────────────────────────────────
    'nav.cta': 'Check availability',
    'nav.aria.open': 'Open menu',
    'nav.aria.close': 'Close menu',
    'nav.cabanas': 'Cabins',
    'nav.experiencias': 'Experience',
    'nav.faq': 'FAQ',
    'nav.reservar': 'Book',

    // ── Hero ────────────────────────────────────────────────────────────────
    'hero.badge': 'Coffee Farm · Zipacón, Cundinamarca',
    'hero.h1': 'Your Romantic Getaway',
    'hero.h1.highlight': '90 Minutes from Bogotá',
    'hero.subtitle': 'Private cabins in cloud forest · Hot tub · Coffee Tour included · Booking 9.5/10',
    'hero.chip.cabanas': 'Private cabins',
    'hero.chip.tina': 'Private hot tub',
    'hero.chip.coffeetour': 'Coffee Tour included',
    'hero.chip.booking': 'Booking 9.5/10',
    'hero.cta.whatsapp': 'Book on WhatsApp',
    'hero.cta.precios': 'See plans & prices',
    'hero.scroll': 'Scroll down',

    // ── FloatingCTA ─────────────────────────────────────────────────────────
    'floating.aria': 'Contact us',

    // ── StatsBar ────────────────────────────────────────────────────────────
    'stats.aria': 'Key statistics',
    'stats.booking.label': 'Booking',
    'stats.booking.sublabel': 'Guest rating',
    'stats.tripadvisor.label': 'TripAdvisor',
    'stats.tripadvisor.sublabel': '#1 in Zipacón',
    'stats.distance.label': 'From Bogotá',
    'stats.distance.sublabel': 'Easy car access',
    'stats.breakfast.label': 'Breakfast included',
    'stats.breakfast.sublabel': 'Artisanal every morning',

    // ── SearchSection ───────────────────────────────────────────────────────
    'search.badge': 'A retreat to disconnect together',
    'search.h2': "If this is what you're looking for, you're in the right place.",
    'search.body': 'Our private cabins, surrounded by coffee plants and cloud forest, are designed to offer intimacy, calm and authentic comfort.',
    'search.poetic.1': 'Wake up to the sound of birds.',
    'search.poetic.2': 'Enjoy a colorful sunset.',
    'search.poetic.3': 'Walk among mountains at 1,800 meters above sea level.',
    'search.poetic.4': 'Sleep deeply in the middle of silence.',
    'search.closing': "That's what defines a getaway here.",
    'search.photo.bosque': 'Cloud forest',
    'search.photo.sunset': 'Sunset from the cabin',
    'search.photo.exterior': 'Cabin exterior',
    'search.photo.cabana': 'Cabin interior',

    // ── CabinSection ────────────────────────────────────────────────────────
    'cabin.badge': 'About our cabins',
    'cabin.h2': 'Each cabin is independent and built in natural wood, in harmony with the surroundings',
    'cabin.body': 'They feature a private bathroom, terrace and a warm, serene atmosphere that invites deep rest.',
    'cabin.tagline': "Luxury here isn't excess.\nIt's space, silence and nature.",
    'cabin.features.title': "What's included in your stay:",
    'cabin.feat.1': 'Private cabin in the middle of the coffee plantation',
    'cabin.feat.2': 'Artisanal breakfast made with fresh farm products',
    'cabin.feat.3': 'Guided Coffee Tour through our farm',
    'cabin.feat.4': 'Specialty coffee tasting',
    'cabin.feat.5': 'Nature trails in the cloud forest',
    'cabin.feat.6': 'Intimate common areas surrounded by nature',
    'cabin.perfectfor.title': 'Perfect for:',
    'cabin.perfectfor.1': 'Anniversaries',
    'cabin.perfectfor.2': 'Special birthdays',
    'cabin.perfectfor.3': 'Weekend getaways',
    'cabin.perfectfor.4': 'Moments that deserve attention and time',
    'cabin.cta.availability': 'Check availability',
    'cabin.cta.book': 'Book now',
    'cabin.img.tina': 'Romantic cabin interior',
    'cabin.img.cafetales': 'Coffee plants at La Palma & El Tucán',
    'cabin.img.bosque': 'Walk through the cloud forest',
    'cabin.img.degustacion': 'Specialty coffee tasting',

    // ── ExperiencesSection ──────────────────────────────────────────────────
    'exp.badge': 'All inclusive',
    'exp.h2': "It's not just accommodation. It's a full experience.",
    'exp.subtitle': 'Your stay includes:',
    'exp.overlay.badge': 'Boutique hotel on a world-class farm',
    'exp.overlay.h3': 'La Palma & El Tucán is not a traditional hotel.',
    'exp.overlay.body1': "It's a coffee and human project that has put Colombia's name in the world's best cups.",
    'exp.overlay.body2': 'Staying here means living that story from the inside.',
    'exp.img.exterior': 'Coffee processing at La Palma & El Tucán',
    'exp.title.1': 'Artisanal breakfast included',
    'exp.desc.1': 'Prepared with fresh farm products every morning.',
    'exp.title.2': 'Guided Coffee Tour',
    'exp.desc.2': "Discover the process behind one of the world's best coffees.",
    'exp.title.3': 'Specialty coffee tasting',
    'exp.desc.3': 'Taste our Gesha, Sidra and more varieties.',
    'exp.title.4': 'Nature trails',
    'exp.desc.4': 'Hikes through the cloud forest at 1,800 meters above sea level.',
    'exp.title.5': 'Mountain bike trails',
    'exp.desc.5': 'Ride through the farm among the coffee plants.',
    'exp.title.6': 'Silence and total disconnection',
    'exp.desc.6': 'No noise, no city. Just nature, your partner and you.',

    // ── ReviewsSection ──────────────────────────────────────────────────────
    'reviews.badge': 'What our guests say',
    'reviews.h2': 'Real experiences',
    'reviews.prev': 'Previous reviews',
    'reviews.next': 'Next reviews',
    'reviews.page': 'Page',
    'reviews.text.1': 'An experience I didn\'t expect to find so close to the city. The cabins are cozy, the silence is real and the Coffee Tour was the best part of the trip. We came back the following month.',
    'reviews.author.1': 'Visitor from Bogotá',
    'reviews.text.2': 'We came for our anniversary and it was much better than we imagined. Delicious breakfast, intimate cabin, spectacular sunset. The kind of place you want to come back to.',
    'reviews.author.2': 'Anniversary couple',
    'reviews.text.3': 'I knew La Palma & El Tucán was famous for coffee, but I didn\'t expect the accommodation to be so special. The combination of nature, wood architecture and specialty coffee makes it unique in Colombia.',
    'reviews.author.3': 'Traveler from Medellín',
    'reviews.text.4': 'This is our third time visiting. The cloud forest, the silence and the artisanal breakfast are reason enough to return. A real refuge 90 minutes from Bogotá.',
    'reviews.author.4': 'Returning guest',
    'reviews.text.5': 'A paradise just 1.5 hours from Bogotá. The cabins are incredible, the hot tub with valley views is a dream. The breakfast with farm products was the highlight.',
    'reviews.author.5': 'Couple · Bogotá',
    'reviews.text.6': 'We absolutely loved everything. Cozy, relaxing, exciting and beautiful all at once. The coffee tour was the cherry on top.',
    'reviews.author.6': 'Couple · Cali',

    // ── DistanceSection ─────────────────────────────────────────────────────
    'distance.badge': 'Close and private',
    'distance.h2': 'Close to Bogotá. Far from the noise.',
    'distance.col1.h3': 'How far away are we?',
    'distance.route.label': 'Suggested route',
    'distance.route.text': 'Bogotá → Facatativá → Zipacón. No difficult roads or 4x4 needed.',
    'distance.col2.h3': 'Is it private?',
    'distance.comfort.label': 'Comfort guaranteed',
    'distance.comfort.text': 'All the comfort of a boutique hotel, in the middle of nature. No crowds, no noise.',
    'distance.pt.1': '90 minutes by car',
    'distance.pt.2': 'Easy access',
    'distance.pt.3': 'Cool mountain climate',
    'distance.pt.4': 'Real privacy',
    'privacy.pt.1': 'A change of scenery without long trips.',
    'privacy.pt.2': 'A true pause without giving up comfort.',
    'privacy.pt.3': 'Each cabin is independent, built in natural wood.',
    'privacy.pt.4': 'Intimate spaces designed for rest and connection.',

    // ── UrgencySection ──────────────────────────────────────────────────────
    'urgency.h2.pre': 'Weekends',
    'urgency.h2.highlight': 'tend to fill up in advance',
    'urgency.body': "If you're planning a couple's retreat, we recommend checking availability ahead of time. Book directly with us and enjoy the full experience.",
    'urgency.badge': 'Limited availability this weekend',
    'urgency.cta.availability': 'Check availability now',
    'urgency.cta.info': 'More information',

    // ── FaqSection ──────────────────────────────────────────────────────────
    'faq.badge': 'We answer your questions',
    'faq.h2': 'Frequently asked questions',
    'faq.q.1': 'What is the best romantic getaway near Bogotá?',
    'faq.a.1': 'La Palma & El Tucán, in Zipacón, Cundinamarca, is one of the best options. Just 90 minutes by car, it offers private cabins on a coffee farm ranked #14 in the world according to Taste Atlas 2025. Includes artisanal breakfast, guided Coffee Tour and trails in cloud forest at 1,800 meters altitude.',
    'faq.q.2': 'What does the stay include?',
    'faq.a.2': 'Private cabin with private bathroom and terrace, artisanal breakfast with fresh farm products, guided Coffee Tour, specialty coffee tasting (Gesha, Sidra, Mokka) and access to cloud forest trails.',
    'faq.q.3': 'How far is it from Bogotá?',
    'faq.a.3': '90 minutes by car. Simple route: Bogotá → Facatativá → Zipacón. No difficult roads or 4x4 required.',
    'faq.q.4': 'Why is La Palma & El Tucán world-renowned?',
    'faq.a.4': 'It is ranked #14 in the Taste Atlas 2025 world ranking of the best coffees. It grows varieties such as Gesha, Sidra and Mokka. Barista Sebastián Villamizar won the II Colombian Filtered Coffee Championship in 2017. Its "Vecinos y Cultivos" program supports small local producers in Cundinamarca.',
    'faq.q.5': 'Do the cabins have a private bathroom?',
    'faq.a.5': 'Yes. All cabins have a private bathroom and are designed to offer privacy and comfort in the middle of nature. They are independent, in natural wood, with a terrace and views of the coffee plantation or cloud forest.',
    'faq.q.6': 'How do I make a reservation?',
    'faq.a.6': 'You can check availability on our online booking platform or contact us via WhatsApp. The team responds in minutes and confirms instantly.',

    // ── CtaFinal ────────────────────────────────────────────────────────────
    'cta.badge': 'Limited availability',
    'cta.h2': 'Book in 2 minutes',
    'cta.subtitle': "That's how easy it is to start your perfect getaway.",
    'cta.step.1': 'Choose your dates',
    'cta.step.2': 'Confirm availability',
    'cta.step.3': 'Get ready to disconnect',
    'cta.btn.availability': 'Check availability',
    'cta.btn.email': 'Send us an email',
    'cta.trust': 'Instant response · English spoken · Instant confirmation',

    // ── Footer ──────────────────────────────────────────────────────────────
    'footer.brand.desc': 'Boutique coffee farm 90 minutes from Bogotá. Private cabins with hot tub, breakfast and Coffee Tour included.',
    'footer.nav.title': 'Navigation',
    'footer.contact.title': 'Contact',
    'footer.location': 'Zipacón, Cundinamarca, Colombia',
    'footer.copyright': 'La Palma & El Tucán. All rights reserved.',
    'footer.seo': 'Romantic cabins near Bogotá · Coffee farm Zipacón',
  },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lpet-romanticos-lang') as Lang) || 'es';
    }
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('lpet-romanticos-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  const t = (key: string): string =>
    translations[lang][key] || translations['es'][key] || key;

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}
