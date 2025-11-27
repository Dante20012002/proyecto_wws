import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

const EMPRESA_DOC_ID = 'empresa_info';

export interface EmpresaInfo {
  sobreNosotros: {
    titulo: string;
    texto: string;
    imagen: string;
  };
  mision: {
    titulo: string;
    texto: string;
  };
  vision: {
    titulo: string;
    texto: string;
  };
  objetivos: {
    titulo: string;
    texto: string;
    imagen: string;
  };
}

/**
 * Obtiene la información de la empresa desde Firestore
 */
export async function getEmpresaInfo(): Promise<EmpresaInfo | null> {
  try {
    const docRef = doc(db, 'empresa', EMPRESA_DOC_ID);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      console.warn('No se encontró información de empresa en Firestore');
      return null;
    }

    const data = docSnap.data();
    return {
      sobreNosotros: data.sobreNosotros || { titulo: 'Sobre Nosotros', texto: '', imagen: '' },
      mision: data.mision || { titulo: 'MISIÓN', texto: '' },
      vision: data.vision || { titulo: 'VISIÓN', texto: '' },
      objetivos: data.objetivos || { titulo: 'NUESTRO OBJETIVO', texto: '', imagen: '' }
    } as EmpresaInfo;
  } catch (error) {
    console.error('Error al obtener información de empresa desde Firestore:', error);
    return null;
  }
}

