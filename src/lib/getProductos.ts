import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';
import type { Producto } from '../data/productos';

/**
 * Obtiene todos los productos desde Firestore
 */
export async function getProductos(): Promise<Producto[]> {
  try {
    const q = query(collection(db, 'productos'), orderBy('id', 'asc'));
    const snapshot = await getDocs(q);
    
    const productos = await Promise.all(
      snapshot.docs.map(async (docSnap) => {
        const data = docSnap.data();
        
        // Cargar subproductos si existen
        const subproductosSnapshot = await getDocs(
          collection(db, 'productos', docSnap.id, 'subproductos')
        );
        
        const subProductos = subproductosSnapshot.docs.map(subDoc => {
          const subData = subDoc.data();
          return {
            id: subData.id,
            nombre: subData.nombre,
            descripcion: subData.descripcion,
            descripcionLarga: subData.descripcionLarga,
            imagen: subData.imagen || '',
            slug: subData.slug,
            modelo3d: subData.modelo3d || undefined,
            marcadores3d: subData.marcadores3d || [],
            qr: subData.qr || undefined,
            pdf: subData.pdf || undefined,
            formUrl: subData.formUrl || undefined,
            marca: subData.marca || undefined
          };
        });

        // Construir el objeto Producto con la estructura esperada
        return {
          id: data.id,
          nombre: data.nombre,
          descripcion: data.descripcion,
          descripcionLarga: data.descripcionLarga,
          imagen: data.imagen || '',
          imagenes: data.imagenes || [],
          slug: data.slug,
          categoria: data.categoria,
          accesorios: [], // Los accesorios los manejamos por separado si es necesario
          modelo3d: data.modelo3d || undefined,
          marcadores3d: data.marcadores3d || [],
          pdf: data.pdf || undefined,
          marca: data.marca || undefined,
          subProductos: subProductos,
          qr: data.qr || undefined,
          formUrl: data.formUrl || undefined
        } as Producto;
      })
    );

    return productos;
  } catch (error) {
    console.error('Error al obtener productos desde Firestore:', error);
    // En caso de error, retornar array vacío
    return [];
  }
}

/**
 * Obtiene un producto por su slug
 */
export async function getProductoBySlug(slug: string): Promise<Producto | undefined> {
  const productos = await getProductos();
  return productos.find(p => p.slug === slug);
}

/**
 * Obtiene productos por categoría
 */
export async function getProductosByCategoria(categoria: string): Promise<Producto[]> {
  const productos = await getProductos();
  return productos.filter(p => p.categoria === categoria);
}

