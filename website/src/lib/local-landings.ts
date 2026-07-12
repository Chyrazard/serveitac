export const landingVariants = ["general", "wc", "urgent"] as const;

export type LandingVariant = (typeof landingVariants)[number];

export type CityDefinition = {
  slug: string;
  name: string;
  shortName: string;
  arrival: string;
  nearby: string[];
  localContent: Record<LandingVariant, string>;
};

export type LocalLanding = {
  slug: string;
  variant: LandingVariant;
  city: CityDefinition;
};

export type LocalLandingContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  heroText: string;
  heroCardTitle: string;
  heroCardText: string;
  pricesTitle: string;
  urgentText: string;
  scheduledText: string;
  servicesEyebrow: string;
  servicesTitle: string;
  servicesText: string;
  services: Array<{ title: string; text: string }>;
  stepsTitle: string;
  steps: Array<[string, string]>;
  coverageTitle: string;
  coverageText: string;
  coveragePlaces: string[];
  trustTitle: string;
  trustZone: string;
  reviewZone: string;
  seoEyebrow: string;
  seoTitle: string;
  seoText: string;
  localParagraphs: string[];
  ctaTitle: string;
  ctaText: string;
  faq: Array<[string, string]>;
  footerSummary: string;
  imageAlt: string;
  whatsappMessage: string;
};

export type LocalLandingLink = {
  href: string;
  label: string;
};

