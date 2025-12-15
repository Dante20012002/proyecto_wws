import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';
import type { Proyecto } from '../data/proyectos';

/**
 * Obtiene todos los proyectos desde Firestore
 */
export async function getProyectos(): Promise<Proyecto[]> {
  try {
    // Ordenar por ID ascendente
    const q = query(collection(db, 'proyectos'), orderBy('id', 'asc'));
    const snapshot = await getDocs(q);
    
    const proyectos = snapshot.docs.map(docSnap => {
      const data = docSnap.data();
      
      return {
        id: data.id,
        nombre: data.nombre,
        descripcion: data.descripcion,
        tipo: data.tipo,
        ubicacion: data.ubicacion || {
          lat: 0,
          lng: 0,
          ciudad: '',
          departamento: ''
        },
        fecha: data.fecha || '',
        detalles: data.detalles || '',
        capacidad: data.capacidad || '',
        historia: data.historia || undefined,
        imagenPrincipal: data.imagenPrincipal || undefined,
        imagen30proyectos: data.imagen30proyectos || undefined,
        imagenesEquipos: data.imagenesEquipos || undefined,
        equipos: data.equipos || undefined,
        resumen: data.resumen || undefined,
        linkNoticia: data.linkNoticia || undefined
      } as Proyecto;
    });

    return proyectos;
  } catch (error) {
    console.error('Error al obtener proyectos desde Firestore:', error);
    // En caso de error, retornar array vacío
    return [];
  }
}

/**
 * Obtiene un proyecto por su ID
 */
export async function getProyectoById(id: number): Promise<Proyecto | undefined> {
  const proyectos = await getProyectos();
  return proyectos.find(p => p.id === id);
}

