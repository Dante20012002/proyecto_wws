const footerLinks = [
  {
    title: 'Menu',
    links: [
      { text: 'Home', href: '/' },
      { text: 'Sobre Nosotros', href: '/sobre-nosotros' },
      { text: 'Productos', href: '/productos' },
      { text: 'Donde Hemos Estado', href: '/#mapa', isScroll: true, needsBase: true },
      { text: 'Contacto', href: '/#contacto', isScroll: true, needsBase: true },
      { text: 'Noticias', href: '/noticias' },
    ],
  },
  {
    title: 'Servicios',
    links: [
      { text: 'Control de Caudal', href: '/productos#control-caudal' },
      { text: 'Pretratamiento', href: '/productos#pretratamiento' },
      { text: 'Clarificación', href: '/productos#clarificacion' },
      { text: 'Tratamiento de Lodos', href: '/productos#tratamiento-lodos' },
      { text: 'Ingeniería', href: '/productos#ingenieria' },
    ],
  },
  {
    title: 'Sobre Nosotros',
    links: [
      { text: 'Nuestra Historia', href: '/sobre-nosotros' },
      { text: 'Misión y Visión', href: '/sobre-nosotros#mision-vision' },
      { text: 'Nuestro Equipo', href: '/sobre-nosotros#equipo' },
      { text: 'Certificaciones', href: '/sobre-nosotros#certificaciones' },
    ],
  },
];

export default footerLinks;
