/* =========================================================================
   data.js — TODO el contenido editable de la demo vive acá.
   -------------------------------------------------------------------------
   Para rebrandear la demo a un cliente nuevo en 5 minutos:
     1. Cambiá NEGOCIO (nombre, teléfono/WhatsApp, mail, dirección, redes).
     2. Cambiá el mapa en NEGOCIO.mapaEmbed (iframe de Google Maps).
     3. Editá las CABAÑAS (nombre, fotos, precio, amenities, descripción).
     4. Editá ZONA, RESEÑAS y FAQ.
     5. Los textos de la interfaz (botones, títulos) están en I18N por idioma.
   Los colores/fuentes NO están acá: se tocan en styles.css (:root, 6 líneas).

   Nota sobre idiomas: los campos traducibles son objetos { es, en, pt }.
   El sitio muestra el idioma activo sin recargar la página.
   ========================================================================= */

const CONFIG = {

  /* ----------------------------------------------------------------------
     1) NEGOCIO — datos de contacto y marca. Tocá esto primero.
     ---------------------------------------------------------------------- */
  negocio: {
    nombre: "Cabañas Los Coihues",
    // Slogan por idioma (aparece bajo el nombre en el hero).
    slogan: {
      es: "Seis cabañas con vista al lago, en el corazón del Circuito Chico",
      en: "Six lakefront cabins in the heart of Bariloche's Circuito Chico",
      pt: "Seis chalés com vista para o lago, no coração do Circuito Chico",
    },

    // WhatsApp: SOLO números, con código de país y área. SIN + ni espacios.
    // Formato Argentina móvil: 54 9 11 XXXXXXXX  ->  5491100000000
    whatsapp: "5491100000000",
    // Teléfono visible (formato libre, para mostrar en el footer).
    telefonoVisible: "+54 9 11 0000-0000",
    email: "reservas@cabanasloscoihues.com.ar",

    // Dirección visible y coordenadas (las coords son solo informativas).
    direccion: "Circuito Chico, Km 18 — San Carlos de Bariloche, Río Negro",

    // Mapa de Google Maps. Pegá acá el <iframe src="..."> que da
    // "Compartir > Insertar un mapa" en Google Maps. Solo la URL del src.
    mapaEmbed:
      "https://www.google.com/maps?q=Circuito+Chico+Bariloche&output=embed",
    // Link "Cómo llegar" (se abre Google Maps con la ubicación).
    mapaLink: "https://www.google.com/maps?q=Circuito+Chico+Bariloche",

    redes: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
    },
  },

  /* ----------------------------------------------------------------------
     2) BARRA DE CONFIANZA — los 3 argumentos para reservar directo.
     ---------------------------------------------------------------------- */
  confianza: [
    {
      icono: "tag", // ver íconos disponibles en app.js (ICONS)
      titulo: {
        es: "Reservá directo — sin comisiones",
        en: "Book direct — no fees",
        pt: "Reserve direto — sem comissões",
      },
      texto: {
        es: "El mejor precio siempre es con nosotros, sin intermediarios.",
        en: "The best price is always with us, no middlemen.",
        pt: "O melhor preço é sempre conosco, sem intermediários.",
      },
    },
    {
      icono: "calendar",
      titulo: {
        es: "Cancelación flexible",
        en: "Flexible cancellation",
        pt: "Cancelamento flexível",
      },
      texto: {
        es: "Cambios y cancelaciones sin dolores de cabeza.",
        en: "Changes and cancellations without headaches.",
        pt: "Alterações e cancelamentos sem dor de cabeça.",
      },
    },
    {
      icono: "chat",
      titulo: {
        es: "Atención personalizada",
        en: "Personal attention",
        pt: "Atendimento personalizado",
      },
      texto: {
        es: "Te responde el dueño, no un call center.",
        en: "You talk to the owner, not a call center.",
        pt: "Você fala com o dono, não com um call center.",
      },
    },
  ],

  /* ----------------------------------------------------------------------
     3) CABAÑAS — la grilla. Cada una abre un modal con galería.
        - fotoSeed: palabra para picsum.photos (mantené coherencia).
        - galeriaSeeds: 4 semillas para el modal.
        - amenities: elegí de la lista ICONS en app.js (parrilla, wifi,
          leña, cochera, ropa, lago, mascota, desayuno...).
     ---------------------------------------------------------------------- */
  cabanas: [
    {
      nombre: "Coihue",
      fotoSeed: "coihue-cabin-coihue",
      galeriaSeeds: [
        "coihue-coihue-1",
        "coihue-coihue-2",
        "coihue-coihue-3",
        "coihue-coihue-4",
      ],
      capacidad: 2,
      m2: 38,
      precioDesde: 95000, // por noche, en pesos. Ver moneda en I18N.
      amenities: ["lago", "lena", "wifi", "cochera", "ropa"],
      descripcionCorta: {
        es: "Íntima, para dos, con ventanal al lago.",
        en: "Intimate, for two, with a lake-facing window.",
        pt: "Intimista, para dois, com janela para o lago.",
      },
      descripcionLarga: {
        es: "Nuestra cabaña más íntima, pensada para parejas. Un ambiente cálido con estufa a leña, cama king y un gran ventanal que mira directo al Nahuel Huapi. Amanecé con el lago a los pies de la cama.",
        en: "Our coziest cabin, made for couples. A warm space with a wood-burning stove, king bed and a large window looking straight onto Lake Nahuel Huapi. Wake up with the lake at the foot of your bed.",
        pt: "Nosso chalé mais intimista, feito para casais. Um ambiente aconchegante com lareira a lenha, cama king e uma grande janela voltada para o lago Nahuel Huapi. Acorde com o lago aos pés da cama.",
      },
    },
    {
      nombre: "Arrayán",
      fotoSeed: "coihue-cabin-arrayan",
      galeriaSeeds: [
        "coihue-arrayan-1",
        "coihue-arrayan-2",
        "coihue-arrayan-3",
        "coihue-arrayan-4",
      ],
      capacidad: 4,
      m2: 55,
      precioDesde: 135000,
      amenities: ["lago", "parrilla", "lena", "wifi", "cochera", "ropa"],
      descripcionCorta: {
        es: "Dos ambientes, parrilla propia y deck al bosque.",
        en: "Two rooms, private grill and a deck to the forest.",
        pt: "Dois ambientes, churrasqueira própria e deck para a mata.",
      },
      descripcionLarga: {
        es: "Ideal para familias chicas o dos parejas. Dormitorio en suite, sofá cama en el living y una parrilla propia en el deck de madera rodeado de arrayanes. Cocina completa para quedarse a cocinar tranquilo.",
        en: "Ideal for small families or two couples. En-suite bedroom, sofa bed in the living room and a private grill on the wooden deck surrounded by native trees. Full kitchen to cook at your own pace.",
        pt: "Ideal para famílias pequenas ou dois casais. Quarto en suíte, sofá-cama na sala e churrasqueira própria no deck de madeira cercado por árvores nativas. Cozinha completa para cozinhar com calma.",
      },
    },
    {
      nombre: "Ñire",
      fotoSeed: "coihue-cabin-nire",
      galeriaSeeds: [
        "coihue-nire-1",
        "coihue-nire-2",
        "coihue-nire-3",
        "coihue-nire-4",
      ],
      capacidad: 4,
      m2: 58,
      precioDesde: 140000,
      amenities: ["lago", "parrilla", "lena", "wifi", "cochera", "ropa"],
      descripcionCorta: {
        es: "Luminosa, con vista abierta al cerro y al lago.",
        en: "Bright, with open views to the mountain and lake.",
        pt: "Iluminada, com vista aberta para a montanha e o lago.",
      },
      descripcionLarga: {
        es: "La más luminosa del complejo. Grandes ventanales de doble altura que capturan el sol de la tarde y una vista abierta al cerro Campanario. Estufa a leña, dos dormitorios y galería para el mate.",
        en: "The brightest cabin of the complex. Tall double-height windows that catch the afternoon sun and an open view of Cerro Campanario. Wood stove, two bedrooms and a porch for slow afternoons.",
        pt: "O chalé mais iluminado do complexo. Grandes janelas de pé-direito duplo que captam o sol da tarde e vista aberta para o Cerro Campanario. Lareira a lenha, dois quartos e varanda para relaxar.",
      },
    },
    {
      nombre: "Radal",
      fotoSeed: "coihue-cabin-radal",
      galeriaSeeds: [
        "coihue-radal-1",
        "coihue-radal-2",
        "coihue-radal-3",
        "coihue-radal-4",
      ],
      capacidad: 5,
      m2: 68,
      precioDesde: 165000,
      amenities: ["lago", "parrilla", "lena", "wifi", "cochera", "ropa", "desayuno"],
      descripcionCorta: {
        es: "Amplia, con desayuno de cortesía incluido.",
        en: "Spacious, with a welcome breakfast included.",
        pt: "Ampla, com café da manhã de cortesia incluído.",
      },
      descripcionLarga: {
        es: "Espaciosa y pensada para grupos que buscan comodidad. Tres ambientes, dos baños y un living con hogar a leña. Incluye desayuno de bienvenida con productos regionales el primer día.",
        en: "Spacious and made for groups looking for comfort. Three rooms, two bathrooms and a living room with a wood fireplace. Includes a welcome breakfast with regional products on your first day.",
        pt: "Ampla e pensada para grupos que buscam conforto. Três ambientes, dois banheiros e uma sala com lareira a lenha. Inclui café da manhã de boas-vindas com produtos regionais no primeiro dia.",
      },
    },
    {
      nombre: "Maitén",
      fotoSeed: "coihue-cabin-maiten",
      galeriaSeeds: [
        "coihue-maiten-1",
        "coihue-maiten-2",
        "coihue-maiten-3",
        "coihue-maiten-4",
      ],
      capacidad: 6,
      m2: 82,
      precioDesde: 195000,
      amenities: ["lago", "parrilla", "lena", "wifi", "cochera", "ropa", "desayuno", "mascota"],
      descripcionCorta: {
        es: "Para toda la familia, pet friendly y con parrilla techada.",
        en: "For the whole family, pet friendly with a covered grill.",
        pt: "Para toda a família, pet friendly e com churrasqueira coberta.",
      },
      descripcionLarga: {
        es: "La favorita de las familias. Tres dormitorios, quincho con parrilla techada para cualquier clima y jardín cerrado. Aceptamos mascotas: tu perro también es bienvenido a la montaña.",
        en: "A family favorite. Three bedrooms, a covered grill area for any weather and a fenced garden. Pets welcome: your dog is invited to the mountains too.",
        pt: "A favorita das famílias. Três quartos, área de churrasco coberta para qualquer clima e jardim fechado. Aceitamos pets: seu cão também é bem-vindo à montanha.",
      },
    },
    {
      nombre: "Lenga",
      fotoSeed: "coihue-cabin-lenga",
      galeriaSeeds: [
        "coihue-lenga-1",
        "coihue-lenga-2",
        "coihue-lenga-3",
        "coihue-lenga-4",
      ],
      capacidad: 8,
      m2: 105,
      precioDesde: 240000,
      amenities: ["lago", "parrilla", "lena", "wifi", "cochera", "ropa", "desayuno", "mascota"],
      descripcionCorta: {
        es: "La más grande: dos plantas, ideal para grupos.",
        en: "The largest: two floors, ideal for groups.",
        pt: "A maior: dois andares, ideal para grupos.",
      },
      descripcionLarga: {
        es: "Nuestra cabaña insignia, sobre dos plantas. Cuatro dormitorios, gran living comedor con doble hogar, quincho independiente y la mejor vista panorámica del lago. Perfecta para dos familias o grupos de amigos.",
        en: "Our flagship cabin, on two floors. Four bedrooms, a large living-dining room with a double fireplace, a separate grill house and the best panoramic lake view. Perfect for two families or groups of friends.",
        pt: "Nosso chalé principal, em dois andares. Quatro quartos, ampla sala de estar e jantar com lareira dupla, área de churrasco independente e a melhor vista panorâmica do lago. Perfeito para duas famílias ou grupos de amigos.",
      },
    },
  ],

  /* ----------------------------------------------------------------------
     4) ZONA — 4 tarjetas de qué hay cerca. minutos = tiempo en auto.
     ---------------------------------------------------------------------- */
  zona: [
    {
      seed: "coihue-zona-campanario",
      minutos: 5,
      nombre: {
        es: "Cerro Campanario",
        en: "Cerro Campanario",
        pt: "Cerro Campanario",
      },
      texto: {
        es: "Una de las mejores vistas del mundo, a un paso en aerosilla.",
        en: "One of the best views in the world, a chairlift away.",
        pt: "Uma das melhores vistas do mundo, a um passo de teleférico.",
      },
    },
    {
      seed: "coihue-zona-llaollao",
      minutos: 10,
      nombre: { es: "Llao Llao", en: "Llao Llao", pt: "Llao Llao" },
      texto: {
        es: "Bosques, playas y el hotel más famoso de la Patagonia.",
        en: "Forests, beaches and Patagonia's most famous hotel.",
        pt: "Florestas, praias e o hotel mais famoso da Patagônia.",
      },
    },
    {
      seed: "coihue-zona-colonia-suiza",
      minutos: 15,
      nombre: {
        es: "Colonia Suiza",
        en: "Colonia Suiza",
        pt: "Colonia Suiza",
      },
      texto: {
        es: "Curanto, ferias artesanales y aire de pueblo alpino.",
        en: "Curanto, craft fairs and an alpine village feel.",
        pt: "Curanto, feiras de artesanato e ar de vila alpina.",
      },
    },
    {
      seed: "coihue-zona-centro",
      minutos: 20,
      nombre: {
        es: "Centro de Bariloche",
        en: "Downtown Bariloche",
        pt: "Centro de Bariloche",
      },
      texto: {
        es: "Chocolates, restaurantes y la costanera del Nahuel Huapi.",
        en: "Chocolate, restaurants and the Nahuel Huapi waterfront.",
        pt: "Chocolates, restaurantes e a orla do Nahuel Huapi.",
      },
    },
  ],

  /* ----------------------------------------------------------------------
     5) RESEÑAS — 3 testimonios. estrellas de 1 a 5.
     ---------------------------------------------------------------------- */
  resenas: [
    {
      nombre: "María Fernanda",
      pais: { es: "Argentina", en: "Argentina", pt: "Argentina" },
      bandera: "🇦🇷",
      estrellas: 5,
      texto: {
        es: "La vista al lago desde la cama no tiene precio. Volvemos seguro el próximo invierno.",
        en: "The lake view from the bed is priceless. We're definitely coming back next winter.",
        pt: "A vista para o lago da cama não tem preço. Voltaremos com certeza no próximo inverno.",
      },
    },
    {
      nombre: "Rafael & Camila",
      pais: { es: "Brasil", en: "Brazil", pt: "Brasil" },
      bandera: "🇧🇷",
      estrellas: 5,
      texto: {
        es: "Nos atendieron en portugués y con una calidez increíble. La cabaña, impecable.",
        en: "They helped us in Portuguese and were incredibly warm. The cabin was spotless.",
        pt: "Nos atenderam em português e com um carinho incrível. O chalé, impecável.",
      },
    },
    {
      nombre: "James Whitmore",
      pais: { es: "Estados Unidos", en: "United States", pt: "Estados Unidos" },
      bandera: "🇺🇸",
      estrellas: 5,
      texto: {
        es: "Booking directo, sin comisiones y con el dueño respondiendo al toque. Diez puntos.",
        en: "Direct booking, no fees, and the owner replying instantly. Ten out of ten.",
        pt: "Reserva direta, sem comissões e com o dono respondendo na hora. Nota dez.",
      },
    },
  ],

  /* ----------------------------------------------------------------------
     6) FAQ — acordeón. pregunta / respuesta por idioma.
     ---------------------------------------------------------------------- */
  faq: [
    {
      pregunta: {
        es: "¿A qué hora es el check-in y check-out?",
        en: "What time is check-in and check-out?",
        pt: "Qual o horário de check-in e check-out?",
      },
      respuesta: {
        es: "Check-in desde las 15:00 y check-out hasta las 10:00. Si necesitás flexibilidad, escribinos y vemos cómo acomodarlo.",
        en: "Check-in from 3:00 PM and check-out until 10:00 AM. If you need flexibility, message us and we'll try to arrange it.",
        pt: "Check-in a partir das 15h e check-out até as 10h. Se precisar de flexibilidade, fale conosco e ajustamos.",
      },
    },
    {
      pregunta: {
        es: "¿Aceptan mascotas?",
        en: "Do you accept pets?",
        pt: "Aceitam animais de estimação?",
      },
      respuesta: {
        es: "Sí, en las cabañas Maitén y Lenga. Avisanos al reservar así preparamos todo para tu compañero.",
        en: "Yes, in the Maitén and Lenga cabins. Let us know when booking so we can get everything ready for your companion.",
        pt: "Sim, nos chalés Maitén e Lenga. Avise ao reservar para prepararmos tudo para o seu companheiro.",
      },
    },
    {
      pregunta: {
        es: "¿Cómo es la seña para reservar?",
        en: "How does the booking deposit work?",
        pt: "Como funciona o sinal para reservar?",
      },
      respuesta: {
        es: "Reservás con el 30% por transferencia y el resto lo abonás al llegar. Te enviamos los datos al confirmar por WhatsApp.",
        en: "You book with a 30% bank transfer and pay the rest on arrival. We send you the details when confirming over WhatsApp.",
        pt: "Você reserva com 30% por transferência e paga o restante na chegada. Enviamos os dados ao confirmar pelo WhatsApp.",
      },
    },
    {
      pregunta: {
        es: "¿Cómo llego al complejo?",
        en: "How do I get to the complex?",
        pt: "Como chego ao complexo?",
      },
      respuesta: {
        es: "Estamos en el Circuito Chico, Km 18. Se llega en auto en 20 minutos desde el centro o coordinamos traslado desde el aeropuerto.",
        en: "We're on the Circuito Chico, Km 18. It's a 20-minute drive from downtown, or we can arrange an airport transfer.",
        pt: "Estamos no Circuito Chico, Km 18. Chega-se de carro em 20 minutos do centro, ou coordenamos traslado do aeroporto.",
      },
    },
  ],

  /* ----------------------------------------------------------------------
     7) I18N — textos de la INTERFAZ por idioma (botones, títulos, labels).
        El contenido (cabañas, faq...) ya tiene su traducción arriba.
        {precio} = plantilla que app.js reemplaza por el número formateado.
     ---------------------------------------------------------------------- */
  i18n: {
    es: {
      // Moneda para los precios "desde".
      moneda: "$",
      porNoche: "por noche",
      desde: "desde",
      // Hero + buscador
      buscarCheckin: "Check-in",
      buscarCheckout: "Check-out",
      buscarHuespedes: "Huéspedes",
      buscarBtn: "Consultar disponibilidad",
      heroCta: "Ver cabañas",
      // Secciones
      seccionCabanas: "Nuestras cabañas",
      seccionCabanasSub: "Seis refugios de madera, todos con vista al lago.",
      seccionZona: "La zona",
      seccionZonaSub: "Estás a minutos de lo mejor del Circuito Chico.",
      seccionResenas: "Lo que dicen nuestros huéspedes",
      seccionFaq: "Preguntas frecuentes",
      aMinutos: "min en auto",
      // Cabaña / tarjetas
      hasta: "Hasta",
      personas: "personas",
      persona: "persona",
      verMas: "Ver más",
      reservar: "Reservar por WhatsApp",
      galeria: "Galería",
      cerrar: "Cerrar",
      // Amenities (etiquetas de los chips)
      amenities: {
        lago: "Vista al lago",
        parrilla: "Parrilla",
        lena: "Estufa a leña",
        wifi: "Wifi",
        cochera: "Cochera",
        ropa: "Ropa de cama",
        desayuno: "Desayuno",
        mascota: "Pet friendly",
      },
      // Footer
      footerContacto: "Contacto",
      footerUbicacion: "Ubicación",
      footerSeguinos: "Seguinos",
      footerComoLlegar: "Cómo llegar",
      footerDerechos: "Todos los derechos reservados.",
      footerDemo: "Sitio de demostración.",
      whatsappFlotante: "Escribinos",
      idiomaLabel: "Idioma",
      // Mensajes de WhatsApp (se arman en app.js).
      waGeneral: "Hola! Vi la web de Cabañas Los Coihues y quiero hacer una consulta.",
      waBuscador:
        "Hola! Vi la web y quiero consultar disponibilidad. Check-in: {checkin}, Check-out: {checkout}, Huéspedes: {huespedes}.",
      waCabana:
        "Hola! Vi la web y me interesa la cabaña {cabana}. ¿Está disponible?",
      // Validación del buscador
      errorFechas: "Elegí las fechas de check-in y check-out.",
      errorOrden: "El check-out tiene que ser posterior al check-in.",
    },
    en: {
      moneda: "$",
      porNoche: "per night",
      desde: "from",
      buscarCheckin: "Check-in",
      buscarCheckout: "Check-out",
      buscarHuespedes: "Guests",
      buscarBtn: "Check availability",
      heroCta: "See cabins",
      seccionCabanas: "Our cabins",
      seccionCabanasSub: "Six wooden retreats, all with a lake view.",
      seccionZona: "The area",
      seccionZonaSub: "You're minutes from the best of Circuito Chico.",
      seccionResenas: "What our guests say",
      seccionFaq: "Frequently asked questions",
      aMinutos: "min by car",
      hasta: "Up to",
      personas: "guests",
      persona: "guest",
      verMas: "See more",
      reservar: "Book via WhatsApp",
      galeria: "Gallery",
      cerrar: "Close",
      amenities: {
        lago: "Lake view",
        parrilla: "Grill",
        lena: "Wood stove",
        wifi: "Wifi",
        cochera: "Parking",
        ropa: "Bed linen",
        desayuno: "Breakfast",
        mascota: "Pet friendly",
      },
      footerContacto: "Contact",
      footerUbicacion: "Location",
      footerSeguinos: "Follow us",
      footerComoLlegar: "Get directions",
      footerDerechos: "All rights reserved.",
      footerDemo: "Demo site.",
      whatsappFlotante: "Message us",
      idiomaLabel: "Language",
      waGeneral: "Hi! I saw the Cabañas Los Coihues website and I'd like to ask a question.",
      waBuscador:
        "Hi! I saw the website and I'd like to check availability. Check-in: {checkin}, Check-out: {checkout}, Guests: {huespedes}.",
      waCabana:
        "Hi! I saw the website and I'm interested in the {cabana} cabin. Is it available?",
      errorFechas: "Please choose check-in and check-out dates.",
      errorOrden: "Check-out must be after check-in.",
    },
    pt: {
      moneda: "$",
      porNoche: "por noite",
      desde: "a partir de",
      buscarCheckin: "Check-in",
      buscarCheckout: "Check-out",
      buscarHuespedes: "Hóspedes",
      buscarBtn: "Consultar disponibilidade",
      heroCta: "Ver chalés",
      seccionCabanas: "Nossos chalés",
      seccionCabanasSub: "Seis refúgios de madeira, todos com vista para o lago.",
      seccionZona: "A região",
      seccionZonaSub: "Você está a minutos do melhor do Circuito Chico.",
      seccionResenas: "O que dizem nossos hóspedes",
      seccionFaq: "Perguntas frequentes",
      aMinutos: "min de carro",
      hasta: "Até",
      personas: "hóspedes",
      persona: "hóspede",
      verMas: "Ver mais",
      reservar: "Reservar pelo WhatsApp",
      galeria: "Galeria",
      cerrar: "Fechar",
      amenities: {
        lago: "Vista para o lago",
        parrilla: "Churrasqueira",
        lena: "Lareira a lenha",
        wifi: "Wifi",
        cochera: "Garagem",
        ropa: "Roupa de cama",
        desayuno: "Café da manhã",
        mascota: "Pet friendly",
      },
      footerContacto: "Contato",
      footerUbicacion: "Localização",
      footerSeguinos: "Siga-nos",
      footerComoLlegar: "Como chegar",
      footerDerechos: "Todos os direitos reservados.",
      footerDemo: "Site de demonstração.",
      whatsappFlotante: "Fale conosco",
      idiomaLabel: "Idioma",
      waGeneral: "Olá! Vi o site das Cabañas Los Coihues e gostaria de fazer uma pergunta.",
      waBuscador:
        "Olá! Vi o site e gostaria de consultar disponibilidade. Check-in: {checkin}, Check-out: {checkout}, Hóspedes: {huespedes}.",
      waCabana:
        "Olá! Vi o site e tenho interesse no chalé {cabana}. Está disponível?",
      errorFechas: "Escolha as datas de check-in e check-out.",
      errorOrden: "O check-out deve ser depois do check-in.",
    },
  },

  // Idioma por defecto al abrir ("es", "en" o "pt").
  idiomaInicial: "es",
};
