export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  slug: string;
}

export const productos: Producto[] = [
  {
    id: 1,
    nombre: 'C-BDC WATER WISE SERVICES Barredor de lodos de cadena',
    descripcion: 'Barredor de lodos de cadena para sistemas de tratamiento de aguas residuales, eficiente y robusto.',
    imagen: '/assets/PIEDECUESTA 2.jpg',
    slug: 'barredor-lodos-cadena',
  },
  {
    id: 2,
    nombre: 'C-CB WATER WISE SERVICES Cuchara bivalva',
    descripcion: 'Cuchara bivalva para manejo de sólidos y limpieza en plantas de tratamiento.',
    imagen: '/assets/IMAGEN 2.jpg',
    slug: 'cuchara-bivalva',
  },
  {
    id: 3,
    nombre: 'C-ESTM WATER WISE SERVICES Estructuras metálicas (varios tipos)',
    descripcion: 'Estructuras metálicas personalizadas para diferentes aplicaciones en tratamiento de agua.',
    imagen: '/assets/ARMENIA 1.jpg',
    slug: 'estructuras-metalicas',
  },
  {
    id: 4,
    nombre: 'E-AGI WATER WISE SERVICES Agitadores verticales',
    descripcion: 'Agitadores verticales para mezcla eficiente en procesos de tratamiento de agua.',
    imagen: '/assets/Sedimentador.jpg',
    slug: 'agitadores-verticales',
  },
  {
    id: 5,
    nombre: 'E-BLM WATER WISE SERVICES Barredor de lodos mecánico',
    descripcion: 'Barredor de lodos mecánico para sedimentadores y clarificadores.',
    imagen: '/assets/PIEDECUESTA 5.jpg',
    slug: 'barredor-lodos-mecanico',
  },
  {
    id: 6,
    nombre: 'E-DF WATER WISE SERVICES Distribuidor de flujo',
    descripcion: 'Distribuidor de flujo para optimizar la distribución del agua en procesos de tratamiento.',
    imagen: '/assets/Proyector Compuertas Actuadas.jpg',
    slug: 'distribuidor-flujo',
  },
  {
    id: 7,
    nombre: 'E-ELM WATER WISE SERVICES Espesador de lodos mecánico',
    descripcion: 'Espesador de lodos mecánico para manejo y reducción de lodos.',
    imagen: '/assets/ARMENIA 2.JPG',
    slug: 'espesador-lodos-mecanico',
  },
  {
    id: 8,
    nombre: 'E-FLO WATER WISE SERVICES Floculadores',
    descripcion: 'Floculadores para mejorar la sedimentación y clarificación en plantas de tratamiento.',
    imagen: '/assets/ARMENIA 3.jpg',
    slug: 'floculadores',
  },
  {
    id: 9,
    nombre: 'W-COMP WATER WISE SERVICES Compuertas (varios tipos)',
    descripcion: 'Compuertas de diferentes tipos para control de flujo en sistemas hidráulicos.',
    imagen: '/assets/BARRANQUILLA 4.JPG',
    slug: 'compuertas',
  },
  {
    id: 10,
    nombre: 'X-PRETRATAMIENTO WATER WISE SERVICES (varios tipos)',
    descripcion: 'Equipos de pretratamiento para remover sólidos gruesos y proteger procesos posteriores.',
    imagen: '/assets/IMAGEN 1.jpg',
    slug: 'pretratamiento',
  },
  {
    id: 11,
    nombre: 'X-TRATAMIENTO DE LODOS  WATER WISE SERVICES (varios tipos)',
    descripcion: 'Soluciones para el tratamiento y manejo de lodos generados en plantas de tratamiento.',
    imagen: '/assets/fusagasuga 1.jpg',
    slug: 'tratamiento-lodos',
  },
  {
    id: 12,
    nombre: 'X-TRATAMIENTO TERCIARIO WATER WISE SERVICES Filtro de discos',
    descripcion: 'Filtro de discos para tratamiento terciario y mejora de la calidad del efluente.',
    imagen: '/assets/Yumbo 1.webp',
    slug: 'filtro-discos',
  },
]; 