const cities: CityDefinition[] = [
  {
    slug: "vilanova",
    name: "Vilanova i la Geltrú",
    shortName: "Vilanova",
    arrival: "5-10 minutos",
    nearby: ["Cubelles", "Canyelles", "Olivella", "Olèrdola", "Les Roquetes"],
    localContent: {
      general:
        "Vilanova i la Geltrú es nuestra base operativa, por lo que podemos organizar salidas locales sin depender de desplazamientos largos. Atendemos viviendas, comunidades y negocios del municipio, además de coordinar servicios hacia Cubelles, Canyelles, Olivella, Olèrdola y Les Roquetes.",
      wc:
        "Para un WC atascado en Vilanova, la cercanía de nuestra base permite valorar con rapidez si el bloqueo está en el propio inodoro, en el ramal interior o en una bajante comunitaria. Esa diferencia determina la herramienta adecuada y evita insistir con métodos que pueden desplazar el problema a otra parte de la instalación.",
      urgent:
        "Las urgencias de desatascos en Vilanova se coordinan desde nuestra propia base en la ciudad. Cuando hay agua rebosando o varios desagües afectados, priorizamos confirmar el tipo de inmueble y si la incidencia puede alcanzar zonas comunes antes de movilizar el equipo."
    }
  },
  {
    slug: "castelldefels",
    name: "Castelldefels",
    shortName: "Castelldefels",
    arrival: "35-45 minutos",
    nearby: ["Gavà", "Begues", "Sant Climent de Llobregat"],
    localContent: {
      general:
        "En Castelldefels adaptamos el servicio a viviendas residenciales, chalets, apartamentos y propiedades próximas a la playa. Antes de salir preguntamos dónde aparece el retorno y qué otros desagües están afectados para distinguir un atasco interior de una incidencia en la red general de la finca.",
      wc:
        "Un WC bloqueado en un chalet o apartamento de Castelldefels puede tener el origen junto al sanitario o más adelante en la conducción. Revisamos si también reaccionan ducha, lavabo u otros baños, una comprobación útil para elegir entre actuación localizada y revisión del tramo compartido.",
      urgent:
        "En una urgencia en Castelldefels damos prioridad a situaciones con rebose, riesgo para plantas inferiores o afectación de más de un sanitario. En viviendas de uso estacional conviene indicar si la instalación llevaba tiempo sin utilizarse, porque esa información ayuda a preparar la intervención."
    }
  },
  {
    slug: "viladecans",
    name: "Viladecans",
    shortName: "Viladecans",
    arrival: "50-55 minutos",
    nearby: ["Gavà", "Sant Boi de Llobregat", "El Prat de Llobregat"],
    localContent: {
      general:
        "La cobertura en Viladecans incluye viviendas, comunidades, locales y espacios comerciales. Recogemos por teléfono los síntomas y el punto exacto del atasco para desplazar el equipo apropiado y coordinar también solicitudes cercanas de Gavà, Sant Boi y El Prat.",
      wc:
        "Cuando un inodoro se atasca en Viladecans, comprobamos primero si se trata de un sanitario aislado o si hay señales en otros puntos del baño. En locales y comunidades esta revisión inicial es especialmente importante para saber si el uso de una bajante común debe limitarse mientras llega el técnico.",
      urgent:
        "Para desatascos urgentes en Viladecans pedimos identificar si el agua está contenida, si afecta a un local abierto al público o si puede pasar a otra vivienda. Con esos datos se prioriza la salida y se dan indicaciones concretas para reducir daños durante el tiempo estimado de desplazamiento."
    }
  },
  {
    slug: "gava",
    name: "Gavà",
    shortName: "Gavà",
    arrival: "45-50 minutos",
    nearby: ["Castelldefels", "Viladecans", "Begues"],
    localContent: {
      general:
        "Damos cobertura tanto al centro de Gavà como a la zona residencial de Gavà Mar. El tipo de inmueble y la distancia entre el punto afectado y la salida de saneamiento ayudan a decidir qué comprobaciones y equipo conviene llevar desde el primer desplazamiento.",
      wc:
        "En los avisos de WC atascado en Gavà preguntamos si el problema ocurre en el centro, Gavà Mar o una comunidad, y si existen otros baños operativos. Así se puede valorar si el bloqueo parece localizado o si hay indicios de una conducción compartida antes de intervenir.",
      urgent:
        "Una urgencia de saneamiento en Gavà Mar o en el núcleo urbano requiere saber si el agua sigue entrando y qué estancias están en riesgo. Recomendamos detener el uso de sanitarios afectados y describir por teléfono cualquier retorno en ducha o sumidero para orientar la salida."
    }
  },
  {
    slug: "sitges",
    name: "Sitges",
    shortName: "Sitges",
    arrival: "15-18 minutos",
    nearby: ["Sant Pere de Ribes", "Olivella", "Garraf", "Vilanova i la Geltrú"],
    localContent: {
      general:
        "En Sitges atendemos viviendas habituales, urbanizaciones, segundas residencias y negocios de hostelería. En propiedades que han permanecido cerradas conviene explicar cuánto tiempo llevaba la instalación sin uso; en bares y restaurantes, qué fregaderos o servicios siguen operativos.",
      wc:
        "Un WC atascado en una segunda residencia de Sitges puede aparecer tras un periodo sin uso, mientras que en hostelería la prioridad suele ser mantener operativos los demás sanitarios. Indicarnos el contexto permite separar el baño afectado y preparar una revisión proporcionada al problema.",
      urgent:
        "En urgencias de Sitges diferenciamos entre una incidencia doméstica, una segunda residencia y un negocio de hostelería con público. Si el agua amenaza otras estancias o el atasco afecta varios sanitarios, esa información se utiliza para priorizar y preparar la intervención desde Vilanova."
    }
  },
  {
    slug: "sant-pere-de-ribes",
    name: "Sant Pere de Ribes",
    shortName: "Sant Pere de Ribes",
    arrival: "10-12 minutos",
    nearby: ["Les Roquetes", "Sitges", "Vilanova i la Geltrú", "Canyelles"],
    localContent: {
      general:
        "La cobertura de Sant Pere de Ribes contempla tanto el núcleo de Ribes como Les Roquetes, además de conexiones con Sitges, Vilanova y Canyelles. Confirmar el núcleo y el tipo de vivienda nos ayuda a calcular la llegada y organizar la ruta correcta.",
      wc:
        "Para desatascar un WC en Ribes o Les Roquetes comprobamos si el problema se limita al inodoro o coincide con gorgoteos y retornos en otros desagües. Esa información permite anticipar si debe revisarse el sanitario, un ramal de la vivienda o una bajante.",
      urgent:
        "Las urgencias en Sant Pere de Ribes se coordinan indicando desde el primer contacto si el aviso procede de Ribes o Les Roquetes. Si hay una bajante comunitaria implicada, pedimos detener temporalmente el uso de agua en las viviendas conectadas cuando sea posible."
    }
  },
  {
    slug: "calafell",
    name: "Calafell",
    shortName: "Calafell",
    arrival: "22-25 minutos",
    nearby: ["Segur de Calafell", "Cunit", "Bellvei", "Santa Oliva", "L'Arboç"],
    localContent: {
      general:
        "En Calafell cubrimos tanto el pueblo como la zona de playa y los apartamentos residenciales, con extensión hacia Segur de Calafell, Cunit, Bellvei, Santa Oliva y L'Arboç. La ubicación concreta es importante para estimar el desplazamiento con precisión.",
      wc:
        "En apartamentos de Calafell Playa y Segur de Calafell, un WC atascado puede requerir comprobar si la bajante compartida presenta señales en otras viviendas. En una casa del pueblo, la revisión puede centrarse primero en el ramal interior y su conexión con el saneamiento.",
      urgent:
        "Para una urgencia en Calafell Playa, el pueblo o Segur de Calafell, confirmamos si el rebose puede afectar apartamentos inferiores o zonas comunes. Hasta la llegada recomendamos no utilizar los puntos conectados y avisar a la comunidad si varios vecinos detectan el mismo síntoma."
    }
  },
  {
    slug: "cubelles",
    name: "Cubelles",
    shortName: "Cubelles",
    arrival: "8-10 minutos",
    nearby: ["Cunit", "Vilanova i la Geltrú", "Cubelles Platja"],
    localContent: {
      general:
        "Cubelles está muy próxima a nuestra base y la cobertura incluye el núcleo, Cubelles Platja y zonas residenciales, además de Cunit y Vilanova. Indicando calle y tipo de inmueble podemos ajustar la estimación de llegada desde el primer contacto.",
      wc:
        "Para un WC bloqueado en Cubelles o Cubelles Platja revisamos si el agua queda alta solo en la taza o si también responde la ducha o el lavabo. En comunidades y apartamentos esa diferencia ayuda a detectar pronto una posible afectación compartida.",
      urgent:
        "La proximidad entre Vilanova y Cubelles permite coordinar con rapidez avisos urgentes del núcleo y la playa. Si el rebose ocurre en un apartamento, pedimos confirmar la planta y si hay vecinos afectados para valorar el riesgo sobre otras viviendas."
    }
  }
];

