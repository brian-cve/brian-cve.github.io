// Todo el texto del sitio vive aquí. Después de editar: node src/build.mjs
// Cada texto es { es, en }. Los proyectos se muestran en el orden de este archivo.

export const site = {
  url: 'https://brian-cve.github.io',
  name: 'Brian Rodríguez',
  email: 'brian.r0397@gmail.com',
  whatsapp: '573042826056',
  social: {
    LinkedIn: 'https://www.linkedin.com/in/brian-rodriguez-game-designer/',
    GitHub: 'https://github.com/brian-cve',
    Behance: 'https://www.behance.net/brian_cve',
    'itch.io': 'https://soybri.itch.io/',
    Instagram: 'https://instagram.com/soy_elbri',
  },
};

export const ui = {
  title: {
    es: 'Brian Rodríguez, diseñador y desarrollador de videojuegos, webs y marcas',
    en: 'Brian Rodríguez, designer and developer of games, websites and brands',
  },
  description: {
    es: 'Portafolio de Brian Rodríguez (Medellín, Colombia): videojuegos en Unity publicados en Steam, productos web, identidad de marca, ilustración e integración de IA.',
    en: 'Portfolio of Brian Rodríguez (Medellín, Colombia): Unity games published on Steam, web products, brand identity, illustration and AI integration.',
  },
  skip: { es: 'Ir al contenido', en: 'Skip to content' },
  nav: {
    juegos: { es: 'Juegos', en: 'Games' },
    web: { es: 'Web', en: 'Web' },
    marca: { es: 'Marca', en: 'Brand' },
    ia: { es: 'IA', en: 'AI' },
    sobre: { es: 'Sobre mí', en: 'About' },
  },
  menu: { es: 'Menú', en: 'Menu' },
  contactCta: { es: 'Contactar', en: 'Contact' },
  langName: { es: 'English', en: 'Español' },
  makes: { es: 'Brian Rodríguez crea', en: 'Brian Rodríguez creates' },
  pause: { es: 'Pausar el cambio automático', en: 'Pause automatic change' },
  resume: { es: 'Reanudar el cambio automático', en: 'Resume automatic change' },
  menuLabel: { es: 'Elige qué quieres ver', en: 'Choose what to see' },
  viewCase: { es: 'Ver el proyecto', en: 'View project' },
  visit: { es: 'Visitar', en: 'Visit' },
  back: { es: 'Todos los proyectos', en: 'All projects' },
  next: { es: 'Siguiente proyecto', en: 'Next project' },
  what: { es: 'De qué se trata', en: 'What it is' },
  did: { es: 'Lo que hice', en: 'What I did' },
  role: { es: 'Rol', en: 'Role' },
  status: { es: 'Estado', en: 'Status' },
  tools: { es: 'Herramientas', en: 'Tools' },
  team: { es: 'Equipo', en: 'Team' },
};

export const hero = [
  {
    id: 'juegos', animal: 'caballo', bg: '#5e1b5d',
    word: { es: 'Videojuegos', en: 'Games' },
    text: {
      es: 'Con Goat Studios publiqué The Dinner en Steam, en once idiomas. El 4 de diciembre de 2026 llega It’s Not a Bomb.',
      en: 'With Goat Studios I shipped The Dinner on Steam in eleven languages. It’s Not a Bomb arrives on December 4, 2026.',
    },
    cta: { es: 'Ver los juegos', en: 'See the games' },
  },
  {
    id: 'web', animal: 'ave', bg: '#00555e',
    word: { es: 'Webs', en: 'Websites' },
    text: {
      es: 'Desde la web de un catador de café hasta una plataforma pública con postulaciones, visitas, firmas y evaluación de jurados.',
      en: 'From a coffee taster’s site to a public platform with applications, field visits, signatures and jury scoring.',
    },
    cta: { es: 'Ver los proyectos web', en: 'See the web projects' },
  },
  {
    id: 'marca', animal: 'elefante', bg: '#1c2a86',
    word: { es: 'Marcas', en: 'Brands' },
    text: {
      es: 'Empaques, ilustración, cartas, campañas y todo lo que hace que una marca se reconozca de un vistazo.',
      en: 'Packaging, illustration, menus, campaigns and everything that makes a brand recognizable at a glance.',
    },
    cta: { es: 'Ver marcas e ilustración', en: 'See brands and illustration' },
  },
];

