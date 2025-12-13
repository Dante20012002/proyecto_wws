import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';

export interface Aliado {
  id: string; // ID del documento en Firestore
  nombre: string;
  logo: string;
  url: string;
}

/**
 * Obtiene todos los aliados desde Firestore
 */
export async function getAliados(): Promise<Aliado[]> {
  try {
    // Ordenar por ID ascendente
    const q = query(collection(db, 'aliados'), orderBy('id', 'asc'));
    const snapshot = await getDocs(q);
    
    const aliados = snapshot.docs.map(docSnap => {
      const data = docSnap.data();
      
      return {
        id: docSnap.id, // ID del documento
        nombre: data.nombre,
        logo: data.logo,
        url: data.url
      } as Aliado;
    });

    return aliados;
  } catch (error) {
    console.error('Error al obtener aliados desde Firestore:', error);
    // En caso de error, retornar array vacío
    return [];
  }
}

