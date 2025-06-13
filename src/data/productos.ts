export interface Accesorio {
  nombre: string;
  descripcion: string;
  imagen: string;
}
export interface Marcador3D {
  x: number;
  y: number;
  z: number;
  label: string;
}
export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string; // principal
  imagenes?: string[]; // galería
  slug: string;
  categoria: string;
  accesorios?: Accesorio[];
  modelo3d?: string;
  marcadores3d?: Marcador3D[];
  pdf?: string;
}

export const productos: Producto[] = [
  // CONTROL DE CAUDAL
  {
    id: 1,
    nombre: 'W-CPM COMPUERTA MURAL',
    descripcion: 'Compuerta mural para regulación de caudal en canal mediante escudo móvil.',
    imagen: '/assets/BARRANQUILLA 4.JPG',
    slug: 'compuerta-mural',
    categoria: 'CONTROL DE CAUDAL',
  },
  {
    id: 2,
    nombre: 'W-CPC COMPUERTA CANAL ABIERTO',
    descripcion: 'Compuerta de hoja vertical para control de nivel y bloqueos en canales abiertos.',
    imagen: '/assets/Proyector Compuertas Actuadas.jpg',
    slug: 'compuerta-canal-abierto',
    categoria: 'CONTROL DE CAUDAL',
  },
  {
    id: 3,
    nombre: 'W-CPS COMPUERTA STOP LOG',
    descripcion: 'Elemento modular de cierre manual para seccionar rápidamente líneas de agua.',
    imagen: '/assets/PIEDECUESTA 1.jpg',
    slug: 'compuerta-stop-log',
    categoria: 'CONTROL DE CAUDAL',
  },
  {
    id: 4,
    nombre: 'W-CPR COMPUERTA RADIAL',
    descripcion: 'Compuerta curvada que ajusta el flujo gradualmente con perfil sectorial.',
    imagen: '/assets/PIEDECUESTA 2.jpg',
    slug: 'compuerta-radial',
    categoria: 'CONTROL DE CAUDAL',
  },

  // DRAGADO Y PRETRATAMIENTO
  {
    id: 5,
    nombre: 'C-CB CUCHARA BIVALVA',
    descripcion: 'Cuchara de dos valvas para extracción y transporte de sólidos en fondo de canales.',
    imagen: '/assets/IMAGEN 2.jpg',
    slug: 'cuchara-bivalva',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
  },
  {
    id: 6,
    nombre: 'X REJILLAS AUTOMÁTICAS',
    descripcion: 'Rejilla de limpieza automática para retención de sólidos gruesos, medios y finos en canales.',
    imagen: '/assets/Rejilla.jpg',
    slug: 'rejillas-automaticas',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
  },
  {
    id: 7,
    nombre: 'X FILTROS TORNILLO',
    descripcion: 'Sistema compacto que tamiza y transporta sólidos en una sola unidad. Opcionalmente, se puede añadir una zona de compactación.',
    imagen: '/assets/ARMENIA 2.JPG',
    slug: 'filtros-tornillo',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
  },
  {
    id: 8,
    nombre: 'X REJILLAS DE TAMBOR',
    descripcion: 'Tambor rotativo para cribado fino de sólidos en lineas, canales o tanques.',
    imagen: '/assets/ARMENIA 3.jpg',
    slug: 'rejillas-tambor',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
  },
  {
    id: 9,
    nombre: 'X COMPACTADORES',
    descripcion: 'Equipos que prensan residuos cribados para reducir su volumen y humedad.',
    imagen: '/assets/CHITRE 1.jpg',
    slug: 'compactadores',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
  },
  {
    id: 10,
    nombre: 'X CLASIFICADORES DE ARENA',
    descripcion: 'Equipos diseñados para la separación de materiales arenosos del agua.',
    imagen: '/assets/Gramalote 1.jpg',
    slug: 'clasificadores-arena',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
  },
  {
    id: 11,
    nombre: 'X LAVADORES DE ARENA',
    descripcion: 'Unidad que remueve materia orgánica adherida a partículas minerales mediante agitación y agua.',
    imagen: '/assets/Gramalote 2.jpg',
    slug: 'lavadores-arena',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
  },
  {
    id: 12,
    nombre: 'X-E DESARENADORES',
    descripcion: 'Sistema para separación de arenas por gravedad o vórtice hidráulico.',
    imagen: '/assets/PIEDECUESTA 3.jpg',
    slug: 'desarenadores',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
  },
  {
    id: 13,
    nombre: 'X TRATAMIENTOS COMBINADOS',
    descripcion: 'Módulos compactos que integran cribado, desarenado y desengrasado en una sola estructura.',
    imagen: '/assets/PIEDECUESTA 4.jpg',
    slug: 'tratamientos-combinados',
    categoria: 'DRAGADO Y PRETRATAMIENTO',
  },

  // AGITACIÓN Y FLOCULACIÓN
  {
    id: 14,
    nombre: 'E-AGI AGITADOR DE TURBINA AXIAL',
    descripcion: 'Agitador mecánico con de turbina para mezcla de productos químicos.',
    imagen: '/assets/Sedimentador.jpg',
    slug: 'agitador-turbina-axial',
    categoria: 'AGITACIÓN Y FLOCULACIÓN',
  },
  {
    id: 15,
    nombre: 'E-FLO FLOCULADORES',
    descripcion: 'Sistema de agitación suave para promover la formación de flóculos.',
    imagen: '/assets/ARMENIA 3.jpg',
    slug: 'floculadores',
    categoria: 'AGITACIÓN Y FLOCULACIÓN',
  },

  // SEDIMENTACIÓN
  {
    id: 16,
    nombre: 'E-SLD SEDIMENTADOR DE LODOS PARA TANQUE CIRCULAR DE ACCIONAMIENTO DIAMETRAL',
    descripcion: 'Sedimentador con puente y rastrillos accionados diametralmente para extracción de lodos al centro, natas y agua clarificada por el perimetro.',
    imagen: '/assets/SESQUILE 1.JPG',
    slug: 'sedimentador-diametral',
    categoria: 'SEDIMENTACIÓN',
  },
  {
    id: 17,
    nombre: 'E-SLR SEDIMENTADOR DE LODOS PARA TANQUE CIRCULAR DE ACCIONAMIENTO RADIAL',
    descripcion: 'Sedimentador con puente y rastrillos accionados radialmente para extracción de lodos al centro, natas y agua clarificada por el perimetro.',
    imagen: '/assets/LOS PATOS 1.jpg',
    slug: 'sedimentador-radial',
    categoria: 'SEDIMENTACIÓN',
  },
  {
    id: 18,
    nombre: 'E-SLC SEDIMENTADOR DE LODOS PARA TANQUE CIRCULAR DE ACCIONAMIENTO CENTRAL',
    descripcion: 'Sedimentador con puente radial estático y bastidor accionado centralmentepara extracción de lodos al centro, natas y agua clarificada por el perimetro.',
    imagen: '/assets/LOS PATOS 2.jpg',
    slug: 'sedimentador-central',
    categoria: 'SEDIMENTACIÓN',
  },
  {
    id: 19,
    nombre: 'E-PSL PUENTE LONGITUDINAL SEDIMENTADOR DE LODOS  PARA TANQUE RECTANGULAR',
    descripcion: 'Puente accionado longitudinalmente en tanque rentangular para extracción de lodos y natas al final del tanque.',
    imagen: '/assets/PIEDECUESTA 5.jpg',
    slug: 'puente-longitudinal-sedimentador',
    categoria: 'SEDIMENTACIÓN',
  },

  // TRATAMIENTO SECUNDARIO
  {
    id: 20,
    nombre: 'C-BDC SEDIMENTADOR DE CADENAS',
    descripcion: 'Sedimentador de lodos de cadena para remoción de fondo, superficial o combinada.',
    imagen: '/assets/PIEDECUESTA 2.jpg',
    slug: 'sedimentador-cadenas',
    categoria: 'TRATAMIENTO SECUNDARIO',
  },
  {
    id: 21,
    nombre: 'E-DF DISTRIBUIDOR DE FLUJO',
    descripcion: 'Distribuye uniformemente el caudal sobre el medio filtrante en filtros percoladores, optimizando el contacto agua-biomasa y la degradación orgánica.',
    imagen: '/assets/Proyector Compuertas Actuadas.jpg',
    slug: 'distribuidor-flujo',
    categoria: 'TRATAMIENTO SECUNDARIO',
  },

  // TRATAMIENTO TERCIARIO
  {
    id: 22,
    nombre: 'X-DF FILTRO DE DISCOS',
    descripcion: 'Módulos de discos rotativos para filtración fina y mejora de calidad del efluente.',
    imagen: '/assets/Yumbo 1.webp',
    slug: 'filtro-discos',
    categoria: 'TRATAMIENTO TERCIARIO',
  },

  // TRATAMIENTO DE LODOS Y TRANSPORTADORES
  {
    id: 23,
    nombre: 'E-ELM ESPESADOR DE LODOS DE ACCIONAMIENTO CENTRAL',
    descripcion: 'Espesador mecánico con agitador central para concentración de lodos.',
    imagen: '/assets/ARMENIA 2.JPG',
    slug: 'espesador-lodos-central',
    categoria: 'TRATAMIENTO DE LODOS Y TRANSPORTADORES',
  },
  {
    id: 24,
    nombre: 'X-RA ESPESADOR DESHIDRATADOR MODULAR',
    descripcion: 'Espesador modular con prensas de tornillo para deshidratación previa.',
    imagen: '/assets/ARMENIA 1.jpg',
    slug: 'espesador-deshidratador-modular',
    categoria: 'TRATAMIENTO DE LODOS Y TRANSPORTADORES',
  },
  {
    id: 25,
    nombre: 'X-CONV TRASPORTADOR DE TORNILLO',
    descripcion: 'Tornillo sin fin para transporte continuo de lodos o sólidos.',
    imagen: '/assets/PIEDECUESTA 1.jpg',
    slug: 'transportador-tornillo',
    categoria: 'TRATAMIENTO DE LODOS Y TRANSPORTADORES',
  },
  {
    id: 26,
    nombre: 'X-BELT.CONV TRASPORTADOR DE BANDA',
    descripcion: 'Cinta transportadora para traslado de lodos o sólidos con velocidad controlada.',
    imagen: '/assets/PIEDECUESTA 3.jpg',
    slug: 'transportador-banda',
    categoria: 'TRATAMIENTO DE LODOS Y TRANSPORTADORES',
  },

  // ADECUACIONES ESTRUCTURALES E HIDRÁULICAS
  {
    id: 27,
    nombre: 'C-ACS CUBIERTAS Y SOPORTES METÁLICOS',
    descripcion: 'Estructuras metálicas para protección de equipos y mantenimiento de procesos.',
    imagen: '/assets/ARMENIA 1.jpg',
    slug: 'cubiertas-soportes-metalicos',
    categoria: 'ADECUACIONES ESTRUCTURALES E HIDRÁULICAS',
  },
  {
    id: 28,
    nombre: 'C-AEP ESCALERAS Y PASARELAS',
    descripcion: 'Accesos metálicos seguros para mantenimiento y operación de plantas.',
    imagen: '/assets/ARMENIA 2.JPG',
    slug: 'escaleras-pasarelas',
    categoria: 'ADECUACIONES ESTRUCTURALES E HIDRÁULICAS',
  },
  {
    id: 29,
    nombre: 'C-APR PÓRTICOS',
    descripcion: 'Estructuras metálicas para izaje y mantenimiento de equipos pesados.',
    imagen: '/assets/ARMENIA 3.jpg',
    slug: 'porticos',
    categoria: 'ADECUACIONES ESTRUCTURALES E HIDRÁULICAS',
  },
  {
    id: 30,
    nombre: 'C-AHID SISTEMAS DE BOMBEO Y REDES DE DISTRIBUCIÓN',
    descripcion: 'Sistemas estructurales e hidráulicos para conducción y distribución de caudales.',
    imagen: '/assets/ARMENIA 4.jpg',
    slug: 'sistemas-bombeo-redes',
    categoria: 'ADECUACIONES ESTRUCTURALES E HIDRÁULICAS',
  },
]; 