const variantSlug: Record<LandingVariant, string> = {
  general: "desatascos",
  wc: "desatascar-wc",
  urgent: "desatascos-urgentes"
};

export const localLandings: LocalLanding[] = cities.flatMap((city) =>
  landingVariants.map((variant) => ({
    slug: `${variantSlug[variant]}-${city.slug}`,
    variant,
    city
  }))
);

export const localLandingSlugs = localLandings.map(({ slug }) => slug);

export function getLocalLanding(slug: string) {
  return localLandings.find((landing) => landing.slug === slug);
}

export function getGeneralLandingHref(place: string) {
  const city = cities.find((candidate) => candidate.name === place || candidate.shortName === place);
  return city ? `/desatascos-${city.slug}` : undefined;
}

function uniquePlaces(city: CityDefinition) {
  return [city.name, ...city.nearby].filter((place, index, places) => places.indexOf(place) === index);
}

function metaFor(landing: LocalLanding) {
  const { city, variant } = landing;

  if (variant === "wc") {
    return {
      title: `Desatascar WC ${city.shortName} 24h | ServeiCat 24H`,
      description: `Servicio para desatascar WC e inodoros en ${city.name}. Diagnóstico del sanitario y la bajante, llegada estimada ${city.arrival} y precios claros.`
    };
  }

  if (variant === "urgent") {
    return {
      title: `Desatascos urgentes ${city.shortName} 24h | ServeiCat 24H`,
      description: `Desatascos urgentes 24h en ${city.name}. Atención para reboses, retornos de agua y WC bloqueados. Llegada estimada ${city.arrival}.`
    };
  }

  return {
    title: `Desatascos ${city.shortName} 24h | ServeiCat 24H`,
    description: `Desatascos 24h en ${city.name} para WC, fregaderos, tuberías, bajantes y arquetas. Llegada estimada ${city.arrival} y tarifas desde 90 € + IVA.`
  };
}

