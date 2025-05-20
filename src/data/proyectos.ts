export interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  tipo: 'instalacion' | 'mantenimiento' | 'consultoria' | 'venta';
  ubicacion: {
    lat: number;
    lng: number;
    ciudad: string;
    departamento: string;
  };
  fecha: string;
  detalles: string;
  capacidad: string;
}

export const proyectos: Proyecto[] = [
  // Barranquilla
  {
    id: 1,
    nombre: "Estaciones Levadoras Barranquillita, El Rebolo y Felicidad",
    descripcion: "Suministro de rejas, bandas, cucharas bivalva y compuertas para tres estaciones elevadoras",
    tipo: "instalacion",
    ubicacion: {
      lat: 10.9685,
      lng: -74.7813,
      ciudad: "Barranquilla",
      departamento: "Atlántico"
    },
    fecha: "2013",
    detalles: "Equipos suministrados: rejas, bandas, cucharas bivalva y compuertas",
    capacidad: "N/A"
  },
  {
    id: 2,
    nombre: "Estación Elevadora Rebolo",
    descripcion: "Proyecto de estación elevadora",
    tipo: "instalacion",
    ubicacion: {
      lat: 10.9685,
      lng: -74.7813,
      ciudad: "Barranquilla",
      departamento: "Atlántico"
    },
    fecha: "2013",
    detalles: "Estación elevadora",
    capacidad: "N/A"
  },

  // Valle del Cauca
  {
    id: 3,
    nombre: "Bocatoma Río Cauca",
    descripcion: "Suministro de rejilla fina, puente desarenador y sistema de rejillas dobles",
    tipo: "instalacion",
    ubicacion: {
      lat: 3.4516,
      lng: -76.5320,
      ciudad: "Cali",
      departamento: "Valle del Cauca"
    },
    fecha: "2015",
    detalles: "Rejilla fina (zaranda de flujo dual), puente desarenador y sistema de rejillas dobles",
    capacidad: "11 m³/s"
  },
  {
    id: 4,
    nombre: "PTAP Buenaventura",
    descripcion: "Suministro de floculadores tipo vertical",
    tipo: "instalacion",
    ubicacion: {
      lat: 3.8833,
      lng: -77.0167,
      ciudad: "Buenaventura",
      departamento: "Valle del Cauca"
    },
    fecha: "2017",
    detalles: "Floculadores tipo vertical",
    capacidad: "N/A"
  },
  {
    id: 5,
    nombre: "PTAR Yumbo",
    descripcion: "Sistema completo de tratamiento de aguas residuales",
    tipo: "instalacion",
    ubicacion: {
      lat: 3.5833,
      lng: -76.5000,
      ciudad: "Yumbo",
      departamento: "Valle del Cauca"
    },
    fecha: "2022",
    detalles: "Rejas de cribado, distribuidor de flujo, sedimentador, espesador de lodos y tea quemadora de gas",
    capacidad: "543 l/s"
  },
  {
    id: 6,
    nombre: "PTAR Buga",
    descripcion: "Sistema completo de tratamiento de aguas residuales",
    tipo: "instalacion",
    ubicacion: {
      lat: 3.9000,
      lng: -76.3000,
      ciudad: "Buga",
      departamento: "Valle del Cauca"
    },
    fecha: "2024",
    detalles: "Rejas de cribado, distribuidores de flujo, sedimentadores y espesador",
    capacidad: "887 l/s"
  },
  {
    id: 7,
    nombre: "PTAR Florida",
    descripcion: "Sistema de sedimentación",
    tipo: "instalacion",
    ubicacion: {
      lat: 3.3167,
      lng: -76.2333,
      ciudad: "Florida",
      departamento: "Valle del Cauca"
    },
    fecha: "2024",
    detalles: "Sedimentador",
    capacidad: "157 l/s"
  },

  // Meta
  {
    id: 8,
    nombre: "PTAR Acacias",
    descripcion: "Sistema de sedimentación",
    tipo: "instalacion",
    ubicacion: {
      lat: 3.9833,
      lng: -73.7667,
      ciudad: "Acacías",
      departamento: "Meta"
    },
    fecha: "2011",
    detalles: "Sedimentador",
    capacidad: "220 l/s"
  },
  {
    id: 9,
    nombre: "PTAR Chichimene",
    descripcion: "Sistema de percolación",
    tipo: "instalacion",
    ubicacion: {
      lat: 3.9833,
      lng: -73.7667,
      ciudad: "Acacías",
      departamento: "Meta"
    },
    fecha: "2017",
    detalles: "Percolador para el floculador",
    capacidad: "N/A"
  },
  {
    id: 10,
    nombre: "PTAR Villavicencio",
    descripcion: "Sistema de agitación",
    tipo: "instalacion",
    ubicacion: {
      lat: 4.1420,
      lng: -73.6266,
      ciudad: "Villavicencio",
      departamento: "Meta"
    },
    fecha: "2021",
    detalles: "Agitadores para floculación lenta, floculación rápida y mezcla",
    capacidad: "2 m³/s"
  },

  // Cundinamarca
  {
    id: 11,
    nombre: "PTAR Aeropuerto El Dorado",
    descripcion: "Sistema de sedimentación",
    tipo: "instalacion",
    ubicacion: {
      lat: 4.7016,
      lng: -74.1469,
      ciudad: "Bogotá",
      departamento: "Cundinamarca"
    },
    fecha: "2013",
    detalles: "Sedimentador",
    capacidad: "57 l/s"
  },
  {
    id: 12,
    nombre: "PTAR Tenjo",
    descripcion: "Sistema de sedimentación",
    tipo: "instalacion",
    ubicacion: {
      lat: 4.8667,
      lng: -74.1667,
      ciudad: "Tenjo",
      departamento: "Cundinamarca"
    },
    fecha: "2017",
    detalles: "Sedimentador",
    capacidad: "40 l/s"
  },
  {
    id: 13,
    nombre: "PTAR Nemocón",
    descripcion: "Sistema completo de tratamiento",
    tipo: "instalacion",
    ubicacion: {
      lat: 5.0667,
      lng: -73.8833,
      ciudad: "Nemocón",
      departamento: "Cundinamarca"
    },
    fecha: "2016",
    detalles: "Sedimentador, compuertas, espesadores de lodos gravimétricos, filtro prensa y filtros de arenas",
    capacidad: "32 l/s"
  },
  {
    id: 14,
    nombre: "PTAR Sesquilé",
    descripcion: "Sistema de sedimentación",
    tipo: "instalacion",
    ubicacion: {
      lat: 5.0500,
      lng: -73.8000,
      ciudad: "Sesquilé",
      departamento: "Cundinamarca"
    },
    fecha: "2010",
    detalles: "Sedimentador",
    capacidad: "15 l/s"
  },
  {
    id: 15,
    nombre: "PTAR y PTAP Tocancipá Los Patos",
    descripcion: "Sistema de sedimentación y floculación",
    tipo: "instalacion",
    ubicacion: {
      lat: 4.9667,
      lng: -73.9000,
      ciudad: "Tocancipá",
      departamento: "Cundinamarca"
    },
    fecha: "2018",
    detalles: "Sedimentador y trenes de floculación",
    capacidad: "70 l/s"
  },
  {
    id: 16,
    nombre: "PTAR Fusagasugá",
    descripcion: "Sistema completo de tratamiento",
    tipo: "instalacion",
    ubicacion: {
      lat: 4.3333,
      lng: -74.3667,
      ciudad: "Fusagasugá",
      departamento: "Cundinamarca"
    },
    fecha: "2020",
    detalles: "Sedimentador, distribuidor de flujo, compuertas y tamiz rotativo",
    capacidad: "90 l/s"
  },
  {
    id: 17,
    nombre: "PTAR Vergara Tocancipá",
    descripcion: "Sistema de cribado",
    tipo: "instalacion",
    ubicacion: {
      lat: 4.9667,
      lng: -73.9000,
      ciudad: "Tocancipá",
      departamento: "Cundinamarca"
    },
    fecha: "2024",
    detalles: "Reja de cribado auto limpiante especialmente profunda",
    capacidad: "60 l/s"
  },

  // Quindío
  {
    id: 18,
    nombre: "PTAR Armenia",
    descripcion: "Sistema completo de tratamiento",
    tipo: "instalacion",
    ubicacion: {
      lat: 4.5333,
      lng: -75.6833,
      ciudad: "Armenia",
      departamento: "Quindío"
    },
    fecha: "2015",
    detalles: "Espesador de lodos, distribuidor de flujo, barredor de lodos y desengrasador",
    capacidad: "87 l/s"
  },

  // Panamá
  {
    id: 19,
    nombre: "PTAR Chitré",
    descripcion: "Sistema de barredores y mantenimiento",
    tipo: "instalacion",
    ubicacion: {
      lat: 7.9667,
      lng: -80.4333,
      ciudad: "Chitré",
      departamento: "Panamá"
    },
    fecha: "2015-2025",
    detalles: "4 barredores de lodos para sedimentador, 2 barredores para espesadores y repuestos",
    capacidad: "1100 m³/h"
  },

  // Santander
  {
    id: 20,
    nombre: "PTAR El Santuario",
    descripcion: "Sistema de desarenado y aireación",
    tipo: "instalacion",
    ubicacion: {
      lat: 7.0833,
      lng: -73.0000,
      ciudad: "Piedecuesta",
      departamento: "Santander"
    },
    fecha: "2015",
    detalles: "Puentes desarenadores, compuertas de accionamiento manual y sistema de aireación",
    capacidad: "672 l/s"
  },

  // Boyacá
  {
    id: 21,
    nombre: "PTAR Tunja",
    descripcion: "Sistema completo de tratamiento",
    tipo: "instalacion",
    ubicacion: {
      lat: 5.5333,
      lng: -73.3667,
      ciudad: "Tunja",
      departamento: "Boyacá"
    },
    fecha: "2015",
    detalles: "6 sedimentadores, 4 espesadores gravimétricos y 1 tea quemador de gas",
    capacidad: "384 l/s"
  },
  {
    id: 22,
    nombre: "PTAR Gramalote",
    descripcion: "Sistema completo de tratamiento",
    tipo: "instalacion",
    ubicacion: {
      lat: 7.8833,
      lng: -72.8000,
      ciudad: "Gramalote",
      departamento: "Norte de Santander"
    },
    fecha: "2017",
    detalles: "2 sedimentadores, 2 distribuidores de flujo, tea quemadora de gas, compuertas y rejillas",
    capacidad: "18 l/s"
  },

  // Córdoba
  {
    id: 23,
    nombre: "PTAR Montería",
    descripcion: "Sistema completo de tratamiento",
    tipo: "instalacion",
    ubicacion: {
      lat: 8.7500,
      lng: -75.8833,
      ciudad: "Montería",
      departamento: "Córdoba"
    },
    fecha: "2021-2023",
    detalles: "3 sedimentadores, 3 distribuidores para percoladores y 2 espesadores de lodos",
    capacidad: "525 l/s"
  },

  // Ecuador
  {
    id: 24,
    nombre: "PTAR Chone",
    descripcion: "Sistema de sedimentación",
    tipo: "instalacion",
    ubicacion: {
      lat: -0.6833,
      lng: -80.1000,
      ciudad: "Chone",
      departamento: "Manabí"
    },
    fecha: "2025",
    detalles: "2 sedimentadores",
    capacidad: "30.000 m³/día"
  }
]; 