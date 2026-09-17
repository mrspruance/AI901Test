/* AI-901 Practice Test - Question Bank (Abril 2026) */
/* Dominio 1: Conceptos y capacidades de IA (40-45%)  */
/* Dominio 2: Implementar soluciones con Microsoft Foundry (55-60%) */

const QUESTIONS = [

  /* ══════════════════════════════════════════════════════════════════
     DOMINIO 1 · IA Responsable
  ══════════════════════════════════════════════════════════════════ */
  {
    domain: "Dominio 1 - IA Responsable",
    text: "¿Cuál principio de IA responsable de Microsoft garantiza que los sistemas sean comprensibles y que los humanos puedan supervisar su comportamiento?",
    multiple: false,
    options: [
      { text: "Equidad", correct: false, explanation: "La equidad aborda el trato justo sin sesgos, pero no se centra en la comprensibilidad del sistema." },
      { text: "Transparencia", correct: true, explanation: "La transparencia exige que los sistemas de IA sean comprensibles: las personas deben entender cómo funcionan y qué decisiones toman, habilitando la supervisión humana." },
      { text: "Privacidad y seguridad", correct: false, explanation: "Este principio protege datos personales y seguridad de ataques externos, no la comprensibilidad del sistema." },
      { text: "Inclusión", correct: false, explanation: "La inclusión busca que la IA beneficie a todos, pero no trata sobre la supervisión humana del sistema." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-responsible-ai"
  },
  {
    domain: "Dominio 1 - IA Responsable",
    text: "Un banco entrena un modelo para aprobar créditos y detecta que el modelo rechaza sistemáticamente más solicitudes de un grupo étnico específico, incluso controlando por ingresos. ¿Qué principio de IA responsable se está violando?",
    multiple: false,
    options: [
      { text: "Fiabilidad y seguridad", correct: false, explanation: "Este principio se refiere a que el sistema funcione de forma consistente ante distintas condiciones, no al trato diferenciado entre grupos." },
      { text: "Equidad", correct: true, explanation: "Cuando un modelo produce resultados sistemáticamente distintos para un grupo demográfico sin justificación basada en el resultado que predice, se viola el principio de equidad (fairness)." },
      { text: "Responsabilidad (accountability)", correct: false, explanation: "La responsabilidad se refiere a quién rinde cuentas por el sistema, no al sesgo en los resultados en sí." },
      { text: "Inclusión", correct: false, explanation: "La inclusión se centra en que la IA considere a todas las personas en su diseño, pero el problema descrito es específicamente un sesgo medible en resultados." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-responsible-ai"
  },
  {
    domain: "Dominio 1 - IA Responsable",
    text: "Para cada afirmación sobre IA responsable, selecciona Yes si es verdadera. Otherwise, selecciona No.\n1) El uso de un 'red team' para intentar hacer que un modelo genere contenido dañino es una práctica recomendada antes de producción.\n2) Publicar una tarjeta de transparencia (Transparency Note) es obligatorio únicamente para modelos de visión, no para modelos de lenguaje.\n3) Un sistema de IA de alto riesgo (p. ej. usado en decisiones legales) requiere mayor supervisión humana que uno de bajo riesgo.",
    multiple: true,
    options: [
      { text: "1) Yes", correct: true, explanation: "El 'red teaming' es una práctica estándar de Microsoft para probar vulnerabilidades y contenido dañino antes del lanzamiento." },
      { text: "2) No", correct: true, explanation: "Las Transparency Notes aplican a cualquier tipo de modelo o servicio de IA, no solo a visión." },
      { text: "3) Yes", correct: true, explanation: "A mayor riesgo del caso de uso, mayor debe ser el nivel de supervisión y control humano (human-in-the-loop)." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-responsible-ai"
  },
  {
    domain: "Dominio 1 - IA Responsable",
    text: "Una aplicación de generación de texto ocasionalmente produce afirmaciones falsas presentadas como hechos. ¿Qué término describe este fenómeno?",
    multiple: false,
    options: [
      { text: "Overfitting", correct: false, explanation: "Overfitting es un problema de entrenamiento de ML clásico donde el modelo memoriza datos de entrenamiento, no un fenómeno de generación de texto falso." },
      { text: "Alucinación", correct: true, explanation: "Una alucinación ocurre cuando un modelo generativo produce contenido que suena convincente y coherente, pero es incorrecto o inventado." },
      { text: "Data drift", correct: false, explanation: "Data drift se refiere al cambio en la distribución de los datos de entrada respecto a los datos de entrenamiento, no a respuestas falsas." },
      { text: "Fine-tuning", correct: false, explanation: "Fine-tuning es una técnica de ajuste de modelos, no un problema relacionado con la veracidad de las respuestas." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/prompt-engineering"
  },
  {
    domain: "Dominio 1 - IA Responsable",
    text: "¿Qué acción es un ejemplo del principio de 'Responsabilidad' (accountability) aplicado a una solución de IA en producción?",
    multiple: false,
    options: [
      { text: "Cifrar los datos de entrenamiento en reposo", correct: false, explanation: "El cifrado de datos corresponde al principio de privacidad y seguridad, no de responsabilidad." },
      { text: "Designar un equipo de gobernanza que revise y apruebe los casos de uso de IA antes de su despliegue", correct: true, explanation: "La responsabilidad implica que existan personas y procesos claros que rindan cuentas sobre el diseño, despliegue y comportamiento del sistema." },
      { text: "Aumentar la precisión del modelo con más datos", correct: false, explanation: "Esto mejora el rendimiento técnico, pero no está directamente relacionado con la gobernanza y rendición de cuentas." },
      { text: "Usar streaming para reducir la latencia de respuesta", correct: false, explanation: "Es una optimización técnica de experiencia de usuario, no un mecanismo de responsabilidad organizacional." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-responsible-ai"
  },
  {
    domain: "Dominio 1 - IA Responsable",
    text: "En Microsoft Foundry, ¿cuál es el propósito principal de Content Safety al construir una aplicación generativa?",
    multiple: false,
    options: [
      { text: "Reducir el costo por token del modelo", correct: false, explanation: "Content Safety no afecta el costo de los tokens; su función es moderación de contenido." },
      { text: "Detectar y filtrar contenido dañino, tanto en las entradas del usuario como en las salidas del modelo", correct: true, explanation: "Content Safety analiza texto e imágenes para detectar categorías de daño (odio, violencia, contenido sexual, autolesión) tanto en prompts como en respuestas." },
      { text: "Aumentar automáticamente la longitud del contexto del modelo", correct: false, explanation: "La ventana de contexto es una característica del modelo, no una función de Content Safety." },
      { text: "Entrenar un modelo personalizado desde cero", correct: false, explanation: "Content Safety es un servicio de moderación, no una herramienta de entrenamiento de modelos." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/content-safety/overview"
  },
  {
    domain: "Dominio 1 - IA Responsable",
    text: "Para cada afirmación sobre el principio de Privacidad y Seguridad en IA, selecciona Yes si es verdadera.\n1) Los datos personales usados para personalizar un modelo deben manejarse conforme a regulaciones de protección de datos.\n2) Un sistema de IA responsable no necesita informar a los usuarios cuando están interactuando con un chatbot en lugar de un humano.\n3) La minimización de datos (usar solo los datos necesarios) reduce el riesgo de exposición de información sensible.",
    multiple: true,
    options: [
      { text: "1) Yes", correct: true, explanation: "El manejo de datos personales debe cumplir regulaciones como GDPR y buenas prácticas de privacidad." },
      { text: "2) No", correct: true, explanation: "La transparencia con el usuario, incluyendo informar que interactúa con un bot, es una práctica recomendada de IA responsable." },
      { text: "3) Yes", correct: true, explanation: "El principio de minimización de datos reduce la superficie de exposición y el riesgo ante brechas de seguridad." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-responsible-ai"
  },
  {
    domain: "Dominio 1 - IA Responsable",
    text: "Una empresa despliega un asistente de IA para atención al cliente y agrega un mensaje que aclara: 'Estás hablando con un asistente virtual'. ¿Qué principio de IA responsable ejemplifica mejor esta práctica?",
    multiple: false,
    options: [
      { text: "Transparencia", correct: true, explanation: "Informar claramente que se trata de un sistema de IA y no de un humano es una manifestación directa del principio de transparencia." },
      { text: "Fiabilidad y seguridad", correct: false, explanation: "Este principio se relaciona con el desempeño consistente del sistema ante distintos escenarios, no con revelar su naturaleza." },
      { text: "Inclusión", correct: false, explanation: "La inclusión busca que el sistema sea accesible y útil para diversos grupos, no informar sobre la naturaleza del sistema." },
      { text: "Equidad", correct: false, explanation: "La equidad trata sobre el trato justo entre grupos, no sobre revelar la identidad del sistema." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-responsible-ai"
  },
  {
    domain: "Dominio 1 - IA Responsable",
    text: "¿Cuál de las siguientes es la mejor práctica para mitigar sesgos en un modelo de clasificación antes de su despliegue?",
    multiple: false,
    options: [
      { text: "Evaluar las métricas de desempeño (precisión, recall) desglosadas por subgrupos demográficos relevantes", correct: true, explanation: "Analizar el desempeño por subgrupos permite detectar disparidades que una métrica global agregada podría ocultar." },
      { text: "Aumentar el número de épocas de entrenamiento", correct: false, explanation: "Más épocas de entrenamiento pueden mejorar la precisión general, pero no detectan ni corrigen sesgos entre grupos." },
      { text: "Reducir el tamaño del conjunto de datos de prueba", correct: false, explanation: "Reducir el conjunto de prueba disminuye la confiabilidad estadística de la evaluación, no ayuda a detectar sesgos." },
      { text: "Eliminar todas las variables categóricas del dataset", correct: false, explanation: "Eliminar variables categóricas no garantiza equidad, ya que el sesgo puede persistir mediante variables correlacionadas (proxies)." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-fairness-ml"
  },
  {
    domain: "Dominio 1 - IA Responsable",
    text: "¿Qué mecanismo permite a un usuario final apelar o cuestionar una decisión automatizada tomada por un sistema de IA, en línea con el principio de responsabilidad (accountability)?",
    multiple: false,
    options: [
      { text: "Un proceso de revisión humana (human-in-the-loop) para decisiones de alto impacto", correct: true, explanation: "Permitir que un humano revise o revierta decisiones automatizadas de alto impacto es un mecanismo clave de accountability." },
      { text: "Aumentar la temperatura del modelo generativo", correct: false, explanation: "La temperatura controla la aleatoriedad de las respuestas del modelo, no un mecanismo de apelación." },
      { text: "Reducir el número de parámetros del modelo", correct: false, explanation: "El tamaño del modelo no está relacionado con la posibilidad de apelar decisiones." },
      { text: "Desactivar el registro (logging) de las solicitudes", correct: false, explanation: "Desactivar el logging reduce la trazabilidad, lo cual va en contra del principio de responsabilidad." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-responsible-ai"
  },

  /* ══════════════════════════════════════════════════════════════════
     DOMINIO 1 · Fundamentos de Machine Learning
  ══════════════════════════════════════════════════════════════════ */
  {
    domain: "Dominio 1 - Fundamentos de ML",
    text: "Tienes un conjunto de datos histórico de casas con características (metros cuadrados, ubicación, número de habitaciones) y su precio de venta real. Necesitas predecir el precio de una casa nueva. ¿Qué tipo de tarea de machine learning es esta?",
    multiple: false,
    options: [
      { text: "Clasificación", correct: false, explanation: "La clasificación predice una categoría discreta (p. ej. sí/no), no un valor numérico continuo como el precio." },
      { text: "Regresión", correct: true, explanation: "Predecir un valor numérico continuo, como el precio de una casa, a partir de características es un problema de regresión." },
      { text: "Agrupación (clustering)", correct: false, explanation: "El clustering agrupa datos sin etiquetas por similitud; aquí ya se cuenta con la etiqueta real (precio), por lo que es aprendizaje supervisado." },
      { text: "Detección de anomalías", correct: false, explanation: "La detección de anomalías identifica valores atípicos, no predice un valor numérico específico." }
    ],
    doc: "https://learn.microsoft.com/es-es/training/modules/fundamentals-machine-learning/"
  },
  {
    domain: "Dominio 1 - Fundamentos de ML",
    text: "Un equipo de marketing quiere segmentar a sus clientes en grupos según su comportamiento de compra, sin tener etiquetas predefinidas de a qué segmento pertenece cada cliente. ¿Qué tipo de aprendizaje automático es el más apropiado?",
    multiple: false,
    options: [
      { text: "Aprendizaje supervisado", correct: false, explanation: "El aprendizaje supervisado requiere datos etiquetados; en este caso no existen etiquetas de segmento predefinidas." },
      { text: "Aprendizaje no supervisado (clustering)", correct: true, explanation: "Al no existir etiquetas, el algoritmo debe descubrir patrones y agrupar clientes similares por sí mismo: esto es clustering." },
      { text: "Aprendizaje por refuerzo", correct: false, explanation: "El aprendizaje por refuerzo se basa en recompensas y penalizaciones a través de acciones en un entorno, no en segmentar datos estáticos." },
      { text: "Regresión lineal", correct: false, explanation: "La regresión lineal es un método supervisado para predecir valores numéricos continuos, no para descubrir grupos sin etiquetas." }
    ],
    doc: "https://learn.microsoft.com/es-es/training/modules/fundamentals-machine-learning/"
  },
  {
    domain: "Dominio 1 - Fundamentos de ML",
    text: "Al evaluar un modelo de clasificación binaria para detectar fraude, el equipo observa que el modelo tiene alta 'precisión' (precision) pero bajo 'recall'. ¿Qué implica esto en la práctica?",
    multiple: false,
    options: [
      { text: "El modelo identifica correctamente la mayoría de los fraudes reales, aunque también genera muchas falsas alarmas", correct: false, explanation: "Esto describe alto recall y baja precisión, exactamente lo contrario de lo indicado en el escenario." },
      { text: "Cuando el modelo predice fraude, casi siempre acierta, pero está dejando pasar muchos casos de fraude reales sin detectar", correct: true, explanation: "Alta precisión significa pocas falsas alarmas entre las predicciones positivas; bajo recall significa que muchos fraudes reales no son detectados (falsos negativos)." },
      { text: "El modelo tiene un desempeño perfecto en ambas métricas", correct: false, explanation: "El escenario indica explícitamente que el recall es bajo, por lo que no hay desempeño perfecto." },
      { text: "El modelo no puede usarse para tareas de clasificación binaria", correct: false, explanation: "El modelo sí puede usarse, pero requiere ajustar el umbral de decisión o técnica de balanceo según el objetivo de negocio." }
    ],
    doc: "https://learn.microsoft.com/es-es/training/modules/fundamentals-machine-learning/"
  },
  {
    domain: "Dominio 1 - Fundamentos de ML",
    text: "Para cada afirmación sobre el ciclo de vida de un proyecto de machine learning, selecciona Yes si es verdadera.\n1) Dividir los datos en conjuntos de entrenamiento y prueba ayuda a evaluar qué tan bien generaliza el modelo a datos nuevos.\n2) Un modelo que obtiene 99% de precisión en el conjunto de entrenamiento pero 60% en el conjunto de prueba probablemente sufre overfitting.\n3) Los datos de entrenamiento y de prueba deben ser exactamente el mismo conjunto para maximizar la precisión reportada.",
    multiple: true,
    options: [
      { text: "1) Yes", correct: true, explanation: "Separar entrenamiento y prueba permite medir el desempeño del modelo en datos que no ha visto, simulando el uso real." },
      { text: "2) Yes", correct: true, explanation: "Una gran diferencia entre el desempeño en entrenamiento y en prueba es un indicador clásico de overfitting (memorización en vez de generalización)." },
      { text: "3) No", correct: true, explanation: "Usar el mismo conjunto para entrenar y evaluar produce una métrica engañosamente alta y no mide la capacidad real de generalización." }
    ],
    doc: "https://learn.microsoft.com/es-es/training/modules/fundamentals-machine-learning/"
  },
  {
    domain: "Dominio 1 - Fundamentos de ML",
    text: "¿Qué componente de Microsoft Foundry (antes Azure Machine Learning) permite construir flujos visuales de entrenamiento de modelos arrastrando y conectando módulos, sin escribir código?",
    multiple: false,
    options: [
      { text: "Designer (diseñador visual de pipelines)", correct: true, explanation: "El Designer ofrece una interfaz de arrastrar y soltar para crear y ejecutar pipelines de entrenamiento de ML sin necesidad de código." },
      { text: "Notebooks de Python", correct: false, explanation: "Los notebooks requieren escribir código; no son la herramienta 'sin código' descrita en la pregunta." },
      { text: "El SDK de OpenAI", correct: false, explanation: "El SDK de OpenAI se usa para interactuar con modelos generativos vía código, no para construir pipelines visuales de ML clásico." },
      { text: "Content Safety Studio", correct: false, explanation: "Content Safety Studio se usa para configurar moderación de contenido, no para entrenar modelos de ML." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-designer"
  },
  {
    domain: "Dominio 1 - Fundamentos de ML",
    text: "Un data scientist entrena un modelo de árbol de decisión y luego quiere entender qué características (features) influyeron más en las predicciones del modelo. ¿Qué concepto describe esta necesidad?",
    multiple: false,
    options: [
      { text: "Interpretabilidad / importancia de características (feature importance)", correct: true, explanation: "La importancia de características cuantifica cuánto contribuye cada variable a las predicciones del modelo, apoyando la interpretabilidad." },
      { text: "Normalización de datos", correct: false, explanation: "La normalización escala los valores numéricos de las características, pero no explica su influencia en las predicciones." },
      { text: "Aumento de datos (data augmentation)", correct: false, explanation: "El aumento de datos genera variaciones sintéticas de los datos de entrenamiento; no se relaciona con explicar el modelo." },
      { text: "Validación cruzada (cross-validation)", correct: false, explanation: "La validación cruzada evalúa la estabilidad del rendimiento del modelo, no la importancia de las variables individuales." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/how-to-machine-learning-interpretability"
  },
  {
    domain: "Dominio 1 - Fundamentos de ML",
    text: "¿Cuál es la principal diferencia entre un modelo de aprendizaje profundo (deep learning) y un modelo de machine learning clásico como la regresión logística?",
    multiple: false,
    options: [
      { text: "El deep learning usa redes neuronales con múltiples capas que pueden aprender automáticamente representaciones complejas de los datos, mientras que los modelos clásicos suelen requerir ingeniería manual de características", correct: true, explanation: "Las redes neuronales profundas aprenden jerarquías de representaciones automáticamente a partir de datos crudos, a diferencia de los modelos clásicos que dependen más de features diseñadas manualmente." },
      { text: "El deep learning nunca requiere datos etiquetados", correct: false, explanation: "El deep learning puede ser supervisado, no supervisado o de refuerzo; no está limitado a datos sin etiquetas." },
      { text: "Los modelos clásicos solo pueden ejecutarse en la nube, mientras que el deep learning solo se ejecuta localmente", correct: false, explanation: "Ambos tipos de modelos pueden desplegarse tanto en la nube como localmente." },
      { text: "El deep learning es exclusivamente para tareas de texto", correct: false, explanation: "El deep learning se aplica en visión, audio, texto, series de tiempo y muchos otros dominios." }
    ],
    doc: "https://learn.microsoft.com/es-es/training/modules/fundamentals-machine-learning/"
  },
  {
    domain: "Dominio 1 - Fundamentos de ML",
    text: "Un equipo entrena un modelo para predecir si un cliente cancelará su suscripción (churn). Después de desplegarlo, observan que su precisión disminuye con el tiempo a medida que cambian los hábitos de los clientes. ¿Qué fenómeno describe esta situación?",
    multiple: false,
    options: [
      { text: "Data drift (deriva de datos)", correct: true, explanation: "Cuando la distribución de los datos de entrada en producción cambia respecto a los datos con los que se entrenó el modelo, el rendimiento se degrada; esto se conoce como data drift." },
      { text: "Underfitting", correct: false, explanation: "El underfitting ocurre cuando el modelo es demasiado simple desde el inicio del entrenamiento, no describe la degradación con el tiempo en producción." },
      { text: "Data leakage", correct: false, explanation: "El data leakage ocurre cuando información del conjunto de prueba se filtra al entrenamiento, inflando artificialmente la precisión inicial." },
      { text: "One-hot encoding", correct: false, explanation: "One-hot encoding es una técnica de preprocesamiento de variables categóricas, no un fenómeno relacionado con el rendimiento en producción." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/how-to-monitor-datasets"
  },

  /* ══════════════════════════════════════════════════════════════════
     DOMINIO 1 · Computer Vision
  ══════════════════════════════════════════════════════════════════ */
  {
    domain: "Dominio 1 - Computer Vision",
    text: "Una fábrica necesita identificar y dibujar un cuadro delimitador (bounding box) alrededor de cada pieza defectuosa en una imagen de la línea de producción, incluyendo la posición exacta de cada una. ¿Qué capacidad de visión por computadora se requiere?",
    multiple: false,
    options: [
      { text: "Clasificación de imágenes", correct: false, explanation: "La clasificación de imágenes asigna una sola etiqueta a toda la imagen, sin indicar la ubicación de los objetos." },
      { text: "Detección de objetos (object detection)", correct: true, explanation: "La detección de objetos identifica múltiples objetos en una imagen y proporciona un cuadro delimitador con la ubicación de cada uno." },
      { text: "OCR (reconocimiento óptico de caracteres)", correct: false, explanation: "OCR extrae texto de las imágenes, no identifica ubicaciones de piezas físicas defectuosas." },
      { text: "Análisis de sentimiento", correct: false, explanation: "El análisis de sentimiento es una capacidad de procesamiento de lenguaje natural, no de visión por computadora." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/custom-vision-service/overview"
  },
  {
    domain: "Dominio 1 - Computer Vision",
    text: "¿Qué servicio de Azure AI debes usar para entrenar un modelo que clasifique fotos de productos en categorías personalizadas específicas de tu catálogo, sin necesidad de conocimientos profundos de machine learning?",
    multiple: false,
    options: [
      { text: "Azure AI Custom Vision", correct: true, explanation: "Custom Vision permite entrenar modelos de clasificación de imágenes y detección de objetos personalizados mediante una interfaz sencilla, sin requerir experiencia avanzada en ML." },
      { text: "Azure AI Document Intelligence", correct: false, explanation: "Document Intelligence extrae datos estructurados de documentos, no clasifica imágenes de productos generales." },
      { text: "Azure AI Language", correct: false, explanation: "Azure AI Language procesa texto (sentimiento, entidades, etc.), no imágenes." },
      { text: "Azure AI Speech", correct: false, explanation: "Azure AI Speech procesa audio (voz), no es relevante para clasificación de imágenes." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/custom-vision-service/overview"
  },
  {
    domain: "Dominio 1 - Computer Vision",
    text: "Para cada afirmación sobre Azure AI Vision, selecciona Yes si es verdadera.\n1) La función de OCR puede extraer texto impreso y manuscrito de una imagen.\n2) La detección facial en Azure AI Vision puede usarse, por defecto y sin restricciones adicionales, para identificar la identidad de cualquier persona en una base de datos pública.\n3) El análisis de imágenes puede generar automáticamente una descripción en lenguaje natural del contenido de una foto.",
    multiple: true,
    options: [
      { text: "1) Yes", correct: true, explanation: "El OCR de Azure AI Vision (Read API) soporta tanto texto impreso como manuscrito en muchos idiomas." },
      { text: "2) No", correct: true, explanation: "El reconocimiento facial de identificación (identificación 1:N) está sujeto a acceso limitado y controles de uso responsable; no está disponible libremente para cualquier escenario sin aprobación." },
      { text: "3) Yes", correct: true, explanation: "La función de 'image captioning' de Azure AI Vision puede generar una descripción textual del contenido general de una imagen." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/computer-vision/overview"
  },
  {
    domain: "Dominio 1 - Computer Vision",
    text: "Una app médica necesita extraer automáticamente el texto de recetas manuscritas y estructurarlo en campos como 'medicamento', 'dosis' y 'fecha'. ¿Qué servicio de Azure es el más adecuado?",
    multiple: false,
    options: [
      { text: "Azure AI Vision (OCR simple)", correct: false, explanation: "El OCR simple extrae texto plano, pero no estructura automáticamente la información en campos clave-valor específicos de un documento." },
      { text: "Azure AI Document Intelligence con un modelo personalizado", correct: true, explanation: "Document Intelligence permite entrenar modelos personalizados que extraen y estructuran campos específicos (como medicamento, dosis, fecha) de documentos, incluidos los manuscritos." },
      { text: "Azure AI Custom Vision", correct: false, explanation: "Custom Vision se usa para clasificación y detección de objetos en imágenes, no para extracción estructurada de texto de documentos." },
      { text: "Face API", correct: false, explanation: "Face API se especializa en detección y análisis de rostros, no en extracción de texto de documentos." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/document-intelligence/overview"
  },
  {
    domain: "Dominio 1 - Computer Vision",
    text: "¿Qué escenario describe mejor un caso de uso de 'segmentación semántica' en visión por computadora?",
    multiple: false,
    options: [
      { text: "Clasificar una imagen completa como 'gato' o 'perro'", correct: false, explanation: "Esto es clasificación de imágenes a nivel de imagen completa, no segmentación a nivel de píxel." },
      { text: "Etiquetar cada píxel de una imagen de una calle como 'carretera', 'peatón', 'vehículo' o 'cielo'", correct: true, explanation: "La segmentación semántica asigna una clase a cada píxel de la imagen, lo que permite distinguir con precisión las regiones que pertenecen a cada categoría." },
      { text: "Transcribir el texto visible en una señal de tráfico", correct: false, explanation: "Esto corresponde a OCR, no a segmentación semántica." },
      { text: "Detectar si dos fotos pertenecen a la misma persona", correct: false, explanation: "Esto es un caso de verificación facial, no de segmentación semántica." }
    ],
    doc: "https://learn.microsoft.com/es-es/training/modules/analyze-images-computer-vision/"
  },
  {
    domain: "Dominio 1 - Computer Vision",
    text: "Tu aplicación necesita saber si dos fotografías distintas corresponden a la misma persona (por ejemplo, para verificar identidad al iniciar sesión). ¿Qué funcionalidad de Azure AI Face debes usar?",
    multiple: false,
    options: [
      { text: "Detección de rostros (face detection)", correct: false, explanation: "La detección de rostros solo identifica que hay una cara presente y sus atributos, pero no compara dos imágenes entre sí." },
      { text: "Verificación facial (face verification)", correct: true, explanation: "La verificación facial compara dos imágenes de rostros y determina la probabilidad de que pertenezcan a la misma persona, ideal para autenticación 1:1." },
      { text: "Detección de objetos", correct: false, explanation: "La detección de objetos identifica objetos genéricos en una imagen, no está especializada en comparar identidades faciales." },
      { text: "Generación de miniaturas inteligentes (smart cropping)", correct: false, explanation: "El recorte inteligente ajusta el encuadre de una imagen, no compara identidades entre fotos." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/computer-vision/overview-identity"
  },

  /* ══════════════════════════════════════════════════════════════════
     DOMINIO 1 · Procesamiento de Lenguaje Natural (NLP)
  ══════════════════════════════════════════════════════════════════ */
  {
    domain: "Dominio 1 - NLP",
    text: "Un chatbot de reservas de vuelos necesita entender que en la frase 'quiero volar de Santiago a Madrid el 5 de mayo', 'Santiago' y 'Madrid' son ciudades, y '5 de mayo' es una fecha. ¿Qué capacidad de NLP se necesita?",
    multiple: false,
    options: [
      { text: "Reconocimiento de entidades con nombre (NER)", correct: true, explanation: "El NER identifica y clasifica elementos específicos del texto (lugares, fechas, personas, organizaciones) como entidades con un tipo definido." },
      { text: "Análisis de sentimiento", correct: false, explanation: "El análisis de sentimiento determina si un texto es positivo, negativo o neutral, no identifica entidades específicas." },
      { text: "Traducción automática", correct: false, explanation: "La traducción convierte texto de un idioma a otro, no identifica entidades dentro de una frase." },
      { text: "Resumen de texto (summarization)", correct: false, explanation: "El resumen condensa un texto largo en uno más corto, no extrae entidades nombradas específicas." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/language-service/named-entity-recognition/overview"
  },
  {
    domain: "Dominio 1 - NLP",
    text: "¿Qué es 'tokenización' en el contexto del procesamiento de lenguaje natural?",
    multiple: false,
    options: [
      { text: "El proceso de dividir el texto en unidades más pequeñas (palabras, subpalabras o caracteres) que el modelo puede procesar", correct: true, explanation: "La tokenización descompone el texto en tokens, que son las unidades básicas que los modelos de lenguaje usan para procesar y generar texto." },
      { text: "El proceso de cifrar el texto para protegerlo", correct: false, explanation: "Esto describe cifrado o seguridad de datos, no tokenización lingüística." },
      { text: "El proceso de traducir texto entre idiomas", correct: false, explanation: "La traducción es una tarea de NLP distinta que ocurre después de la tokenización, no la define." },
      { text: "El proceso de eliminar todas las palabras vacías (stopwords) de un texto", correct: false, explanation: "La eliminación de stopwords es una técnica de preprocesamiento diferente y opcional, no equivale a tokenización." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/prompt-engineering"
  },
  {
    domain: "Dominio 1 - NLP",
    text: "Para cada afirmación sobre Azure AI Language, selecciona Yes si es verdadera.\n1) La función de detección de PII (información personal identificable) puede identificar y redactar números de tarjetas de crédito en un texto.\n2) La extracción de frases clave (key phrase extraction) devuelve un puntaje de sentimiento numérico para cada frase.\n3) El servicio de detección de idioma puede identificar el idioma predominante de un texto de entrada.",
    multiple: true,
    options: [
      { text: "1) Yes", correct: true, explanation: "La detección de PII de Azure AI Language identifica categorías sensibles como números de tarjetas de crédito, números de identificación y puede redactarlos automáticamente." },
      { text: "2) No", correct: true, explanation: "La extracción de frases clave solo identifica los conceptos principales del texto; no calcula puntajes de sentimiento, eso corresponde a la función de análisis de sentimiento." },
      { text: "3) Yes", correct: true, explanation: "La detección de idioma analiza el texto de entrada y devuelve el idioma predominante junto con un puntaje de confianza." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/language-service/overview"
  },
  {
    domain: "Dominio 1 - NLP",
    text: "Un equipo legal necesita identificar automáticamente cláusulas específicas (como 'fecha de vencimiento' o 'parte responsable') dentro de miles de contratos, sin usar categorías predefinidas genéricas del servicio estándar. ¿Qué enfoque de Azure AI Language deben usar?",
    multiple: false,
    options: [
      { text: "Extracción de frases clave estándar", correct: false, explanation: "La extracción de frases clave estándar identifica conceptos generales del texto, pero no permite definir categorías legales personalizadas específicas." },
      { text: "Reconocimiento de entidades personalizado (Custom Named Entity Recognition)", correct: true, explanation: "El NER personalizado permite entrenar un modelo para reconocer entidades específicas del dominio (como cláusulas legales concretas) que no están cubiertas por el modelo genérico." },
      { text: "Traductor de Azure", correct: false, explanation: "El Traductor convierte texto entre idiomas, no está diseñado para identificar cláusulas contractuales específicas." },
      { text: "Detección de idioma", correct: false, explanation: "La detección de idioma solo identifica en qué idioma está escrito el texto, no extrae entidades legales." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/language-service/custom-named-entity-recognition/overview"
  },
  {
    domain: "Dominio 1 - NLP",
    text: "¿Qué describe mejor un modelo de lenguaje grande (LLM, Large Language Model)?",
    multiple: false,
    options: [
      { text: "Un modelo entrenado con enormes cantidades de texto que puede generar y comprender lenguaje natural para una amplia variedad de tareas", correct: true, explanation: "Los LLM se entrenan con grandes volúmenes de datos textuales y pueden generalizar a múltiples tareas de lenguaje sin necesidad de un modelo específico por tarea." },
      { text: "Un modelo entrenado exclusivamente para traducir un único par de idiomas", correct: false, explanation: "Esto describe un modelo de traducción especializado, no la definición general de un LLM." },
      { text: "Un modelo que solo puede clasificar imágenes en categorías fijas", correct: false, explanation: "Esto corresponde a un modelo de visión por computadora, no a un modelo de lenguaje." },
      { text: "Un modelo que requiere reentrenamiento completo para cada nueva pregunta del usuario", correct: false, explanation: "Los LLM pueden responder preguntas nuevas mediante inferencia, sin necesidad de reentrenarse por cada consulta." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/overview"
  },
  {
    domain: "Dominio 1 - NLP",
    text: "Una empresa de e-commerce quiere resumir automáticamente miles de reseñas largas de productos en 2-3 oraciones clave por producto. ¿Qué capacidad de Azure AI Language deben utilizar?",
    multiple: false,
    options: [
      { text: "Resumen de texto (text summarization)", correct: true, explanation: "La función de resumen de texto de Azure AI Language condensa documentos largos en un conjunto reducido de oraciones que capturan la idea principal." },
      { text: "Detección de PII", correct: false, explanation: "La detección de PII identifica información personal sensible, no genera resúmenes del contenido." },
      { text: "Traducción de documentos", correct: false, explanation: "La traducción convierte el texto a otro idioma, pero no reduce su longitud ni genera un resumen." },
      { text: "Clasificación de texto personalizada", correct: false, explanation: "La clasificación asigna categorías al texto, no produce un resumen condensado del contenido." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/language-service/summarization/overview"
  },

  /* ══════════════════════════════════════════════════════════════════
     DOMINIO 1 · Conceptos de IA Generativa
  ══════════════════════════════════════════════════════════════════ */
  {
    domain: "Dominio 1 - IA Generativa",
    text: "En el contexto de modelos generativos, ¿qué controla principalmente el parámetro 'temperature' al generar una respuesta?",
    multiple: false,
    options: [
      { text: "La cantidad máxima de tokens que puede generar el modelo", correct: false, explanation: "Ese límite lo controla el parámetro 'max_tokens', no 'temperature'." },
      { text: "El grado de aleatoriedad/creatividad en las respuestas generadas: valores más altos producen respuestas más diversas y menos predecibles", correct: true, explanation: "Temperature ajusta la distribución de probabilidad al elegir el siguiente token; valores bajos generan respuestas más deterministas y valores altos, más variadas." },
      { text: "El idioma en el que responde el modelo", correct: false, explanation: "El idioma de respuesta lo determina principalmente el prompt/instrucción, no el parámetro temperature." },
      { text: "El costo por token de la solicitud", correct: false, explanation: "El costo depende del modelo y del número de tokens, no del valor de temperature." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/prompt-engineering"
  },
  {
    domain: "Dominio 1 - IA Generativa",
    text: "¿Qué es 'prompt engineering'?",
    multiple: false,
    options: [
      { text: "El proceso de diseñar y refinar las instrucciones de entrada dadas a un modelo generativo para obtener las respuestas deseadas", correct: true, explanation: "Prompt engineering consiste en estructurar cuidadosamente las instrucciones, ejemplos y contexto en el prompt para guiar el comportamiento del modelo sin reentrenarlo." },
      { text: "El proceso de reentrenar completamente un modelo con nuevos datos", correct: false, explanation: "Eso describe fine-tuning o reentrenamiento, no prompt engineering, que no modifica los pesos del modelo." },
      { text: "El proceso de comprimir un modelo para reducir su tamaño", correct: false, explanation: "Eso corresponde a técnicas como cuantización o destilación de modelos, no a prompt engineering." },
      { text: "El proceso de cifrar las solicitudes enviadas a la API", correct: false, explanation: "El cifrado es una medida de seguridad de transporte de datos, no relacionada con el diseño de prompts." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/prompt-engineering"
  },
  {
    domain: "Dominio 1 - IA Generativa",
    text: "Para cada afirmación sobre modelos generativos, selecciona Yes si es verdadera.\n1) Un modelo multimodal puede aceptar tanto texto como imágenes en una misma solicitud.\n2) El 'grounding' (fundamentación) mediante RAG ayuda a reducir las alucinaciones al basar las respuestas en datos reales recuperados.\n3) Aumentar el valor de 'top_p' y 'temperature' al mismo tiempo siempre garantiza respuestas más precisas y factuales.",
    multiple: true,
    options: [
      { text: "1) Yes", correct: true, explanation: "Los modelos multimodales, como los desplegados en Foundry con capacidades de visión, pueden procesar entradas combinadas de texto e imagen en una sola solicitud." },
      { text: "2) Yes", correct: true, explanation: "RAG (Retrieval-Augmented Generation) fundamenta las respuestas del modelo en información recuperada de una fuente confiable, reduciendo el riesgo de alucinaciones." },
      { text: "3) No", correct: true, explanation: "Aumentar temperature y top_p incrementa la aleatoriedad y diversidad de las respuestas, lo cual generalmente reduce la precisión factual, no la garantiza." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/prompt-engineering"
  },
  {
    domain: "Dominio 1 - IA Generativa",
    text: "¿Cuál es la diferencia clave entre un modelo de 'embeddings' y un modelo de generación de texto (chat/completions)?",
    multiple: false,
    options: [
      { text: "El modelo de embeddings convierte texto en un vector numérico que representa su significado semántico, mientras que un modelo de generación produce texto nuevo como salida", correct: true, explanation: "Los embeddings representan el significado del texto en un espacio vectorial, útil para búsqueda semántica, mientras que los modelos de generación producen texto en lenguaje natural como respuesta." },
      { text: "Ambos modelos generan siempre exactamente el mismo tipo de salida: texto en lenguaje natural", correct: false, explanation: "El modelo de embeddings genera vectores numéricos, no texto en lenguaje natural, a diferencia de un modelo de chat/completions." },
      { text: "El modelo de embeddings solo puede usarse con imágenes, nunca con texto", correct: false, explanation: "Los modelos de embeddings de texto son ampliamente usados para representar texto; existen también embeddings de imágenes, pero no es una limitación exclusiva a imágenes." },
      { text: "No existe diferencia real entre ambos tipos de modelos", correct: false, explanation: "Sí existe una diferencia fundamental en el tipo de salida y el propósito de uso de cada modelo." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/understand-embeddings"
  },
  {
    domain: "Dominio 1 - IA Generativa",
    text: "Un desarrollador quiere que un modelo generativo responda siempre en el mismo tono profesional y nunca revele información confidencial de la empresa, sin importar cómo el usuario formule sus preguntas. ¿Qué mecanismo es el más apropiado para establecer este comportamiento base?",
    multiple: false,
    options: [
      { text: "Un mensaje de sistema (system message) que defina claramente el rol, tono y restricciones del asistente", correct: true, explanation: "El system message se usa para establecer el comportamiento, tono y límites del asistente antes de procesar los mensajes del usuario, guiando la conversación de forma consistente." },
      { text: "Incrementar el valor de 'max_tokens'", correct: false, explanation: "Max_tokens solo limita la longitud de la respuesta, no controla el tono ni las restricciones de contenido." },
      { text: "Reducir el número de modelos desplegados en el proyecto", correct: false, explanation: "El número de modelos desplegados no tiene relación con el comportamiento o tono de las respuestas." },
      { text: "Usar únicamente el endpoint de embeddings", correct: false, explanation: "El endpoint de embeddings no genera texto conversacional, por lo que no es aplicable a este escenario." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/system-message"
  },
  {
    domain: "Dominio 1 - IA Generativa",
    text: "¿Qué escenario es un ejemplo apropiado de 'fine-tuning' de un modelo generativo, en lugar de simplemente usar prompt engineering?",
    multiple: false,
    options: [
      { text: "Ajustar el prompt para pedir respuestas más breves en una sola solicitud puntual", correct: false, explanation: "Este es un ajuste simple de instrucciones (prompt engineering), no requiere modificar los pesos del modelo." },
      { text: "Adaptar el modelo para que consistentemente replique el estilo de escritura y terminología específica de miles de documentos legales de la empresa, con un comportamiento estable en todas las solicitudes", correct: true, explanation: "Cuando se requiere un cambio de comportamiento consistente y profundo, basado en grandes volúmenes de ejemplos específicos del dominio, el fine-tuning ajusta los pesos del modelo para lograr ese comportamiento de forma más confiable que solo con prompts." },
      { text: "Agregar una sola instrucción adicional en el system message", correct: false, explanation: "Esto sigue siendo prompt engineering, ya que no involucra reentrenar ni ajustar los parámetros del modelo." },
      { text: "Cambiar el valor de 'temperature' de 0.7 a 0.2", correct: false, explanation: "Modificar un parámetro de inferencia como temperature no constituye fine-tuning del modelo." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/how-to/fine-tuning"
  },
  {
    domain: "Dominio 1 - IA Generativa",
    text: "¿Qué es la 'ventana de contexto' (context window) de un modelo de lenguaje grande?",
    multiple: false,
    options: [
      { text: "La cantidad máxima de tokens (entre el prompt y la respuesta) que el modelo puede procesar en una sola solicitud", correct: true, explanation: "La ventana de contexto define cuántos tokens combinados de entrada y salida puede manejar el modelo en una interacción; superar este límite provoca truncamiento o errores." },
      { text: "El número de modelos que se pueden desplegar simultáneamente en un proyecto", correct: false, explanation: "Eso se relaciona con cuotas de despliegue, no con la ventana de contexto del modelo." },
      { text: "El tiempo máximo que el servicio conserva el historial de conversación entre sesiones", correct: false, explanation: "La retención del historial de conversación es una decisión de la aplicación, no una propiedad intrínseca de 'ventana de contexto' del modelo." },
      { text: "La cantidad de idiomas que soporta el modelo", correct: false, explanation: "El soporte de idiomas es una capacidad distinta del modelo, no está relacionado con la ventana de contexto." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/models"
  },

  /* ══════════════════════════════════════════════════════════════════
     DOMINIO 2 · Microsoft Foundry - Fundamentos y despliegue
  ══════════════════════════════════════════════════════════════════ */
  {
    domain: "Dominio 2 - Foundry Fundamentos",
    text: "En Microsoft Foundry, ¿qué recurso debes crear primero antes de poder desplegar e interactuar con un modelo del catálogo?",
    multiple: false,
    options: [
      { text: "Un proyecto de Foundry (Foundry project), asociado a un hub/recurso de Azure AI", correct: true, explanation: "Un proyecto de Foundry es el contenedor de trabajo donde se gestionan los despliegues de modelos, conexiones a datos y configuraciones antes de poder interactuar con cualquier modelo." },
      { text: "Un modelo de Custom Vision entrenado", correct: false, explanation: "Custom Vision es un servicio independiente para modelos de visión; no es un requisito previo para usar el catálogo de modelos de Foundry." },
      { text: "Una cuenta de Azure AI Search con un índice ya poblado", correct: false, explanation: "Azure AI Search es necesario únicamente para escenarios de RAG, no como prerrequisito general para desplegar cualquier modelo." },
      { text: "Una suscripción de OpenAI directamente con OpenAI (fuera de Azure)", correct: false, explanation: "Foundry aloja los modelos dentro de Azure; no requiere una suscripción directa con OpenAI fuera de la plataforma." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-foundry/what-is-azure-ai-foundry"
  },
  {
    domain: "Dominio 2 - Foundry Fundamentos",
    text: "Para cada afirmación sobre el catálogo de modelos de Microsoft Foundry, selecciona Yes si es verdadera.\n1) El catálogo incluye únicamente modelos desarrollados por OpenAI.\n2) Algunos modelos del catálogo se pueden desplegar como 'serverless API' sin gestionar infraestructura de cómputo dedicada.\n3) Es posible comparar el rendimiento de distintos modelos del catálogo usando un playground o benchmarks antes de elegir cuál desplegar.",
    multiple: true,
    options: [
      { text: "1) No", correct: true, explanation: "El catálogo de Foundry incluye modelos de múltiples proveedores (OpenAI, Meta, Mistral, Cohere, Microsoft, entre otros), no solo de OpenAI." },
      { text: "2) Yes", correct: true, explanation: "Muchos modelos se pueden desplegar mediante 'serverless API' (pago por token) sin necesidad de aprovisionar y gestionar VMs dedicadas." },
      { text: "3) Yes", correct: true, explanation: "Foundry ofrece herramientas para comparar modelos, probarlos en un playground y revisar benchmarks de rendimiento antes de la decisión de despliegue." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-foundry/how-to/model-catalog-overview"
  },
  {
    domain: "Dominio 2 - Foundry Fundamentos",
    text: "Tu aplicación necesita llamar a un modelo desplegado en Microsoft Foundry usando el SDK de OpenAI para Python. ¿Qué valor debe usarse en el parámetro 'model' de la solicitud?",
    multiple: false,
    options: [
      { text: "El nombre del modelo base original del catálogo (p. ej. 'gpt-4o')", correct: false, explanation: "Usar el nombre del modelo base directamente puede no coincidir con el identificador configurado en el despliegue específico del recurso Foundry." },
      { text: "El nombre de despliegue (deployment name) que se configuró al desplegar el modelo en el recurso de Foundry", correct: true, explanation: "En Foundry, al desplegar un modelo se le asigna un nombre de despliegue, y ese es el identificador que debe usarse como valor de 'model' en las llamadas a la API." },
      { text: "El ID de la suscripción de Azure", correct: false, explanation: "El ID de suscripción identifica la cuenta de facturación de Azure, no el modelo a invocar en la solicitud." },
      { text: "La región de Azure donde está desplegado el recurso", correct: false, explanation: "La región se especifica en el endpoint de la solicitud, no como valor del parámetro 'model'." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/how-to/switching-endpoints"
  },
  {
    domain: "Dominio 2 - Foundry Fundamentos",
    text: "¿Qué opción de despliegue en Microsoft Foundry es la más adecuada para una aplicación empresarial que requiere rendimiento garantizado (capacidad reservada) y predecible, independientemente del tráfico de otros clientes en la región?",
    multiple: false,
    options: [
      { text: "Standard (pago por token, capacidad compartida)", correct: false, explanation: "El modelo estándar comparte capacidad con otros clientes de la región, por lo que el rendimiento puede variar según la demanda general." },
      { text: "Provisioned Throughput Units (PTU)", correct: true, explanation: "Las PTU reservan una cantidad fija de capacidad de cómputo dedicada, ofreciendo latencia y rendimiento predecibles independientemente de la carga de otros clientes." },
      { text: "Batch (procesamiento asíncrono de baja prioridad)", correct: false, explanation: "El modo batch está optimizado para cargas masivas no urgentes con menor costo, no garantiza baja latencia ni rendimiento dedicado en tiempo real." },
      { text: "Free tier de evaluación", correct: false, explanation: "Los niveles gratuitos de evaluación tienen límites de uso y no ofrecen garantías de capacidad dedicada para producción." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/provisioned-throughput"
  },
  {
    domain: "Dominio 2 - Foundry Fundamentos",
    text: "Un equipo de desarrollo quiere probar rápidamente distintos prompts contra un modelo desplegado en Foundry, ajustando parámetros como temperature y system message, antes de escribir código de integración. ¿Qué herramienta de Foundry deben usar?",
    multiple: false,
    options: [
      { text: "El Playground de chat", correct: true, explanation: "El Playground de Foundry permite experimentar de forma interactiva con prompts, parámetros del modelo y mensajes de sistema sin necesidad de escribir código." },
      { text: "Azure DevOps Pipelines", correct: false, explanation: "Azure DevOps se usa para CI/CD de aplicaciones, no para experimentar de forma interactiva con prompts." },
      { text: "El panel de facturación de Azure", correct: false, explanation: "El panel de facturación muestra costos y consumo, no es una herramienta de experimentación con modelos." },
      { text: "Azure Key Vault", correct: false, explanation: "Key Vault se usa para almacenar secretos y claves de forma segura, no para probar prompts contra un modelo." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-foundry/how-to/quickstart-play-with-model"
  },

  /* ══════════════════════════════════════════════════════════════════
     DOMINIO 2 · OpenAI Responses API / Multimodalidad
  ══════════════════════════════════════════════════════════════════ */
  {
    domain: "Dominio 2 - Responses API / Multimodal",
    text: "Tienes una app en Python que usa la OpenAI Responses API en Microsoft Foundry con un modelo multimodal desplegado. Un usuario sube una imagen y pregunta '¿qué hay en esta foto?'. ¿Qué debe incluir la solicitud para procesar correctamente texto e imagen juntos?",
    multiple: false,
    options: [
      { text: "Dos solicitudes separadas: una solo con la imagen y otra solo con el texto", correct: false, explanation: "La Responses API permite combinar texto e imagen en una sola solicitud; separar las solicitudes no permite que el modelo relacione ambos elementos en un mismo contexto." },
      { text: "Un único mensaje de entrada ('input') que contenga tanto un content part de tipo texto como uno de tipo 'input_image' con la imagen", correct: true, explanation: "La Responses API soporta contenido multimodal combinando en un mismo mensaje partes de tipo texto ('input_text') y de tipo imagen ('input_image'), procesadas juntas en una sola solicitud." },
      { text: "Un parámetro 'stream=True' obligatorio", correct: false, explanation: "El streaming controla cómo se recibe la respuesta (incremental), pero no es un requisito para combinar texto e imagen en la entrada." },
      { text: "Codificar la imagen como texto plano dentro del campo 'input_text'", correct: false, explanation: "Las imágenes no se envían como texto plano; deben incluirse como un content part específico de tipo imagen (URL o base64)." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/how-to/responses"
  },
  {
    domain: "Dominio 2 - Responses API / Multimodal",
    text: "Para cada afirmación sobre la OpenAI Responses API en Microsoft Foundry, selecciona Yes si es verdadera.\n1) Las imágenes enviadas a un modelo con capacidad de visión pueden proporcionarse como URLs públicamente accesibles o como datos de imagen codificados en base64.\n2) La Responses API mantiene automáticamente, sin ninguna configuración, el historial completo de todas las conversaciones anteriores del usuario en cada nueva solicitud.\n3) Un modelo desplegado sin capacidades de visión rechazará una solicitud que incluya un content part de tipo imagen.",
    multiple: true,
    options: [
      { text: "1) Yes", correct: true, explanation: "La Responses API acepta imágenes tanto mediante URLs accesibles públicamente como mediante datos base64 incluidos directamente en la solicitud." },
      { text: "2) No", correct: true, explanation: "El historial de conversación no se mantiene automáticamente sin configuración; el desarrollador debe gestionar el estado o usar mecanismos explícitos (como el parámetro de respuesta previa) para conservar contexto entre turnos." },
      { text: "3) Yes", correct: true, explanation: "Si el modelo desplegado no soporta capacidades de visión, una solicitud que incluya contenido de imagen resultará en un error, ya que el modelo no está habilitado para procesar ese tipo de entrada." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/how-to/responses"
  },
  {
    domain: "Dominio 2 - Responses API / Multimodal",
    text: "Necesitas que tu aplicación reciba la respuesta del modelo de forma incremental, mostrando el texto a medida que se va generando (similar a un efecto de 'escritura en vivo'). ¿Qué debes configurar en la solicitud a la Responses API?",
    multiple: false,
    options: [
      { text: "Establecer el parámetro 'stream' en true", correct: true, explanation: "Activar 'stream=True' hace que la API entregue la respuesta como una serie de eventos incrementales (chunks), permitiendo mostrar el texto progresivamente en la interfaz." },
      { text: "Aumentar 'max_output_tokens' al máximo permitido", correct: false, explanation: "Aumentar el límite de tokens no cambia la forma en que se entrega la respuesta; solo permite respuestas más largas." },
      { text: "Usar un modelo de embeddings en lugar de un modelo de chat", correct: false, explanation: "Los modelos de embeddings no generan texto conversacional ni soportan streaming de este tipo." },
      { text: "Desactivar Content Safety", correct: false, explanation: "Content Safety es un mecanismo de moderación independiente; desactivarlo no habilita ni afecta el comportamiento de streaming." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/how-to/responses"
  },
  {
    domain: "Dominio 2 - Responses API / Multimodal",
    text: "Estás migrando código que anteriormente usaba Chat Completions y ahora quieres usar function calling (llamado a herramientas) con la Responses API en Foundry. Además del nombre y esquema de parámetros de la función, ¿qué otro elemento es fundamental incluir en la definición de la herramienta para que el modelo la use correctamente?",
    multiple: false,
    options: [
      { text: "Una descripción clara en lenguaje natural de qué hace la función y cuándo debe usarse", correct: true, explanation: "El modelo decide si invocar una herramienta basándose en su descripción; una descripción clara y precisa mejora significativamente la exactitud de cuándo y cómo se invoca la función." },
      { text: "El código fuente completo de la función en el lenguaje de programación del backend", correct: false, explanation: "El modelo no ejecuta el código directamente; solo necesita el esquema (nombre, descripción, parámetros) para decidir cuándo solicitar su ejecución, la cual se realiza en el lado de la aplicación." },
      { text: "La URL pública del servidor donde se aloja la función", correct: false, explanation: "La API no invoca la función remotamente por sí misma; devuelve una solicitud de llamada que la aplicación debe ejecutar y luego enviar el resultado de vuelta al modelo." },
      { text: "Una clave de API independiente para cada función", correct: false, explanation: "No se requiere una clave de API por función; la autenticación es a nivel del recurso de Foundry, no de cada herramienta definida." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/how-to/function-calling"
  },
  {
    domain: "Dominio 2 - Responses API / Multimodal",
    text: "Tu app en Python usa la OpenAI Responses API en Microsoft Foundry con un modelo multimodal desplegado. Los usuarios proporcionan dos URLs HTTPS de imágenes. Necesitas que la app devuelva una comparación en texto de las dos imágenes en una sola solicitud. ¿Qué debe incluir la solicitud?",
    multiple: false,
    options: [
      { text: "Cada URL de imagen como un content part de tipo image_url en formato Chat Completions", correct: false, explanation: "Ese formato corresponde a la Chat Completions API clásica; la Responses API usa un esquema de content parts distinto ('input_image'), no 'image_url'." },
      { text: "Cada URL de imagen enviada a un endpoint de generación de imágenes", correct: false, explanation: "Un endpoint de generación de imágenes crea imágenes nuevas; no compara ni analiza imágenes existentes." },
      { text: "Una instrucción de texto y ambas URLs de imagen combinadas en un único valor de input_text", correct: false, explanation: "Las imágenes no deben incrustarse como texto plano dentro de 'input_text'; deben representarse como content parts de imagen independientes." },
      { text: "Una instrucción de texto y cada URL de imagen como un content part de tipo input_image", correct: true, explanation: "La Responses API permite combinar en un mismo mensaje una instrucción de texto ('input_text') junto con múltiples content parts de tipo 'input_image', lo que permite comparar varias imágenes en una sola solicitud." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/how-to/responses"
  },
  {
    domain: "Dominio 2 - Responses API / Multimodal",
    text: "¿Cuál es una ventaja clave de la Responses API sobre la Chat Completions API tradicional en cuanto al manejo del estado de la conversación?",
    multiple: false,
    options: [
      { text: "La Responses API puede referenciar una respuesta anterior mediante un identificador, evitando que la aplicación deba reenviar manualmente todo el historial de mensajes en cada solicitud", correct: true, explanation: "La Responses API introduce la capacidad de encadenar respuestas mediante un identificador de respuesta previa, simplificando la gestión de contexto conversacional sin reenviar todo el historial." },
      { text: "La Responses API elimina por completo la necesidad de un system message", correct: false, explanation: "El system message sigue siendo relevante y soportado en la Responses API para definir comportamiento y restricciones del asistente." },
      { text: "La Responses API no admite function calling, a diferencia de Chat Completions", correct: false, explanation: "La Responses API sí admite function calling (uso de herramientas), incluso con mejoras respecto al enfoque de Chat Completions." },
      { text: "La Responses API solo funciona con modelos de embeddings", correct: false, explanation: "La Responses API está diseñada para modelos de generación de texto y multimodales, no está limitada a embeddings." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/how-to/responses"
  },

  /* ══════════════════════════════════════════════════════════════════
     DOMINIO 2 · Content Safety
  ══════════════════════════════════════════════════════════════════ */
  {
    domain: "Dominio 2 - Content Safety",
    text: "Tu aplicación de Foundry necesita bloquear automáticamente respuestas del modelo que contengan contenido de violencia extrema, antes de que lleguen al usuario final. ¿Qué componente debes configurar?",
    multiple: false,
    options: [
      { text: "Un filtro de Content Safety configurado sobre las salidas (completions) del modelo, con el umbral de severidad adecuado para la categoría de violencia", correct: true, explanation: "Content Safety permite configurar filtros de severidad por categoría (odio, violencia, sexual, autolesión) tanto para entradas como salidas, bloqueando contenido que exceda el umbral definido." },
      { text: "Aumentar el valor de 'temperature' del modelo", correct: false, explanation: "Temperature controla la aleatoriedad de la generación, no filtra ni bloquea contenido dañino." },
      { text: "Reducir el 'max_tokens' de la respuesta", correct: false, explanation: "Limitar la longitud de la respuesta no garantiza la ausencia de contenido dañino dentro de esos tokens." },
      { text: "Cambiar el modelo a una versión de embeddings", correct: false, explanation: "Un modelo de embeddings no genera texto conversacional, por lo que no es aplicable a este escenario de filtrado de respuestas." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/content-safety/overview"
  },
  {
    domain: "Dominio 2 - Content Safety",
    text: "Para cada afirmación sobre Azure AI Content Safety, selecciona Yes si es verdadera.\n1) Prompt Shields está diseñado específicamente para detectar intentos de 'jailbreak' e inyección de instrucciones maliciosas (prompt injection).\n2) Content Safety solo puede analizar texto; no tiene capacidad de moderar imágenes.\n3) Es posible configurar distintos umbrales de severidad para diferentes categorías de daño (por ejemplo, más estricto para contenido sexual que para violencia).",
    multiple: true,
    options: [
      { text: "1) Yes", correct: true, explanation: "Prompt Shields es una capacidad específica de Content Safety orientada a detectar y bloquear intentos de manipular al modelo mediante jailbreaks o inyecciones de prompt, incluyendo ataques indirectos desde documentos." },
      { text: "2) No", correct: true, explanation: "Content Safety puede moderar tanto texto como imágenes, detectando contenido dañino en ambos tipos de medios." },
      { text: "3) Yes", correct: true, explanation: "Content Safety permite configurar umbrales de severidad independientes por categoría de daño, adaptando la sensibilidad del filtro según el riesgo de cada categoría para el caso de uso." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/content-safety/overview"
  },
  {
    domain: "Dominio 2 - Content Safety",
    text: "Una empresa despliega un modelo generativo en Foundry para un chatbot educativo dirigido a menores de edad. ¿Qué configuración de Content Safety es la más apropiada?",
    multiple: false,
    options: [
      { text: "Desactivar todos los filtros para maximizar la creatividad de las respuestas", correct: false, explanation: "Desactivar los filtros aumenta el riesgo de exponer a los usuarios (en este caso menores) a contenido dañino, lo cual contradice las prácticas de IA responsable." },
      { text: "Configurar umbrales de severidad más estrictos (más bajos) en todas las categorías de daño relevantes, dado el público sensible", correct: true, explanation: "Para audiencias sensibles como menores, se recomienda configurar umbrales de severidad más bajos (más estrictos), bloqueando contenido incluso de severidad moderada." },
      { text: "Aplicar Content Safety únicamente a las entradas del usuario, nunca a las respuestas del modelo", correct: false, explanation: "Es recomendable aplicar la moderación tanto a las entradas como a las salidas del modelo, ya que el modelo también podría generar contenido inapropiado por sí mismo." },
      { text: "Usar Content Safety solo si el modelo desplegado es de código abierto", correct: false, explanation: "Content Safety es aplicable independientemente del proveedor u origen del modelo desplegado en Foundry." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/content-safety/overview"
  },
  {
    domain: "Dominio 2 - Content Safety",
    text: "¿Qué escenario describe mejor un ataque de 'prompt injection indirecto' que Prompt Shields busca mitigar?",
    multiple: false,
    options: [
      { text: "Un usuario escribe directamente en el chat: 'ignora tus instrucciones anteriores'", correct: false, explanation: "Esto es un ejemplo de inyección directa (jailbreak directo), no indirecta, ya que proviene explícitamente del usuario en el chat." },
      { text: "Un documento externo que el modelo procesa como parte de una tarea de RAG contiene texto oculto con instrucciones diseñadas para manipular el comportamiento del modelo", correct: true, explanation: "La inyección indirecta ocurre cuando instrucciones maliciosas están incrustadas en contenido externo (documentos, páginas web) que el modelo procesa, sin que el usuario las haya escrito directamente." },
      { text: "Un usuario pregunta por el clima de mañana", correct: false, explanation: "Esta es una consulta normal y legítima, sin ninguna intención de manipulación del modelo." },
      { text: "Un desarrollador ajusta el parámetro temperature a 0.9", correct: false, explanation: "Ajustar un parámetro de inferencia como temperature no constituye un ataque de inyección de prompt." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/content-safety/concepts/jailbreak-detection"
  },

  /* ══════════════════════════════════════════════════════════════════
     DOMINIO 2 · Azure AI Language (servicios aplicados)
  ══════════════════════════════════════════════════════════════════ */
  {
    domain: "Dominio 2 - Azure AI Language",
    text: "Tienes una app en Python que recolecta comentarios cortos de retroalimentación de clientes. Necesitas obtener una etiqueta de sentimiento y puntajes de confianza positivo, neutral y negativo para cada comentario. La solución debe evitar entrenar un modelo personalizado. ¿Qué función de Azure AI Language debe llamar la app?",
    multiple: false,
    options: [
      { text: "Análisis de sentimiento (Sentiment analysis)", correct: true, explanation: "El análisis de sentimiento preentrenado de Azure AI Language devuelve directamente una etiqueta (positivo/negativo/neutral/mixto) junto con puntajes de confianza, sin requerir entrenamiento personalizado." },
      { text: "Detección de PII", correct: false, explanation: "La detección de PII identifica información personal sensible, no evalúa el sentimiento del texto." },
      { text: "Detección de idioma", correct: false, explanation: "La detección de idioma identifica en qué idioma está escrito el comentario, no su sentimiento." },
      { text: "Extracción de frases clave", correct: false, explanation: "La extracción de frases clave identifica los conceptos principales del texto, pero no calcula puntajes de sentimiento." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/language-service/sentiment-opinion-mining/overview"
  },
  {
    domain: "Dominio 2 - Azure AI Language",
    text: "Una empresa de salud necesita anonimizar automáticamente los nombres de pacientes y números de historia clínica en transcripciones de texto antes de compartirlas con un equipo de análisis externo. ¿Qué función de Azure AI Language es la más adecuada?",
    multiple: false,
    options: [
      { text: "Detección y redacción de PII (Personally Identifiable Information)", correct: true, explanation: "La detección de PII identifica categorías de información sensible como nombres e identificadores, y puede generar automáticamente una versión del texto con esa información redactada/enmascarada." },
      { text: "Extracción de frases clave", correct: false, explanation: "La extracción de frases clave identifica conceptos importantes del texto, pero no detecta ni redacta información personal sensible." },
      { text: "Análisis de sentimiento", correct: false, explanation: "El análisis de sentimiento evalúa la polaridad emocional del texto, no identifica ni protege información personal." },
      { text: "Traducción de documentos", correct: false, explanation: "La traducción convierte el texto a otro idioma; no está diseñada para anonimizar información sensible." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/language-service/personally-identifiable-information/overview"
  },
  {
    domain: "Dominio 2 - Azure AI Language",
    text: "¿Qué servicio de Azure AI Language se debe usar para construir un bot que responda preguntas frecuentes de soporte técnico a partir de una base de conocimiento de preguntas y respuestas predefinidas, con control total sobre las respuestas exactas que se entregan?",
    multiple: false,
    options: [
      { text: "Question Answering (dentro de Azure AI Language)", correct: true, explanation: "Question Answering permite crear una base de conocimiento de pares pregunta-respuesta curados, devolviendo respuestas exactas y controladas en lugar de texto generado libremente." },
      { text: "Análisis de sentimiento", correct: false, explanation: "El análisis de sentimiento no está diseñado para responder preguntas de soporte, solo evalúa la polaridad emocional del texto." },
      { text: "Reconocimiento de entidades personalizado", correct: false, explanation: "El NER personalizado extrae entidades específicas del texto, no gestiona una base de conocimiento de preguntas y respuestas." },
      { text: "Un modelo generativo sin ningún tipo de fundamentación (grounding)", correct: false, explanation: "Un modelo puramente generativo sin fundamentación puede alucinar respuestas y no ofrece el control exacto sobre las respuestas que Question Answering sí proporciona." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/language-service/question-answering/overview"
  },
  {
    domain: "Dominio 2 - Azure AI Language",
    text: "Para cada afirmación sobre Azure AI Translator, selecciona Yes si es verdadera.\n1) Azure AI Translator puede detectar automáticamente el idioma de origen del texto si no se especifica.\n2) Azure AI Translator solo admite la traducción entre inglés y español; ningún otro par de idiomas.\n3) La traducción de documentos puede preservar el formato original del archivo (como un Word o PDF) durante el proceso.",
    multiple: true,
    options: [
      { text: "1) Yes", correct: true, explanation: "Azure AI Translator puede identificar automáticamente el idioma de origen del texto cuando no se especifica explícitamente." },
      { text: "2) No", correct: true, explanation: "Azure AI Translator soporta docenas de idiomas y numerosas combinaciones de pares de traducción, no está limitado únicamente a inglés-español." },
      { text: "3) Yes", correct: true, explanation: "La función de traducción de documentos de Azure AI Translator está diseñada para preservar el formato original del documento mientras traduce su contenido." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/translator/translator-overview"
  },
  {
    domain: "Dominio 2 - Azure AI Language",
    text: "Un equipo de e-commerce quiere clasificar automáticamente tickets de soporte entrantes en categorías personalizadas como 'problema de envío', 'producto defectuoso' o 'consulta de facturación', específicas de su negocio. ¿Qué capacidad de Azure AI Language deben usar?",
    multiple: false,
    options: [
      { text: "Clasificación de texto personalizada (Custom text classification)", correct: true, explanation: "La clasificación de texto personalizada permite entrenar un modelo con las categorías específicas del negocio, algo que las categorías genéricas predefinidas no cubrirían." },
      { text: "Detección de idioma", correct: false, explanation: "La detección de idioma identifica el idioma del texto, no clasifica el contenido en categorías de negocio personalizadas." },
      { text: "Análisis de opiniones (opinion mining)", correct: false, explanation: "El análisis de opiniones se enfoca en identificar sentimientos hacia aspectos específicos de un producto, no en clasificar tickets en categorías de negocio." },
      { text: "Traducción de texto", correct: false, explanation: "La traducción convierte el texto a otro idioma, no lo clasifica en categorías personalizadas." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/language-service/custom-text-classification/overview"
  },
  {
    domain: "Dominio 2 - Azure AI Language",
    text: "¿Qué diferencia principal existe entre 'análisis de sentimiento' y 'minería de opiniones' (opinion mining) en Azure AI Language?",
    multiple: false,
    options: [
      { text: "El análisis de sentimiento evalúa la polaridad general de un texto, mientras que la minería de opiniones identifica el sentimiento hacia aspectos específicos mencionados dentro del texto (por ejemplo, 'la pantalla' o 'la batería' de un producto)", correct: true, explanation: "La minería de opiniones (también llamada análisis de sentimiento basado en aspectos) desglosa el sentimiento por elementos específicos mencionados, a diferencia del análisis de sentimiento general que da una única polaridad para todo el texto." },
      { text: "No hay ninguna diferencia; son el mismo servicio con nombres distintos", correct: false, explanation: "Aunque están relacionados y la minería de opiniones se activa como una opción dentro del análisis de sentimiento, ofrecen niveles de detalle distintos." },
      { text: "La minería de opiniones solo funciona con texto en inglés", correct: false, explanation: "La minería de opiniones soporta múltiples idiomas, no está restringida únicamente al inglés." },
      { text: "El análisis de sentimiento requiere entrenar un modelo personalizado; la minería de opiniones no", correct: false, explanation: "Ambas capacidades están disponibles como funciones preentrenadas del servicio, sin requerir entrenamiento personalizado." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/language-service/sentiment-opinion-mining/overview"
  },

  /* ══════════════════════════════════════════════════════════════════
     DOMINIO 2 · Azure AI Vision / Custom Vision / Face aplicados
  ══════════════════════════════════════════════════════════════════ */
  {
    domain: "Dominio 2 - Azure AI Vision Aplicado",
    text: "Una tienda minorista quiere contar automáticamente cuántas personas entran a la tienda cada hora usando cámaras de video, identificando cada persona individual con un cuadro delimitador en cada fotograma. ¿Qué servicio y capacidad de Azure AI son los más apropiados?",
    multiple: false,
    options: [
      { text: "Azure AI Vision, usando detección de objetos para identificar y contar personas en cada fotograma", correct: true, explanation: "La detección de objetos de Azure AI Vision puede identificar múltiples instancias de una clase (como 'persona') con sus respectivos cuadros delimitadores en cada imagen o fotograma de video." },
      { text: "Azure AI Document Intelligence", correct: false, explanation: "Document Intelligence está diseñado para extraer datos de documentos, no para analizar video o contar personas en imágenes." },
      { text: "Azure AI Language, usando reconocimiento de entidades", correct: false, explanation: "Azure AI Language procesa texto, no imágenes ni video, por lo que no es aplicable a este escenario." },
      { text: "Azure AI Speech, usando reconocimiento de voz", correct: false, explanation: "Azure AI Speech procesa audio, no tiene relación con el conteo de personas en video." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/computer-vision/overview-object-detection"
  },
  {
    domain: "Dominio 2 - Azure AI Vision Aplicado",
    text: "Un banco quiere digitalizar formularios de apertura de cuenta completados a mano, extrayendo automáticamente campos como 'nombre', 'RUT/ID' y 'firma presente (sí/no)', usando un modelo entrenado con ejemplos de sus propios formularios. ¿Qué debe usar?",
    multiple: false,
    options: [
      { text: "Azure AI Document Intelligence con un modelo personalizado (custom model) entrenado con formularios de ejemplo etiquetados", correct: true, explanation: "Document Intelligence permite entrenar modelos personalizados a partir de documentos de ejemplo etiquetados, extrayendo campos específicos como los definidos por el banco, incluidos formularios manuscritos." },
      { text: "El modelo prebuilt-receipt (recibos) sin ninguna personalización", correct: false, explanation: "El modelo prebuilt de recibos está optimizado para extraer campos típicos de boletas/recibos, no para formularios bancarios personalizados con campos distintos." },
      { text: "Azure AI Custom Vision con clasificación de imágenes", correct: false, explanation: "Custom Vision clasifica o detecta objetos en imágenes, pero no extrae ni estructura campos de texto de formularios." },
      { text: "Face API", correct: false, explanation: "Face API se especializa en análisis facial, no en extracción de campos de formularios." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/document-intelligence/train/custom-model"
  },
  {
    domain: "Dominio 2 - Azure AI Vision Aplicado",
    text: "Para cada afirmación sobre Azure AI Custom Vision, selecciona Yes si es verdadera.\n1) Custom Vision permite exportar un modelo entrenado para ejecutarlo sin conexión (offline) en un dispositivo edge.\n2) Es necesario contar con miles de imágenes etiquetadas por cada categoría para poder entrenar un modelo mínimamente funcional.\n3) Custom Vision puede usarse tanto para clasificación de imágenes como para detección de objetos.",
    multiple: true,
    options: [
      { text: "1) Yes", correct: true, explanation: "Custom Vision permite exportar modelos entrenados en formatos compatibles con dispositivos edge (como ONNX, TensorFlow o CoreML) para inferencia sin conexión." },
      { text: "2) No", correct: true, explanation: "Custom Vision puede producir modelos funcionales con un número relativamente pequeño de imágenes por categoría (decenas), aunque más ejemplos y variedad generalmente mejoran la precisión." },
      { text: "3) Yes", correct: true, explanation: "Custom Vision soporta dos tipos de proyectos: clasificación de imágenes (etiqueta a nivel de imagen completa) y detección de objetos (ubicación de múltiples objetos)." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/custom-vision-service/overview"
  },
  {
    domain: "Dominio 2 - Azure AI Vision Aplicado",
    text: "¿Qué caso de uso es más apropiado para la función de 'recorte inteligente' (smart cropping) de Azure AI Vision?",
    multiple: false,
    options: [
      { text: "Generar automáticamente una miniatura de una imagen que conserve el área de mayor interés visual, sin importar la relación de aspecto solicitada", correct: true, explanation: "El recorte inteligente analiza la imagen para identificar la región de mayor interés y genera recortes que la preservan, útil para adaptar imágenes a distintos tamaños de miniatura." },
      { text: "Detectar el idioma del texto contenido en la imagen", correct: false, explanation: "La detección de idioma en imágenes corresponde a una capacidad relacionada con OCR, no con recorte inteligente." },
      { text: "Comparar dos rostros para verificar si pertenecen a la misma persona", correct: false, explanation: "Esa es una capacidad de Face API (verificación facial), no de recorte inteligente." },
      { text: "Entrenar un modelo personalizado de clasificación", correct: false, explanation: "El recorte inteligente es una función de análisis de imagen preentrenada, no un proceso de entrenamiento de modelos personalizados." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/computer-vision/concept-generate-thumbnails"
  },
  {
    domain: "Dominio 2 - Azure AI Vision Aplicado",
    text: "Una empresa de moderación de contenido en redes sociales necesita detectar automáticamente cuándo una imagen subida por un usuario contiene texto ofensivo superpuesto (como un meme con insultos escritos sobre la foto). ¿Qué combinación de servicios de Azure AI es la más adecuada?",
    multiple: false,
    options: [
      { text: "OCR de Azure AI Vision para extraer el texto de la imagen, combinado con Azure AI Content Safety (o análisis de texto) para evaluar si ese texto extraído es ofensivo", correct: true, explanation: "Primero se debe extraer el texto embebido en la imagen mediante OCR, y luego evaluar ese texto extraído con un servicio de moderación de contenido para determinar si es ofensivo." },
      { text: "Únicamente Face API, ya que puede detectar automáticamente el contenido ofensivo en cualquier imagen", correct: false, explanation: "Face API está especializada en análisis de rostros (detección, atributos), no en extraer ni evaluar texto superpuesto en imágenes." },
      { text: "Únicamente Azure AI Translator", correct: false, explanation: "El Traductor convierte texto entre idiomas; no extrae texto de imágenes ni evalúa si es ofensivo." },
      { text: "Únicamente Custom Vision entrenado para detectar 'memes'", correct: false, explanation: "Custom Vision podría clasificar el tipo de imagen, pero no está diseñado para leer y evaluar el contenido textual superpuesto de forma nativa." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/computer-vision/overview-ocr"
  },

  /* ══════════════════════════════════════════════════════════════════
     DOMINIO 2 · Azure AI Speech
  ══════════════════════════════════════════════════════════════════ */
  {
    domain: "Dominio 2 - Azure AI Speech",
    text: "Tu app usa Azure AI Speech para transcribir llamadas de soporte en tiempo real y necesitas identificar qué hablante dijo cada frase durante una conversación entre dos agentes y un cliente. ¿Qué característica debes habilitar?",
    multiple: false,
    options: [
      { text: "Speaker diarization (diarización de hablantes)", correct: true, explanation: "La diarización de hablantes segmenta el audio transcrito y etiqueta cada fragmento de texto con el hablante correspondiente, permitiendo distinguir quién dijo qué en una conversación con múltiples participantes." },
      { text: "Pronunciation assessment", correct: false, explanation: "La evaluación de pronunciación mide qué tan bien un hablante pronuncia palabras respecto a un estándar, no identifica quién habla." },
      { text: "Custom neural voice", correct: false, explanation: "Custom Neural Voice se usa para crear una voz sintética personalizada (texto a voz), no para identificar hablantes en una transcripción." },
      { text: "Detección de idioma", correct: false, explanation: "La detección de idioma identifica el idioma hablado, no distingue entre distintos hablantes en la misma conversación." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/speech-service/get-started-stt-diarization"
  },
  {
    domain: "Dominio 2 - Azure AI Speech",
    text: "Una app de aprendizaje de idiomas necesita evaluar qué tan bien un estudiante pronuncia frases en un idioma extranjero y darle retroalimentación sobre precisión, fluidez y entonación. ¿Qué función de Azure AI Speech deben usar?",
    multiple: false,
    options: [
      { text: "Pronunciation Assessment", correct: true, explanation: "Pronunciation Assessment evalúa la pronunciación del hablante comparándola contra un texto de referencia, proporcionando puntajes de precisión, fluidez, entonación y exhaustividad." },
      { text: "Speaker diarization", correct: false, explanation: "La diarización identifica quién habla en un audio con múltiples participantes, no evalúa la calidad de la pronunciación." },
      { text: "Text to Speech estándar", correct: false, explanation: "Text to Speech convierte texto en audio; no evalúa la pronunciación de un hablante humano." },
      { text: "Traducción de voz en tiempo real", correct: false, explanation: "La traducción de voz convierte el habla de un idioma a otro, pero no proporciona una evaluación de la calidad de pronunciación del estudiante." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/speech-service/pronunciation-assessment-tool"
  },
  {
    domain: "Dominio 2 - Azure AI Speech",
    text: "Para cada afirmación sobre Azure AI Speech, selecciona Yes si es verdadera.\n1) Custom Neural Voice permite crear una voz sintética única que suena similar a la voz de un locutor específico, entrenada con grabaciones de esa persona.\n2) El servicio de reconocimiento de voz (Speech to Text) solo puede procesar audio pregrabado; no admite transcripción en streaming/tiempo real.\n3) Azure AI Speech puede traducir voz hablada en un idioma directamente a texto en otro idioma diferente.",
    multiple: true,
    options: [
      { text: "1) Yes", correct: true, explanation: "Custom Neural Voice permite entrenar un modelo de voz sintética personalizado usando muestras de audio de un locutor específico, replicando características de su voz." },
      { text: "2) No", correct: true, explanation: "Azure AI Speech soporta transcripción tanto de audio pregrabado como en streaming/tiempo real, siendo esta última clave para escenarios como subtitulado en vivo." },
      { text: "3) Yes", correct: true, explanation: "El servicio de traducción de voz de Azure AI Speech puede tomar audio hablado en un idioma y producir directamente texto (o incluso audio) traducido a otro idioma." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/speech-service/overview"
  },
  {
    domain: "Dominio 2 - Azure AI Speech",
    text: "Una empresa de call centers necesita detectar automáticamente palabras clave sensibles (como 'cancelar cuenta' o 'reclamo legal') durante llamadas en vivo, para alertar a un supervisor en tiempo real. ¿Qué combinación de funcionalidades de Azure AI Speech es más adecuada?",
    multiple: false,
    options: [
      { text: "Speech to Text en modo streaming en tiempo real, combinado con búsqueda de palabras clave sobre el texto transcrito a medida que llega", correct: true, explanation: "Al usar reconocimiento de voz en streaming, la transcripción se genera de forma continua e incremental, permitiendo analizar el texto resultante en tiempo real para detectar frases o palabras clave y generar alertas inmediatas." },
      { text: "Text to Speech con una voz neuronal personalizada", correct: false, explanation: "Text to Speech convierte texto en audio; no es útil para detectar palabras clave en llamadas entrantes." },
      { text: "Pronunciation Assessment", correct: false, explanation: "Esta función evalúa la calidad de pronunciación de un hablante contra un texto de referencia, no está diseñada para detección de palabras clave en llamadas de soporte." },
      { text: "Solo el reconocimiento de voz en modo por lotes (batch), procesado 24 horas después de la llamada", correct: false, explanation: "El procesamiento por lotes no permite alertas en tiempo real durante la llamada, ya que introduce una demora significativa." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/speech-service/speech-to-text"
  },

  /* ══════════════════════════════════════════════════════════════════
     DOMINIO 2 · Document Intelligence
  ══════════════════════════════════════════════════════════════════ */
  {
    domain: "Dominio 2 - Document Intelligence",
    text: "Para cada afirmación sobre Azure AI Document Intelligence, selecciona Yes si es verdadera.\n1) El modelo prebuilt-invoice puede extraer campos como número de factura y total sin necesidad de entrenamiento personalizado.\n2) Un modelo personalizado (custom model) puede entrenarse satisfactoriamente con un único documento de ejemplo, sin afectar su precisión.\n3) Document Intelligence puede procesar tanto documentos escaneados (imagen) como PDFs digitales nativos.",
    multiple: true,
    options: [
      { text: "1) Yes", correct: true, explanation: "El modelo prebuilt-invoice está preentrenado para reconocer campos comunes de facturas (número, fecha, total, proveedor) sin requerir entrenamiento adicional." },
      { text: "2) No", correct: true, explanation: "Aunque técnicamente se puede intentar entrenar con un solo documento, Microsoft recomienda al menos varios ejemplos (típicamente 5 o más) representativos para lograr una precisión aceptable." },
      { text: "3) Yes", correct: true, explanation: "Document Intelligence puede procesar tanto imágenes escaneadas como archivos PDF digitales nativos, extrayendo texto y estructura en ambos casos." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/document-intelligence/overview"
  },
  {
    domain: "Dominio 2 - Document Intelligence",
    text: "Una empresa de logística procesa miles de guías de despacho con un formato de diseño (layout) que varía ligeramente entre proveedores distintos, pero siempre contiene tablas con productos y cantidades. ¿Qué modelo de Document Intelligence es el más apropiado para extraer estas tablas sin entrenar un modelo personalizado?",
    multiple: false,
    options: [
      { text: "El modelo de diseño general (prebuilt-layout), que detecta estructuras como tablas, encabezados y pares clave-valor en cualquier documento", correct: true, explanation: "El modelo prebuilt-layout está diseñado para extraer estructura general de documentos (texto, tablas, pares clave-valor) sin necesidad de entrenamiento, siendo ideal cuando el diseño varía pero se necesita extraer tablas de forma genérica." },
      { text: "El modelo prebuilt-receipt, específico para boletas de compra minoristas", correct: false, explanation: "El modelo de recibos está optimizado para el formato típico de boletas de tiendas, no para guías de despacho logísticas con estructuras de tabla variables." },
      { text: "El modelo prebuilt-idDocument, específico para documentos de identidad", correct: false, explanation: "Este modelo está diseñado para extraer campos de documentos de identificación (pasaportes, licencias), no aplica a guías de despacho." },
      { text: "Face API", correct: false, explanation: "Face API se especializa en análisis facial y no tiene relación con la extracción de datos de documentos de logística." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/document-intelligence/prebuilt/layout"
  },
  {
    domain: "Dominio 2 - Document Intelligence",
    text: "¿Qué tipo de modelo de Document Intelligence se recomienda cuando los documentos a procesar tienen un formato consistente y fijo definido por la propia empresa (por ejemplo, un formulario interno propietario), y se requiere extraer campos muy específicos no cubiertos por ningún modelo prediseñado?",
    multiple: false,
    options: [
      { text: "Un modelo personalizado de extracción (custom extraction model), entrenado con ejemplos etiquetados del formulario propio de la empresa", correct: true, explanation: "Cuando el formato es específico de la organización y los campos no coinciden con ningún modelo prebuilt disponible, se debe entrenar un modelo personalizado con ejemplos representativos etiquetados de ese formulario." },
      { text: "El modelo prebuilt-invoice", correct: false, explanation: "El modelo prebuilt de facturas está optimizado para campos típicos de facturación estándar, no para un formulario interno propietario con campos distintos." },
      { text: "El modelo prebuilt-businessCard", correct: false, explanation: "Este modelo está diseñado específicamente para extraer datos de tarjetas de presentación, no para formularios internos personalizados." },
      { text: "Azure AI Custom Vision", correct: false, explanation: "Custom Vision es para clasificación/detección de objetos en imágenes generales, no está optimizado para extracción estructurada de campos de formularios." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/document-intelligence/train/custom-model"
  },
  {
    domain: "Dominio 2 - Document Intelligence",
    text: "¿Cuál es la diferencia principal entre el modelo 'prebuilt-read' y el modelo 'prebuilt-layout' de Document Intelligence?",
    multiple: false,
    options: [
      { text: "prebuilt-read extrae principalmente texto plano y líneas del documento, mientras que prebuilt-layout además identifica estructura como tablas, encabezados y pares clave-valor", correct: true, explanation: "El modelo 'read' se enfoca en extracción de texto (similar a OCR), mientras que 'layout' añade la detección de estructura del documento, incluyendo tablas y relaciones clave-valor." },
      { text: "prebuilt-read solo funciona con documentos en inglés, mientras que prebuilt-layout admite todos los idiomas", correct: false, explanation: "Ambos modelos soportan múltiples idiomas; el idioma no es la diferencia principal entre ambos." },
      { text: "prebuilt-layout requiere entrenamiento previo con documentos de ejemplo, mientras que prebuilt-read no lo requiere", correct: false, explanation: "Ambos son modelos preentrenados (prebuilt) que no requieren entrenamiento adicional por parte del usuario." },
      { text: "No existe ninguna diferencia real entre ambos modelos", correct: false, explanation: "Sí existe una diferencia clara en el nivel de estructura que cada modelo extrae del documento." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/document-intelligence/overview"
  },

  /* ══════════════════════════════════════════════════════════════════
     DOMINIO 2 · Azure AI Search / RAG
  ══════════════════════════════════════════════════════════════════ */
  {
    domain: "Dominio 2 - RAG / Azure AI Search",
    text: "Necesitas construir una solución de Retrieval-Augmented Generation (RAG) sobre documentos internos de la empresa usando Microsoft Foundry, minimizando alucinaciones y manteniendo trazabilidad de las fuentes citadas. Además del modelo generativo, ¿qué componente es esencial?",
    multiple: false,
    options: [
      { text: "Un servicio de Text to Speech", correct: false, explanation: "Text to Speech convierte texto en audio; no tiene relación con la recuperación de información relevante para fundamentar respuestas." },
      { text: "Un índice de búsqueda vectorial/semántica (como Azure AI Search) que recupere los fragmentos de documentos relevantes antes de que el modelo genere la respuesta", correct: true, explanation: "El patrón RAG combina un componente de recuperación (como Azure AI Search con búsqueda vectorial) que encuentra los fragmentos relevantes, los cuales se inyectan como contexto en el prompt para fundamentar la respuesta del modelo generativo." },
      { text: "Un proceso de fine-tuning completo del modelo sobre todos los documentos", correct: false, explanation: "El fine-tuning completo es costoso, requiere reentrenamiento frecuente ante cambios de documentos, y no es el enfoque estándar recomendado para fundamentar respuestas con documentos dinámicos; RAG es más eficiente para este propósito." },
      { text: "Únicamente Content Safety configurado en modo estricto", correct: false, explanation: "Content Safety modera contenido dañino, pero no recupera ni fundamenta información factual de los documentos internos." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/use-your-data"
  },
  {
    domain: "Dominio 2 - RAG / Azure AI Search",
    text: "En una arquitectura RAG con Azure AI Search y Microsoft Foundry, ¿qué representa un 'chunk' (fragmento) de documento?",
    multiple: false,
    options: [
      { text: "Una porción del documento original dividida en un tamaño manejable, indexada de forma independiente para permitir búsquedas más precisas y relevantes", correct: true, explanation: "Los documentos largos se dividen en fragmentos (chunks) más pequeños antes de indexarlos, lo que permite recuperar solo las partes más relevantes para una consulta específica, en lugar de documentos completos extensos." },
      { text: "El resultado final generado por el modelo de lenguaje", correct: false, explanation: "Esto describe la respuesta generada por el modelo, no la unidad de indexación de documentos usada en la etapa de recuperación." },
      { text: "Un tipo de modelo de embeddings específico de Microsoft", correct: false, explanation: "'Chunk' no es un tipo de modelo, sino una unidad de segmentación de contenido dentro del proceso de indexación." },
      { text: "Un parámetro de configuración de Content Safety", correct: false, explanation: "No está relacionado con Content Safety; es un concepto del proceso de indexación y recuperación de documentos en RAG." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/search/vector-search-how-to-chunk-documents"
  },
  {
    domain: "Dominio 2 - RAG / Azure AI Search",
    text: "Para cada afirmación sobre búsqueda vectorial en Azure AI Search aplicada a RAG, selecciona Yes si es verdadera.\n1) La búsqueda vectorial compara la similitud semántica entre la consulta y los documentos usando representaciones numéricas (embeddings), no solo coincidencias exactas de palabras clave.\n2) La búsqueda híbrida combina búsqueda por palabras clave (keyword) y búsqueda vectorial para mejorar la relevancia de los resultados.\n3) Una vez indexados los documentos en Azure AI Search, es imposible actualizar o agregar nuevos documentos sin recrear todo el índice desde cero.",
    multiple: true,
    options: [
      { text: "1) Yes", correct: true, explanation: "La búsqueda vectorial utiliza embeddings para capturar el significado semántico del texto, permitiendo encontrar contenido relevante incluso cuando las palabras exactas no coinciden." },
      { text: "2) Yes", correct: true, explanation: "La búsqueda híbrida combina la precisión léxica de la búsqueda por palabras clave con la comprensión semántica de la búsqueda vectorial, mejorando la calidad de los resultados recuperados." },
      { text: "3) No", correct: true, explanation: "Azure AI Search permite agregar, actualizar o eliminar documentos de un índice existente de forma incremental, sin necesidad de recrear el índice completo." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/search/vector-search-overview"
  },
  {
    domain: "Dominio 2 - RAG / Azure AI Search",
    text: "¿Por qué RAG (Retrieval-Augmented Generation) generalmente reduce las alucinaciones en comparación con usar un modelo generativo puro sin ningún contexto adicional?",
    multiple: false,
    options: [
      { text: "Porque fundamenta las respuestas del modelo en información específica y verificable recuperada de una fuente confiable, en lugar de depender únicamente del conocimiento general aprendido durante el entrenamiento del modelo", correct: true, explanation: "Al proporcionar contexto recuperado y relevante como parte del prompt, el modelo tiene información concreta en la cual basar su respuesta, reduciendo la necesidad de 'inventar' datos que no conoce con certeza." },
      { text: "Porque RAG elimina por completo la posibilidad de que el modelo genere texto incorrecto", correct: false, explanation: "RAG reduce significativamente el riesgo de alucinaciones, pero no las elimina por completo; el modelo aún puede malinterpretar o combinar incorrectamente la información recuperada." },
      { text: "Porque RAG reemplaza completamente al modelo generativo por un motor de búsqueda simple", correct: false, explanation: "RAG combina recuperación de información con generación de texto; el modelo generativo sigue siendo responsable de sintetizar la respuesta final." },
      { text: "Porque RAG aumenta automáticamente el valor de 'temperature' del modelo", correct: false, explanation: "RAG no está relacionado con ajustar el parámetro de temperature; su efecto es proporcionar contexto adicional relevante, no modificar la aleatoriedad de la generación." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/use-your-data"
  },

  /* ══════════════════════════════════════════════════════════════════
     DOMINIO 2 · Agentes en Microsoft Foundry
  ══════════════════════════════════════════════════════════════════ */
  {
    domain: "Dominio 2 - Foundry Agent Service",
    text: "¿Qué es un 'agente' en el contexto de Microsoft Foundry Agent Service?",
    multiple: false,
    options: [
      { text: "Un modelo generativo configurado con instrucciones, herramientas (como funciones o recuperación de datos) y la capacidad de razonar en múltiples pasos para completar una tarea de forma más autónoma", correct: true, explanation: "Un agente combina un modelo de lenguaje con instrucciones específicas y acceso a herramientas (function calling, búsqueda de archivos, código, etc.), permitiéndole planificar y ejecutar tareas complejas de forma más autónoma que una simple llamada de chat." },
      { text: "Un tipo de máquina virtual dedicada para hospedar modelos de Custom Vision", correct: false, explanation: "Esto describe infraestructura de cómputo, no el concepto de agente dentro de Foundry Agent Service." },
      { text: "Un usuario humano que supervisa las respuestas del modelo en tiempo real", correct: false, explanation: "Un agente en Foundry es un componente de software automatizado, no una persona humana supervisando manualmente." },
      { text: "Un servicio exclusivo para la generación de imágenes", correct: false, explanation: "Los agentes de Foundry no están limitados a generación de imágenes; pueden orquestar múltiples tipos de herramientas y tareas." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-foundry/agents/overview"
  },
  {
    domain: "Dominio 2 - Foundry Agent Service",
    text: "Para cada afirmación sobre el Foundry Agent Service, selecciona Yes si es verdadera.\n1) Un agente puede tener acceso a múltiples herramientas simultáneamente, como búsqueda de archivos, ejecución de código y llamado a funciones personalizadas.\n2) El Foundry Agent Service permite que un agente invoque herramientas (function calling) sin que el desarrollador defina previamente el esquema de los parámetros de la función.\n3) Es posible dar a un agente instrucciones persistentes (como un rol y objetivo) que se apliquen de forma consistente a lo largo de múltiples conversaciones.",
    multiple: true,
    options: [
      { text: "1) Yes", correct: true, explanation: "Foundry Agent Service permite asociar múltiples herramientas a un mismo agente, incluyendo interpretación de código, búsqueda en archivos/índices y funciones personalizadas definidas por el desarrollador." },
      { text: "2) No", correct: true, explanation: "El desarrollador debe definir explícitamente el esquema (nombre, descripción y parámetros) de cada función para que el agente sepa cómo y cuándo invocarla correctamente." },
      { text: "3) Yes", correct: true, explanation: "Se pueden configurar instrucciones persistentes a nivel de agente (similares a un system message extendido) que definen su rol y comportamiento de forma consistente en distintas conversaciones." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-foundry/agents/overview"
  },
  {
    domain: "Dominio 2 - Foundry Agent Service",
    text: "Una empresa quiere que un agente de Foundry pueda ejecutar cálculos matemáticos complejos y generar gráficos a partir de datos que el usuario proporciona en la conversación. ¿Qué herramienta del Agent Service es la más adecuada para este escenario?",
    multiple: false,
    options: [
      { text: "Code Interpreter", correct: true, explanation: "Code Interpreter permite que el agente escriba y ejecute código (por ejemplo, Python) en un entorno aislado para realizar cálculos, análisis de datos y generar visualizaciones como gráficos." },
      { text: "File search únicamente", correct: false, explanation: "File search está diseñada para recuperar información relevante de documentos indexados, no para ejecutar cálculos o generar gráficos dinámicamente." },
      { text: "Content Safety", correct: false, explanation: "Content Safety modera contenido dañino; no tiene capacidad de ejecutar código ni realizar cálculos matemáticos." },
      { text: "Custom Neural Voice", correct: false, explanation: "Custom Neural Voice genera voz sintética personalizada; no está relacionado con cálculos matemáticos ni generación de gráficos." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-foundry/agents/how-to/tools/code-interpreter"
  },

  /* ══════════════════════════════════════════════════════════════════
     DOMINIO 2 · Evaluación, monitoreo y operaciones (LLMOps)
  ══════════════════════════════════════════════════════════════════ */
  {
    domain: "Dominio 2 - Evaluación y Operaciones",
    text: "Antes de desplegar en producción una nueva versión de un prompt para un asistente generativo, un equipo quiere medir de forma sistemática y cuantitativa métricas como 'fundamentación' (groundedness), 'relevancia' y 'coherencia' de las respuestas. ¿Qué herramienta de Microsoft Foundry es la más apropiada?",
    multiple: false,
    options: [
      { text: "Las herramientas de evaluación (Evaluation) de Foundry, que permiten ejecutar evaluadores automáticos e incluso asistidos por IA sobre un conjunto de datos de prueba", correct: true, explanation: "Foundry incluye capacidades de evaluación que permiten correr métricas estandarizadas (groundedness, relevance, coherence, fluency, entre otras) sobre un conjunto de prueba, comparando versiones de prompts o modelos de forma sistemática." },
      { text: "Azure Key Vault", correct: false, explanation: "Key Vault gestiona secretos y claves de forma segura; no tiene capacidades de evaluación de calidad de respuestas generativas." },
      { text: "Azure AI Custom Vision", correct: false, explanation: "Custom Vision es para modelos de visión por computadora, no para evaluar la calidad de respuestas de texto generativo." },
      { text: "El panel de facturación de Azure", correct: false, explanation: "El panel de facturación muestra información de costos y consumo, no métricas de calidad de las respuestas del modelo." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-foundry/how-to/evaluate-generative-ai-app"
  },
  {
    domain: "Dominio 2 - Evaluación y Operaciones",
    text: "¿Qué mide específicamente la métrica de evaluación 'groundedness' (fundamentación) en una aplicación RAG construida en Foundry?",
    multiple: false,
    options: [
      { text: "Qué tan bien la respuesta generada por el modelo está respaldada por, y es consistente con, la información recuperada de las fuentes de datos proporcionadas", correct: true, explanation: "Groundedness evalúa si las afirmaciones de la respuesta del modelo pueden verificarse o rastrearse hasta el contenido fuente recuperado, identificando posibles alucinaciones no respaldadas por los datos." },
      { text: "La velocidad (latencia) con la que el modelo genera una respuesta", correct: false, explanation: "La latencia es una métrica de rendimiento operativo, no una métrica de calidad relacionada con la veracidad de la respuesta." },
      { text: "El costo en tokens de cada solicitud", correct: false, explanation: "El costo en tokens es una métrica financiera/operativa, no está relacionada con qué tan fundamentada está la respuesta en los datos fuente." },
      { text: "El idioma detectado de la respuesta generada", correct: false, explanation: "El idioma de la respuesta no tiene relación con el concepto de fundamentación (groundedness)." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-foundry/concepts/evaluation-metrics-built-in"
  },
  {
    domain: "Dominio 2 - Evaluación y Operaciones",
    text: "Para cada afirmación sobre monitoreo de aplicaciones generativas en producción con Microsoft Foundry, selecciona Yes si es verdadera.\n1) Es una buena práctica registrar (log) las solicitudes y respuestas del modelo para poder auditar su comportamiento a lo largo del tiempo.\n2) Una vez desplegado un modelo, su rendimiento y calidad de respuestas se garantiza automáticamente para siempre, sin necesidad de monitoreo continuo.\n3) El monitoreo continuo puede ayudar a detectar cuándo aumentan las tasas de contenido bloqueado por Content Safety, lo cual podría indicar un cambio en el comportamiento de los usuarios o intentos de abuso.",
    multiple: true,
    options: [
      { text: "1) Yes", correct: true, explanation: "Registrar las interacciones (con las debidas consideraciones de privacidad) permite auditar el comportamiento del sistema, identificar problemas y respaldar la responsabilidad (accountability)." },
      { text: "2) No", correct: true, explanation: "El rendimiento y la calidad no están garantizados de forma permanente: cambios en el comportamiento de los usuarios, en los datos, o incluso actualizaciones del modelo base pueden afectar la calidad, por lo que se requiere monitoreo continuo." },
      { text: "3) Yes", correct: true, explanation: "Un aumento inusual en las tasas de bloqueo de Content Safety puede ser una señal temprana de intentos de abuso, ataques de prompt injection, o cambios en el uso legítimo que ameritan investigación." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-foundry/concepts/observability"
  },
  {
    domain: "Dominio 2 - Evaluación y Operaciones",
    text: "Un equipo necesita comparar el desempeño de dos versiones distintas de un prompt (v1 y v2) para el mismo modelo, usando el mismo conjunto de preguntas de prueba, antes de decidir cuál llevar a producción. ¿Qué enfoque es el más adecuado en Microsoft Foundry?",
    multiple: false,
    options: [
      { text: "Ejecutar una evaluación (evaluation run) para cada versión del prompt sobre el mismo dataset de prueba y comparar las métricas resultantes lado a lado", correct: true, explanation: "Foundry permite ejecutar evaluaciones sistemáticas sobre un conjunto de datos de prueba fijo para cada variante del prompt, generando métricas comparables que facilitan una decisión basada en datos." },
      { text: "Preguntar manualmente a cinco compañeros de trabajo cuál versión les gusta más, sin ningún dataset de prueba estructurado", correct: false, explanation: "Aunque la retroalimentación humana puede ser un complemento útil, no sustituye una evaluación sistemática y repetible sobre un conjunto de prueba definido, que es más rigurosa y escalable." },
      { text: "Desplegar ambas versiones directamente a todos los usuarios en producción sin ninguna prueba previa", correct: false, explanation: "Desplegar sin pruebas previas expone a los usuarios finales a riesgos de baja calidad o comportamiento indeseado que debería detectarse antes con evaluaciones controladas." },
      { text: "Eliminar el system message en ambas versiones para simplificar la comparación", correct: false, explanation: "Eliminar el system message cambiaría fundamentalmente el comportamiento del asistente en ambas versiones, invalidando una comparación justa entre los prompts que se desean evaluar." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-foundry/how-to/evaluate-generative-ai-app"
  },

  /* ══════════════════════════════════════════════════════════════════
     DOMINIO 2 · Seguridad, identidad y gobernanza en Foundry
  ══════════════════════════════════════════════════════════════════ */
  {
    domain: "Dominio 2 - Seguridad y Gobernanza",
    text: "Una empresa necesita que su aplicación se autentique contra un recurso de Microsoft Foundry sin almacenar claves de API en el código fuente ni en archivos de configuración. ¿Qué mecanismo de autenticación es el más recomendado?",
    multiple: false,
    options: [
      { text: "Microsoft Entra ID (identidad administrada) para autenticación basada en tokens, en lugar de claves de API estáticas", correct: true, explanation: "El uso de identidades administradas de Microsoft Entra ID permite autenticar la aplicación sin necesidad de almacenar ni rotar manualmente claves de API, siguiendo las mejores prácticas de seguridad de Azure." },
      { text: "Escribir la clave de API directamente en el código fuente para simplificar el desarrollo", correct: false, explanation: "Almacenar claves directamente en el código fuente es una práctica insegura que expone credenciales sensibles, especialmente si el código se comparte o versiona en un repositorio." },
      { text: "Compartir la misma clave de API entre todos los desarrolladores del equipo por un canal de chat no cifrado", correct: false, explanation: "Compartir claves por canales no seguros aumenta el riesgo de exposición y filtración de credenciales sensibles." },
      { text: "Deshabilitar la autenticación en el recurso de Foundry", correct: false, explanation: "Deshabilitar la autenticación expondría el recurso sin ninguna protección, lo cual es contrario a las prácticas de seguridad recomendadas." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/how-to/managed-identity"
  },
  {
    domain: "Dominio 2 - Seguridad y Gobernanza",
    text: "Para cada afirmación sobre seguridad de red en Microsoft Foundry, selecciona Yes si es verdadera.\n1) Es posible restringir el acceso a un recurso de Foundry mediante endpoints privados (private endpoints), evitando exposición directa a internet público.\n2) Una vez que un recurso de Foundry está desplegado, no es posible modificar sus reglas de firewall o restricciones de red.\n3) El uso de una red virtual (VNet) puede ayudar a aislar el tráfico entre la aplicación y el recurso de Foundry dentro de un perímetro de red controlado.",
    multiple: true,
    options: [
      { text: "1) Yes", correct: true, explanation: "Los endpoints privados permiten que el tráfico hacia el recurso de Foundry se mantenga dentro de la red privada de Azure, sin pasar por internet público, reduciendo la superficie de ataque." },
      { text: "2) No", correct: true, explanation: "Las reglas de firewall y restricciones de red de un recurso de Foundry se pueden modificar después del despliegue según cambien los requisitos de seguridad de la organización." },
      { text: "3) Yes", correct: true, explanation: "Integrar el recurso con una red virtual (VNet) permite controlar y aislar el tráfico de red entre la aplicación cliente y el servicio, como parte de una arquitectura de seguridad de defensa en profundidad." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/cognitive-services-virtual-networks"
  },
  {
    domain: "Dominio 2 - Seguridad y Gobernanza",
    text: "Una organización quiere asegurarse de que solo ciertos miembros del equipo puedan desplegar nuevos modelos en un proyecto de Foundry, mientras que otros solo puedan consultar el playground sin realizar cambios. ¿Qué mecanismo de Azure debe usarse?",
    multiple: false,
    options: [
      { text: "Control de acceso basado en roles (RBAC), asignando roles específicos con distintos niveles de permisos a cada grupo de usuarios", correct: true, explanation: "RBAC en Azure permite asignar roles predefinidos o personalizados que otorgan distintos niveles de permisos (como administrador, colaborador o lector) a diferentes usuarios o grupos sobre un recurso o proyecto de Foundry." },
      { text: "Crear una cuenta de Azure separada para cada empleado con la misma clave de API compartida", correct: false, explanation: "Compartir la misma clave de API no permite diferenciar niveles de permisos entre usuarios ni aplicar un control granular de acceso." },
      { text: "Desactivar la autenticación multifactor para simplificar el acceso", correct: false, explanation: "Desactivar la autenticación multifactor reduce la seguridad general y no está relacionado con diferenciar permisos entre usuarios." },
      { text: "Usar Content Safety para restringir quién puede acceder al proyecto", correct: false, explanation: "Content Safety modera el contenido de las solicitudes y respuestas; no gestiona permisos de acceso de usuarios a los recursos." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/role-based-access-control/overview"
  },

  /* ══════════════════════════════════════════════════════════════════
     DOMINIO 2 · Miscelánea de completar espacio (dropdown style)
  ══════════════════════════════════════════════════════════════════ */
  {
    domain: "Dominio 2 - Foundry Fundamentos",
    text: "Completa el espacio: En Microsoft Foundry, un mensaje de sistema (system message) se usa para ___.",
    multiple: false,
    options: [
      { text: "reemplazar los controles de seguridad de Content Safety", correct: false, explanation: "El system message no reemplaza ni desactiva los controles de seguridad; Content Safety opera de forma independiente sobre entradas y salidas." },
      { text: "cambiar los datos de entrenamiento del modelo base", correct: false, explanation: "El system message no modifica los pesos ni los datos con los que el modelo fue entrenado; solo influye en el comportamiento durante la inferencia." },
      { text: "guiar el rol, el estilo y los límites de comportamiento del asistente durante la conversación", correct: true, explanation: "El system message establece instrucciones de alto nivel que guían cómo debe comportarse el modelo: su rol, tono, restricciones y alcance, aplicándose de forma consistente en la conversación." },
      { text: "evaluar las respuestas después de que fueron generadas", correct: false, explanation: "La evaluación posterior a la generación corresponde a herramientas de evaluación (Evaluation) o a Content Safety sobre la salida, no al propósito del system message." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/system-message"
  },
  {
    domain: "Dominio 1 - IA Generativa",
    text: "Completa el espacio: El proceso de 'grounding' (fundamentación) en aplicaciones de IA generativa consiste en ___.",
    multiple: false,
    options: [
      { text: "aumentar la temperatura del modelo al máximo valor posible", correct: false, explanation: "Aumentar la temperatura incrementa la aleatoriedad de las respuestas; no tiene relación con fundamentar las respuestas en datos reales." },
      { text: "basar las respuestas del modelo en información específica y verificable, típicamente recuperada de una fuente de datos externa confiable", correct: true, explanation: "El grounding conecta las respuestas generativas con datos reales y verificables (como documentos internos recuperados vía RAG), reduciendo el riesgo de alucinaciones." },
      { text: "eliminar por completo el uso de prompts del sistema", correct: false, explanation: "El grounding no elimina el uso de system messages; de hecho, suele combinarse con ellos para indicar al modelo cómo usar el contexto proporcionado." },
      { text: "convertir el modelo generativo en un modelo de clasificación de imágenes", correct: false, explanation: "El grounding no cambia el tipo de modelo ni su modalidad; es una técnica para mejorar la precisión factual de las respuestas generadas." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/use-your-data"
  },
  {
    domain: "Dominio 1 - Fundamentos de ML",
    text: "Completa el espacio: En un problema de clasificación binaria, la métrica 'recall' mide ___.",
    multiple: false,
    options: [
      { text: "la proporción de todos los casos positivos reales que el modelo logró identificar correctamente", correct: true, explanation: "Recall (sensibilidad) mide qué proporción de los verdaderos positivos reales fue correctamente detectada por el modelo, es decir, cuántos casos positivos no se 'escaparon' sin detectar." },
      { text: "el tiempo que tarda el modelo en generar una predicción", correct: false, explanation: "El tiempo de predicción corresponde a la latencia del modelo, no a la métrica de recall." },
      { text: "la cantidad de parámetros que tiene el modelo entrenado", correct: false, explanation: "La cantidad de parámetros es una característica de la arquitectura del modelo, no una métrica de evaluación de clasificación." },
      { text: "el porcentaje de datos usados para el conjunto de entrenamiento", correct: false, explanation: "Esto se refiere a la proporción de la división de datos (train/test split), no a una métrica de evaluación como recall." }
    ],
    doc: "https://learn.microsoft.com/es-es/training/modules/fundamentals-machine-learning/"
  },
  {
    domain: "Dominio 2 - Content Safety",
    text: "Completa el espacio: En Azure AI Content Safety, un umbral de severidad más bajo (más estricto) configurado para una categoría de daño hace que el sistema ___.",
    multiple: false,
    options: [
      { text: "bloquee o marque contenido incluso con niveles de severidad relativamente bajos dentro de esa categoría", correct: true, explanation: "Un umbral más bajo (más estricto) reduce la tolerancia del sistema, provocando que se filtre contenido incluso cuando su severidad detectada es baja o moderada dentro de esa categoría." },
      { text: "permita más contenido dañino de esa categoría pasar sin ser bloqueado", correct: false, explanation: "Esto describe el efecto de un umbral más alto (más permisivo), no de uno más bajo/estricto." },
      { text: "aumente automáticamente el costo por token de las solicitudes", correct: false, explanation: "Los umbrales de severidad de Content Safety no afectan directamente el costo por token de las solicitudes al modelo generativo." },
      { text: "desactive por completo el filtrado en todas las demás categorías", correct: false, explanation: "El umbral se configura de forma independiente por categoría; ajustar uno no desactiva el filtrado en las demás categorías." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/content-safety/concepts/harm-categories"
  },

];

/* Total de preguntas en el banco: */
console.log(`Total de preguntas: ${QUESTIONS.length}`);

export default QUESTIONS;