const generalServices = (city: CityDefinition) => [
  { title: "WC e inodoros", text: `Desatasco de inodoros bloqueados en ${city.shortName}, con revisión del nivel de agua y la descarga.` },
  { title: "Fregaderos y lavabos", text: "Limpieza de sifones y conducciones interiores cuando el agua baja despacio o retorna." },
  { title: "Bajantes", text: "Diagnóstico de obstrucciones verticales en comunidades, viviendas y locales." },
  { title: "Arquetas", text: "Apertura, limpieza y comprobación del paso de agua antes de cerrar la intervención." },
  { title: "Tuberías generales", text: "Desbloqueo de conducciones afectadas por residuos, cal o acumulaciones de uso continuado." },
  { title: "Comunidades", text: `Coordinación con vecinos y administradores ante incidencias compartidas en ${city.name}.` }
];

const wcServices = (city: CityDefinition) => [
  { title: "Señales del atasco", text: "Agua que sube, descarga lenta, gorgoteos o retorno en la ducha indican dónde puede estar el bloqueo." },
  { title: "Papel y objetos", text: "El exceso de papel, toallitas u objetos accidentales son causas frecuentes que requieren extracción adecuada." },
  { title: "No sigas descargando", text: "Tirar repetidamente de la cadena puede provocar el rebose y extender agua contaminada por el baño." },
  { title: "Evita productos químicos", text: "No mezcles desatascadores ni sosa cáustica: pueden causar quemaduras y dificultar una intervención segura." },
  { title: "Sonda o barrena", text: `Seleccionamos la herramienta según la posición y resistencia del atasco detectado en ${city.shortName}.` },
  { title: "Revisión de bajante", text: "Si reaccionan varios sanitarios, comprobamos si el origen está en un tramo compartido y no solo en el WC." }
];

const urgentServices = (city: CityDefinition) => [
  { title: "Deja de usar el agua", text: "No uses WC, grifos, lavadora ni lavavajillas conectados hasta identificar el tramo afectado." },
  { title: "Cierra la llave si es seguro", text: "Si sigue entrando agua limpia y puedes acceder sin riesgo, cierra la llave del aparato o la general." },
  { title: "Contén el rebose", text: "Retira objetos del suelo y utiliza toallas o recipientes sin entrar en zonas con riesgo eléctrico." },
  { title: "Describe la emergencia", text: `Indica qué está rebosando, desde cuándo y qué espacios están en riesgo en ${city.shortName}.` },
  { title: "Limita el acceso", text: "Mantén a niños y mascotas alejados del agua residual y evita pisar la zona afectada." },
  { title: "Avisa a la comunidad", text: "Si reaccionan varios desagües o viviendas, reduce el uso de la bajante común hasta la revisión." }
];

