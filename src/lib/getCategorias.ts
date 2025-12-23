import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';

export interface Categoria {
  docId: string; // ID del documento en Firestore
  id: number; // ID numérico de la categoría
  nombre: string;
}

/**
 * Obtiene todas las categorías desde Firestore
 */
export async function getCategorias(): Promise<Categoria[]> {
  try {
    // Ordenar por id ascendente
    const q = query(collection(db, 'categorias'), orderBy('id', 'asc'));
    const snapshot = await getDocs(q);
    
    const categorias = snapshot.docs.map(docSnap => {
      const data = docSnap.data();
      
      return {
        docId: docSnap.id, // ID del documento
        id: data.id || 0,
        nombre: data.nombre
      } as Categoria;
    });

    return categorias;
  } catch (error) {
    console.error('Error al obtener categorías desde Firestore:', error);
    // En caso de error, retornar array vacío
    return [];
  }
}

