import { useEffect } from 'react';

export default function ModelViewer({ src, marcadores3d, showNumbers, style }) {
  useEffect(() => {
    import('@google/model-viewer');
  }, []);

  return (
    <model-viewer
      src={src}
      camera-controls
      ar
      auto-rotate
      loading="lazy"
      style={style || { width: '100%', maxWidth: 500, minHeight: 220, maxHeight: 320, background: '#fff', borderRadius: '1rem' }}
      exposure="1"
      camera-orbit="auto auto 22m"
      min-camera-orbit="auto auto 2m"
      max-camera-orbit="auto auto auto"
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
                width: 40,
                height: 40,
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