export function getLocalLandingContent(landing: LocalLanding): LocalLandingContent {
  const { city, variant } = landing;
  const meta = metaFor(landing);
  const arrivalNote = `La llegada estimada es de ${city.arrival}, según tráfico, disponibilidad y punto exacto del servicio.`;
  const coveragePlaces = uniquePlaces(city);
  const coverageNames = coveragePlaces.join(", ");

  if (variant === "wc") {
    return {
      metaTitle: meta.title,
      metaDescription: meta.description,
      eyebrow: `Desatascar WC e inodoros en ${city.name}`,
      heroTitle: `Desatascar WC en ${city.name}`,
      heroHighlight: "con atención 24 horas",
      heroText: `¿El agua sube o el inodoro no descarga? Revisamos el WC, el ramal y la posible conexión con la bajante. ${arrivalNote}`,
      heroCardTitle: "WC atascado",
      heroCardText: "No vuelvas a tirar de la cadena si el agua está alta.",
      pricesTitle: `Precio claro para desatascar un WC en ${city.shortName}`,
      urgentText: "Para un inodoro inutilizable, agua a punto de rebosar o afectación de otros sanitarios.",
      scheduledText: "Para un WC que desagua lentamente pero puede mantenerse fuera de uso hasta la cita del mismo día.",
      servicesEyebrow: "Problema específico",
      servicesTitle: `Qué hacer ante un WC atascado en ${city.shortName}`,
      servicesText: "Estas comprobaciones reducen el riesgo de rebose y ayudan a localizar si el bloqueo está en el sanitario o en una conducción compartida.",
      services: wcServices(city),
      stepsTitle: "Desatascamos el WC en 3 pasos",
      steps: [
        ["Dejas de usarlo", "No vuelves a descargar y nos explicas el nivel del agua y los síntomas."],
        ["Localizamos el bloqueo", "Revisamos el sanitario, el ramal y las señales que puedan apuntar a la bajante."],
        ["Desatascamos y probamos", "Aplicamos la herramienta adecuada y comprobamos varias descargas antes de terminar."]
      ],
      coverageTitle: `Desatascar WC en ${city.name} y alrededores`,
      coverageText: `Atendemos avisos de inodoros bloqueados en ${coverageNames}. ${arrivalNote}`,
      coveragePlaces,
      trustTitle: "Intervención centrada en el WC y su conducción",
      trustZone: `Llegada orientativa a ${city.shortName} en ${city.arrival} desde nuestra base de Vilanova.`,
      reviewZone: `Servicio específico de WC en ${city.shortName} y poblaciones próximas.`,
      seoEyebrow: "Especialistas en inodoros",
      seoTitle: `Cómo desatascamos un WC en ${city.shortName} sin dañar la instalación`,
      seoText: "Un inodoro atascado no siempre se resuelve empujando el bloqueo. Primero hay que observar el nivel del agua, comprobar si otros desagües reaccionan y determinar si el problema está en el sifón del WC, en el ramal o en una bajante compartida.",
      localParagraphs: [
        city.localContent.wc,
        "No recomendamos seguir tirando de la cadena ni mezclar productos químicos. Si el agua permanece alta, deja el WC fuera de uso y dinos si se han arrojado toallitas, exceso de papel u objetos: esa información ayuda a elegir entre extracción, barrena o sonda."
      ],
      ctaTitle: "¿El WC está a punto de rebosar?",
      ctaText: "No vuelvas a descargar. Llama o escribe indicando la ciudad y si otros sanitarios también están afectados.",
      faq: [
        ["¿Cuánto cuesta desatascar un WC?", "La urgencia tiene una tarifa base de 180 € + IVA. La cita del mismo día cuesta 90 € + IVA. Ambas incluyen desplazamiento y primera hora."],
        ["¿Puedo seguir tirando de la cadena?", "No si el nivel está alto o sube. Cada descarga añade agua y aumenta el riesgo de rebose."],
        ["¿Debo usar sosa cáustica?", "No recomendamos sosa ni mezclar productos. Pueden provocar quemaduras, reacciones peligrosas y dificultar el trabajo posterior."],
        [`¿Cuánto tardáis en llegar a ${city.shortName}?`, `${arrivalNote} Confirma la dirección al llamar para obtener una estimación ajustada.`],
        [`¿Dónde atendéis cerca de ${city.shortName}?`, `Damos servicio en ${coverageNames}.`]
      ],
      footerSummary: `Servicio para desatascar WC e inodoros en ${city.name} y alrededores.`,
      imageAlt: "Técnico de ServeiCat utilizando una máquina profesional en el desagüe de una bañera",
      whatsappMessage: `Hola ServeiCat 24H, necesito ayuda para desatascar un WC en ${city.name}.`
    };
  }

  if (variant === "urgent") {
    return {
      metaTitle: meta.title,
      metaDescription: meta.description,
      eyebrow: `Desatascos urgentes 24 horas en ${city.name}`,
      heroTitle: `Desatascos urgentes en ${city.name}`,
      heroHighlight: "atención 24 horas",
      heroText: `Atendemos reboses, retornos de agua, WC inutilizables y atascos con riesgo inmediato. ${arrivalNote}`,
      heroCardTitle: "Urgencia de desatasco",
      heroCardText: "Atención 24 horas, noches y festivos.",
      pricesTitle: `Tarifa visible para urgencias de desatascos en ${city.shortName}`,
      urgentText: "Para agua rebosando, retorno por ducha o sumidero, WC inutilizable o riesgo de daños.",
      scheduledText: "Si el problema está contenido y puede esperar, puedes reservar una intervención del mismo día.",
      servicesEyebrow: "Mientras llegamos",
      servicesTitle: `Qué hacer ante un desatasco urgente en ${city.shortName}`,
      servicesText: "Estas medidas ayudan a contener el problema. No accedas a agua acumulada si puede existir contacto con enchufes o aparatos eléctricos.",
      services: urgentServices(city),
      stepsTitle: "Atendemos la urgencia en 3 pasos",
      steps: [
        ["Llamas y describes el riesgo", "Indicas qué rebosa, si sigue entrando agua y qué zonas puede alcanzar."],
        ["Coordinamos la salida", `Confirmamos la dirección en ${city.shortName} y una estimación realista según tráfico y disponibilidad.`],
        ["Contenemos y resolvemos", "Localizamos el bloqueo, recuperamos el flujo y comprobamos que no haya retorno."]
      ],
      coverageTitle: `Desatascos urgentes en ${city.name} y alrededores`,
      coverageText: `Cobertura 24 horas para incidencias urgentes en ${coverageNames}. ${arrivalNote}`,
      coveragePlaces,
      trustTitle: "Respuesta organizada para urgencias reales",
      trustZone: `Tiempo orientativo hasta ${city.shortName}: ${city.arrival}, sujeto a tráfico y disponibilidad.`,
      reviewZone: `Atención urgente en ${city.shortName} y municipios próximos.`,
      seoEyebrow: "Urgencias 24H",
      seoTitle: `Desatascos urgentes 24 horas en ${city.shortName}: cómo actuar`,
      seoText: "Si el agua está subiendo, deja de utilizar los aparatos conectados al desagüe afectado. Retira objetos del suelo, limita el acceso al agua residual y, cuando sea seguro, cierra la entrada de agua del aparato que continúa llenándose.",
      localParagraphs: [
        city.localContent.urgent,
        "La tarifa base de urgencia es de 180 € + IVA e incluye desplazamiento y primera hora. Si después del diagnóstico hace falta más tiempo, material o maquinaria especial, se explica el alcance y el coste antes de continuar."
      ],
      ctaTitle: `¿Necesitas un desatasco urgente en ${city.shortName}?`,
      ctaText: "Llama ahora y explica qué está rebosando. Si existe riesgo eléctrico o estructural, mantente fuera de la zona afectada.",
      faq: [
        ["¿Cuánto cuesta un desatasco urgente?", "La tarifa base es de 180 € + IVA e incluye desplazamiento y primera hora de trabajo."],
        ["¿Atendéis de noche y en festivos?", "Sí, el servicio de urgencias está disponible 24 horas, todos los días del año, sujeto a disponibilidad operativa."],
        ["¿Qué hago mientras llega el técnico?", "Deja de usar el agua conectada, contiene el rebose si puedes hacerlo sin riesgo y avisa a la comunidad si hay varios vecinos afectados."],
        [`¿Cuánto tardáis en llegar a ${city.shortName}?`, `${arrivalNote} La estimación se confirma con la dirección y la situación del tráfico.`],
        [`¿Qué zonas cercanas cubrís?`, `Atendemos urgencias en ${coverageNames}.`]
      ],
      footerSummary: `Desatascos urgentes 24 horas en ${city.name} y alrededores.`,
      imageAlt: "Técnico de ServeiCat utilizando una máquina profesional en el desagüe de una bañera",
      whatsappMessage: `Hola ServeiCat 24H, tengo un desatasco urgente en ${city.name}.`
    };
  }

  return {
    metaTitle: meta.title,
    metaDescription: meta.description,
    eyebrow: `Desatascos 24 horas en ${city.name}`,
    heroTitle: `Desatascos en ${city.name}`,
    heroHighlight: "24 horas y precio claro",
    heroText: `Desatascamos WC, fregaderos, lavabos, tuberías, bajantes y arquetas en viviendas, locales y comunidades. ${arrivalNote}`,
    heroCardTitle: "Servicio local de desatascos",
    heroCardText: "Urgencias 24H y citas del mismo día.",
    pricesTitle: `Precios de desatascos en ${city.shortName} sin ocultar la tarifa base`,
    urgentText: "Para agua subiendo, mal olor intenso, WC inutilizable o riesgo inmediato de daños.",
    scheduledText: "Para desatascos que pueden programarse sin urgencia el mismo día.",
    servicesEyebrow: "Servicio completo",
    servicesTitle: `Qué desatascamos en ${city.shortName}`,
    servicesText: "Atendemos los puntos habituales de una instalación doméstica, comercial o comunitaria y comprobamos el flujo al finalizar.",
    services: generalServices(city),
    stepsTitle: `Desatasco resuelto en ${city.shortName} en 3 pasos`,
    steps: [
      ["Llamas o escribes", `Nos indicas la dirección en ${city.shortName}, el punto atascado y si existe riesgo de rebose.`],
      ["Coordinamos la llegada", `Confirmamos disponibilidad y el tiempo orientativo de ${city.arrival} según tráfico.`],
      ["Desatascamos y comprobamos", "Recuperamos el paso, verificamos el flujo y explicamos el trabajo realizado."]
    ],
    coverageTitle: `Desatascos en ${city.name} y alrededores`,
    coverageText: `Servicio de desatascos 24 horas en ${coverageNames}. ${arrivalNote}`,
    coveragePlaces,
    trustTitle: `Servicio de desatascos pensado para ${city.shortName}`,
    trustZone: `Llegada orientativa a ${city.shortName} en ${city.arrival} desde nuestra base de Vilanova.`,
    reviewZone: `Cobertura local en ${city.shortName} y poblaciones próximas.`,
    seoEyebrow: "Desatascos locales",
    seoTitle: `Servicio de desatascos en ${city.shortName} para viviendas, locales y comunidades`,
    seoText: "Atendemos atascos en WC, fregaderos, lavabos, duchas, tuberías, bajantes y arquetas. Antes de desplazarnos preguntamos qué ocurre, desde cuándo y si otros desagües están afectados para preparar una intervención proporcionada.",
    localParagraphs: [
      city.localContent.general,
      "Puedes solicitar una salida urgente por 180 € + IVA o una cita del mismo día por 90 € + IVA. Ambas tarifas incluyen desplazamiento y primera hora; cualquier necesidad adicional se comunica antes de continuar."
    ],
    ctaTitle: `¿Necesitas un desatasco en ${city.shortName}?`,
    ctaText: "Explica dónde está el atasco y si el agua sube. Te confirmamos disponibilidad y una estimación de llegada.",
    faq: [
      ["¿Cuánto cuesta un desatasco?", "La urgencia cuesta 180 € + IVA y la cita del mismo día 90 € + IVA. Ambas incluyen desplazamiento y primera hora."],
      [`¿Cuánto tardáis en llegar a ${city.shortName}?`, `${arrivalNote} Al llamar confirmamos una estimación ajustada a la dirección.`],
      ["¿Qué tipos de atasco atendéis?", "WC, fregaderos, lavabos, duchas, tuberías, bajantes, arquetas y conducciones de comunidades."],
      ["¿Qué pasa si hace falta más trabajo?", "Se explica el diagnóstico, el tiempo o material adicional y el coste antes de continuar."],
      [`¿En qué zonas trabajáis cerca de ${city.shortName}?`, `Damos servicio en ${coverageNames}.`]
    ],
    footerSummary: `Desatascos 24 horas en ${city.name} y alrededores.`,
    imageAlt: "Técnico de ServeiCat utilizando una máquina profesional en el desagüe de una bañera",
    whatsappMessage: `Hola ServeiCat 24H, necesito ayuda con un desatasco en ${city.name}.`
  };
}

export function getRelatedLandingLinks(landing: LocalLanding): LocalLandingLink[] {
  const variantLabels: Record<LandingVariant, string> = {
    general: `Desatascos en ${landing.city.shortName}`,
    wc: `Desatascar WC en ${landing.city.shortName}`,
    urgent: `Urgencias 24H en ${landing.city.shortName}`
  };

  const siblingLinks = localLandings
    .filter((candidate) => candidate.city.slug === landing.city.slug && candidate.slug !== landing.slug)
    .map((candidate) => ({
      href: `/${candidate.slug}`,
      label: variantLabels[candidate.variant]
    }));

  const nearbyLinks = landing.city.nearby
    .map((place) => {
      const href = getGeneralLandingHref(place);
      return href ? { href, label: `Desatascos en ${place}` } : undefined;
    })
    .filter((link): link is LocalLandingLink => Boolean(link))
    .slice(0, 2);

  return [...siblingLinks, ...nearbyLinks];
}
