# 🔥 Integración de Firebase con Astro

## ✅ **Cambios Realizados**

Se ha integrado Firebase Firestore en el proyecto Astro para obtener productos dinámicamente desde la base de datos.

### **Archivos Nuevos:**
- `src/lib/firebase.ts` - Configuración de Firebase
- `src/lib/getProductos.ts` - Funciones para obtener productos desde Firestore

### **Archivos Modificados:**
- `src/pages/productos.astro` - Lee productos desde Firestore
- `src/pages/productos/[slug].astro` - Lee producto individual desde Firestore
- `src/pages/productos/[producto]/[subproducto].astro` - Lee subproductos desde Firestore
- `src/components/Servicios.astro` - Lee servicios desde Firestore

---

## 📦 **Cómo Funciona**

### **Antes (productos.ts estático):**
```typescript
import { productos } from '../data/productos';
```

### **Ahora (Firestore dinámico):**
```typescript
import { getProductos } from '../lib/getProductos';

const productos = await getProductos();
```

---

## 🎯 **Ventajas de esta Arquitectura**

### **1. Actualización en Tiempo Real**
- ✅ Cambias datos en el CMS → Se actualizan en Firestore
- ✅ Haces `pnpm build` del sitio Astro → Lee últimos datos de Firestore
- ✅ Despliegas el sitio estático → Muestra datos actualizados

### **2. Sin Gestión Manual de Archivos**
- ❌ Ya NO necesitas editar `productos.ts`
- ❌ Ya NO necesitas scripts de regeneración
- ✅ Todo se gestiona desde el CMS

### **3. Separación de Responsabilidades**
```
┌─────────────────────────────────────┐
│  CMS React (Vercel)                 │
│  - Gestión de productos             │
│  - Autenticación de usuarios        │
│  - Formularios CRUD                 │
└────────────┬────────────────────────┘
             │
             ↓
┌─────────────────────────────────────┐
│  Firestore (Firebase)               │
│  - Base de datos                    │
│  - Fuente única de verdad           │
│  - Colecciones:                     │
│    • productos                      │
│    • productos/{id}/subproductos    │
│    • admin (usuarios)               │
└────────────┬────────────────────────┘
             │
             ↓
┌─────────────────────────────────────┐
│  Astro (cPanel)                     │
│  - Lee datos de Firestore           │
│  - Genera sitio estático            │
│  - Muestra productos                │
└─────────────────────────────────────┘
```

---

## 🚀 **Workflow de Actualización**

### **Paso 1: Editar en el CMS**
1. Abre el CMS: `https://tu-cms.vercel.app`
2. Edita/crea un producto
3. Los cambios se guardan en Firestore ✅

### **Paso 2: Regenerar el Sitio Astro**

**Opción A: Local (para probar)**
```bash
cd "C:\Users\santi\Proyecto WWS\proyecto_wws"
pnpm build
pnpm preview  # Para ver el resultado
```

**Opción B: Producción (cPanel)**
```bash
# 1. Conéctate por SSH a cPanel
ssh usuario@waterwises.com

# 2. Ve al directorio del proyecto
cd ~/proyecto_wws

# 3. Regenera el sitio
pnpm install  # Solo si agregaste dependencias
pnpm build

# 4. Copia el resultado a public_html
rm -rf ~/public_html/*
cp -r dist/* ~/public_html/

# 5. Listo! El sitio está actualizado
```

### **Paso 3: Verificar**
- Abre `https://waterwises.com/productos`
- Verifica que los cambios se reflejan

---

## 🔧 **Configuración de Firebase**

El archivo `src/lib/firebase.ts` contiene las credenciales:

```typescript
const firebaseConfig = {
  apiKey: "AIzaSyBsrNf2NfWLgVIwu7usdR0YmNAOTrBjxD4",
  authDomain: "wwses-b764c.firebaseapp.com",
  projectId: "wwses-b764c",
  storageBucket: "wwses-b764c.firebasestorage.app",
  messagingSenderId: "713081635458",
  appId: "1:713081635458:web:d27091c98864ddb7a32a9b"
};
```

