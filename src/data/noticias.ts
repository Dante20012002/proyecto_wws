export interface Noticia {
  titulo: string;
  resumen: string;
  slug: string;
  imagenes: string[];
  contenido: string;
}

const noticias: Noticia[] = [
  {
    titulo: "PTAR NEMOCON",
    resumen: "Planta de 32 l/s entregada en 2016, con sedimentador, compuertas, espesadores gravimétricos, filtro prensa y filtros de arena.",
    slug: "ptar-nemocon",
    imagenes: ["/assets/NEMOCON 1.jpg", "/assets/NEMOCON 2.jpg"],
    contenido: `<p>Proyecto destacado en Nemocón. <a href='https://ejemplo.com/nemocon' target='_blank'>Ver más</a></p>`
  },
  {
    titulo: "PTAR SESQUILE",
    resumen: "Para este proyecto suministramos el sedimentador de la PTAR en el año 2010, esta planta está diseñada para 15 l/s.",
    slug: "ptar-sesquile",
    imagenes: ["/assets/SESQUILE 1.JPG"],
    contenido: `<p>Planta de Sesquilé, entrega y operación exitosa.</p>`
  },
  {
    titulo: "PTAR Y PTAP TOCANCIPÁ LOS PATOS",
    resumen: "Planta de 70 l/s puesta en operación en 2018, con sedimentador y todos los trenes de floculación suministrados.",
    slug: "ptar-tocancipa-los-patos",
    imagenes: ["/assets/LOS PATOS 1.jpg", "/assets/LOS PATOS 2.jpg"],
    contenido: `<p>Proyecto integral en Tocancipá.</p>`
  },
  {
    titulo: "PTAR FUSAGASUGÁ",
    resumen: "Planta de 90 l/s operativa desde 2020, con sedimentador, distribuidores de flujo, compuertas y tamiz rotativo.",
    slug: "ptar-fusagasuga",
    imagenes: ["/assets/fusagasuga 1.jpg", "/assets/fusagasuga 2.jpg"],
    contenido: `<p>Fusagasugá: innovación en tratamiento de aguas.</p>`
  },
  {
    titulo: "PTAR VERGANZO TOCANCIPÁ",
    resumen: "PTAR optimizada para 60 l/s en 2024, con equipo de cribado automático y floculación primaria suministrada.",
    slug: "ptar-verganzo-tocancipa",
    imagenes: ["/assets/Verganzo 1.jpg", "/assets/Verganzo 2.jpg"],
    contenido: `<p>Modernización de la planta Verganzo.</p>`
  },
  {
    titulo: "PTAR ARMENIA",
    resumen: "Planta de 81 l/s entregada en 2015, con espesador, distribuidor de flujo, barredor de lodos y desarenador.",
    slug: "ptar-armenia",
    imagenes: ["/assets/ARMENIA 1.jpg", "/assets/ARMENIA 2.JPG"],
    contenido: `<p>Proyecto Armenia, referencia nacional.</p>`
  },
  {
    titulo: "PTAR CHITRÉ PANAMÁ",
    resumen: "Planta de 1100 m³/h con barredores de lodos suministrados en 2015 y repuestos vendidos en 2025.",
    slug: "ptar-chitre-panama",
    imagenes: ["/assets/CHITRE 1.jpg", "/assets/CHITRE 2.jpg"],
    contenido: `<p>Exportación de tecnología a Panamá.</p>`
  },
  {
    titulo: "PTAR SANTANDER",
    resumen: "PTAR diseñada para 672 l/s en 2015, con puentes desarenadores, compuertas manuales y sistema de aireación suministrados.",
    slug: "ptar-santander",
    imagenes: ["/assets/Sedimentador.jpg"],
    contenido: `<p>Innovación en aireación y sedimentación.</p>`
  },
  {
    titulo: "PTAR TENJO",
    resumen: "Proyecto de 384 l/s con entregas desde 2015: 6 sedimentadores, 4 espesadores gravimétricos y 1 tea quemadora de gas.",
    slug: "ptar-tenjo",
    imagenes: ["/assets/Tenjo 1.png"],
    contenido: `<p>Tenjo: eficiencia y capacidad.</p>`
  },
  {
    titulo: "PTAR GRAMALOTE",
    resumen: "Planta de 18 l/s entregada en 2017 con sedimentadores, distribuidores, tea quemadora, compuertas y rejillas.",
    slug: "ptar-gramalote",
    imagenes: ["/assets/Gramalote 1.jpg", "/assets/Gramalote 2.jpg"],
    contenido: `<p>Gramalote: soluciones integrales.</p>`
  }
];

export default noticias; 