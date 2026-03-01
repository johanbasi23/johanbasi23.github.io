// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Johan Basilio",
  title: "Johan Basilio | Portfolio",
  description: "Portfolio de Johan Ariel Basilio Cárdenas, estudiante de Ingeniería en Telemática y Analista de Datos en formación.",
  
  // Navigation
  navigation: {
    home: "Inicio",
    posts: "Proyectos",
    contact: "Contacto",
    comments: "Comentarios",
  },
  
  // Hero Section
  hero: {
    prefix: "Hola, soy",
    name: "Johan Basilio",
    intro: "Estudiante de Ingeniería en Telemática y Analista de Datos en formación.\nEnfocado en cloud, redes y análisis de datos.",
    avatar: "/image/20943608.jpeg",
    buttons: {
      viewPosts: "Ver Proyectos",
      contactMe: "Contáctame",
    },
    socialLinks: [
      { name: "LinkedIn", icon: "/svg/linkedin.svg", "https://www.linkedin.com/in/johan-ariel-basilio-cardenas-943067299" },
    ],
  },
  
  // About Section
  about: {
    title: "Sobre mi",
    text: "Estudiante de Ingeniería en Telemática con enfoque en cloud y análisis de datos. Me encuentro en una etapa de exploración, consolidando conocimientos en Python, SQL, Power BI y redes, mientras defino mi especialización. Disfruto los retos técnicos y creo que publicar mis proyectos, aunque sean iniciales, es parte del proceso de crecer como profesional. Fuera de la pantalla, soy fanático del Barça y la música es mi compañía constante.",
  },
  
  // Contact Page
  contact: {
    title: "Contáctame",
    subtitle: "Siempre estoy abierto a conversar sobre nuevos proyectos, ideas o simplemente conectar.",
    info: {
      email: {
        label: "Correo",
        value: "johanbasilio23@gmail.com",
        link: "mailto:johanbasilio23@gmail.com",
      },
      phone: {
        label: "Teléfono",
        value: "+593 99 178 2071",
        link: "tel:+593 99 178 2071",
      },
      location: {
        label: "Ubicacion",
        value: "Ecuador, GYE",
      },
    },
    followMe: {
      title: "Sígueme",
      links: [
        { name: "LinkedIn", icon: "/svg/linkedin.svg", url: https://www.linkedin.com/in/johan-ariel-basilio-cardenas-943067299" },
      ],
    },
    footerText: [
      "Suelo estar activo 🤓👆",
      "Sin compromiso",
    ],
    messageButton: "💬 Dejar un mensaje",
  },
  
  // Footer
  footer: {
    copyright: "© 2025 Johan Basilio. Todos los derechos reservados.",
    links: [],
    github: {
      text: "Ver en GitHub",
      url: "https://github.com/johanbasi23",
    },
  },
  
  // Posts Page
  posts: {
    title: "Proyectos",
    subtitle: "Una colección de mis proyectos y actividades académicas... pequeños pasos en un camino que apenas empieza.",
    searchPlaceholder: "Buscar proyectos...",
  },
  
  // Comments Page
  comments: {
    title: "Comentarios y Discusión",
    subtitle: "Comparte tus ideas, preguntas o sugerencias.",
    guidelines: {
      title: "",
      items: [],
    },
  },
};