export const sections = {
  juegos: {
    h: { es: 'Cuatro juegos con Goat Studios', en: 'Four games with Goat Studios' },
    p: {
      es: 'Arte, escenarios 3D, interfaz, modos de juego y la campaña con la que cada uno sale al mundo.',
      en: 'Art, 3D environments, interface, game modes and the campaign that takes each one out into the world.',
    },
  },
  proceso: { h: { es: 'En desarrollo', en: 'In development' } },
  navegador: {
    h: { es: 'Juégalos ahora mismo', en: 'Play them right now' },
    p: { es: 'Los tres son gratis. BioCrisis y Rubymon abren en el navegador; Hazmat se descarga para Windows.', en: 'All three are free. BioCrisis and Rubymon open in the browser; Hazmat is a Windows download.' },
    play: { es: 'Jugar', en: 'Play' },
  },
  web: {
    h: { es: 'Productos web que trabajan todos los días', en: 'Web products that work every day' },
  },
  gvc: {
    h: { es: 'GVC Coffee: un negocio, tres piezas', en: 'GVC Coffee: one business, three pieces' },
    p: {
      es: 'Una web para formar, una tienda para vender y un panel que ordena las dos operaciones. Cada una con su propia identidad.',
      en: 'A site to teach, a store to sell and a dashboard that keeps both operations in order. Each with its own identity.',
    },
  },
  marca: {
    h: { es: 'Vívolo, de la bolsa a la camiseta', en: 'Vívolo, from the bag to the T-shirt' },
    p: {
      es: 'Toda la estructura gráfica de una marca de café de especialidad en Santa Marta con envíos a Estados Unidos.',
      en: 'The full graphic system of a specialty coffee brand in Santa Marta that ships to the United States.',
    },
  },
  ilustracion: {
    h: { es: 'Ilustración y marcas anteriores', en: 'Illustration and earlier brands' },
    hint: { es: 'Galería de ilustración, se desplaza hacia los lados', en: 'Illustration gallery, scrolls sideways' },
  },
  ia: {
    h: { es: 'Inteligencia artificial donde sí suma', en: 'AI where it actually helps' },
    items: [
      {
        h: { es: 'Dentro del producto', en: 'Inside the product' },
        p: {
          es: 'BIM ARaS, para 3DVES: un asistente de IA dentro de Autodesk Revit que ayuda a generar sistemas MEP. Para GVC Coffee diseñé la arquitectura de un agente de ventas por WhatsApp que comparte catálogo con la web.',
          en: 'BIM ARaS, for 3DVES: an AI assistant inside Autodesk Revit that helps generate MEP systems. For GVC Coffee I designed the architecture of a WhatsApp sales agent that shares its catalog with the website.',
        },
      },
      {
        h: { es: 'En la producción visual', en: 'In visual production' },
        p: {
          es: 'Escenas de producto y campaña para Vívolo a partir de los empaques reales, hechas con Higgsfield y Magnific y terminadas en Photoshop y Premiere. La IA propone, el criterio decide qué sale.',
          en: 'Product and campaign scenes for Vívolo built from the real packaging, made with Higgsfield and Magnific and finished in Photoshop and Premiere. AI proposes, judgment decides what ships.',
        },
      },
      {
        h: { es: 'En el desarrollo', en: 'In development' },
        p: {
          es: 'Programo con agentes de IA bajo reglas escritas, presupuestos de rendimiento y pruebas. BioCrisis tiene más de cien pruebas automáticas y un jugador simulado que mide el balance.',
          en: 'I code with AI agents under written rules, performance budgets and tests. BioCrisis has more than a hundred automated tests and a simulated player that measures balance.',
        },
      },
    ],
  },
  sobre: {
    h: { es: 'Administrador de formación, creativo de oficio', en: 'Trained in business, creative by trade' },
    p: {
      es: [
        'Soy Brian Rodríguez, de Colombia, y trabajo desde Medellín. Estudié Administración de Empresas en la Universidad del Valle, interfaces en Platzi y desarrollo con Unity en Generation Colombia.',
        'Esa mezcla me deja entrar a un proyecto por cualquier puerta: entender el negocio, dibujar la marca, diseñar la interfaz y construirla. Hablo español, inglés (B2) y portugués (B2).',
      ],
      en: [
        'I’m Brian Rodríguez, from Colombia, working out of Medellín. I studied Business Administration at Universidad del Valle, interface design at Platzi and Unity development at Generation Colombia.',
        'That mix lets me enter a project through any door: understand the business, draw the brand, design the interface and build it. I speak Spanish, English (B2) and Portuguese (B2).',
      ],
    },
    jobsH: { es: 'Experiencia', en: 'Experience' },
    jobs: [
      { who: 'Quindío Emprendedor', when: { es: 'Desde mayo de 2026', en: 'Since May 2026' }, role: { es: 'Desarrollador frontend', en: 'Frontend developer' }, p: { es: 'Construí cerca del 80 % de una plataforma que lleva de principio a fin un programa regional de emprendimiento: diez etapas, seis perfiles, rúbricas de jurados, documentos firmados y tableros.', en: 'Built about 80% of a platform that runs a regional entrepreneurship program end to end: ten stages, six roles, jury rubrics, signed documents and dashboards.' } },
      { who: 'Vívolo', when: { es: 'Desde abril de 2026', en: 'Since April 2026' }, role: { es: 'Líder de marketing digital', en: 'Digital marketing lead' }, p: { es: 'Estrategia, contenido y pauta en Meta, TikTok y Google; fotografía y video con apoyo de IA; automatizaciones en n8n y medición con GA4 y Looker Studio.', en: 'Strategy, content and paid media on Meta, TikTok and Google; AI-assisted photography and video; n8n automation and measurement with GA4 and Looker Studio.' } },
      { who: 'Goat Studios', role: { es: 'Arte, diseño y desarrollo de videojuegos', en: 'Game art, design and development' }, p: { es: 'The Dinner en Steam desde noviembre de 2025 y tres títulos más en camino.', en: 'The Dinner on Steam since November 2025, with three more titles on the way.' } },
      { who: 'CloudFleet', when: '2024 – 2025', role: { es: 'Especialista en marketing digital y diseño de marca', en: 'Digital marketing and brand design specialist' }, p: { es: 'Manual de marca aplicado a canales digitales, impresos y stands 3D; video, correo y blog; investigación UX e interfaces del tablero y del producto en Figma.', en: 'Brand manual rolled out across digital, print and 3D booths; video, email and blog; UX research and dashboard and product interfaces in Figma.' } },
      { who: 'Andovar', when: '2023 – 2024', role: { es: 'Especialista en producción digital', en: 'Digital production specialist' }, p: { es: 'Supervisé la localización e integración de más de 40 proyectos multimedia para audiencias globales, con 90 % de satisfacción.', en: 'I oversaw localization and integration of more than 40 multimedia projects for global audiences, with 90% satisfaction.' } },
      { who: 'Universidad del Valle', when: '2021 – 2022', role: { es: 'Coordinador de mercadeo y diseño digital', en: 'Marketing and digital design coordinator' }, p: { es: 'Dirigí una plataforma nueva de inscripción que redujo 86 % el tiempo de atención por persona y subió 50 % la conversión.', en: 'I led a new enrollment platform that cut service time per person by 86% and raised conversion by 50%.' } },
      { who: 'MFC Group', when: '2018 – 2019', role: { es: 'Líder de marca, Cali Mirá Fest', en: 'Brand lead, Cali Mirá Fest' }, p: { es: 'Identidad de un festival con 20.000 asistentes y más de 400 emprendimientos.', en: 'Identity for a festival with 20,000 attendees and more than 400 small businesses.' } },
    ],
    toolsH: { es: 'Con qué trabajo', en: 'What I work with' },
    tools: {
      es: [['Juegos', 'Unity, C#, Blender, Aseprite, Phaser, Steamworks'], ['Web', 'TypeScript, React, Tailwind, Astro, Supabase, Vercel, Shopify, GSAP'], ['Diseño', 'Figma, Illustrator, Photoshop, InDesign, After Effects, Premiere'], ['Marketing', 'Meta Ads, TikTok Ads, Google Ads, SEO, GA4, Looker Studio'], ['IA', 'Claude Code, Codex, Lovable, n8n, Higgsfield, Magnific']],
      en: [['Games', 'Unity, C#, Blender, Aseprite, Phaser, Steamworks'], ['Web', 'TypeScript, React, Tailwind, Astro, Supabase, Vercel, Shopify, GSAP'], ['Design', 'Figma, Illustrator, Photoshop, InDesign, After Effects, Premiere'], ['Marketing', 'Meta Ads, TikTok Ads, Google Ads, SEO, GA4, Looker Studio'], ['AI', 'Claude Code, Codex, Lovable, n8n, Higgsfield, Magnific']],
    },
  },
  contacto: {
    h: { es: 'Cuéntame qué necesitas', en: 'Tell me what you need' },
    p: { es: 'Elige una opción y el mensaje de WhatsApp sale escrito. Tú lo revisas antes de enviarlo.', en: 'Pick an option and your WhatsApp message comes pre-written. You review it before sending.' },
    options: [
      { l: { es: 'Alguien para mi equipo', en: 'Someone for my team' }, m: { es: 'Hola Brian, vi tu portafolio y quiero hablar de una vacante en mi equipo.', en: 'Hi Brian, I saw your portfolio and would like to talk about a role on my team.' } },
      { l: { es: 'Un videojuego', en: 'A game' }, m: { es: 'Hola Brian, vi tu portafolio y quiero hacer un videojuego.', en: 'Hi Brian, I saw your portfolio and want to make a game.' } },
      { l: { es: 'Una web o plataforma', en: 'A website or platform' }, m: { es: 'Hola Brian, vi tu portafolio y necesito una web o plataforma.', en: 'Hi Brian, I saw your portfolio and need a website or platform.' } },
      { l: { es: 'Una marca o ilustración', en: 'A brand or illustration' }, m: { es: 'Hola Brian, vi tu portafolio y necesito una marca o ilustración.', en: 'Hi Brian, I saw your portfolio and need a brand or illustration.' } },
    ],
    go: { es: 'Abrir WhatsApp', en: 'Open WhatsApp' },
    mail: { es: 'O escríbeme a', en: 'Or email me at' },
  },
};

