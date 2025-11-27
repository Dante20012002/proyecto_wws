import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';
import type { Noticia } from '../data/noticias';

/**
 * Obtiene todas las noticias desde Firestore
 */
export async function getNoticias(): Promise<Noticia[]> {
  try {
    // Ordenar por ID descendente (más recientes primero)
    const q = query(collection(db, 'noticias'), orderBy('id', 'desc'));
    const snapshot = await getDocs(q);
    
    const noticias = snapshot.docs.map(docSnap => {
      const data = docSnap.data();
      
      return {
        titulo: data.titulo,
        resumen: data.resumen,
        slug: data.slug,
        imagenes: data.imagenes || [],
        contenido: data.contenido || '',
        enlacesOficiales: data.enlacesOficiales || []
      } as Noticia;
    });

    return noticias;
  } catch (error) {
    console.error('Error al obtener noticias desde Firestore:', error);
    // En caso de error, retornar array vacío
    return [];
  }
}

/**
 * Obtiene una noticia por su slug
 */
export async function getNoticiaBySlug(slug: string): Promise<Noticia | undefined> {
  const noticias = await getNoticias();
  return noticias.find(n => n.slug === slug);
}

