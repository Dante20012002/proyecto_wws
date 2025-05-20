export interface PuntoInteres {
  lat: number;
  lng: number;
  title: string;
  description: string;
}

export const puntosInteres: PuntoInteres[] = [
  {
    lat: 4.5709,
    lng: -74.2973,
    title: 'Bogotá',
    description: 'Capital de Colombia'
  },
  {
    lat: 6.2442,
    lng: -75.5812,
    title: 'Medellín',
    description: 'Ciudad de la eterna primavera'
  },
  {
    lat: 10.9685,
    lng: -74.7813,
    title: 'Barranquilla',
    description: 'Puerta de Oro de Colombia'
  }
  // Aquí puedes agregar más puntos según necesites
]; 