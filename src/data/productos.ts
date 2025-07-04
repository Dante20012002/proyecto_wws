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
  formularioCotizacion?: string;
  pdf?: string;
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
}

export const productos: Producto[] = [
  // CONTROL DE CAUDAL
  {
    id: 1,
    nombre: 'W-CPM COMPUERTA MURAL',
    descripcion: 'Compuerta mural para regulación de caudal en canal mediante escudo móvil.',
    descripcionLarga: 'La compuerta mural W-CPM es un dispositivo de control hidráulico diseñado para la regulación precisa del caudal en canales de tratamiento de aguas residuales. Fabricada en acero inoxidable de alta resistencia, cuenta con un sistema de elevación vertical que permite ajustar la altura del escudo móvil según los requerimientos del proceso. Su diseño hermético previene fugas y garantiza un control eficiente del flujo, optimizando el rendimiento de las etapas posteriores del tratamiento. Ideal para plantas de tratamiento que requieren control automático de niveles y caudales.',
    imagen: '/assets/Productos/1.jpg',
    slug: 'compuerta-mural',
    categoria: 'CONTROL DE CAUDAL',
    modelo3d: '/models/1.1 W-CPM.glb',
    marcadores3d: [
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
    descripcionLarga: 'La compuerta de canal abierto W-CPC es un sistema de control hidráulico versátil diseñado para la gestión eficiente de caudales en canales de tratamiento de aguas residuales. Su hoja vertical ajustable permite controlar tanto el nivel del agua como realizar bloqueos temporales para mantenimiento. Fabricada con materiales resistentes a la corrosión, incluye un sistema de sellado que minimiza las pérdidas de agua. Su operación puede ser manual o automatizada mediante actuadores eléctricos, facilitando la integración en sistemas de control centralizado. Perfecta para plantas que requieren flexibilidad operativa y control preciso de niveles.',
    imagen: '/assets/Productos/2.jpg',
    slug: 'compuerta-canal-abierto',
    categoria: 'CONTROL DE CAUDAL',
    modelo3d: '/models/1.2 W-CPC.glb',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },
  {
    id: 3,
    nombre: 'W-CPS COMPUERTA STOP LOG',
    descripcion: 'Elemento modular de cierre manual para seccionar rápidamente líneas de agua.',
    descripcionLarga: 'La compuerta stop log W-CPS es un sistema modular de cierre rápido diseñado para el aislamiento temporal de líneas de agua en plantas de tratamiento de aguas residuales. Su diseño modular permite la instalación de múltiples elementos según la altura requerida, facilitando el mantenimiento y limpieza de equipos aguas abajo. Fabricada en acero inoxidable con juntas de sellado especiales, garantiza un cierre hermético que previene el paso de agua durante las operaciones de mantenimiento. Su instalación y remoción manual es sencilla, reduciendo los tiempos de parada y mejorando la eficiencia operativa de la planta.',
    imagen: '/assets/Productos/3.Proyector Compuertas Actuadas.jpg',
    slug: 'compuerta-stop-log',
    categoria: 'CONTROL DE CAUDAL',
    modelo3d: '/models/1.3 W-CPS.glb',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },
  {
    id: 4,
    nombre: 'W-CPR COMPUERTA RADIAL',
    descripcion: 'Compuerta curvada que ajusta el flujo gradualmente con perfil sectorial.',
    descripcionLarga: 'La compuerta radial W-CPR es un dispositivo de control hidráulico avanzado que utiliza un perfil sectorial curvado para regular el flujo de agua de manera gradual y eficiente. Su diseño único permite un control preciso del caudal con mínimas turbulencias, optimizando el rendimiento de las etapas posteriores del tratamiento. El perfil curvado reduce la erosión y el desgaste, prolongando la vida útil del equipo. Fabricada en acero inoxidable de alta calidad, incluye un sistema de sellado que previene fugas y garantiza un control hermético. Ideal para aplicaciones que requieren regulación fina del caudal y control de niveles en canales de tratamiento.',
    imagen: '/assets/Productos/4.MONTAJE SIN OBRA CIVIL.jpg',
    slug: 'compuerta-radial',
    categoria: 'CONTROL DE CAUDAL',
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },

  // DRAGADO Y PRETRATAMIENTO
  {
    id: 5,
    nombre: 'C-CB CUCHARA BIVALVA',
    descripcion: 'Cuchara de dos valvas para extracción y transporte de sólidos en fondo de canales.',
    descripcionLarga: 'La cuchara bivalva C-CB es un equipo especializado para la extracción y transporte de sólidos sedimentados en el fondo de canales de tratamiento de aguas residuales. Su diseño de dos valvas articuladas permite capturar eficientemente los lodos y sedimentos acumulados, facilitando su remoción sin interrumpir el flujo del proceso. Fabricada en acero inoxidable de alta resistencia, incluye un sistema de cierre hermético que previene la pérdida de material durante el transporte. Su operación puede ser manual o automatizada, adaptándose a las necesidades específicas de cada planta. Ideal para el mantenimiento preventivo y la limpieza de canales de sedimentación.',
    imagen: '/assets/Productos/0.jpg',
    slug: 'cuchara-bivalva',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
    modelo3d: '/models/2.1 C-CB 3D.glb',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
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
    subProductos: [
      {
        id: 'x-rake',
        nombre: 'X-RAKE / X-H.RAKE REJILLA DE GRUESOS, MEDIOS Y FINOS',
        descripcion: 'Rejilla automática de rastrillos para retención de sólidos gruesos, medios y finos.',
        descripcionLarga: 'La rejilla X-RAKE / X-H.RAKE es un sistema automático de cribado que utiliza rastrillos para la retención eficiente de sólidos gruesos, medios y finos en canales de tratamiento de aguas residuales. Su sistema de limpieza automática con rastrillos elimina la necesidad de intervención manual, reduciendo costos operativos y mejorando la eficiencia del proceso. El diseño incluye sensores de nivel y control automático que se adaptan a las variaciones de caudal, garantizando un cribado continuo y eficiente.',
        imagen: '/assets/Productos/1. 1722508586316.jpg',
        slug: 'x-rake-rejilla-gruesos',
        modelo3d: '/models/X-RAKE.glb',
        marcadores3d: [
          {
            x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
            label: [{ nombre: 'Sistema de Rastrillos' }],
          },
          {
            x: 0.5, y: -1.2, z: 1.5,
            label: [{ nombre: 'Motor de Accionamiento' }],
          },
        ],
        qr: '/assets/qr/x-rake-rejilla-gruesos.png',
        formularioCotizacion: 'https://forms.gle/x-rake-cotizacion'
      },
      {
        id: 'x-step',
        nombre: 'X-STEP REJILLA DE ESCALONES',
        descripcion: 'Rejilla automática de escalones para cribado eficiente de sólidos.',
        descripcionLarga: 'La rejilla X-STEP es un sistema automático de cribado que utiliza un mecanismo de escalones para la retención eficiente de sólidos en canales de tratamiento de aguas residuales. Su diseño único de escalones permite un cribado continuo y automático, eliminando la necesidad de paradas para limpieza manual. El sistema incluye sensores de nivel y control automático que optimizan el rendimiento según las condiciones de operación.',
        imagen: '/assets/Productos/1. 1722508586316.jpg',
        slug: 'x-step-rejilla-escalones',
        modelo3d: '/models/X-STEP.glb',
        marcadores3d: [
          {
            x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
            label: [{ nombre: 'Sistema de Escalones' }],
          },
          {
            x: 0.3, y: -1.1, z: 1.6,
            label: [{ nombre: 'Mecanismo de Elevación' }],
          },
        ],
        qr: '/assets/qr/x-step-rejilla-escalones.png',
        formularioCotizacion: 'https://forms.gle/x-step-cotizacion'
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
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
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
        imagen: '/assets/Productos/2. 143246876_774032859861155_2466509016048709070_n.jpg',
        slug: 's-filtro-tornillo-compactador',
      },
      {
        id: 's-mini',
        nombre: 'S.MINI MINI FILTRO TORNILLO',
        descripcion: 'Filtro tornillo compacto para aplicaciones de menor escala.',
        descripcionLarga: 'El S.MINI es un filtro tornillo de tamaño reducido, ideal para instalaciones pequeñas o aplicaciones piloto que requieren separación eficiente de sólidos en poco espacio.',
        imagen: '/assets/Productos/2. 143246876_774032859861155_2466509016048709070_n.jpg',
        slug: 's-mini-mini-filtro-tornillo',
      },
      {
        id: 'ts-filtro-tornillo',
        nombre: 'TS FILTRO TORNILLO CON TANQUE / TSC FILTRO TORNILLO COMPACTADOR CON TANQUE',
        descripcion: 'Filtro tornillo con tanque integrado para mayor capacidad y eficiencia.',
        descripcionLarga: 'El TS Filtro Tornillo y TSC Filtro Tornillo Compactador con Tanque integran un tanque de almacenamiento para aumentar la capacidad de procesamiento y mejorar la eficiencia en la separación y compactación de sólidos.',
        imagen: '/assets/Productos/2. 143246876_774032859861155_2466509016048709070_n.jpg',
        slug: 'ts-filtro-tornillo-tanque',
      },
      {
        id: 'vs-filtro-tornillo',
        nombre: 'VS FILTRO TORNILLO VERTICAL / VSC FILTRO TORNILLO COMPACTADOR VERTICAL',
        descripcion: 'Filtro tornillo vertical para optimización de espacio y compactación.',
        descripcionLarga: 'El VS Filtro Tornillo Vertical y VSC Compactador Vertical están diseñados para instalaciones donde el espacio es limitado, permitiendo una separación y compactación eficiente de sólidos en orientación vertical.',
        imagen: '/assets/Productos/2. 143246876_774032859861155_2466509016048709070_n.jpg',
        slug: 'vs-filtro-tornillo-vertical',
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
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
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
        imagen: '/assets/Productos/3. 93888766_595226131075163_3212793549254819840_n.jpg',
        slug: 'x-drum-rejilla-alimentacion-externa',
      },
      {
        id: 'x-int-drum',
        nombre: 'X-INT.DRUM REJILLA DE ALIMENACIÓN INTERNA A TAMBOR ROTATIVO',
        descripcion: 'Rejilla de alimentación interna para cribado fino y continuo.',
        descripcionLarga: 'La X-INT.DRUM es una rejilla de tambor rotativo con alimentación interna, optimizada para el cribado fino y continuo de sólidos en el tratamiento de aguas residuales. Su diseño compacto facilita la integración en sistemas existentes.',
        imagen: '/assets/Productos/3. 93888766_595226131075163_3212793549254819840_n.jpg',
        slug: 'x-int-drum-rejilla-alimentacion-interna',
      },
      {
        id: 'x-srd',
        nombre: 'X-SRD / X-SRD.D REJILLA DE TAMBOR ROTATIVO INMERSO EN MEDIO A FILTRAR',
        descripcion: 'Rejilla de tambor rotativo sumergida para filtración directa.',
        descripcionLarga: 'La X-SRD y X-SRD.D son rejillas de tambor rotativo diseñadas para operar sumergidas en el medio a filtrar, permitiendo una separación directa y eficiente de sólidos en aplicaciones de alta demanda.',
        imagen: '/assets/Productos/3. 93888766_595226131075163_3212793549254819840_n.jpg',
        slug: 'x-srd-rejilla-tambor-inmerso',
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
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
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
        imagen: '/assets/Productos/4. 84036293_549328035664973_4077440993597587456_n_cleanup.jpg.png',
        slug: 'x-s-comp-tornillo-compactador',
      },
      {
        id: 'x-comp',
        nombre: 'X-COMP TORNILLO SIN FIN COMPACTADOR-LAVADOR',
        descripcion: 'Tornillo sin fin que compacta y lava sólidos cribados.',
        descripcionLarga: 'El X-COMP es un tornillo sin fin que, además de compactar, incorpora un sistema de lavado para mejorar la limpieza de los sólidos cribados antes de su disposición.',
        imagen: '/assets/Productos/4. 84036293_549328035664973_4077440993597587456_n_cleanup.jpg.png',
        slug: 'x-comp-tornillo-compactador-lavador',
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
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
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
        imagen: '/assets/Productos/5.EQUIPOS DE PRE TRTATAMIENTO X2SOLUTION.jpg',
        slug: 'x-gc-clasificador-arenas',
      },
      {
        id: 'x-gc-cone',
        nombre: 'X-GC CONE CLASIFICADOR DE ARENAS CÓNICO',
        descripcion: 'Clasificador de arenas con diseño cónico para mayor eficiencia.',
        descripcionLarga: 'El X-GC CONE es un clasificador de arenas con geometría cónica que mejora la eficiencia de separación y facilita la extracción de partículas minerales.',
        imagen: '/assets/Productos/5.EQUIPOS DE PRE TRTATAMIENTO X2SOLUTION.jpg',
        slug: 'x-gc-cone-clasificador-arenas-conico',
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
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
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
        imagen: '/assets/Productos/6. Imagen2_LE_upscale_balanced_x4_light_ai_30_tone_enhance_30_color_enhance_30.jpg',
        slug: 'x-g-wash-lavador-arenas',
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
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
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
        imagen: '/assets/Productos/7. EQUIPOS DE PRE TRTATAMIENTO X2SOLUTION.jpg',
        slug: 'x-vortex-desarenador',
      },
      {
        id: 'e-pba',
        nombre: 'E-PBA PUENTE LONGITUDINAL DESARENADOR',
        descripcion: 'Puente longitudinal para extracción de arenas en tanques desarenadores.',
        descripcionLarga: 'El E-PBA es un sistema de puente longitudinal diseñado para la extracción eficiente de arenas en tanques desarenadores, facilitando el mantenimiento y operación continua.',
        imagen: '/assets/Productos/7. EQUIPOS DE PRE TRTATAMIENTO X2SOLUTION.jpg',
        slug: 'e-pba-puente-longitudinal-desarenador',
      }
    ],
  },

  // TRATAMIENTO SECUNDARIO
  {
    id: 13,
    nombre: 'X TRATAMIENTOS COMBINADOS',
    descripcion: 'Módulos compactos que integran cribado, desarenado y desengrasado en una sola estructura.',
    descripcionLarga: 'Los tratamientos combinados XS Solutions son módulos compactos e innovadores que integran múltiples procesos de pretratamiento en una sola estructura. Su diseño integrado combina cribado, desarenado y desengrasado, eliminando la necesidad de equipos separados y reduciendo significativamente el espacio requerido. Esta integración optimiza el flujo del proceso y reduce los costos de instalación y mantenimiento. Fabricados en acero inoxidable de alta calidad, incluyen sistemas de control automático que coordinan todos los procesos de manera eficiente. Ideales para plantas con limitaciones de espacio que requieren un pretratamiento completo y eficiente en una solución compacta.',
    imagen: '/assets/Productos/8. 145925091_777582819506159_1644089623811956408_n.jpg',
    slug: 'tratamientos-combinados',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
    marca: 'XS Solutions',
    subProductos: [
      {
        id: 'set-1',
        nombre: 'SET-1 TOLVA LONGITUDINAL PARA LA SEPARACIÓN DE ARENAS',
        descripcion: 'Tolva longitudinal diseñada para la separación eficiente de arenas en el pretratamiento.',
        descripcionLarga: 'La SET-1 es una tolva longitudinal especialmente diseñada para la separación eficiente de arenas en plantas de tratamiento de aguas residuales. Su diseño optimiza la sedimentación y facilita la extracción de arenas, mejorando la eficiencia global del pretratamiento.',
        imagen: '/assets/Productos/8. 145925091_777582819506159_1644089623811956408_n.jpg',
        slug: 'set-1-tolva-longitudinal',
        modelo3d: '/models/SET-1.glb',
        marcadores3d: [],
        qr: '/assets/qr/set-1-tolva-longitudinal.png',
        formularioCotizacion: 'https://forms.gle/set-1-cotizacion'
      },
      {
        id: 'set-2',
        nombre: 'SET-2 UNIDAD COMBINADA',
        descripcion: 'Unidad compacta que integra cribado y desarenado en un solo equipo.',
        descripcionLarga: 'La SET-2 es una unidad combinada que integra los procesos de cribado y desarenado en un solo equipo compacto, ideal para plantas con espacio limitado y altos requerimientos de eficiencia.',
        imagen: '/assets/Productos/8. 145925091_777582819506159_1644089623811956408_n.jpg',
        slug: 'set-2-unidad-combinada',
        modelo3d: '/models/SET-2.glb',
        marcadores3d: [],
        qr: '/assets/qr/set-2-unidad-combinada.png',
        formularioCotizacion: 'https://forms.gle/set-2-cotizacion'
      },
      {
        id: 'set-3',
        nombre: 'SET-3 UNIDAD COMBINADA CON SISTEMA DE DESENGRASADO',
        descripcion: 'Unidad combinada que incluye sistema de desengrasado para mayor eficiencia.',
        descripcionLarga: 'La SET-3 es una unidad combinada avanzada que, además de cribado y desarenado, incorpora un sistema de desengrasado, permitiendo un pretratamiento aún más completo y eficiente.',
        imagen: '/assets/Productos/8. 145925091_777582819506159_1644089623811956408_n.jpg',
        slug: 'set-3-unidad-combinada-desengrasado',
        modelo3d: '/models/SET-3.glb',
        marcadores3d: [],
        qr: '/assets/qr/set-3-unidad-combinada-desengrasado.png',
        formularioCotizacion: 'https://forms.gle/set-3-cotizacion'
      },
      {
        id: 'mini-set-2',
        nombre: 'MINI.SET-2 MINI UNIDAD COMBINADA 2',
        descripcion: 'Versión mini de la unidad combinada 2 para aplicaciones de menor escala.',
        descripcionLarga: 'La MINI.SET-2 es una versión compacta de la unidad combinada 2, ideal para instalaciones pequeñas o aplicaciones piloto que requieren eficiencia en poco espacio.',
        imagen: '/assets/Productos/8. 145925091_777582819506159_1644089623811956408_n.jpg',
        slug: 'mini-set-2-mini-unidad-combinada-2',
        modelo3d: '/models/MINI-SET-2.glb',
        marcadores3d: [],
        qr: '/assets/qr/mini-set-2-mini-unidad-combinada-2.png',
        formularioCotizacion: 'https://forms.gle/mini-set-2-cotizacion'
      },
      {
        id: 'mini-set-3',
        nombre: 'MINI.SET-3 MINI UNIDAD COMBINADA 3',
        descripcion: 'Versión mini de la unidad combinada 3 con sistema de desengrasado.',
        descripcionLarga: 'La MINI.SET-3 es una versión compacta de la unidad combinada 3, que incluye sistema de desengrasado, pensada para aplicaciones de menor escala con altos estándares de pretratamiento.',
        imagen: '/assets/Productos/8. 145925091_777582819506159_1644089623811956408_n.jpg',
        slug: 'mini-set-3-mini-unidad-combinada-3',
        modelo3d: '/models/MINI-SET-3.glb',
        marcadores3d: [],
        qr: '/assets/qr/mini-set-3-mini-unidad-combinada-3.png',
        formularioCotizacion: 'https://forms.gle/mini-set-3-cotizacion'
      }
    ]
  },
  {
    id: 14,
    nombre: 'E-AGI AGITADOR DE TURBINA AXIAL',
    descripcion: 'Agitador mecánico con de turbina para mezcla de productos químicos.',
    descripcionLarga: 'El agitador de turbina axial E-AGI es un equipo mecánico especializado diseñado para la mezcla eficiente de productos químicos en plantas de tratamiento de aguas residuales. Su diseño de turbina axial genera un flujo vertical que optimiza la distribución de químicos en el agua, asegurando una mezcla uniforme y rápida. Fabricado en acero inoxidable resistente a la corrosión, incluye un sistema de control de velocidad variable que permite ajustar la intensidad de la agitación según los requerimientos del proceso. Ideal para la dosificación de coagulantes, floculantes y otros productos químicos, garantizando una reacción óptima y mejorando la eficiencia del tratamiento.',
    imagen: '/assets/Productos/1. 5239d63c-6ba2-4d19-9a8b-daf0f67fb400.jpg',
    slug: 'agitador-turbina-axial',
    categoria: 'AGITACIÓN Y FLOCULACIÓN',
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },

  // TRATAMIENTO SECUNDARIO
  {
    id: 15,
    nombre: 'C-BDC SEDIMENTADOR DE CADENAS',
    descripcion: 'Sedimentador de lodos de cadena para remoción de fondo, superficial o combinada.',
    descripcionLarga: 'El sedimentador de cadenas C-BDC es un sistema de clarificación avanzado diseñado para la remoción eficiente de lodos en plantas de tratamiento de aguas residuales. Su sistema de cadenas permite la remoción de lodos del fondo, superficie o de manera combinada, adaptándose a las necesidades específicas de cada aplicación. El diseño de cadenas proporciona un movimiento continuo y uniforme que optimiza la separación sólido-líquido. Fabricado en acero inoxidable resistente a la corrosión, incluye un sistema de control automático que regula la velocidad de las cadenas según las condiciones de operación. Esencial para aplicaciones que requieren una clarificación eficiente con remoción flexible de lodos.',
    imagen: '/assets/Productos/2. ImagenX.png',
    slug: 'sedimentador-cadenas',
    categoria: 'TRATAMIENTO SECUNDARIO',
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
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },

  // TRATAMIENTO TERCIARIO
  {
    id: 17,
    nombre: 'E-FLO FLOCULADORES',
    descripcion: 'Sistema de agitación suave para promover la formación de flóculos.',
    descripcionLarga: 'Los floculadores E-FLO son sistemas de agitación suave diseñados específicamente para promover la formación y crecimiento de flóculos en plantas de tratamiento de aguas residuales. Su diseño de agitación controlada permite que las partículas coaguladas se unan gradualmente formando flóculos más grandes y densos, facilitando su posterior sedimentación. El sistema incluye múltiples cámaras con agitación decreciente que optimizan el proceso de floculación. Fabricados en acero inoxidable resistente a la corrosión, incluyen un sistema de control de velocidad variable que permite ajustar la intensidad de la agitación según las características del agua. Esenciales para optimizar la eficiencia de la clarificación y mejorar la calidad del efluente tratado.',
    imagen: '/assets/Productos/2. 904302bd-f670-4752-a754-baf963c101fd.jpg',
    slug: 'floculadores',
    categoria: 'AGITACIÓN Y FLOCULACIÓN',
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
    subProductos: [
      {
        id: 'e-flv',
        nombre: 'E-FLV FLOCULADOR DE PALETAS DE EJE VERTICAL',
        descripcion: 'Floculador de paletas con eje vertical para formación eficiente de flóculos.',
        descripcionLarga: 'El E-FLV es un floculador de paletas con eje vertical, diseñado para promover la formación y crecimiento de flóculos en procesos de tratamiento de aguas, optimizando la clarificación.',
        imagen: '/assets/Productos/2. 904302bd-f670-4752-a754-baf963c101fd.jpg',
        slug: 'e-flv-floculador-eje-vertical',
      },
      {
        id: 'e-flh',
        nombre: 'E-FLH FLOCULADOR DE PALETAS DE EJE HORIZONTAL',
        descripcion: 'Floculador de paletas con eje horizontal para mezcla suave y eficiente.',
        descripcionLarga: 'El E-FLH es un floculador de paletas con eje horizontal, ideal para la mezcla suave y eficiente de partículas en suspensión, facilitando la formación de flóculos grandes y densos.',
        imagen: '/assets/Productos/2. 904302bd-f670-4752-a754-baf963c101fd.jpg',
        slug: 'e-flh-floculador-eje-horizontal',
      }
    ],
  },

  // SEDIMENTACIÓN
  {
    id: 18,
    nombre: 'E-SLD SEDIMENTADOR DE LODOS PARA TANQUE CIRCULAR DE ACCIONAMIENTO DIAMETRAL',
    descripcion: 'Sedimentador con puente y rastrillos accionados diametralmente para extracción de lodos al centro, natas y agua clarificada por el perimetro.',
    descripcionLarga: 'El sedimentador de lodos E-SLD con accionamiento diametral es un sistema avanzado de clarificación diseñado para tanques circulares en plantas de tratamiento de aguas residuales. Su puente giratorio con rastrillos accionados diametralmente permite una extracción eficiente de lodos sedimentados hacia el centro del tanque, mientras que las natas flotantes son removidas por el perímetro. El sistema de accionamiento diametral proporciona un movimiento uniforme y estable, optimizando la separación sólido-líquido. Fabricado en acero inoxidable resistente a la corrosión, incluye un sistema de control automático que regula la velocidad de rotación según las condiciones de operación. Esencial para la clarificación eficiente y la producción de agua clarificada de alta calidad.',
    imagen: '/assets/Productos/1. c533c62e-d32e-4cf6-9242-38eda9fb1932_LE_upscale_balanced_x4_light_ai_30_tone_enhance_30_color_enhance_30.jpg',
    slug: 'sedimentador-diametral',
    categoria: 'SEDIMENTACIÓN',
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
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
    descripcionLarga: 'El sedimentador de lodos E-SLR con accionamiento radial es un sistema de clarificación diseñado para tanques circulares que utiliza un puente giratorio con rastrillos accionados radialmente. Este diseño permite una extracción eficiente de lodos sedimentados hacia el centro del tanque, mientras que las natas flotantes son removidas por el perímetro. El sistema de accionamiento radial proporciona un movimiento suave y continuo que optimiza la separación sólido-líquido. Fabricado en acero inoxidable resistente a la corrosión, incluye un sistema de control automático que regula la velocidad de rotación según las condiciones de operación. Ideal para aplicaciones que requieren una clarificación eficiente y estable en tanques circulares.',
    imagen: '/assets/Productos/2. snapedit_1741888425139.jpg',
    slug: 'sedimentador-radial',
    categoria: 'SEDIMENTACIÓN',
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
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
    descripcionLarga: 'El sedimentador de lodos E-SLC con accionamiento central es un sistema de clarificación diseñado para tanques circulares que utiliza un puente radial estático con un bastidor accionado centralmente. Este diseño único permite una extracción eficiente de lodos sedimentados hacia el centro del tanque, mientras que las natas flotantes son removidas por el perímetro. El sistema de accionamiento central proporciona un movimiento estable y controlado que optimiza la separación sólido-líquido. Fabricado en acero inoxidable resistente a la corrosión, incluye un sistema de control automático que regula la velocidad de rotación según las condiciones de operación. Ideal para aplicaciones que requieren una clarificación eficiente y estable en tanques circulares con accionamiento central.',
    imagen: '/assets/Productos/3. BARREDOR DE  LODOS  TRACCION CENTRAL Ø 35 M.jpg',
    slug: 'sedimentador-central',
    categoria: 'SEDIMENTACIÓN',
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
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
    descripcionLarga: 'El puente longitudinal E-PSL es un sistema de clarificación diseñado específicamente para tanques rectangulares en plantas de tratamiento de aguas residuales. Su puente accionado longitudinalmente permite una extracción eficiente de lodos sedimentados y natas flotantes hacia el final del tanque. El diseño longitudinal optimiza el flujo del agua y mejora la eficiencia de la separación sólido-líquido. Fabricado en acero inoxidable resistente a la corrosión, incluye un sistema de control automático que regula la velocidad de movimiento según las condiciones de operación. Ideal para aplicaciones que requieren una clarificación eficiente en tanques rectangulares con extracción longitudinal de lodos y natas.',
    imagen: '/assets/Productos/4. 173220334_2917813575132890_2857803827292992920_n.jpg',
    slug: 'puente-longitudinal-sedimentador',
    categoria: 'SEDIMENTACIÓN',
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },

  // TRATAMIENTO SECUNDARIO
  {
    id: 22,
    nombre: 'C-BDC SEDIMENTADOR DE CADENAS',
    descripcion: 'Sedimentador de lodos de cadena para remoción de fondo, superficial o combinada.',
    descripcionLarga: 'El sedimentador de cadenas C-BDC es un sistema de clarificación avanzado diseñado para la remoción eficiente de lodos en plantas de tratamiento de aguas residuales. Su sistema de cadenas permite la remoción de lodos del fondo, superficie o de manera combinada, adaptándose a las necesidades específicas de cada aplicación. El diseño de cadenas proporciona un movimiento continuo y uniforme que optimiza la separación sólido-líquido. Fabricado en acero inoxidable resistente a la corrosión, incluye un sistema de control automático que regula la velocidad de las cadenas según las condiciones de operación. Esencial para aplicaciones que requieren una clarificación eficiente con remoción flexible de lodos.',
    imagen: '/assets/Productos/2. ImagenX.png',
    slug: 'sedimentador-cadenas',
    categoria: 'TRATAMIENTO SECUNDARIO',
    modelo3d: '/models/5.1 C-BDC 3D.glb',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },
  {
    id: 23,
    nombre: 'E-DF DISTRIBUIDOR DE FLUJO',
    descripcion: 'Distribuye uniformemente el caudal sobre el medio filtrante en filtros percoladores, optimizando el contacto agua-biomasa y la degradación orgánica.',
    descripcionLarga: 'El distribuidor de flujo E-DF es un sistema especializado diseñado para distribuir uniformemente el caudal sobre el medio filtrante en filtros percoladores de plantas de tratamiento de aguas residuales. Su diseño optimiza el contacto entre el agua y la biomasa, mejorando la eficiencia de la degradación orgánica. El sistema de distribución uniforme asegura que toda la superficie del medio filtrante reciba el caudal de manera equilibrada, evitando zonas de sobrecarga o subcarga. Fabricado en acero inoxidable resistente a la corrosión, incluye un sistema de control automático que regula la distribución del flujo según las condiciones de operación. Esencial para optimizar el rendimiento de filtros percoladores y mejorar la calidad del efluente tratado.',
    imagen: '/assets/Productos/1. 6f978b15-5597-4b4c-9b48-e3e435d9ca25_LE_upscale_balanced_x4_light_ai_30_tone_enhance_30_color_enhance_30.jpg',
    slug: 'distribuidor-flujo',
    categoria: 'TRATAMIENTO SECUNDARIO',
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
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
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
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
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
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
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
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
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
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
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
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
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
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
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
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
    modelo3d: '/models/ESPESADOR DE LODOS.glb',
    marcadores3d: [
      {
        x: -0.04800620673775484, y: -1.3397690966630114, z: 1.74,
        label: [{ nombre: 'Bafle de Aquietamiento' }],
      },
    ],
  },
]; 