const goat = { es: 'Goat Studios', en: 'Goat Studios' };

// tipo: juego | proceso | navegador | web | gvc | marca
export const projects = [
  {
    slug: 'the-dinner', tipo: 'juego', name: 'The Dinner', color: '#b51a1a', dark: '#1a0505',
    cover: 'dinner/key', panelVideo: 'dinner/loop', gallery: ['v:dinner/loop', 'dinner/poster-woman', 'dinner/poster1', 'dinner/poster2', 'dinner/poster3', 'dinner/key', 'dinner/stand'],
    status: { es: 'En Steam desde el 21 de noviembre de 2025', en: 'On Steam since November 21, 2025' },
    sum: {
      es: 'Terror psicológico: un veterano de guerra intenta preparar la cena familiar mientras sus recuerdos se le meten en la casa.',
      en: 'Psychological horror: a war veteran tries to get the family dinner ready while his memories move into the house.',
    },
    what: {
      es: 'The Dinner es el primer juego comercial de Goat Studios. Toda la campaña gira alrededor de una idea: dos rostros bajo el mismo casco, rojo y negro, sin medias tintas.',
      en: 'The Dinner is Goat Studios’ first commercial game. The whole campaign turns on one idea: two faces under the same helmet, red and black, nothing in between.',
    },
    did: {
      es: ['Identidad, logo y arte principal del juego', 'Campaña de lanzamiento: carteles, cuenta regresiva, cápsulas de Steam y kit de prensa', 'Piezas impresas para ferias: stand, camisetas y calcomanías', 'Piezas gráficas adaptadas a los idiomas de la tienda, que son once'],
      en: ['Game identity, logo and key art', 'Launch campaign: posters, countdown, Steam capsules and press kit', 'Printed pieces for fairs: booth, T-shirts and stickers', 'Artwork adapted to the store’s eleven languages'],
    },
    role: { es: 'Dirección de arte, identidad y campaña', en: 'Art direction, identity and campaign' },
    tools: 'Unity, C#, Photoshop, Illustrator, Blender', team: goat,
    link: { u: 'https://store.steampowered.com/app/3537410/The_Dinner/', l: { es: 'Ver en Steam', en: 'See on Steam' } },
  },
  {
    slug: 'its-not-a-bomb', tipo: 'juego', name: 'It’s Not a Bomb', color: '#0f6e66', dark: '#06302c',
    cover: 'bomb/key', video: 'bomb/loop', gallery: ['bomb/shot1', 'bomb/shot2', 'bomb/shot3', 'bomb/shot4', 'bomb/shot5', 'bomb/shot6', 'bomb/key'],
    status: { es: 'Sale en Steam el 4 de diciembre de 2026', en: 'Out on Steam December 4, 2026' },
    sum: {
      es: 'Party game explosivo para jugar en el sofá o en línea: Battle Royale, Captura la Bandera, Demolición y más formas de perder amigos.',
      en: 'An explosive party game for the couch or online: Battle Royale, Capture the Flag, Demolition and more ways to lose friends.',
    },
    what: {
      es: 'Un multijugador donde cualquier cosa puede explotar, menos, en teoría, la bomba. Pantalla compartida, partidas en línea, logros y soporte completo de mando.',
      en: 'A multiplayer game where anything can blow up except, in theory, the bomb. Shared screen, online matches, achievements and full controller support.',
    },
    did: {
      es: ['Modos de juego y ajustes: muerte súbita, gigante, vacas y bordes de mapas', 'Interfaz, iconos de poderes, gestos y pantallas de carga', 'Logo, cápsulas de Steam y capturas de tienda', 'Videos cortos y campaña de listas de deseados'],
      en: ['Game modes and tuning: sudden death, giant, cows and map borders', 'Interface, power-up icons, emotes and loading screens', 'Logo, Steam capsules and store screenshots', 'Short videos and the wishlist campaign'],
    },
    role: { es: 'Arte, interfaz, modos de juego y campaña', en: 'Art, interface, game modes and campaign' },
    tools: 'Unity 6, C#, Blender, Illustrator, Photoshop', team: goat,
    link: { u: 'https://store.steampowered.com/app/4806170/Its_Not_a_Bomb/', l: { es: 'Añadir a deseados', en: 'Wishlist on Steam' } },
  },
  {
    slug: 'money-laundering', tipo: 'juego', name: 'Money Laundering', color: '#14521f', dark: '#061f0b',
    cover: 'laundering/key', video: 'laundering/loop', gallery: ['laundering/key', 'laundering/shot1', 'laundering/shot2', 'laundering/shot3', 'laundering/shot4', 'laundering/shot5', 'laundering/steam'],
    status: { es: 'Próximamente', en: 'Coming soon' },
    sum: {
      es: 'Un cuarto, una lavadora que es una ruleta de casino y una montaña de billetes que no para de crecer.',
      en: 'One room, a washing machine that is a roulette wheel and a mountain of bills that never stops growing.',
    },
    what: {
      es: 'Roguelite de apuestas en primera persona. Cada tres días llega una cuota más grande; cada lavado es una apuesta a rojo, negro o verde, y las mejoras repintan la ruleta a tu favor.',
      en: 'A first-person gambling roguelite. Every three days a bigger quota lands; each wash is a bet on red, black or green, and upgrades repaint the wheel in your favor.',
    },
    did: {
      es: ['Modelado de la lavadora-ruleta, la dispensadora y los billetes', 'Decoración, iluminación y shader del cuarto', 'Interfaz del juego, menú principal y computadora', 'Logo y material de tienda'],
      en: ['Modeling of the roulette washer, the vending machine and the bills', 'Set dressing, lighting and shader for the room', 'Game interface, main menu and in-game computer', 'Logo and store artwork'],
    },
    role: { es: 'Arte 3D, escenario, interfaz e identidad', en: '3D art, environment, interface and identity' },
    tools: 'Unity 6, URP, Blender, Illustrator', team: goat,
  },
  {
    slug: 'a-last-haul', tipo: 'juego', name: 'A Last Haul', color: '#1b2a3d', dark: '#080d14',
    cover: 'haul/blue', video: 'haul/loop', gallery: ['haul/blue', 'haul/key', 'haul/alt', 'haul/road', 'haul/ui'],
    status: { es: 'Próximamente', en: 'Coming soon' },
    sum: {
      es: 'Terror al volante: una noche más en la carretera, café para no dormirse y algo que se sube a la cabina.',
      en: 'Horror behind the wheel: one more night on the road, coffee to stay awake and something that climbs into the cab.',
    },
    what: {
      es: 'Conduces un camión de noche por una carretera sin fin, con estética de los juegos de finales de los noventa. Hay que vigilar el sueño, la velocidad, los espejos y la radio.',
      en: 'You drive a truck at night down an endless road, with the look of late-nineties games. Keep an eye on sleep, speed, mirrors and the radio.',
    },
    did: {
      es: ['Modelos, decoración de cabina y tablero de instrumentos', 'Pruebas de la estética PS1', 'Iconos y medidores de la interfaz', 'Logo y arte de portada'],
      en: ['Models, cab dressing and dashboard instruments', 'PS1-look experiments', 'Interface icons and gauges', 'Logo and cover art'],
    },
    role: { es: 'Arte 3D, interfaz e identidad', en: '3D art, interface and identity' },
    tools: 'Unity 6, Blender, Illustrator, Photoshop', team: goat,
  },
  {
    slug: 'attack-on-zombie', tipo: 'proceso', name: 'Attack On Zombie', color: '#16303a', dark: '#0a111c', accent: '#39e6c8', cover: 'zombie/key',
    status: { es: 'En desarrollo para Android', en: 'In development for Android' },
    sum: {
      es: 'Siete noches en una oficina abandonada: termina un juego de 8 bits antes de las seis de la mañana mientras detienes las oleadas.',
      en: 'Seven nights in an abandoned office: finish an 8-bit game before six in the morning while holding off the waves.',
    },
    what: {
      es: 'Juego cenital para celular con una regla por encima de todas: 30 FPS estables en un teléfono de gama media-baja. Cada efecto tiene presupuesto y se mide en un dispositivo real.',
      en: 'A top-down mobile game with one rule above all others: a stable 30 FPS on a low to mid-range phone. Every effect has a budget and is measured on a real device.',
    },
    did: {
      es: ['Diseño y programación del juego', 'Dirección de arte: baja poligonización, colores planos, noche lluviosa', 'Presupuesto técnico: batches, triángulos, memoria y cero basura por cuadro'],
      en: ['Game design and programming', 'Art direction: low poly, flat color, rainy night', 'Technical budget: batches, triangles, memory and zero garbage per frame'],
    },
    role: { es: 'Diseño, arte y programación', en: 'Design, art and programming' },
    tools: 'Unity 6, URP, C#, Jobs y Burst',
  },
  {
    slug: 'metal-machines', tipo: 'proceso', sinPagina: true, name: 'Metal Machines', color: '#4a3a2c', dark: '#241a12', accent: '#ffb000',
    status: { es: 'En desarrollo', en: 'In development' },
    sum: { es: 'Primeras imágenes muy pronto.', en: 'First images soon.' },
  },
  {
    slug: 'biocrisis', tipo: 'navegador', name: 'BioCrisis', color: '#2c3b2a', dark: '#10160f',
    cover: 'biocrisis/titulo', video: 'biocrisis/jefe', gallery: ['v:biocrisis/llave', 'v:biocrisis/zombi', 'v:biocrisis/arena', 'v:biocrisis/jefe'],
    status: { es: 'Jugable en el navegador', en: 'Playable in the browser' },
    sum: {
      es: 'Survival horror en primera persona: una casa de noche, poca munición y zombis que te oyen.',
      en: 'First-person survival horror: a house at night, scarce ammo and zombies that can hear you.',
    },
    what: {
      es: 'Motor de raycasting propio, zombis que persiguen con A* y abren puertas, tres armas, inventario y un jefe final. Funciona en escritorio, celular y mando.',
      en: 'A custom raycasting engine, zombies that chase with A* and open doors, three weapons, an inventory and a final boss. It runs on desktop, mobile and gamepad.',
    },
    did: {
      es: ['Motor y lógica en TypeScript puro, cubiertos por pruebas', 'Texturas, sprites, HUD y logo generados con código', 'Audio espacial y controles táctiles', 'Simulador que juega solo para medir el balance'],
      en: ['Engine and logic in pure TypeScript, covered by tests', 'Textures, sprites, HUD and logo generated in code', 'Spatial audio and touch controls', 'A simulator that plays on its own to measure balance'],
    },
    role: { es: 'Diseño, arte y programación', en: 'Design, art and programming' },
    tools: 'TypeScript, Phaser, Vite, Vitest',
    link: { u: 'https://brian-cve.github.io/Biocrisis/', l: { es: 'Jugar BioCrisis', en: 'Play BioCrisis' } },
  },
  {
    slug: 'rubymon', tipo: 'navegador', name: 'Rubymon', color: '#8e1230', dark: '#36050f',
    cover: 'rubymon/title', video: 'rubymon/battle', gallery: ['v:rubymon/world', 'v:rubymon/battle', 'v:rubymon/capture', 'v:rubymon/pause'],
    status: { es: 'Proyecto de práctica, jugable en el navegador', en: 'Practice project, playable in the browser' },
    sum: {
      es: 'RPG por turnos en pixel art, con un pueblo por explorar, combates y música compuesta con código.',
      en: 'A turn-based pixel-art RPG with a town to explore, battles and music composed in code.',
    },
    what: {
      es: 'Un ejercicio técnico sobre los RPG portátiles clásicos: mapas en Tiled, sistema de combate con tipos y estados, equipo, mochila y una animación distinta para cada movimiento.',
      en: 'A technical exercise on classic handheld RPGs: Tiled maps, a combat system with types and status, party, bag and a distinct animation for every move.',
    },
    did: {
      es: ['Motor de combate y captura con pruebas automáticas', 'Animaciones por movimiento y partículas', 'Audio procedural con Web Audio: efectos y tres canciones', 'Logo y HUD dibujados por código'],
      en: ['Combat and capture engine with automated tests', 'Per-move animations and particles', 'Procedural audio with Web Audio: effects and three songs', 'Logo and HUD drawn in code'],
    },
    role: { es: 'Diseño y programación', en: 'Design and programming' },
    tools: 'TypeScript, Phaser, Vite, Tiled',
    link: { u: 'https://brian-cve.github.io/Pokimon2/', l: { es: 'Jugar Rubymon', en: 'Play Rubymon' } },
  },
  {
    slug: 'hazmat', tipo: 'navegador', name: 'Hazmat', color: '#7a0f14', dark: '#240406',
    cover: 'hazmat/loop', video: 'hazmat/loop', gallery: ['ilustracion/hazmat'],
    status: { es: 'Gratis en itch.io, para Windows', en: 'Free on itch.io, for Windows' },
    sum: {
      es: 'Escape cooperativo en línea: un manicomio abandonado, ocho llaves por encontrar y una inteligencia artificial que ya dictó sentencia.',
      en: 'An online co-op escape: an abandoned asylum, eight keys to find and an AI that has already passed sentence.',
    },
    what: {
      es: 'En el futuro gobiernan las inteligencias artificiales y los jugadores fueron condenados. Encerrados en un manicomio, tienen que cooperar, esconderse, distraer y correr antes de que se acabe el tiempo.',
      en: 'In the future, AIs rule and the players have been convicted. Locked in an asylum, they must cooperate, hide, distract and run before time is up.',
    },
    tools: 'Unity, C#',
    team: { es: 'Laura C Correa P, carlos4rias, OffsetDev, Nico Parroquiano y Goat Studios', en: 'Laura C Correa P, carlos4rias, OffsetDev, Nico Parroquiano and Goat Studios' },
    link: { u: 'https://soybri.itch.io/hazmat', l: { es: 'Descargar Hazmat', en: 'Download Hazmat' } },
  },
  {
    slug: 'quindio-emprendedor', tipo: 'web', name: 'Quindío Emprendedor', color: '#0f5f3c', dark: '#06291a',
    cover: 'quindio/panel', mobile: 'quindio/movil', thumbs: ['quindio/analiticas', 'quindio/pitch', 'quindio/usuarios'], gallery: ['quindio/home', 'quindio/movil'],
    note: { es: 'Los nombres, documentos, contactos y cifras de las pantallas fueron borrados para proteger a los participantes.', en: 'Names, ID numbers, contact details and figures were removed from the screens to protect participants.' },
    screens: [
      ['quindio/panel', { es: 'Gestión de postulantes', en: 'Applicant management' }, { es: 'El estado de cada persona de un vistazo, filtros por municipio, sector y etapa, exportación a Excel y PDF, y documentos que se regeneran en lote.', en: 'Everyone’s status at a glance, filters by town, sector and stage, Excel and PDF export, and documents regenerated in batches.' }],
      ['quindio/analiticas', { es: 'Analíticas', en: 'Analytics' }, { es: 'Avance de la convocatoria en tiempo real: inscritos por municipio, estado de las postulaciones y meta de beneficiarios.', en: 'Real-time progress: sign-ups by town, application status and the beneficiary target.' }],
      ['quindio/pitch', { es: 'Jornada de pitch', en: 'Pitch day' }, { es: 'Tres jurados califican por separado y la plataforma promedia las notas y ordena los resultados.', en: 'Three jurors score independently; the platform averages the scores and ranks the results.' }],
      ['quindio/usuarios', { es: 'Usuarios y roles', en: 'Users and roles' }, { es: 'Postulantes, gestores, evaluadores y administradores: cada perfil entra a lo que le corresponde.', en: 'Applicants, managers, evaluators and administrators: each profile sees what it should.' }],
    ],
    status: { es: 'En producción', en: 'In production' },
    sum: {
      es: 'Plataforma de una convocatoria pública: del formulario de postulación al pitch, pasando por visitas, firmas y entregas.',
      en: 'The platform behind a public grant program: from application form to pitch, through field visits, signatures and deliveries.',
    },
    what: {
      es: 'Un programa de fortalecimiento para emprendimientos del Quindío necesitaba llevar todo el proceso en un solo lugar. La plataforma maneja perfiles, documentos en PDF, caracterización, evaluación de jurados, actas de visita firmadas y correos automáticos.',
      en: 'A support program for small businesses in Quindío needed its whole process in one place. The platform handles roles, PDF documents, assessments, jury scoring, signed visit records and automatic emails.',
    },
    did: {
      es: ['Cerca del 80 % de la plataforma: registro, evaluación, pitch, visitas, caracterización, anexos y entregas', 'Interfaces adaptables y formularios validados', 'Capa de datos en Supabase: más de 80 migraciones y permisos para seis perfiles', 'Flujo de diez etapas: puntaje automático de documentos, rúbricas de pitch y selección de beneficiarios', 'Documentos oficiales en PDF con firma digital, regeneración en lote y exportación a Excel'],
      en: ['About 80% of the platform: registration, evaluation, pitch, visits, characterization, annexes and deliverables', 'Responsive interfaces and validated forms', 'Supabase data layer: 80+ migrations and permissions for six roles', 'Ten-stage workflow: automatic document scoring, pitch rubrics and beneficiary selection', 'Official PDF documents with digital signature, bulk regeneration and Excel exports'],
    },
    role: { es: 'Desarrollador frontend', en: 'Frontend developer' },
    tools: 'React, TypeScript, Vite, Tailwind, shadcn/ui, Supabase, Recharts, Vercel, Claude Code, Lovable',
    team: { es: 'Con Juan Hernández', en: 'With Juan Hernández' },
    link: { u: 'https://quindio-connect-hub.vercel.app', l: { es: 'Visitar la plataforma', en: 'Visit the platform' } },
  },
  {
    slug: 'gustavo-valderrama', tipo: 'gvc', name: 'Gustavo Valderrama', color: '#3a2417', dark: '#170d07',
    cover: 'gv/home', mobile: 'gv/movil', gallery: ['gv/home', 'gv/formacion', 'gv/movil'],
    status: { es: 'Web nueva construida, en revisión', en: 'New site built, in review' },
    sum: {
      es: 'La web de un catador y formador de café: cursos, agenda y experiencias, con WhatsApp como puerta de entrada.',
      en: 'The site of a coffee taster and trainer: courses, calendar and experiences, with WhatsApp as the front door.',
    },
    what: {
      es: 'Reemplazo de un WordPress con información vencida. Un solo catálogo alimenta las páginas, la agenda y la página de enlaces, así que un precio se cambia una vez.',
      en: 'A replacement for a WordPress site with outdated information. One catalog feeds the pages, the calendar and the links page, so a price changes once.',
    },
    did: {
      es: ['Diagnóstico de marca y estrategia de contenido', 'Diseño y desarrollo en Astro, pensado primero para celular', 'Embudo de WhatsApp y página de enlaces', 'Cabeceras de seguridad y redirecciones desde el sitio anterior'],
      en: ['Brand diagnosis and content strategy', 'Design and build in Astro, mobile first', 'WhatsApp funnel and links page', 'Security headers and redirects from the old site'],
    },
    role: { es: 'Estrategia, diseño y desarrollo', en: 'Strategy, design and development' },
    tools: 'Astro, GSAP, Cloudflare Pages',
  },
  {
    slug: '5sento', tipo: 'gvc', name: '5Sento', color: '#7a1f4d', dark: '#2c0a1b',
    cover: 'sento/home', mobile: 'sento/movil', gallery: ['sento/home', 'sento/cafes', 'sento/movil'],
    status: { es: 'Prototipo navegable, rumbo a Shopify', en: 'Working prototype, heading to Shopify' },
    sum: {
      es: 'Tienda de café de especialidad donde cada lote tiene su color, su puntaje y el nombre de quien lo cultivó.',
      en: 'A specialty coffee store where every lot has its own color, score and the name of the person who grew it.',
    },
    what: {
      es: 'El empaque ya era un sistema de marca; la tienda lo convierte en interfaz. El color de la etiqueta acompaña al café en la portada, la ficha y el carrito.',
      en: 'The packaging was already a brand system; the store turns it into interface. The label color follows each coffee through the home page, product page and cart.',
    },
    did: {
      es: ['Dirección de arte «Etiquetas de lote»', 'Prototipo completo: portada, catálogo, ficha, suscripción y carrito', 'Elección de plataforma y plan de suscripciones'],
      en: ['“Lot labels” art direction', 'Full prototype: home, catalog, product page, subscription and cart', 'Platform choice and subscription plan'],
    },
    role: { es: 'Dirección de arte, UX y prototipo', en: 'Art direction, UX and prototype' },
    tools: 'Astro, Shopify, Illustrator',
  },
  {
    slug: 'gvc-cerebro', tipo: 'gvc', name: 'GVC Cerebro', color: '#23324f', dark: '#0d1422',
    cover: 'cerebro/panel', mobile: 'cerebro/movil', gallery: ['cerebro/panel', 'cerebro/comercial', 'cerebro/movil'],
    status: { es: 'Panel interno, valores ocultos por confidencialidad', en: 'Internal dashboard, values hidden for confidentiality' },
    sum: {
      es: 'El panel que une cursos y café: personas, ventas, inscripciones y cartera en una sola base de datos.',
      en: 'The dashboard that joins courses and coffee: people, sales, enrollments and receivables in one database.',
    },
    what: {
      es: 'Dos unidades de negocio independientes sobre una base común. El equipo ve lo que le corresponde y cada cambio importante queda registrado.',
      en: 'Two independent business units on a common base. Each person sees what they need and every important change is recorded.',
    },
    did: {
      es: ['Modelo de datos del negocio', 'Permisos por persona y registro de cambios', 'Panel de control en React'],
      en: ['Business data model', 'Per-person permissions and change history', 'Dashboard in React'],
    },
    role: { es: 'Arquitectura, diseño y desarrollo', en: 'Architecture, design and development' },
    tools: 'React, TypeScript, Supabase, Postgres',
  },
  {
    slug: 'vivolo', tipo: 'marca', name: 'Vívolo', color: '#1d3a8f', dark: '#0b1740',
    cover: 'vivolo/family', gallery: ['vivolo/family', 'vivolo/bag-white', 'vivolo/bag-black', 'vivolo/drip', 'vivolo/ilus1', 'vivolo/ilus2', 'vivolo/ilus3', 'vivolo/ilus4', 'vivolo/tee', 'vivolo/menu', 'vivolo/postcard', 'vivolo/shipping', 'vivolo/social'],
    bento: ['vivolo/bag-white', 'vivolo/ilus1', 'vivolo/drip', 'vivolo/family', 'vivolo/tee', 'vivolo/shipping', 'vivolo/menu', 'vivolo/bag-black', 'vivolo/ilus2'],
    status: { es: 'Marca en el mercado', en: 'Brand on the market' },
    sum: {
      es: 'Empaques, ilustración, cartas, camisetas, postales y redes para una marca de café de especialidad.',
      en: 'Packaging, illustration, menus, T-shirts, postcards and social media for a specialty coffee brand.',
    },
    what: {
      es: 'Vívolo vive en Santa Marta y envía a Estados Unidos. El trabajo fue construir un lenguaje gráfico que funcionara igual en una bolsa, una carta de cocteles y un anuncio.',
      en: 'Vívolo lives in Santa Marta and ships to the United States. The job was to build a graphic language that works the same on a bag, a cocktail menu and an ad.',
    },
    did: {
      es: ['Sistema gráfico e ilustraciones de marca', 'Empaques: bolsas, drip bags y etiquetas por caficultor', 'Cartas, postales, camisetas, gorras y calcomanías', 'Estrategia digital, contenido y pauta en Meta, TikTok y Google', 'Fotografía de producto y video con apoyo de IA', 'Automatizaciones con n8n y medición con GA4 y Looker Studio'],
      en: ['Graphic system and brand illustrations', 'Packaging: bags, drip bags and labels per grower', 'Menus, postcards, T-shirts, caps and stickers', 'Digital strategy, content and paid media on Meta, TikTok and Google', 'AI-assisted product photography and video', 'n8n automation and measurement with GA4 and Looker Studio'],
    },
    role: { es: 'Líder de marketing digital, diseño e ilustración', en: 'Digital marketing lead, design and illustration' },
    tools: 'Illustrator, Photoshop, Premiere, Figma, Higgsfield, Magnific, n8n, Meta Ads, Google Ads, TikTok Ads',
    link: { u: 'https://vivolocoffee.com', l: { es: 'Visitar Vívolo', en: 'Visit Vívolo' } },
  },
];

