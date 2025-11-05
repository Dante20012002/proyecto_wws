export interface Noticia {
  titulo: string;
  resumen: string;
  slug: string;
  imagenes: string[];
  contenido: string;
  enlacesOficiales: Array<{
    titulo: string;
    url: string;
  }>;
}

const noticias: Noticia[] = [
  {
    "titulo": "Buenaventura inaugura PTAR para la Ciudadela San Antonio",
    "resumen": "La Sociedad de Acueducto y Alcantarillado de Buenaventura (SAAB) recibió una nueva Planta de Tratamiento de Aguas Residuales que atenderá el sistema de alcantarillado de más de 3.000 viviendas en la Ciudadela San Antonio. Actualmente, la planta opera al 45% de su capacidad, con proyecciones de expansión en el futuro.",
    "slug": "ptar-buenaventura-ciudadela-san-antonio",
    "imagenes": [
      "/assets/BUENAVENTURA 1.jpg",
      "/assets/BUENAVENTURA 2.jpg"
    ],
    "contenido": "<p>La Sociedad de Acueducto y Alcantarillado de Buenaventura (SAAB) recibió una nueva Planta de Tratamiento de Aguas Residuales que atenderá el sistema de alcantarillado de más de 3.000 viviendas en la Ciudadela San Antonio. Actualmente, la planta opera al 45% de su capacidad, con proyecciones de expansión en el futuro.</p>\n    \n    <p>Este proyecto representa un avance importante en el saneamiento ambiental del puerto más importante de Colombia, contribuyendo a la protección de los recursos marinos y costeros de la región del Pacífico. La PTAR de la Ciudadela San Antonio es parte de una estrategia integral para mejorar el saneamiento básico en Buenaventura, ciudad que enfrenta desafíos significativos en materia de servicios públicos.</p>\n    \n    <p>La implementación de esta planta de tratamiento es especialmente relevante para Buenaventura, considerando que es el puerto más importante de Colombia y una ciudad con alta biodiversidad marina. La PTAR ayudará a proteger la bahía de Buenaventura y los ecosistemas marinos de la región del Pacífico colombiano.</p>\n    \n    <p>El hecho de que la planta opere actualmente al 45% de su capacidad permite una expansión futura para atender más viviendas y contribuir al desarrollo sostenible de Buenaventura. Este proyecto demuestra el compromiso de las autoridades locales y la SAAB con el mejoramiento de la calidad de vida de los habitantes del puerto y la protección del medio ambiente.</p>",
    "enlacesOficiales": [
      {
        "titulo": "Leer más en Alcaldía de Buenaventura",
        "url": "https://www.buenaventura.gov.co/?articulos=buenaventura-cuenta-una-nueva-planta-de-tratamiento-de-aguas-residuales"
      }
    ]
  },
  {
    "titulo": "Avanza la estructuración de la PTAR en Villavicencio para descontaminar los ríos Ocoa y Guatiquía",
    "resumen": "En Villavicencio, Meta, se está estructurando un proyecto para la construcción de una Planta de Tratamiento de Aguas Residuales que busca reducir significativamente la contaminación de los ríos Ocoa y Guatiquía. Este proyecto es parte del Plan de Saneamiento y Manejo de Vertimientos (PSMV) de la ciudad.",
    "slug": "ptar-villavicencio-estructuracion",
    "imagenes": [
      "/assets/esmerlada 3.jpg",
      "/assets/esmerlada 2.jpg",
      "/assets/esmerlada 1.jpg"
    ],
    "contenido": "<p>En Villavicencio, Meta, se está estructurando un proyecto para la construcción de una Planta de Tratamiento de Aguas Residuales que busca reducir significativamente la contaminación de los ríos Ocoa y Guatiquía. Este proyecto es parte del Plan de Saneamiento y Manejo de Vertimientos (PSMV) de la ciudad.</p>\n    \n    <p>La implementación de esta PTAR será fundamental para el saneamiento ambiental de Villavicencio y la protección de los recursos hídricos de la región del Meta. Los ríos Ocoa y Guatiquía son afluentes importantes del río Meta y su contaminación afecta no solo a Villavicencio sino también a las comunidades aguas abajo y a la biodiversidad de la región.</p>\n    \n    <p>Este proyecto representa un desafío importante para la capital del Meta, considerando que Villavicencio ha experimentado un crecimiento poblacional significativo en los últimos años. La PTAR será diseñada para atender las necesidades actuales y futuras de la ciudad, contribuyendo al desarrollo sostenible de la región.</p>\n    \n    <p>La estructuración del proyecto incluye estudios técnicos, ambientales y financieros para garantizar su viabilidad y sostenibilidad. La implementación de esta PTAR será un paso fundamental para cumplir con las normativas ambientales y mejorar la calidad de vida de los habitantes de Villavicencio y la región del Meta.</p>",
    "enlacesOficiales": [
      {
        "titulo": "Leer más en Periódico del Meta",
        "url": "https://periodicodelmeta.com/un-sueno-lejano-para-rios-contaminados/"
      }
    ]
  },
  {
    "titulo": "Aeropuerto El Dorado implementa PTAR para contribuir al saneamiento del río Bogotá",
    "resumen": "El Aeropuerto Internacional El Dorado de Bogotá cuenta con una Planta de Tratamiento de Aguas Residuales que procesa el 100% de las aguas residuales generadas en sus instalaciones. Esta iniciativa permite devolver 1.1 millones de litros de agua tratada anualmente al río Bogotá, contribuyendo significativamente a su saneamiento.",
    "slug": "ptar-aeropuerto-el-dorado",
    "imagenes": [
      "/assets/AREOPUERTO EL DORADO 1.jpg"
    ],
    "contenido": "<p>El Aeropuerto Internacional El Dorado de Bogotá cuenta con una Planta de Tratamiento de Aguas Residuales que procesa el 100% de las aguas residuales generadas en sus instalaciones. Esta iniciativa permite devolver 1.1 millones de litros de agua tratada anualmente al río Bogotá, contribuyendo significativamente a su saneamiento.</p>\n    \n    <p>Este proyecto demuestra el compromiso del sector aeroportuario con la sostenibilidad ambiental y la protección de los recursos hídricos de la capital colombiana. La PTAR del Aeropuerto El Dorado es un ejemplo de cómo las grandes infraestructuras pueden implementar soluciones ambientales innovadoras para minimizar su impacto en los ecosistemas.</p>\n    \n    <p>La implementación de esta planta de tratamiento es especialmente relevante considerando que el Aeropuerto El Dorado es el más importante de Colombia y uno de los más transitados de América Latina. El procesamiento del 100% de las aguas residuales generadas en sus instalaciones incluye el tratamiento de aguas provenientes de restaurantes, baños, limpieza de aeronaves y otras actividades operativas.</p>\n    \n    <p>Esta iniciativa se enmarca en las prácticas de sostenibilidad que ha implementado el Aeropuerto El Dorado, incluyendo el uso de energías renovables, gestión eficiente de residuos y reducción de la huella de carbono. El proyecto contribuye al cumplimiento de los Objetivos de Desarrollo Sostenible y demuestra el liderazgo del sector aeroportuario en materia ambiental.</p>",
    "enlacesOficiales": [
      {
        "titulo": "Leer más en Portafolio",
        "url": "https://www.portafolio.co/sostenibilidad/practicas-de-sostenibilidad-que-ha-implementado-el-aeropuerto-el-dorado-599789"
      },
      {
        "titulo": "Leer más en Canal Capital",
        "url": "https://www.canalcapital.gov.co/medio-ambiente/racionamiento-agua-aeropuerto-ptar"
      }
    ]
  },
  {
    "titulo": "Florida, Valle del Cauca, inaugura nueva PTAR para más de 55.000 personas",
    "resumen": "La Gobernación del Valle y la CVC entregaron a la comunidad de Florida una nueva planta de tratamiento de aguas residuales, con una inversión de más de $20.000 millones. Esta PTAR beneficiará a más de 55.000 personas y contribuirá a la descontaminación de los ríos Fraile y Cauca.",
    "slug": "ptar-florida-valle",
    "imagenes": [
      "/assets/Florida 1.webp"
    ],
    "contenido": "<p>La Gobernación del Valle y la CVC entregaron a la comunidad de Florida una nueva planta de tratamiento de aguas residuales, con una inversión de más de $20.000 millones. Esta PTAR beneficiará a más de 55.000 personas y contribuirá a la descontaminación de los ríos Fraile y Cauca.</p>\n    \n    <p>Este proyecto fortalece el compromiso del Valle del Cauca con el saneamiento ambiental y la protección de los recursos hídricos de la región. La PTAR de Florida es parte de la estrategia integral de la CVC para el saneamiento de los municipios del Valle del Cauca, especialmente aquellos ubicados en zonas rurales y de alta importancia ambiental.</p>\n    \n    <p>La implementación de esta planta de tratamiento es especialmente importante para Florida, municipio que se caracteriza por su vocación agrícola y ganadera. La PTAR ayudará a proteger tanto el río Fraile como el río Cauca, mejorando la calidad del agua para las actividades productivas y el consumo humano.</p>\n    \n    <p>Este proyecto demuestra el compromiso de las autoridades ambientales y gubernamentales del Valle del Cauca con el desarrollo sostenible y la protección de los recursos naturales. La inversión de más de $20.000 millones refleja la importancia estratégica de este proyecto para el saneamiento ambiental de la región.</p>",
    "enlacesOficiales": [
      {
        "titulo": "Leer más en Gobernación del Valle",
        "url": "https://www.valledelcauca.gov.co/publicaciones/82478/nueva-planta-de-aguas-residuales-beneficiara-a-mas-de-55000-personas-del-municipio-de-florida/"
      }
    ]
  },
  {
    "titulo": "PTAR de Yumbo entra en operación para descontaminar el río Cauca",
    "resumen": "En la vereda Platanares de Yumbo, se puso en marcha la primera fase de la PTAR que permitirá descontaminar las aguas residuales de cerca de 100.000 habitantes. Esta planta tratará aproximadamente el 85% de las aguas residuales del municipio antes de su vertimiento al río Cauca.",
    "slug": "ptar-yumbo-platanares",
    "imagenes": [
      "/assets/Yumbo 1.webp",
      "/assets/Yumbo 2.webp",
      "/assets/Yumbo 3.webp"
    ],
    "contenido": "<p>En la vereda Platanares de Yumbo, se puso en marcha la primera fase de la PTAR que permitirá descontaminar las aguas residuales de cerca de 100.000 habitantes. Esta planta tratará aproximadamente el 85% de las aguas residuales del municipio antes de su vertimiento al río Cauca.</p>\n    \n    <p>Este proyecto representa un avance significativo en el saneamiento ambiental del Valle del Cauca, contribuyendo a la protección del río Cauca y mejorando la calidad de vida de los habitantes de Yumbo. La PTAR de Platanares es parte de una estrategia integral para el manejo de vertimientos en el municipio industrial más importante del Valle del Cauca.</p>\n    \n    <p>La implementación de esta planta de tratamiento es fundamental para Yumbo, considerando que es uno de los municipios con mayor actividad industrial en la región. La PTAR ayudará a reducir significativamente la contaminación que afectaba al río Cauca, mejorando la calidad del agua para las comunidades aguas abajo.</p>\n    \n    <p>Este proyecto se enmarca en las políticas ambientales del Valle del Cauca para el cumplimiento de los estándares de calidad del agua y la protección de los recursos hídricos. La planta utiliza tecnología moderna para el tratamiento de aguas residuales, garantizando que los vertimientos cumplan con las normativas ambientales vigentes.</p>",
    "enlacesOficiales": [
      {
        "titulo": "Leer más en Gobernación del Valle",
        "url": "https://www.valledelcauca.gov.co/publicaciones/76467/entra-en-operacion-la-ptar-de-platanares-que-permitira-descontaminar-los-vertimientos-de-los-yumbenos-al-rio-cauca/"
      }
    ]
  },
  {
    "titulo": "Inauguración de la PTAR de Buga, la más moderna del país - edicion",
    "resumen": "La ciudad de Buga, en el Valle del Cauca, cuenta ahora con una de las plantas de tratamiento de aguas residuales más modernas de Colombia. Con una inversión superior a los $100.000 millones, esta PTAR tiene la capacidad de tratar las aguas residuales de aproximadamente 150.000 habitantes, reduciendo en más de 3.200 toneladas anuales la carga contaminante que llegaba al río Cauca.",
    "slug": "ptar-buga-inauguracion",
    "imagenes": [
      "/assets/Buga 1.jpg",
      "/assets/Buga 2.jpg",
      "/assets/Buga 3.jpg"
    ],
    "contenido": "<p>La ciudad de Buga, en el Valle del Cauca, cuenta ahora con una de las plantas de tratamiento de aguas residuales más modernas de Colombia. Con una inversión superior a los $100.000 millones, esta PTAR tiene la capacidad de tratar las aguas residuales de aproximadamente 150.000 habitantes, reduciendo en más de 3.200 toneladas anuales la carga contaminante que llegaba al río Cauca.</p>\r\n    \r\n    <p>Esta planta representa un hito importante en el saneamiento ambiental del Valle del Cauca, contribuyendo significativamente a la descontaminación del río Cauca y mejorando la calidad de vida de los habitantes de la región. La PTAR de Buga es la tercera inversión más grande en el Valle del Cauca y está entre las 50 más importantes a nivel nacional.</p>\r\n    \r\n    <p>La construcción de esta infraestructura generó 80 empleos directos y 200 indirectos, beneficiando a cerca de 172.130 habitantes de Buga. La planta está totalmente automatizada y tiene capacidad para tratar 715 litros por segundo, convirtiéndola en una de las de mayor capacidad a nivel nacional para ciudades intermedias.</p>\r\n    \r\n    <p>Este proyecto es parte del plan de la CVC para construir 11 PTAR en el Valle del Cauca, contribuyendo al objetivo de descontaminar el río Cauca y cumplir con los Objetivos de Desarrollo Sostenible. La gobernadora del Valle, Dilian Francisca Toro, destacó que esta iniciativa permite mostrar el compromiso ambiental de la región de cara a la COP16.</p>",
    "enlacesOficiales": [
      {
        "titulo": "Leer más en El País",
        "url": "https://www.elpais.com.co/valle/asi-es-la-planta-de-tratamiento-de-aguas-residuales-que-se-inauguro-en-buga-valle-0905.html"
      }
    ]
  }
];

export default noticias;
