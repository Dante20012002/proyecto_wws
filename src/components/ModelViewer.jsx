import { useEffect, useRef } from 'react';

export default function ModelViewer({ src, marcadores3d, showNumbers, style }) {
  const modelViewerRef = useRef(null);

  useEffect(() => {
    import('@google/model-viewer');
  }, []);

  useEffect(() => {
    if (modelViewerRef.current) {
      const modelViewer = modelViewerRef.current;
      
      // Función para ajustar la cámara automáticamente
      const adjustCameraToModel = () => {
        if (modelViewer.model) {
          // Obtener las dimensiones del modelo
          const box = modelViewer.model.boundingBox;
          if (box) {
            const size = box.getSize();
            const maxDimension = Math.max(size.x, size.y, size.z);
            
            // Calcular la distancia de cámara basada en el tamaño del modelo
            // Multiplicador ajustable para el zoom inicial
            const cameraDistance = maxDimension * 2.5;
            
            // Aplicar la nueva posición de cámara
            modelViewer.cameraOrbit = `0deg 75deg ${cameraDistance}m`;
            
            // Ajustar los límites de zoom basados en el tamaño del modelo
            const minDistance = maxDimension * 0.8; // Zoom máximo (más cercano)
            const maxDistance = maxDimension * 6;   // Zoom mínimo (más lejano)
            
            modelViewer.minCameraOrbit = `auto auto ${minDistance}m`;
            modelViewer.maxCameraOrbit = `auto auto ${maxDistance}m`;
          }
        }
      };

      // Ajustar cámara cuando el modelo se carga
      modelViewer.addEventListener('load', adjustCameraToModel);
      
      // También ajustar si el modelo ya está cargado
      if (modelViewer.model) {
        adjustCameraToModel();
      }

      return () => {
        modelViewer.removeEventListener('load', adjustCameraToModel);
      };
    }
  }, [src]);

  return (
    <model-viewer
      ref={modelViewerRef}
      src={src}
      camera-controls
      ar
      auto-rotate
      loading="lazy"
      style={style || { width: '100%', maxWidth: 500, minHeight: 220, maxHeight: 320, background: '#fff', borderRadius: '1rem' }}
      exposure="1"
      // Removemos camera-orbit fijo para que se ajuste automáticamente
      // camera-orbit="0deg 75deg 2.5m"
      // min-camera-orbit="auto auto 1m"
      // max-camera-orbit="auto auto 5m"
    >
      {Array.isArray(marcadores3d) && marcadores3d.map((m, i) => (
        <button
          key={i}
          slot={`hotspot-${i + 1}`}
          data-position={`${m.x}m ${m.y}m ${m.z}m`}
          data-normal="0m 0m 1m"
          data-visibility-attribute="visible"
          className="Hotspot"
        >
          {showNumbers ? (
            <div
              className="HotspotAnnotation"
              style={{
                minWidth: 32,
                minHeight: 32,
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                background: '#20405C',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                border: '2px solid #fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
            >
              {i + 1}
            </div>
          ) : (
            <div className="HotspotAnnotation">{m.label && m.label[0]?.nombre}</div>
          )}
        </button>
      ))}
    </model-viewer>
  );
} 