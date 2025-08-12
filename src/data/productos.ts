export interface Accesorio {
  nombre: string;
}

export interface Marcador3D {
  x: number;
  y: number;
  z: number;
  label: Accesorio[];
}

export interface SubProducto {
  id: string;
  nombre: string;
  descripcion: string;
  descripcionLarga: string;
  imagen: string;
  slug: string;
  modelo3d?: string;
  marcadores3d?: Marcador3D[];
  qr?: string;
  formUrl?: string;
  pdf?: string;
  marca?: string;
}

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  descripcionLarga: string;
  imagen: string; // principal
  imagenes?: string[]; // galería
  slug: string;
  categoria: string;
  accesorios?: Accesorio[];
  modelo3d?: string;
  marcadores3d?: Marcador3D[];
  pdf?: string;
  marca?: string;
  subProductos?: SubProducto[]; // Nuevo: subdivisiones del producto
  qr?: string;
  formUrl?: string;
}

export const productos: Producto[] = [
  // CONTROL DE CAUDAL
  {
    id: 1,
    nombre: 'W-CPM COMPUERTA MURAL',
    descripcion: 'Compuerta mural para regulación de caudal en canal mediante escudo móvil.',
    descripcionLarga: 'La compuerta mural W CPM es un equipo hidráulico diseñado para regular caudales o aislar estructuras en plantas de tratamiento. Fabricada en acero al carbono, galvanizado, acero inoxidable o aluminio, se adapta a distintas condiciones operativas y ambientales. Su obturador se acciona verticalmente mediante un sistema de izaje, compatible con actuadores manuales o eléctricos. El diseño incluye sello en los cuatro lados, lo que permite una operación hermética bajo cargas hidrostáticas a favor y en contra, evitando fugas y asegurando un control eficiente del flujo.',
    imagen: '/assets/Productos/1.jpg',
    slug: 'compuerta-mural',
    categoria: 'CONTROL DE CAUDAL',
    modelo3d: '/models/1.1 W-CPM R001.glb',
    qr: '/assets/QR/1.1 WWS W-CPM AR.png',
    pdf: 'https://drive.google.com/uc?export=download&id=1U77g5QxfLzy6ZiWPgwkXoOkl4z7_D4M2',
    formUrl: 'https://forms.office.com/Pages/ResponsePage.aspx?id=3VHHd2MdYU2Z8buF13zow9TfpytasxRPnU81r6iwMY1UNlhIUkdMOVg1MUkwOEZZSFczUzNDSkRLNyQlQCN0PWcu',
    marcadores3d: [
      {
        x: -0.404299999999999, y: 0.41056953253830697, z: -0.14086978158773777,
        label: [{ nombre: 'Obra Civil Con Pase Hidráulico' }],
      },
      {
        x: 0.34550000000000003, y: -0.7699, z: -0.002401534275545694,
        label: [{ nombre: 'Obturador' }],
      },
      {
        x: -0.17325557982475953, y: -0.6546891548696081, z: -0.11680000004768279,
        label: [{ nombre: 'Esquema de Estanqueidad' }],
      },
      {
        x: 0.9004999998092649, y: 0.3590577269455435, z: -0.07671179391551707,
        label: [{ nombre: 'Marco Estructural' }],
      },
      {
        x: 0.35325914842274214, y: -0.07304145663446904, z: -0.04698626671524325,
        label: [{ nombre: 'Vástago' }],
      },
      {
        x: 0.34656044379960954, y: 0.5608762399636784, z: 0.04162998400075424,
        label: [{ nombre: 'Esquema de Izaje' }],
      },
    ],
  },
  {
    id: 2,
    nombre: 'W-CPC COMPUERTA CANAL ABIERTO',
    descripcion: 'Compuerta de hoja vertical para control de nivel y bloqueos en canales abiertos.',
    descripcionLarga: 'La compuerta tipo canal abierto W CPC está diseñada para regular el flujo en canales de tratamiento o conducción de aguas residuales. Fabricada en acero al carbono, galvanizado, acero inoxidable o aluminio, se adapta a diversas condiciones hidráulicas y ambientales. Su obturador se acciona verticalmente mediante un sistema de izaje con vástago ascendente, operado de forma manual o eléctrica. El sistema de sellado en tres lados (laterales e inferior) proporciona un cierre eficiente frente a la presión de aguas arriba, ideal para maniobras de control de nivel, aislamiento parcial o bloqueo temporal para mantenimiento.',
    imagen: '/assets/Productos/2.jpg',
    slug: 'compuerta-canal-abierto',
    categoria: 'CONTROL DE CAUDAL',
    modelo3d: '/models/1.2 W-CPC R001.glb',
    qr: '/assets/QR/1.2 WWS W-CPC.png',
    pdf: 'https://drive.google.com/uc?export=download&id=1U77g5QxfLzy6ZiWPgwkXoOkl4z7_D4M2',
    formUrl: 'https://forms.office.com/Pages/ResponsePage.aspx?id=3VHHd2MdYU2Z8buF13zow9TfpytasxRPnU81r6iwMY1UNzFFWjY2MVlUUFFGUUw5VkpVN0JYUzk5NCQlQCN0PWcu',
    marcadores3d: [
      {
        x: -0.003186200719598067, y: -0.6178383213638442, z: 0.2555,
        label: [{ nombre: 'Obra Civil Con Pase Hidráulico' }],
      },
      {
        x: 0.0018184148227173287, y: 0.5379323416180531, z: 0.08656901124123755,
        label: [{ nombre: 'Obturador' }],
      },
      {
        x: -0.5414033994400831, y: 0.6216893066420072, z: -0.052083768588296095,
        label: [{ nombre: 'Esquema de Estanqueidad' }],
      },
      {
        x: 0.5518500137329102, y: 1.7228807970679068, z: 0.011942292737985555,
        label: [{ nombre: 'Marco Estructural' }],
      },
      {
        x: -0.0009394591150247308, y: 1.1762151810032262, z: 0.027777941932934445,
        label: [{ nombre: 'Vástago' }],
      },
      {
        x: -0.004453387722667172, y: 1.8730558270731175, z: 0.11904597326158248,
        label: [{ nombre: 'Esquema de Izaje' }],
      },
    ],
  },
  {
    id: 3,
    nombre: 'W-CPS COMPUERTA STOP LOG',
    descripcion: 'Elemento modular de cierre manual para seccionar rápidamente líneas de agua.',
    descripcionLarga: 'La compuerta tipo Stop Log W CPS está diseñada para el aislamiento temporal de canales o estructuras durante labores de mantenimiento o intervención operativa. Su diseño modular permite apilar uno o más elementos tipo “log” en guías laterales, adaptando la altura de cierre según los requerimientos del proceso. Se fabrica en acero al carbono, galvanizado, acero inoxidable o aluminio, y cuenta con un sistema de sellado en tres lados que garantiza estanqueidad ante presión unidireccional. La instalación y el retiro de los módulos se realiza manualmente mediante barra de izaje, cabrestante o pinza de sujeción automática, lo que permite una operación rápida, y segura.',
    imagen: '/assets/Productos/3.Proyector Compuertas Actuadas.jpg',
    slug: 'compuerta-stop-log',
    categoria: 'CONTROL DE CAUDAL',
    modelo3d: '/models/1.3 W-CPS.glb',
    qr: '/assets/QR/1.3 WWS W-CPS.png',
    pdf: 'https://drive.google.com/uc?export=download&id=1U77g5QxfLzy6ZiWPgwkXoOkl4z7_D4M2',
    formUrl: 'https://forms.office.com/Pages/ResponsePage.aspx?id=3VHHd2MdYU2Z8buF13zow9TfpytasxRPnU81r6iwMY1UMU41RUtTR09INjZTNUhTTDlSMUowRFA2OSQlQCN0PWcu',
    marcadores3d: [
      {
        x: -0.0031261597519264533, y: 0.8280217003658756, z: 0.0225,
        label: [{ nombre: 'Obturador Log' }],
      },
      {
        x: -0.5340162365056494, y: 1.0302817440329366, z: -0.05250000000000057,
        label: [{ nombre: 'Esquema de Estanqueidad' }],
      },
      {
        x: 0.5518500137329102, y: 1.7085153332394807, z: 0.0051113250045705175,
        label: [{ nombre: 'Marco Estructural' }],
      },
    ],
  },
  {
    id: 4,
    nombre: 'W-CPR COMPUERTA RADIAL',
    descripcion: 'Compuerta curvada que ajusta el flujo gradualmente con perfil sectorial.',
    descripcionLarga: 'La compuerta radial W CPR es un dispositivo hidráulico diseñado para regular grandes caudales en estructuras como canales, aliviaderos o vertederos. Su obturador curvo se apoya en un sistema de pivote superior, lo que permite un giro suave y eficiente bajo cargas hidráulicas elevadas. Esta geometría reduce las fuerzas estructurales y facilita la operación, minimizando el desgaste por fricción. Puede fabricarse en acero al carbono, galvanizado, acero inoxidable o aluminio, y su diseño incluye sistema de sellado lateral e inferior para garantizar estanqueidad durante la operación. Es compatible con apertura por elevación o descenso, según el tipo de instalación (vertedero o muro de contención), y puede ser accionada manualmente, por cabrestante o mediante actuadores eléctricos, electrohidráulicos o electroneumáticos. La compuerta W CPR es ideal para aplicaciones que requieren regulación fina del caudal, maniobras seguras y durabilidad estructural en condiciones exigentes.',
    imagen: '/assets/Productos/4.MONTAJE SIN OBRA CIVIL.jpg',
    slug: 'compuerta-radial',
    categoria: 'CONTROL DE CAUDAL',
    modelo3d: '/models/1.4 W-CPR.glb',
    qr: '/assets/QR/1.4 WWS W-CPR.png',
    pdf: 'https://drive.google.com/uc?export=download&id=1U77g5QxfLzy6ZiWPgwkXoOkl4z7_D4M2',
    formUrl: 'https://forms.office.com/Pages/ResponsePage.aspx?id=3VHHd2MdYU2Z8buF13zow9TfpytasxRPnU81r6iwMY1UQ0tRUFZUSlMzT0RVUEJSSENWQllNWTY0MyQlQCN0PWcu',
    marcadores3d: [
      {
        x: -0.022028782608019853, y: 3.127452613002659, z: 0.509431145627099,
        label: [{ nombre: 'Obturador' }],
      },
      {
        x: -0.7572499990462246, y: 3.826033073722239, z: -0.42195227254179946,
        label: [{ nombre: 'Esquema de Estanqueidad' }],
      },
      {
        x: -0.5322499999403918, y: 2.58484805082915, z: -0.1814007610134738,
        label: [{ nombre: 'Marco Pivotante' }],
      },
      {
        x: -0.6566999961853022, y: 1.2011172130602197, z: -1.801273827670546,
        label: [{ nombre: 'Pivote' }],
      },
      {
        x: 0.5756788528840571, y: 1.2965689455147091, z: -2.0913138722402476,
        label: [{ nombre: 'Esquema de Sujección' }],
      },
      {
        x: -0.8000000002384178, y: 1.1853639318473062, z: 1.1991461259586624,
        label: [{ nombre: 'Marco Guía' }],
      },
    ],
  },

  // DRAGADO Y PRETRATAMIENTO
  {
    id: 5,
    nombre: 'C-CB CUCHARA BIVALVA',
    descripcion: 'Cuchara de dos valvas para extracción y transporte de sólidos en fondo de canales.',
    descripcionLarga: 'La cuchara bivalva C-CB es un equipo especializado para la extracción y transporte de sólidos sedimentados en el fondo de canales de tratamiento de aguas residuales. Su diseño de dos valvas articuladas permite capturar eficientemente los lodos y sedimentos acumulados, facilitando su remoción sin interrumpir el flujo del proceso. Fabricada en acero al carbono o inoxidable. Su operación puede ser manual o automatizada, adaptándose a las necesidades específicas de cada planta. Ideal para el mantenimiento preventivo y la limpieza de canales de sedimentación.',
    imagen: '/assets/Productos/0.jpg',
    slug: 'cuchara-bivalva',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
    pdf: 'https://drive.google.com/uc?export=download&id=1FrwtsfHeiy8W0pHCo_i8iYjWTK_kyPtD',
    modelo3d: '/models/2.1 C-CB 3D.glb',
    qr: '/assets/QR/2.1 WWS C-CB 3D AR.jpg',
    formUrl: 'https://forms.office.com/Pages/ResponsePage.aspx?id=3VHHd2MdYU2Z8buF13zow9TfpytasxRPnU81r6iwMY1UQjM2TEJBNEhNMEJVVFc4QVVEUTlZTlNCSyQlQCN0PWcu',
    marcadores3d: [
      {
        x: 0.002069352458137539, y: -0.12759864480690686, z: 0.25367478605882854,
        label: [{ nombre: 'Cuerpo Principal' }],
      },
      {
        x: 0.5529943062649031, y: -1.1374182157364678, z: 0.35449999999999876,
        label: [{ nombre: 'Valva' }],
      },
      {
        x: 0.42923624532950444, y: -0.4259714710610246, z: 0.01396097856062986,
        label: [{ nombre: 'Sistema Hidráulico' }],
      },
    ],
  },
  {
    id: 6,
    nombre: 'X REJILLAS AUTOMÁTICAS',
    descripcion: 'Rejilla de limpieza automática para retención de sólidos gruesos, medios y finos en canales.',
    descripcionLarga: 'Las rejillas automáticas XS Solutions son sistemas avanzados de cribado diseñados para la retención automática de sólidos de diferentes tamaños en canales de tratamiento de aguas residuales. Su sistema de limpieza automática elimina la necesidad de intervención manual, reduciendo costos operativos y mejorando la eficiencia del proceso. Disponibles en diferentes configuraciones para sólidos gruesos, medios y finos, estas rejillas previenen el daño a equipos aguas abajo y optimizan el rendimiento de las etapas posteriores del tratamiento. Fabricadas con materiales resistentes a la corrosión, incluyen sensores de nivel y control automático que se adaptan a las variaciones de caudal.',
    imagen: '/assets/Productos/1. 1722508586316.jpg',
    slug: 'rejillas-automaticas',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
    marca: 'XS Solutions',
    pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
    subProductos: [
      {
        id: 'x-rake',
        nombre: 'X-RAKE / X-H.RAKE REJILLA DE GRUESOS, MEDIOS Y FINOS',
        descripcion: 'Rejilla automática de rastrillos para retención de sólidos gruesos, medios y finos.',
        descripcionLarga: 'La rejilla X-RAKE / X-H.RAKE es un sistema automático de cribado que utiliza rastrillos para la retención eficiente de sólidos gruesos, medios y finos en canales de tratamiento de aguas residuales. Su sistema de limpieza automática con rastrillos elimina la necesidad de intervención manual, reduciendo costos operativos y mejorando la eficiencia del proceso. El diseño incluye sensores de nivel y control automático que se adaptan a las variaciones de caudal, garantizando un cribado continuo y eficiente.',
        imagen: '/assets/Productos/X-RAKE.png',
        slug: 'x-rake-rejilla-gruesos',
        modelo3d: '/models/X-RAKE.glb',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      },
      {
        id: 'x-step',
        nombre: 'X-STEP REJILLA DE ESCALONES',
        descripcion: 'Rejilla automática de escalones para cribado eficiente de sólidos.',
        descripcionLarga: 'La rejilla X-STEP es un sistema automático de cribado que utiliza un mecanismo de escalones para la retención eficiente de sólidos en canales de tratamiento de aguas residuales. Su diseño único de escalones permite un cribado continuo y automático, eliminando la necesidad de paradas para limpieza manual. El sistema incluye sensores de nivel y control automático que optimizan el rendimiento según las condiciones de operación.',
        imagen: '/assets/Productos/X-STEP.png',
        slug: 'x-step-rejilla-escalones',
        modelo3d: '/models/X-STEP.glb',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      }
    ]
  },
  {
    id: 7,
    nombre: 'X FILTROS TORNILLO',
    descripcion: 'Sistema compacto que tamiza y transporta sólidos en una sola unidad. Opcionalmente, se puede añadir una zona de compactación.',
    descripcionLarga: 'Los filtros tornillo XS Solutions son sistemas compactos e innovadores que combinan el cribado y transporte de sólidos en una sola unidad operativa. Su diseño integrado elimina la necesidad de equipos separados, reduciendo el espacio requerido y los costos de instalación. El sistema de tornillo sin fin transporta automáticamente los sólidos cribados hacia una zona de descarga, mientras que la opción de compactación reduce el volumen de residuos para facilitar su disposición final. Fabricados en acero inoxidable de alta calidad, estos filtros son ideales para plantas de tratamiento con limitaciones de espacio que requieren un sistema de cribado eficiente y compacto.',
    imagen: '/assets/Productos/2. 143246876_774032859861155_2466509016048709070_n.jpg',
    slug: 'filtros-tornillo',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
    marca: 'XS Solutions',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
    subProductos: [
      {
        id: 's-filtro-tornillo',
        nombre: 'S FILTRO TORNILLO / SC FILTRO TORNILLO COMPACTADOR',
        descripcion: 'Filtro tornillo estándar y compactador para separación y transporte de sólidos.',
        descripcionLarga: 'El S Filtro Tornillo y SC Filtro Tornillo Compactador son equipos diseñados para la separación y transporte eficiente de sólidos en plantas de tratamiento. El modelo compactador incluye una zona adicional para reducir el volumen de residuos.',
        imagen: '/assets/Productos/S FILTRO TORNILLO.jpg',
        slug: 's-filtro-tornillo-compactador',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      },
      {
        id: 's-mini',
        nombre: 'S.MINI MINI FILTRO TORNILLO',
        descripcion: 'Filtro tornillo compacto para aplicaciones de menor escala.',
        descripcionLarga: 'El S.MINI es un filtro tornillo de tamaño reducido, ideal para instalaciones pequeñas o aplicaciones piloto que requieren separación eficiente de sólidos en poco espacio.',
        imagen: '/assets/Productos/S MINI MINI FLTRO TORNILLO.jpg',
        slug: 's-mini-mini-filtro-tornillo',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      },
      {
        id: 'ts-filtro-tornillo',
        nombre: 'TS FILTRO TORNILLO CON TANQUE / TSC FILTRO TORNILLO COMPACTADOR CON TANQUE',
        descripcion: 'Filtro tornillo con tanque integrado para mayor capacidad y eficiencia.',
        descripcionLarga: 'El TS Filtro Tornillo y TSC Filtro Tornillo Compactador con Tanque integran un tanque de almacenamiento para aumentar la capacidad de procesamiento y mejorar la eficiencia en la separación y compactación de sólidos.',
        imagen: '/assets/Productos/ts-filtro-tornillo.jpg',
        slug: 'ts-filtro-tornillo-tanque',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      },
      {
        id: 'vs-filtro-tornillo',
        nombre: 'VS FILTRO TORNILLO VERTICAL / VSC FILTRO TORNILLO COMPACTADOR VERTICAL',
        descripcion: 'Filtro tornillo vertical para optimización de espacio y compactación.',
        descripcionLarga: 'El VS Filtro Tornillo Vertical y VSC Compactador Vertical están diseñados para instalaciones donde el espacio es limitado, permitiendo una separación y compactación eficiente de sólidos en orientación vertical.',
        imagen: '/assets/Productos/VS FILTRO TORNILLO VERTICAL.jpg',
        slug: 'vs-filtro-tornillo-vertical',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      }
    ],
  },
  {
    id: 8,
    nombre: 'X REJILLAS DE TAMBOR',
    descripcion: 'Tambor rotativo para cribado fino de sólidos en lineas, canales o tanques.',
    descripcionLarga: 'Las rejillas de tambor XS Solutions son sistemas de cribado fino que utilizan un tambor rotativo para la separación eficiente de sólidos en líneas, canales o tanques de tratamiento de aguas residuales. Su diseño rotativo permite un cribado continuo y automático, eliminando la necesidad de paradas para limpieza manual. El tambor está fabricado con malla de acero inoxidable de alta precisión, garantizando una separación uniforme de sólidos finos. Su sistema de limpieza integrado mantiene la eficiencia del cribado y previene la obstrucción. Ideal para aplicaciones que requieren cribado fino y continuo en sistemas de tratamiento de aguas residuales.',
    imagen: '/assets/Productos/3. 93888766_595226131075163_3212793549254819840_n.jpg',
    slug: 'rejillas-tambor',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
    marca: 'XS Solutions',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
    subProductos: [
      {
        id: 'x-drum',
        nombre: 'X-DRUM REJILLA DE ALIMENACIÓN EXTERNA A TAMBOR ROTATIVO',
        descripcion: 'Rejilla de alimentación externa para separación eficiente de sólidos.',
        descripcionLarga: 'La X-DRUM es una rejilla de tambor rotativo con alimentación externa, diseñada para separar sólidos de manera eficiente en procesos de tratamiento de aguas. Su diseño permite un cribado continuo y automático, ideal para aplicaciones industriales y municipales.',
        imagen: '/assets/Productos/x-drum.jpg',
        slug: 'x-drum-rejilla-alimentacion-externa',
        marca: 'XS Solutions',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      },
      {
        id: 'x-int-drum',
        nombre: 'X-INT.DRUM REJILLA DE ALIMENACIÓN INTERNA A TAMBOR ROTATIVO',
        descripcion: 'Rejilla de alimentación interna para cribado fino y continuo.',
        descripcionLarga: 'La X-INT.DRUM es una rejilla de tambor rotativo con alimentación interna, optimizada para el cribado fino y continuo de sólidos en el tratamiento de aguas residuales. Su diseño compacto facilita la integración en sistemas existentes.',
        imagen: '/assets/Productos/X-INT-DRUM.jpg',
        slug: 'x-int-drum-rejilla-alimentacion-interna',
        marca: 'XS Solutions',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      },
      {
        id: 'x-srd',
        nombre: 'X-SRD / X-SRD.D REJILLA DE TAMBOR ROTATIVO INMERSO EN MEDIO A FILTRAR',
        descripcion: 'Rejilla de tambor rotativo sumergida para filtración directa.',
        descripcionLarga: 'La X-SRD y X-SRD.D son rejillas de tambor rotativo diseñadas para operar sumergidas en el medio a filtrar, permitiendo una separación directa y eficiente de sólidos en aplicaciones de alta demanda.',
        imagen: '/assets/Productos/X-SRD.jpg',
        slug: 'x-srd-rejilla-tambor-inmerso',
        marca: 'XS Solutions',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      }
    ],
  },
  {
    id: 9,
    nombre: 'X COMPACTADORES',
    descripcion: 'Equipos que prensan residuos cribados para reducir su volumen y humedad.',
    descripcionLarga: 'Los compactadores XS Solutions son equipos especializados diseñados para reducir el volumen y la humedad de los residuos cribados en plantas de tratamiento de aguas residuales. Su sistema de prensado mecánico aplica presión controlada para extraer el exceso de agua y compactar los sólidos, facilitando su transporte y disposición final. Fabricados en acero inoxidable resistente a la corrosión, incluyen un sistema de control automático que optimiza la presión según el tipo de residuo. Esta reducción de volumen disminuye significativamente los costos de transporte y disposición, mientras que la reducción de humedad mejora la estabilidad de los residuos para su manejo posterior.',
    imagen: '/assets/Productos/4. 84036293_549328035664973_4077440993597587456_n_cleanup.jpg.png',
    slug: 'compactadores',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
    marca: 'XS Solutions',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
    subProductos: [
      {
        id: 'x-s-comp',
        nombre: 'X-S.COMP TORNILLO SIN FIN COMPACTADOR',
        descripcion: 'Tornillo sin fin para compactación eficiente de sólidos cribados.',
        descripcionLarga: 'El X-S.COMP es un tornillo sin fin diseñado para compactar sólidos cribados, reduciendo su volumen y facilitando su disposición final en plantas de tratamiento de aguas.',
        imagen: '/assets/Productos/X-S.COMP TORNILLO SIN FIN COMPACTADOR.jpg',
        slug: 'x-s-comp-tornillo-compactador',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      },
      {
        id: 'x-comp',
        nombre: 'X-COMP TORNILLO SIN FIN COMPACTADOR-LAVADOR',
        descripcion: 'Tornillo sin fin que compacta y lava sólidos cribados.',
        descripcionLarga: 'El X-COMP es un tornillo sin fin que, además de compactar, incorpora un sistema de lavado para mejorar la limpieza de los sólidos cribados antes de su disposición.',
        imagen: '/assets/Productos/X-COMP TORNILLO SIN FIN COMPACTADOR-LAVADOR.jpg',
        slug: 'x-comp-tornillo-compactador-lavador',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      }
    ],
  },
  {
    id: 10,
    nombre: 'X CLASIFICADORES DE ARENA',
    descripcion: 'Equipos diseñados para la separación de materiales arenosos del agua.',
    descripcionLarga: 'Los clasificadores de arena XS Solutions son equipos especializados diseñados para la separación eficiente de materiales arenosos del agua en plantas de tratamiento de aguas residuales. Su sistema de clasificación por gravedad permite separar las partículas de arena de diferentes tamaños, previniendo la abrasión y el desgaste de equipos aguas abajo. El diseño incluye un sistema de lavado que remueve la materia orgánica adherida a las partículas de arena, mejorando la calidad del material separado. Fabricados en acero inoxidable resistente a la corrosión, estos clasificadores son esenciales para proteger bombas, válvulas y otros equipos sensibles de la abrasión causada por partículas arenosas.',
    imagen: '/assets/Productos/5.EQUIPOS DE PRE TRTATAMIENTO X2SOLUTION.jpg',
    slug: 'clasificadores-arena',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
    marca: 'XS Solutions',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
    subProductos: [
      {
        id: 'x-gc',
        nombre: 'X-GC CLASIFICADOR DE ARENAS',
        descripcion: 'Clasificador de arenas para separación eficiente de partículas minerales.',
        descripcionLarga: 'El X-GC es un clasificador de arenas diseñado para separar partículas minerales del agua, protegiendo equipos aguas abajo y mejorando la eficiencia del tratamiento.',
        imagen: '/assets/Productos/X-GC.jpg',
        slug: 'x-gc-clasificador-arenas',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      },
      {
        id: 'x-gc-cone',
        nombre: 'X-GC CONE CLASIFICADOR DE ARENAS CÓNICO',
        descripcion: 'Clasificador de arenas con diseño cónico para mayor eficiencia.',
        descripcionLarga: 'El X-GC CONE es un clasificador de arenas con geometría cónica que mejora la eficiencia de separación y facilita la extracción de partículas minerales.',
        imagen: '/assets/Productos/X-GC CONE.jpg',
        slug: 'x-gc-cone-clasificador-arenas-conico',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      }
    ],
  },
  {
    id: 11,
    nombre: 'X LAVADORES DE ARENA',
    descripcion: 'Unidad que remueve materia orgánica adherida a partículas minerales mediante agitación y agua.',
    descripcionLarga: 'Los lavadores de arena XS Solutions son unidades especializadas diseñadas para remover la materia orgánica adherida a partículas minerales mediante un proceso de agitación y lavado con agua. Su sistema de agitación controlada separa eficientemente la materia orgánica de las partículas de arena, mejorando la calidad del material separado para su reutilización o disposición. El diseño incluye un sistema de recirculación de agua que optimiza el consumo hídrico del proceso. Fabricados en acero inoxidable resistente a la corrosión, estos lavadores son esenciales para plantas que requieren arena limpia para reutilización o que necesitan cumplir con estándares estrictos de calidad en la separación de materiales.',
    imagen: '/assets/Productos/6. Imagen2_LE_upscale_balanced_x4_light_ai_30_tone_enhance_30_color_enhance_30.jpg',
    slug: 'lavadores-arena',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
    marca: 'XS Solutions',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
    subProductos: [
      {
        id: 'x-g-wash',
        nombre: 'X-G.WASH LAVADOR DE ARENAS',
        descripcion: 'Lavador de arenas para remover materia orgánica adherida.',
        descripcionLarga: 'El X-G.WASH es un lavador de arenas diseñado para remover la materia orgánica adherida a partículas minerales, mejorando la calidad del material separado para su reutilización o disposición.',
        imagen: '/assets/Productos/X-G.WASH.jpg',
        slug: 'x-g-wash-lavador-arenas',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      }
    ],
  },
  {
    id: 12,
    nombre: 'X-E DESARENADORES',
    descripcion: 'Sistema para separación de arenas por gravedad o vórtice hidráulico.',
    descripcionLarga: 'Los desarenadores X-E de XS Solutions son sistemas avanzados diseñados para la separación eficiente de arenas mediante principios de gravedad o vórtice hidráulico. Su diseño optimizado permite la separación de partículas arenosas de diferentes tamaños, protegiendo equipos aguas abajo de la abrasión y el desgaste. El sistema de vórtice hidráulico crea un flujo circular que facilita la sedimentación de partículas pesadas, mientras que el diseño por gravedad asegura una separación uniforme. Fabricados en acero inoxidable resistente a la corrosión, incluyen un sistema de extracción automática de arenas que mantiene la eficiencia del proceso. Esenciales para plantas que requieren protección contra la abrasión y optimización del rendimiento de equipos posteriores.',
    imagen: '/assets/Productos/7. EQUIPOS DE PRE TRTATAMIENTO X2SOLUTION.jpg',
    slug: 'desarenadores',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
    marca: 'XS Solutions',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
    subProductos: [
      {
        id: 'x-vortex',
        nombre: 'X-VORTEX DESARENADOR TIPO VORTEX',
        descripcion: 'Desarenador tipo vortex para separación eficiente de arenas.',
        descripcionLarga: 'El X-VORTEX es un desarenador que utiliza un flujo circular para separar partículas arenosas del agua, optimizando la protección de equipos aguas abajo.',
        imagen: '/assets/Productos/X-VORTEX.jpg',
        slug: 'x-vortex-desarenador',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      },
      {
        id: 'e-pba',
        nombre: 'E-PBA PUENTE LONGITUDINAL DESARENADOR',
        descripcion: 'Puente longitudinal para extracción de arenas en tanques desarenadores.',
        descripcionLarga: 'El E-PBA es un sistema de puente longitudinal diseñado para la extracción eficiente de arenas en tanques desarenadores, facilitando el mantenimiento y operación continua.',
        imagen: '/assets/Productos/7. EQUIPOS DE PRE TRTATAMIENTO X2SOLUTION.jpg',
        slug: 'e-pba-puente-longitudinal-desarenador',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      }
    ],
  },
  {
    id: 13,
    nombre: 'X TRATAMIENTOS COMBINADOS',
    descripcion: 'Módulos compactos que integran cribado, desarenado y desengrasado en una sola estructura.',
    descripcionLarga: 'Los tratamientos combinados XS Solutions son módulos compactos e innovadores que integran múltiples procesos de pretratamiento en una sola estructura. Su diseño integrado combina cribado, desarenado y desengrasado, eliminando la necesidad de equipos separados y reduciendo significativamente el espacio requerido. Esta integración optimiza el flujo del proceso y reduce los costos de instalación y mantenimiento. Fabricados en acero inoxidable de alta calidad, incluyen sistemas de control automático que coordinan todos los procesos de manera eficiente. Ideales para plantas con limitaciones de espacio que requieren un pretratamiento completo y eficiente en una solución compacta.',
    imagen: '/assets/Productos/8. 145925091_777582819506159_1644089623811956408_n.jpg',
    slug: 'tratamientos-combinados',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
    marca: 'XS Solutions',
    pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
    subProductos: [
      {
        id: 'set-1',
        nombre: 'SET-1 TOLVA LONGITUDINAL PARA LA SEPARACIÓN DE ARENAS',
        descripcion: 'Tolva longitudinal diseñada para la separación eficiente de arenas en el pretratamiento.',
        descripcionLarga: 'La SET-1 es una tolva longitudinal especialmente diseñada para la separación eficiente de arenas en plantas de tratamiento de aguas residuales. Su diseño optimiza la sedimentación y facilita la extracción de arenas, mejorando la eficiencia global del pretratamiento.',
        imagen: '/assets/Productos/SET-1.jpg',
        slug: 'set-1-tolva-longitudinal',
        modelo3d: '/models/SET-1.glb',
        marcadores3d: [],
        qr: '/assets/qr/set-1-tolva-longitudinal.png',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      },
      {
        id: 'set-2',
        nombre: 'SET-2 UNIDAD COMBINADA',
        descripcion: 'Unidad compacta que integra cribado y desarenado en un solo equipo.',
        descripcionLarga: 'La SET-2 es una unidad combinada que integra los procesos de cribado y desarenado en un solo equipo compacto, ideal para plantas con espacio limitado y altos requerimientos de eficiencia.',
        imagen: '/assets/Productos/SET-2.jpg',
        slug: 'set-2-unidad-combinada',
        modelo3d: '/models/SET-2.glb',
        marcadores3d: [],
        qr: '/assets/qr/set-2-unidad-combinada.png',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      },
      {
        id: 'set-3',
        nombre: 'SET-3 UNIDAD COMBINADA CON SISTEMA DE DESENGRASADO',
        descripcion: 'Unidad combinada que incluye sistema de desengrasado para mayor eficiencia.',
        descripcionLarga: 'La SET-3 es una unidad combinada avanzada que, además de cribado y desarenado, incorpora un sistema de desengrasado, permitiendo un pretratamiento aún más completo y eficiente.',
        imagen: '/assets/Productos/SET-3.jpg',
        slug: 'set-3-unidad-combinada-desengrasado',
        modelo3d: '/models/SET-3.glb',
        marcadores3d: [],
        qr: '/assets/qr/set-3-unidad-combinada-desengrasado.png',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      },
      {
        id: 'mini-set-2',
        nombre: 'MINI.SET-2 MINI UNIDAD COMBINADA 2',
        descripcion: 'Versión mini de la unidad combinada 2 para aplicaciones de menor escala.',
        descripcionLarga: 'La MINI.SET-2 es una versión compacta de la unidad combinada 2, ideal para instalaciones pequeñas o aplicaciones piloto que requieren eficiencia en poco espacio.',
        imagen: '/assets/Productos/MINI.SET-2.jpg',
        slug: 'mini-set-2-mini-unidad-combinada-2',
        modelo3d: '/models/MINI-SET-2.glb',
        marcadores3d: [],
        qr: '/assets/qr/mini-set-2-mini-unidad-combinada-2.png',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      },
      {
        id: 'mini-set-3',
        nombre: 'MINI.SET-3 MINI UNIDAD COMBINADA 3',
        descripcion: 'Versión mini de la unidad combinada 3 con sistema de desengrasado.',
        descripcionLarga: 'La MINI.SET-3 es una versión compacta de la unidad combinada 3, que incluye sistema de desengrasado, pensada para aplicaciones de menor escala con altos estándares de pretratamiento.',
        imagen: '/assets/Productos/MINI.SET-3.jpg',
        slug: 'mini-set-3-mini-unidad-combinada-3',
        modelo3d: '/models/MINI-SET-3.glb',
        marcadores3d: [],
        qr: '/assets/qr/mini-set-3-mini-unidad-combinada-3.png',
        pdf: 'https://drive.google.com/uc?export=download&id=1AizZyR5xrCaG8BpOaQow2Tj64F558IB8',
      }
    ]
  },

  // AGITACIÓN Y FLOCULACIÓN
  {
    id: 14,
    nombre: 'E-AGI AGITADOR DE TURBINA AXIAL',
    descripcion: 'Agitador mecánico con de turbina para mezcla de productos químicos.',
    descripcionLarga: 'El agitador de turbina axial E‑AGI está diseñado para la mezcla rápida y homogénea de coagulantes en procesos de tratamiento de agua potable, especialmente durante la coagulación. Su turbina de 4 palas inclinadas genera un flujo axial eficiente, favoreciendo la dispersión de reactivos y la formación de microflóculos en tiempos muy cortos. Fabricado en acero inoxidable AISI 304 o 316L, incorpora un motorreductor de ejes paralelos o planetario con acoplamiento directo. El sentido de giro se invierte fácilmente desde el control eléctrico. Opcionalmente, puede integrarse con variador de frecuencia, monitoreo de torque y tablero con PLC y telemetría para un control preciso y operación remota.',
    imagen: '/assets/Productos/1. 5239d63c-6ba2-4d19-9a8b-daf0f67fb400.jpg',
    slug: 'agitador-turbina-axial',
    categoria: 'AGITACIÓN Y FLOCULACIÓN',
    pdf: 'https://drive.google.com/uc?export=download&id=1uF2Ro9t8mhogY8GuXJ7KK5zQt1l65PWE',
    modelo3d: '/models/3.1 WWS E-AGI.glb',
    qr: '/assets/QR/3.1 WWS E-AGI.png',
    formUrl: 'https://forms.office.com/Pages/ResponsePage.aspx?id=3VHHd2MdYU2Z8buF13zow9TfpytasxRPnU81r6iwMY1UNUxVUUYwNldHT1JDSVkwWUlEUUkyNDk1SiQlQCN0PWcu',
    marcadores3d: [
      {
        x: 0.09149026524060949, y: 3.481983262684383, z: -0.028678447799860698,
        label: [{ nombre: 'Motorreductor' }],
      },
      {
        x: 0.19834062226730764, y: 3.3126100303712973, z: 0.17011540644459414,
        label: [{ nombre: 'Esquema de Sujección' }],
      },
      {
        x: -0.016774062007025442, y: 3.099546209176421, z: -0.026556984594932727,
        label: [{ nombre: 'Eje de Motriz' }],
      },
      {
        x: -0.01692896449921469, y: 2.4689206459107247, z: -0.0220718307887072,
        label: [{ nombre: 'Eje Conducido' }],
      },
      {
        x: -0.016059305499492933, y: 0.6245377629132322, z: -0.013555139853729851,
        label: [{ nombre: 'Soporte Aspas' }],
      },
      {
        x: -0.010846859828721498, y: 0.5807432500997789, z: 0.48296764352810245,
        label: [{ nombre: 'Aspas' }],
      },
      {
        x: -0.014369406404962757, y: 0.5756637730732097, z: -0.17523478552667487,
        label: [{ nombre: 'Sujetadores' }],
      },
    ],
  },
  {
    id: 17,
    nombre: 'E-FL FLOCULADORES',
    descripcion: 'Sistema de agitación suave para promover la formación de flóculos.',
    descripcionLarga: 'Los floculadores E‑FL son sistemas de mezcla lenta diseñados para promover el crecimiento de flóculos en plantas de tratamiento de agua potable. Aplican una agitación controlada que favorece la unión progresiva de partículas coaguladas, generando flóculos estables que luego sedimentan. Están disponibles en configuraciones de eje vertical u horizontal y operan a velocidades bajas (2–6 rpm), preservando la calma hidráulica. Fabricados con componentes acero inoxidable AISI 304/316 o acero al carbono pintado, pueden incorporar variador de frecuencia, monitoreo de torque y tableros con PLC, optimizando la eficiencia del proceso y el control operativo.',
    imagen: '/assets/Productos/2. 904302bd-f670-4752-a754-baf963c101fd.jpg',
    slug: 'floculadores',
    categoria: 'AGITACIÓN Y FLOCULACIÓN',
    pdf: 'https://drive.google.com/uc?export=download&id=10RL2fHC0WHQp06qPv9tDSB7WU1FW02Rf',
    subProductos: [
      {
        id: 'e-flv',
        nombre: 'E-FLV FLOCULADOR DE PALETAS DE EJE VERTICAL',
        descripcion: 'Floculador de paletas con eje vertical para formación eficiente de flóculos.',
        descripcionLarga: 'El E-FLV es un floculador de paletas con eje vertical, diseñado para promover la formación y crecimiento de flóculos en procesos de tratamiento de aguas, optimizando la clarificación.',
        imagen: '/assets/Productos/E-FLV.jpg',
        slug: 'e-flv-floculador-eje-vertical',
        qr: '/assets/QR/3.2 WWS E-FLV.png',
        formUrl: 'https://forms.office.com/Pages/ResponsePage.aspx?id=3VHHd2MdYU2Z8buF13zow9TfpytasxRPnU81r6iwMY1UNDFCRTJNUjFPU00ySTZRWERSNUVXV0cwSyQlQCN0PWcu',
        modelo3d: '/models/3.2 WWS E-FLV.glb',
        pdf: 'https://drive.google.com/uc?export=download&id=10RL2fHC0WHQp06qPv9tDSB7WU1FW02Rf',
        marcadores3d: [
          {
            x: 0.004333555432392009, y: 2.6577187665012567, z: 0.2564999961853121,
            label: [{ nombre: 'Carcasa de Protección' }],
          },
          {
            x: -0.02531419074925971, y: 2.0595228860617585, z: -0.0006013749810148871,
            label: [{ nombre: 'Eje Motriz' }],
          },
          {
            x: -0.041866564878232454, y: 1.8880496782323875, z: -0.0013447429603055884,
            label: [{ nombre: 'Acople Mecánico' }],
          },
          {
            x: -0.02865807596352976, y: 1.2390739421148427, z: 0.004630138344660176,
            label: [{ nombre: 'Eje Conducido' }],
          },
          {
            x: 0.03651250038146833, y: 0.9162765921320786, z: -0.796487366030703,
            label: [{ nombre: 'Bastidor' }],
          },
          {
            x: 0.03501249999999749, y: 0.6174944098616811, z: -1.8261329882788768,
            label: [{ nombre: 'Paleta' }],
          },
          {
            x: -0.031714053904509536, y: -1.219832884402082, z: 0.0014217339921841349,
            label: [{ nombre: 'Soporte Inferior' }],
          },
        ],
      },
      {
        id: 'e-flh',
        nombre: 'E-FLH FLOCULADOR DE PALETAS DE EJE HORIZONTAL',
        descripcion: 'Floculador de paletas con eje horizontal para mezcla suave y eficiente.',
        descripcionLarga: 'El E-FLH es un floculador de paletas con eje horizontal, ideal para la mezcla suave y eficiente de partículas en suspensión, facilitando la formación de flóculos grandes y densos.',
        imagen: '/assets/Productos/E-FLH.jpg',
        slug: 'e-flh-floculador-eje-horizontal',
        modelo3d: '/models/3.3 WWS E-FLH.glb',
        formUrl: 'https://forms.office.com/Pages/ResponsePage.aspx?id=3VHHd2MdYU2Z8buF13zow9TfpytasxRPnU81r6iwMY1UMUtITE4yMzFUUFA3QkdaQzA1SkNaN1QzVCQlQCN0PWcu',
        pdf: 'https://drive.google.com/uc?export=download&id=10RL2fHC0WHQp06qPv9tDSB7WU1FW02Rf',
        marcadores3d: [
          {
            x: -0.17358748995903084, y: 0.03128987413442902, z: 4.392263340010484,
            label: [{ nombre: 'Motorreductor' }],
          },
          {
            x: -0.11344026586656172, y: 0.01906079834282368, z: 3.869187687187509,
            label: [{ nombre: 'Acople Mecánico' }],
          },
          {
            x: -0.05567102149166112, y: 0.0037222754704182605, z: 3.4395649219521056,
            label: [{ nombre: 'Eje Motriz' }],
          },
          {
            x: -0.1016510724842058, y: 0.021966797837722603, z: 2.054109162927919,
            label: [{ nombre: 'Chumacera' }],
          },
          {
            x: -0.13547434785169138, y: 0.022265701851757275, z: 1.8064740005493167,
            label: [{ nombre: 'Eje de Acople' }],
          },
          {
            x: -0.08407345586562315, y: 0.0003848115926493355, z: -0.03443903087177708,
            label: [{ nombre: 'Eje Conducido' }],
          },
          {
            x: -0.10567499961852891, y: 0.4591400211917853, z: -1.0603787996576486,
            label: [{ nombre: 'Bastidor' }],
          },
          {
            x: -0.09967500009537685, y: 2.1790827477670223, z: -0.06841344115666737,
            label: [{ nombre: 'Paleta' }],
          },
          {
            x: -0.1390007942859529, y: -0.012215105519001268, z: -1.7998633027825965,
            label: [{ nombre: 'Eje de Acople Final' }],
          },
          
          
        ],
        qr: '/assets/QR/3.3 WWS E-FLH.png',
      }
    ],
  },
  // TRATAMIENTO SECUNDARIO
  {
    id: 15,
    nombre: 'C-SCI SEDIMENTADOR DE CADENAS DE REMOSIÓN SUPERIOR PARA TANQUE REGULAR',
    descripcion: 'Sedimentador de lodos de cadena para remoción de fondo en PTAPS.',
    descripcionLarga: 'El sedimentador de cadenas C-SCI está diseñado para la recolección continua de lodos en procesos de tratamiento de agua potable, optimizando la eficiencia de la sedimentación posterior a la floculación. Las paletas, fijadas a una cadena transportadora, arrastran suavemente el lodo hacia una tolva, sin alterar el flujo del agua clarificada. El sistema opera completamente bajo el nivel del módulo hidráulico, lo que evita turbulencias o recirculaciones. Gracias a su diseño que separa la zona de remoción del paso del agua, asegura una operación estable, libre de interferencias. Construido con materiales resistentes y de bajo desgaste, es esencial para mantener la calidad del efluente y facilitar el manejo de lodos.',
    imagen: '/assets/Productos/2. ImagenX.png',
    slug: 'sedimentador-cadenas',
    categoria: 'TRATAMIENTO SECUNDARIO',
    pdf: 'https://drive.google.com/uc?export=download&id=1kmpqTEYJbd8Yy7wV8dDofDAbYFoK4LSZ',
    modelo3d: '/models/5.1 C-BDC 3D.glb',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },
  {
    id: 16,
    nombre: 'E-DF DISTRIBUIDOR DE FLUJO',
    descripcion: 'Distribuye uniformemente el caudal sobre el medio filtrante en filtros percoladores, optimizando el contacto agua-biomasa y la degradación orgánica.',
    descripcionLarga: 'El distribuidor de flujo E-DF es un sistema especializado diseñado para distribuir uniformemente el caudal sobre el medio filtrante en filtros percoladores de plantas de tratamiento de aguas residuales. Su diseño optimiza el contacto entre el agua y la biomasa, mejorando la eficiencia de la degradación orgánica. El sistema de distribución uniforme asegura que toda la superficie del medio filtrante reciba el caudal de manera equilibrada, evitando zonas de sobrecarga o subcarga. Fabricado en acero inoxidable resistente a la corrosión, incluye un sistema de control automático que regula la distribución del flujo según las condiciones de operación. Esencial para optimizar el rendimiento de filtros percoladores y mejorar la calidad del efluente tratado.',
    imagen: '/assets/Productos/1. 6f978b15-5597-4b4c-9b48-e3e435d9ca25_LE_upscale_balanced_x4_light_ai_30_tone_enhance_30_color_enhance_30.jpg',
    slug: 'distribuidor-flujo',
    categoria: 'TRATAMIENTO SECUNDARIO',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },
  // SEDIMENTACIÓN
  {
    id: 18,
    nombre: 'E-SLD SEDIMENTADOR DE LODOS PARA TANQUE CIRCULAR DE ACCIONAMIENTO DIAMETRAL',
    descripcion: 'Sedimentador con puente y rastrillos accionados diametralmente para extracción de lodos al centro, natas y agua clarificada por el perimetro.',
    descripcionLarga: 'El sedimentador de lodos E-SLD con accionamiento diametral es un sistema avanzado de clarificación diseñado para tanques circulares en plantas de tratamiento de aguas residuales. Su puente giratorio con rastrillos accionados diametralmente permite una extracción eficiente de lodos sedimentados hacia el centro del tanque, mientras que las natas flotantes son removidas por el perímetro. El sistema de accionamiento diametral proporciona un movimiento uniforme y estable, optimizando la separación sólido-líquido. Opcionalmente puede incluir un sistema de control automático que regula la velocidad de rotación según las condiciones de operación. Esencial para la clarificación eficiente y la producción de agua clarificada de alta calidad.',
    imagen: '/assets/Productos/1. c533c62e-d32e-4cf6-9242-38eda9fb1932_LE_upscale_balanced_x4_light_ai_30_tone_enhance_30_color_enhance_30.jpg',
    slug: 'sedimentador-diametral',
    categoria: 'SEDIMENTACIÓN',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=1ZaJy-hxRz90sGUYdEA7B32wnejk-t3g-',
    formUrl: 'https://forms.office.com/Pages/ResponsePage.aspx?id=3VHHd2MdYU2Z8buF13zow9TfpytasxRPnU81r6iwMY1UNjZZMlYwVTI3Nk9aNlcwRFRPVkQ3RlI0MiQlQCN0PWcu',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },
  {
    id: 19,
    nombre: 'E-SLR SEDIMENTADOR DE LODOS PARA TANQUE CIRCULAR DE ACCIONAMIENTO RADIAL',
    descripcion: 'Sedimentador con puente y rastrillos accionados radialmente para extracción de lodos al centro, natas y agua clarificada por el perimetro.',
    descripcionLarga: 'El sedimentador de lodos E-SLR con accionamiento radial es un sistema de clarificación diseñado para tanques circulares que utiliza un puente giratorio con rastrillos accionados radialmente. Este diseño permite una extracción eficiente de lodos sedimentados hacia el centro del tanque, mientras que las natas flotantes son removidas por el perímetro. El sistema de accionamiento radial proporciona un movimiento suave y continuo que optimiza la separación sólido-líquido. Opcionalmente puede Incluir un sistema de control automático que regula la velocidad de rotación según las condiciones de operación. Esencial para la clarificación eficiente y la producción de agua clarificada de alta calidad.',
    imagen: '/assets/Productos/2. snapedit_1741888425139.jpg',
    slug: 'sedimentador-radial',
    categoria: 'SEDIMENTACIÓN',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=1ZaJy-hxRz90sGUYdEA7B32wnejk-t3g-',
    formUrl: 'https://forms.office.com/Pages/ResponsePage.aspx?id=3VHHd2MdYU2Z8buF13zow9TfpytasxRPnU81r6iwMY1UNjZZMlYwVTI3Nk9aNlcwRFRPVkQ3RlI0MiQlQCN0PWcu',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },
  {
    id: 20,
    nombre: 'E-SLC SEDIMENTADOR DE LODOS PARA TANQUE CIRCULAR DE ACCIONAMIENTO CENTRAL',
    descripcion: 'Sedimentador con puente radial estático y bastidor accionado centralmentepara extracción de lodos al centro, natas y agua clarificada por el perimetro.',
    descripcionLarga: 'El sedimentador de lodos E-SLC con accionamiento central es un sistema de clarificación diseñado para tanques circulares que utiliza un puente radial estático con un bastidor accionado centralmente. Este diseño único permite una extracción eficiente de lodos sedimentados hacia el centro del tanque, mientras que las natas flotantes son removidas por el perímetro. El sistema de accionamiento central proporciona un movimiento estable y controlado que optimiza la separación sólido-líquido. Opcionalmente puede incluir un sistema de control automático que regula la velocidad de rotación según las condiciones de operación. Esencial para la clarificación eficiente y la producción de agua clarificada de alta calidad.',
    imagen: '/assets/Productos/3. BARREDOR DE  LODOS  TRACCION CENTRAL Ø 35 M.jpg',
    slug: 'sedimentador-central',
    categoria: 'SEDIMENTACIÓN',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=1ZaJy-hxRz90sGUYdEA7B32wnejk-t3g-',
    formUrl: 'https://forms.office.com/Pages/ResponsePage.aspx?id=3VHHd2MdYU2Z8buF13zow9TfpytasxRPnU81r6iwMY1UNjZZMlYwVTI3Nk9aNlcwRFRPVkQ3RlI0MiQlQCN0PWcu',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },
  {
    id: 21,
    nombre: 'E-PSL PUENTE LONGITUDINAL SEDIMENTADOR DE LODOS  PARA TANQUE RECTANGULAR',
    descripcion: 'Puente accionado longitudinalmente en tanque rentangular para extracción de lodos y natas al final del tanque.',
    descripcionLarga: 'El puente longitudinal E-PSL es un equipo electromecánico diseñado para la clarificación en tanques rectangulares de plantas de tratamiento de aguas residuales. Durante su desplazamiento a lo largo del tanque, permite la remoción de lodos sedimentados desde el fondo y la recolección de natas flotantes en superficie. El sistema opera con movimiento alternativo de vaivén y puede incorporar control automático para ajustar la velocidad según la carga hidráulica. La estructura del puente se construye en acero al carbono con recubrimiento protector, mientras que los elementos sumergidos se fabrican en acero inoxidable 304/316L o acero galvanizado, según requerimientos del proyecto.',
    imagen: '/assets/Productos/4. 173220334_2917813575132890_2857803827292992920_n.jpg',
    slug: 'puente-longitudinal-sedimentador',
    categoria: 'SEDIMENTACIÓN',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=1ZaJy-hxRz90sGUYdEA7B32wnejk-t3g-',
    formUrl: 'https://forms.office.com/Pages/ResponsePage.aspx?id=3VHHd2MdYU2Z8buF13zow9TfpytasxRPnU81r6iwMY1UNjZZMlYwVTI3Nk9aNlcwRFRPVkQ3RlI0MiQlQCN0PWcu',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },
  {
    id: 33,
    nombre: 'C-SCS SEDIMENTADOR DE CADENAS PARA REMOCIÓN DE FLOTANTES',
    descripcion: 'Sistema especializado en la remoción superficial de flotantes mediante cadenas con paletas para tanques DAF.',
    descripcionLarga: 'El sedimentador de cadenas C-SCS es un sistema especializado en la remoción superficial de flotantes, diseñado para su uso en tanques DAF en plantas de tratamiento de agua residual. A través de un sistema de cadenas en movimiento continuo, las paletas recolectoras arrastran espumas, aceites y otros sólidos flotantes hacia una tolva de recolección, sin generar turbulencia en el flujo hidráulico. Su configuración permite mantener una superficie limpia, estableciendo condiciones óptimas para la separación sólido-líquido por flotación. Fabricado en materiales resistentes a la corrosión y al desgaste, el equipo garantiza un funcionamiento continuo con bajo requerimiento de mantenimiento, ideal para procesos de flotación de alta eficiencia.',
    imagen: '/assets/Productos/1. 1722508586316.jpg',
    slug: 'sedimentador-cadenas-flotantes',
    categoria: 'SEDIMENTACIÓN',
    modelo3d: '/models/5.1 C-BDC 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=1ZaJy-hxRz90sGUYdEA7B32wnejk-t3g-',
    formUrl: 'https://forms.office.com/Pages/ResponsePage.aspx?id=3VHHd2MdYU2Z8buF13zow9TfpytasxRPnU81r6iwMY1UNjZZMlYwVTI3Nk9aNlcwRFRPVkQ3RlI0MiQlQCN0PWcu',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Sistema de Cadenas' }],
      },
    ],
  },
  {
    id: 34,
    nombre: 'C-SCC SEDIMENTADOR DE CADENAS PARA REMOCIÓN COMBINADA',
    descripcion: 'Sistema de remoción simultánea de lodos del fondo y flotantes de la superficie en tanques rectangulares.',
    descripcionLarga: 'El sedimentador de cadenas C-SCC es un equipo de remoción combinada, diseñado para separar simultáneamente lodos del fondo y flotantes de la superficie en tanques rectangulares. Gracias a su sistema de cadenas con paletas sincronizadas, el equipo desplaza los sólidos sedimentados hacia una tolva de fondo y, a la vez, empuja los materiales flotantes hacia un canal recolector. Esta acción combinada permite una clarificación continua del agua sin interrupciones ni interferencias en el flujo. Su construcción en acero inoxidable y componentes de alta resistencia aseguran durabilidad y eficiencia operativa, haciéndolo ideal para aplicaciones donde se requiere la remoción integral de sólidos en una sola etapa.',
    imagen: '/assets/Productos/1. 480b766e-9ab6-4408-97e4-0fc1f5a4d18a_LE_upscale_balanced_x4_light_ai_30_tone_enhance_30_color_enhance_30.jpg',
    slug: 'sedimentador-cadenas-combinado',
    categoria: 'SEDIMENTACIÓN',
    modelo3d: '/models/5.1 C-BDC 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=1ZaJy-hxRz90sGUYdEA7B32wnejk-t3g-',
    formUrl: 'https://forms.office.com/Pages/ResponsePage.aspx?id=3VHHd2MdYU2Z8buF13zow9TfpytasxRPnU81r6iwMY1UNjZZMlYwVTI3Nk9aNlcwRFRPVkQ3RlI0MiQlQCN0PWcu',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Sistema de Cadenas Combinado' }],
      },
    ],
  },

  // TRATAMIENTO TERCIARIO
  {
    id: 24,
    nombre: 'X-DF FILTRO DE DISCOS',
    descripcion: 'Módulos de discos rotativos para filtración fina y mejora de calidad del efluente.',
    descripcionLarga: 'Los filtros de discos X-DF de XS Solutions son sistemas avanzados de filtración fina diseñados para mejorar significativamente la calidad del efluente en plantas de tratamiento de aguas residuales. Su sistema de discos rotativos permite una filtración continua y eficiente, removiendo partículas finas y mejorando la claridad del agua. El diseño modular permite adaptar la capacidad de filtración según los requerimientos específicos de cada aplicación. Fabricados en acero inoxidable resistente a la corrosión, incluyen un sistema de limpieza automática que mantiene la eficiencia del filtro. Esenciales para aplicaciones que requieren efluentes de alta calidad y cumplimiento de estándares estrictos de descarga.',
    imagen: '/assets/Productos/1. 488652032_1273108818157113_5534609693877887966_n_cleanup.jpg',
    slug: 'filtro-discos',
    categoria: 'TRATAMIENTO TERCIARIO',
    marca: 'XS Solutions',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=1y9u-v7fBjVgvCenJdMMye6uBbtO-EOcU',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },

  // TRATAMIENTO DE LODOS Y TRANSPORTADORES
  {
    id: 25,
    nombre: 'E-ELM ESPESADOR DE LODOS DE ACCIONAMIENTO CENTRAL',
    descripcion: 'Espesador mecánico con agitador central para concentración de lodos.',
    descripcionLarga: 'El espesador de lodos E-ELM con accionamiento central es un sistema mecánico especializado diseñado para la concentración eficiente de lodos en plantas de tratamiento de aguas residuales. Su agitador central permite una mezcla controlada que facilita la liberación de agua intersticial y la concentración de sólidos. El sistema de accionamiento central proporciona un movimiento uniforme y estable que optimiza el proceso de espesamiento. Fabricado en acero inoxidable resistente a la corrosión, incluye un sistema de control automático que regula la velocidad de rotación según las características de los lodos. Esencial para reducir el volumen de lodos y optimizar los costos de transporte y disposición final.',
    imagen: '/assets/Productos/1. 480b766e-9ab6-4408-97e4-0fc1f5a4d18a_LE_upscale_balanced_x4_light_ai_30_tone_enhance_30_color_enhance_30.jpg',
    slug: 'espesador-lodos-central',
    categoria: 'TRATAMIENTO DE LODOS Y TRANSPORTADORES',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=1l_1h848XSfhZdq5jgKNyYEdwfO4ib-yU',
    marcadores3d: [
      {
        x: -0.07339679663725747, y: -3.2495521540383785, z: 1.7382068630845202,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
      {
        x: -0.20204966825441945, y: 0.522950755462922, z: -0.019750483753005588,
        label: [{ nombre: 'Sistema Motriz' }],
      },
      {
        x: -0.8409156707059084, y: 0.20299999237060434, z: 0.002095452527343583,
        label: [{ nombre: 'Pasarela' }],
      },
      {
        x: -6.069411418081536, y: -4.793887092743516, z: 0.0750634680722457,
        label: [{ nombre: 'Bastidor' }],
      },
      {
        x: 0.011955659506182615, y: -6.661479814222145, z: 0.13637638262699278,
        label: [{ nombre: 'Pedestal Inferior' }],
      },
      {
        x: -1.1744208753943122, y: -7.417747175660047, z: 0,
        label: [{ nombre: 'Sistema Motriz' }],
      },
    ],
  },
  {
    id: 26,
    nombre: 'X-RA ESPESADOR DESHIDRATADOR MODULAR',
    descripcion: 'Espesador modular con prensas de tornillo para deshidratación previa.',
    descripcionLarga: 'El espesador deshidratador modular X-RA de XS Solutions es un sistema avanzado que combina espesamiento y deshidratación previa de lodos en plantas de tratamiento de aguas residuales. Su diseño modular incluye prensas de tornillo que aplican presión controlada para extraer el exceso de agua y reducir significativamente el volumen de lodos. El sistema modular permite adaptar la capacidad según los requerimientos específicos de cada aplicación. Fabricado en acero inoxidable resistente a la corrosión, incluye un sistema de control automático que optimiza la presión y velocidad según las características de los lodos. Esencial para reducir costos de transporte y disposición final mediante la deshidratación eficiente de lodos.',
    imagen: '/assets/Productos/2. 84419159_548316745766102_5487846869931393024_n.jpg',
    slug: 'espesador-deshidratador-modular',
    categoria: 'TRATAMIENTO DE LODOS Y TRANSPORTADORES',
    marca: 'XS Solutions',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=1lcNV_ceArdwaLx4NR1aOa1u9LHtDj2Za',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },
  {
    id: 27,
    nombre: 'X-CONV TRASPORTADOR DE TORNILLO',
    descripcion: 'Tornillo sin fin para transporte continuo de lodos o sólidos.',
    descripcionLarga: 'El transportador de tornillo X-CONV de XS Solutions es un sistema de transporte continuo diseñado para el manejo eficiente de lodos y sólidos en plantas de tratamiento de aguas residuales. Su diseño de tornillo sin fin permite un transporte suave y continuo de materiales, evitando la segregación y manteniendo la integridad del producto. El sistema puede transportar tanto lodos húmedos como sólidos secos, adaptándose a diferentes condiciones de operación. Fabricado en acero inoxidable resistente a la corrosión, incluye un sistema de control automático que regula la velocidad de transporte según las características del material. Esencial para el transporte eficiente y seguro de lodos y sólidos en plantas de tratamiento.',
    imagen: '/assets/Productos/3. 42199234_288968895034223_4898366620054847488_n.jpg',
    slug: 'transportador-tornillo',
    categoria: 'TRATAMIENTO DE LODOS Y TRANSPORTADORES',
    marca: 'XS Solutions',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=1lcNV_ceArdwaLx4NR1aOa1u9LHtDj2Za',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },
  {
    id: 28,
    nombre: 'X-BELT.CONV TRASPORTADOR DE BANDA',
    descripcion: 'Cinta transportadora para traslado de lodos o sólidos con velocidad controlada.',
    descripcionLarga: 'El transportador de banda X-BELT.CONV de XS Solutions es un sistema de transporte continuo diseñado para el traslado eficiente de lodos y sólidos en plantas de tratamiento de aguas residuales. Su cinta transportadora con velocidad controlada permite un transporte suave y continuo de materiales, adaptándose a diferentes condiciones de operación. El sistema puede transportar tanto lodos húmedos como sólidos secos, manteniendo la integridad del producto durante el transporte. Fabricado en acero inoxidable resistente a la corrosión, incluye un sistema de control automático que regula la velocidad de transporte según las características del material. Esencial para el transporte eficiente y seguro de lodos y sólidos en plantas de tratamiento.',
    imagen: '/assets/Productos/4. 117437840_662491021015340_4858927833704221986_n.jpg',
    slug: 'transportador-banda',
    categoria: 'TRATAMIENTO DE LODOS Y TRANSPORTADORES',
    marca: 'XS Solutions',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=1lcNV_ceArdwaLx4NR1aOa1u9LHtDj2Za',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },

  // ADECUACIONES ESTRUCTURALES E HIDRÁULICAS
  {
    id: 29,
    nombre: 'C-ACS CUBIERTAS Y SOPORTES METÁLICOS',
    descripcion: 'Estructuras metálicas para protección de equipos y mantenimiento de procesos.',
    descripcionLarga: 'Las cubiertas y soportes metálicos C-ACS son estructuras especializadas diseñadas para la protección y mantenimiento de equipos en plantas de tratamiento de aguas residuales. Su diseño modular permite la instalación y desmontaje fácil para facilitar el mantenimiento y reparación de equipos. Las cubiertas protegen los equipos de las condiciones ambientales adversas, mientras que los soportes proporcionan estabilidad y seguridad durante la operación. Fabricados en acero inoxidable resistente a la corrosión, incluyen sistemas de seguridad que garantizan un entorno de trabajo seguro. Esenciales para proteger equipos sensibles y facilitar el mantenimiento preventivo en plantas de tratamiento.',
    imagen: '/assets/Productos/1. imagen 1_LE_upscale_balanced_x4_light_ai_30_tone_enhance_30_color_enhance_30.jpg',
    slug: 'cubiertas-soportes-metalicos',
    categoria: 'ADECUACIONES ESTRUCTURALES E HIDRÁULICAS',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=12KBcfAe0LEY3o50mnUkF69OB6QfpAqSL',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },
  {
    id: 30,
    nombre: 'C-AEP ESCALERAS Y PASARELAS',
    descripcion: 'Accesos metálicos seguros para mantenimiento y operación de plantas.',
    descripcionLarga: 'Las escaleras y pasarelas C-AEP son sistemas de acceso metálicos diseñados para proporcionar acceso seguro y eficiente a equipos y áreas de mantenimiento en plantas de tratamiento de aguas residuales. Su diseño modular permite la instalación y configuración según los requerimientos específicos de cada planta. Las escaleras proporcionan acceso vertical seguro, mientras que las pasarelas facilitan el movimiento horizontal entre equipos. Fabricadas en acero inoxidable resistente a la corrosión, incluyen sistemas de seguridad como barandillas y superficies antideslizantes que garantizan un entorno de trabajo seguro. Esenciales para facilitar el mantenimiento preventivo y la operación eficiente de plantas de tratamiento.',
    imagen: '/assets/Productos/2. imagen 8_LE_upscale_balanced_x4_light_ai_30_tone_enhance_30_color_enhance_30.jpg',
    slug: 'escaleras-pasarelas',
    categoria: 'ADECUACIONES ESTRUCTURALES E HIDRÁULICAS',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=12KBcfAe0LEY3o50mnUkF69OB6QfpAqSL',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },
  {
    id: 31,
    nombre: 'C-APR PÓRTICOS',
    descripcion: 'Estructuras metálicas para izaje y mantenimiento de equipos pesados.',
    descripcionLarga: 'Los pórticos C-APR son estructuras metálicas especializadas diseñadas para el izaje y mantenimiento de equipos pesados en plantas de tratamiento de aguas residuales. Su diseño robusto permite el manejo seguro de equipos de gran peso y dimensiones, facilitando las operaciones de mantenimiento y reparación. Los pórticos incluyen sistemas de izaje con capacidad variable que se adaptan a diferentes tipos de equipos. Fabricados en acero inoxidable resistente a la corrosión, incluyen sistemas de seguridad que garantizan operaciones de izaje seguras y eficientes. Esenciales para facilitar el mantenimiento de equipos pesados y mejorar la eficiencia operativa de plantas de tratamiento.',
    imagen: '/assets/Productos/3. Imagen13_LE_upscale_balanced_x4_light_ai_30_tone_enhance_30_color_enhance_30.jpg',
    slug: 'porticos',
    categoria: 'ADECUACIONES ESTRUCTURALES E HIDRÁULICAS',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=12KBcfAe0LEY3o50mnUkF69OB6QfpAqSL',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },
  {
    id: 32,
    nombre: 'C-AHID SISTEMAS DE BOMBEO Y REDES DE DISTRIBUCIÓN',
    descripcion: 'Sistemas estructurales e hidráulicos para conducción y distribución de caudales.',
    descripcionLarga: 'Los sistemas de bombeo y redes de distribución C-AHID son soluciones integrales diseñadas para la conducción y distribución eficiente de caudales en plantas de tratamiento de aguas residuales. Su diseño incluye sistemas de bombeo con capacidad variable que se adaptan a diferentes condiciones de operación, así como redes de distribución optimizadas para minimizar pérdidas de carga. El sistema estructural proporciona soporte y estabilidad a los componentes hidráulicos, garantizando una operación confiable y eficiente. Fabricados en acero inoxidable resistente a la corrosión, incluyen sistemas de control automático que optimizan el bombeo según las demandas del proceso. Esenciales para garantizar el flujo eficiente de agua a través de todas las etapas del tratamiento.',
    imagen: '/assets/Productos/4. image_LE_upscale_balanced_x4_light_ai_30_tone_enhance_30_color_enhance_30.jpg',
    slug: 'sistemas-bombeo-redes',
    categoria: 'ADECUACIONES ESTRUCTURALES E HIDRÁULICAS',
    modelo3d: '/models/7.1 E-ELM 3D.glb',
    pdf: 'https://drive.google.com/uc?export=download&id=12KBcfAe0LEY3o50mnUkF69OB6QfpAqSL',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },
  // SERVICIOS
  {
    id: 1001,
    nombre: 'INGENIERÍA DE SOLUCIONES A MEDIDA',
    descripcion: 'Diseño y desarrollo de equipos no convencionales con innovación aplicada.',
    descripcionLarga: 'Creamos soluciones únicas para necesidades específicas en tratamiento de agua que no se resuelven con equipos estándar. Proyectos especiales: diseñamos y fabricamos maquinaria adaptada a condiciones técnicas, espaciales u operativas complejas. Soluciones personalizadas: desarrolladas desde cero, con enfoque en innovación técnica y alto valor agregado. Eficiencia energética: priorizamos configuraciones con motores, sistemas de control y procesos que reduzcan consumo. Ideal para empresas que enfrentan desafíos fuera de lo común y buscan soluciones innovadoras a medida.',
    imagen: '/assets/Productos/Ingenieria de Soluciones a Medida.jpg',
    slug: 'ingenieria-soluciones-medida',
    categoria: 'SERVICIOS',
  },
  {
    id: 1002,
    nombre: 'ESTUDIOS DE PREFACTIBILIDAD',
    descripcion: 'Analizamos con rigor para proyectar con innovación.',
    descripcionLarga: 'Nuestros estudios de prefactibilidad te brindan la certeza de elegir la mejor alternativa técnico-económica antes de iniciar tu proyecto. Evaluamos en profundidad: Alcance y objetivos, comparativa de tecnologías, evaluación de riesgos y rentabilidad. Beneficios clave: toma de decisiones basada en datos rigurosos, ahorro de tiempo y costos, base sólida para avanzar hacia diseños, selección de equipos o importaciones específicas.',
    imagen: '/assets/Estudios de Prefactibilidad.jpg',
    slug: 'estudios-prefactibilidad',
    categoria: 'SERVICIOS',
  },
  {
    id: 1003,
    nombre: 'MODELOS 3D Y PLANOS EJECUTIVOS',
    descripcion: 'Del concepto a la fabricación: modelado 3D y documentación ejecutiva.',
    descripcionLarga: 'Desarrollamos modelos 3D precisos y documentación ejecutiva adaptada a los desafíos reales de cada proyecto, permitiendo visualizar, coordinar y construir con seguridad. Modelado 3D paramétrico (BIM/CAD), planos ejecutivos detallados, incluso para soluciones fuera de portafolio. Beneficios clave: reduce retrabajos, mejora la coordinación y facilita una ejecución ágil y segura.',
    imagen: '/assets/Productos/Modelos 3D y Planos Ejecutivos.jpg',
    slug: 'modelos-3d-planos-ejecutivos',
    categoria: 'SERVICIOS',
  },
  {
    id: 1004,
    nombre: 'MEMORIAS DE CÁLCULO Y ANÁLISIS TÉCNICO',
    descripcion: 'Fundamento técnico para elegir con certeza.',
    descripcionLarga: 'Brindamos el respaldo de ingeniería necesario para tomar decisiones técnicas informadas que llevan a la selección, diseño y adquisición del equipo más adecuado. Cálculos hidráulicos, estructurales y de tuberías, análisis por Elementos Finitos (FEA), resultados y documentación completa. Permite validar la viabilidad técnica y operativa antes de concretar una compra.',
    imagen: '/assets/Productos/Memorias de Calculo y Analisis Tecnico.jpg',
    slug: 'memorias-calculo-analisis-tecnico',
    categoria: 'SERVICIOS',
  },
  {
    id: 1005,
    nombre: 'BÚSQUEDA DE EQUIPAMIENTO ESPECIALIZADO',
    descripcion: 'Acceso a tecnología de vanguardia con soluciones innovadoras.',
    descripcionLarga: 'Identificamos, negociamos e importamos equipos de tratamiento avanzados no disponibles localmente. Análisis de requerimientos, gestión de compras e importación, validación técnica y soporte posventa. Beneficios: tecnología de punta, reducción de tiempos, costos optimizados y escalabilidad regional.',
    imagen: '/assets/Productos/Busqueda de Equipamiento Especializado.jpg',
    slug: 'busqueda-equipamiento-especializado',
    categoria: 'SERVICIOS',
  },
  {
    id: 1006,
    nombre: 'OPERACIÓN Y MANTENIMIENTO (O&M)',
    descripcion: 'Eficiencia día a día para tu planta.',
    descripcionLarga: 'Ofrecemos un servicio integral para que tu planta funcione siempre en óptimas condiciones: operación diaria, mantenimiento preventivo y predictivo, gestión de repuestos. Beneficios: aumenta la vida útil de tus activos, reduce paradas no planificadas y costos de emergencia, informes de desempeño para la toma de decisiones.',
    imagen: '/assets/Productos/Operacion y Mantenimiento.png',
    slug: 'operacion-mantenimiento-om',
    categoria: 'SERVICIOS',
  },
]; 