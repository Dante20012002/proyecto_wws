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
    nombre: 'Filtro de Carbón Activado',
    descripcion: 'Equipo para la remoción de cloro, materia orgánica y compuestos que afectan el sabor y olor del agua.',
    imagen: '/productos/filtro-carbon.jpg',
    slug: 'filtro-carbon-activado',
  },
  {
    id: 2,
    nombre: 'Ablandador de Agua',
    descripcion: 'Sistema para eliminar la dureza del agua mediante intercambio iónico, ideal para procesos industriales y domésticos.',
    imagen: '/productos/ablandador-agua.jpg',
    slug: 'ablandador-agua',
  },
  {
    id: 3,
    nombre: 'Filtro Multimedia',
    descripcion: 'Equipo para la remoción de sólidos suspendidos y turbidez, mejorando la calidad del agua.',
    imagen: '/productos/filtro-multimedia.jpg',
    slug: 'filtro-multimedia',
  },
  {
    id: 4,
    nombre: 'Sistema de Ósmosis Inversa',
    descripcion: 'Tecnología avanzada para la purificación de agua, eliminando sales y contaminantes disueltos.',
    imagen: '/productos/osmosis-inversa.jpg',
    slug: 'osmosis-inversa',
  },
]; 