export const wall = [
  ['ilustracion/puntatalon', { es: 'Punta Talón, logo y cartel', en: 'Punta Talón, logo and poster' }],
  ['ilustracion/coora', { es: 'Coora, logo e ilustración', en: 'Coora, logo and illustration' }],
  ['ilustracion/calimira', { es: 'Cali Mirá Fest, identidad', en: 'Cali Mirá Fest, identity' }],
  ['ilustracion/logos', { es: 'Selección de logos', en: 'Selected logos' }],
  ['ilustracion/alternative', { es: 'Alternative Products Expo, evento', en: 'Alternative Products Expo, event' }],
  ['ilustracion/ummi', { es: 'Ummi, marca y personajes', en: 'Ummi, brand and characters' }],
  ['ilustracion/personajes', { es: 'Diseño de personajes', en: 'Character design' }],
  ['ilustracion/mundomujer', { es: 'Mundo Mujer, curso interactivo', en: 'Mundo Mujer, interactive course' }],
  ['ilustracion/tori', { es: 'Tori, app para emprendedores', en: 'Tori, app for entrepreneurs' }],
  ['ilustracion/postly', { es: 'Postly, juego móvil para Colombia Games', en: 'Postly, mobile game for Colombia Games' }],
  ['ilustracion/aras', { es: 'BIM ARaS para 3DVES', en: 'BIM ARaS for 3DVES' }],
];