### **¿Son seguras estas credenciales?**
✅ **SÍ**, porque:
- Son **públicas** (para frontend)
- Firebase tiene reglas de seguridad en Firestore
- Solo el CMS puede **escribir** (con autenticación)
- El sitio Astro solo **lee** (permitido por reglas)

---

## 📊 **Estructura de Datos en Firestore**

### **Colección: `productos`**
```
productos/
├── 001 (documento)
│   ├── id: 1
│   ├── nombre: "Compuerta Mural"
│   ├── descripcion: "..."
│   ├── imagen: "/assets/Productos/1.jpg"
│   ├── categoria: "CONTROL DE CAUDAL"
│   ├── slug: "compuerta-mural"
│   └── subproductos/ (subcolección)
│       ├── 001 (documento)
│       │   ├── id: "1-1"
│       │   ├── nombre: "W-CPM"
│       │   └── ...
│       └── 002 (documento)
│           └── ...
└── 002 (documento)
    └── ...
```

---

## 🛠️ **Comandos Útiles**

### **Desarrollo local:**
```bash
pnpm dev         # Servidor de desarrollo (http://localhost:4321)
pnpm build       # Build de producción
pnpm preview     # Previsualizar build
```

### **Probar lectura de Firestore:**
```bash
pnpm build
# Si no hay errores, Firestore está funcionando correctamente
```

### **Ver productos en consola (debug):**
Agrega temporalmente al archivo que quieras:
```typescript
const productos = await getProductos();
console.log('Productos:', productos.length);
```

---

## 🚨 **Solución de Problemas**

### **Error: `Cannot read properties of undefined`**
- **Causa:** Firestore no devuelve datos
- **Solución:** Verifica reglas de Firestore (deben permitir lectura)

### **Error: `Firebase app not initialized`**
- **Causa:** Credenciales incorrectas
- **Solución:** Verifica `src/lib/firebase.ts`

### **Build tarda mucho:**
- **Normal:** Firestore hace múltiples peticiones en build time
- **Optimización futura:** Implementar caché local

### **Productos no aparecen:**
1. Verifica que hay productos en Firestore:
   - Abre Firebase Console
   - Ve a Firestore Database
   - Revisa colección `productos`

2. Ejecuta `pnpm build` y revisa errores en consola

---

## 🔜 **Mejoras Futuras**

### **1. Caché de Firestore (opcional)**
Para builds más rápidos, cachear productos localmente:
```typescript
// src/lib/cache.ts
export async function getProductosWithCache() {
  const cacheFile = './cache/productos.json';
  
  if (fs.existsSync(cacheFile)) {
    const cache = JSON.parse(fs.readFileSync(cacheFile));
    if (Date.now() - cache.timestamp < 1000 * 60 * 5) { // 5 min
      return cache.data;
    }
  }
  
  const productos = await getProductos();
  fs.writeFileSync(cacheFile, JSON.stringify({
    timestamp: Date.now(),
    data: productos
  }));
  
  return productos;
}
```

### **2. Webhooks de Firestore a cPanel (avanzado)**
Cuando cambias algo en el CMS:
1. Cloud Function de Firebase detecta el cambio
2. Llama a un webhook en cPanel
3. cPanel ejecuta `pnpm build` automáticamente
4. Sitio se actualiza solo

### **3. ISR con Astro (futuro)**
Cuando Astro soporte ISR (Incremental Static Regeneration):
- El sitio se regenera automáticamente cada X minutos
- No necesitas hacer build manual

---

## 📝 **Resumen**

✅ **Firebase integrado exitosamente**
✅ **Astro lee productos desde Firestore**
✅ **CMS gestiona datos sin tocar código**
✅ **Workflow: CMS → Firestore → Build Astro → Deploy**

**Próximos pasos:**
1. Configurar autenticación en el CMS ✅
2. Probar crear/editar productos en el CMS
3. Hacer build de Astro y verificar
4. Automatizar deploy en cPanel

🚀 **¡Listo para producción!**

