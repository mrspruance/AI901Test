/* AI-901 Practice Test - Question Bank (Abril 2026) */
/* Dominio 1: Conceptos y capacidades de IA (40-45%)  */
/* Dominio 2: Implementar soluciones con Microsoft Foundry (55-60%) */

const QUESTIONS = [

  /* ── DOMINIO 1 · IA Responsable ──────────────────────────────────── */
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
    text: "Una empresa usa IA para filtrar currículums y el modelo rechaza sistemáticamente candidatas mujeres. ¿Qué principio de IA responsable se viola principalmente?",
    multiple: false,
    options: [
      { text: "Confiabilidad y seguridad", correct: false, explanation: "La confiabilidad trata sobre que el sistema funcione como se espera de forma segura, no sobre discriminación entre grupos." },
      { text: "Privacidad y seguridad", correct: false, explanation: "Privacidad protege datos personales; el sesgo de género es un problema de equidad, no de privacidad." },
      { text: "Equidad", correct: true, explanation: "La equidad exige que los sistemas de IA no discriminen por género, raza u otras características protegidas. Un modelo que rechaza mujeres sistemáticamente viola este principio." },
      { text: "Transparencia", correct: false, explanation: "Transparencia se refiere a la comprensibilidad del sistema, no a si trata igual a distintos grupos." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-responsible-ai"
  },
  {
    domain: "Dominio 1 - IA Responsable",
    text: "¿Qué principio de IA responsable de Microsoft garantiza que existan personas que rindan cuentas por el comportamiento de los sistemas de IA?",
    multiple: false,
    options: [
      { text: "Transparencia", correct: false, explanation: "Transparencia trata sobre la comprensibilidad del sistema, no sobre quién responde por sus acciones." },
      { text: "Inclusión", correct: false, explanation: "Inclusión busca beneficiar a toda la sociedad, no asignar responsabilidades sobre el sistema." },
      { text: "Responsabilidad", correct: true, explanation: "El principio de responsabilidad (Accountability) establece que las personas y organizaciones deben rendir cuentas por los sistemas de IA que diseñan, desarrollan e implementan." },
      { text: "Confiabilidad y seguridad", correct: false, explanation: "Confiabilidad y seguridad se refieren al comportamiento técnico del sistema, no a la rendición de cuentas humana." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-responsible-ai"
  },
  {
    domain: "Dominio 1 - IA Responsable",
    text: "¿Cuántos principios de IA responsable define Microsoft oficialmente?",
    multiple: false,
    options: [
      { text: "4", correct: false, explanation: "Microsoft define más principios; 4 es un número incorrecto." },
      { text: "5", correct: false, explanation: "5 no es el número correcto de principios oficiales de Microsoft." },
      { text: "6", correct: true, explanation: "Microsoft define 6 principios de IA responsable: Equidad, Confiabilidad y seguridad, Privacidad y seguridad, Inclusión, Transparencia y Responsabilidad." },
      { text: "8", correct: false, explanation: "8 excede el número real de principios definidos por Microsoft." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-responsible-ai"
  },

  /* ── DOMINIO 1 · Modelos de IA ────────────────────────────────────── */
  {
    domain: "Dominio 1 - Modelos de IA",
    text: "¿Cuál parámetro de un LLM controla directamente la aleatoriedad o creatividad de las respuestas generadas?",
    multiple: false,
    options: [
      { text: "Max tokens", correct: false, explanation: "Max tokens controla la longitud máxima de la respuesta, no su aleatoriedad." },
      { text: "Temperature", correct: true, explanation: "Temperature controla la aleatoriedad: valores bajos (0-0.3) producen respuestas más deterministas; valores altos (0.7-1) generan respuestas más creativas y variadas." },
      { text: "Frequency penalty", correct: false, explanation: "Frequency penalty reduce la repetición de tokens ya usados; no es el control principal de aleatoriedad." },
      { text: "Presence penalty", correct: false, explanation: "Presence penalty incentiva al modelo a hablar de temas nuevos; el control principal de aleatoriedad es Temperature." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/models"
  },
  {
    domain: "Dominio 1 - Modelos de IA",
    text: "¿Qué técnica adapta un modelo base de lenguaje a un dominio específico actualizando sus pesos con ejemplos propios, sin reentrenarlo desde cero?",
    multiple: false,
    options: [
      { text: "Prompt engineering", correct: false, explanation: "El prompt engineering ajusta la entrada en inferencia, pero no modifica los pesos del modelo de forma persistente." },
      { text: "Fine-tuning", correct: true, explanation: "El fine-tuning actualiza los pesos del modelo base con datos propios del dominio, adaptándolo de forma persistente sin entrenarlo desde cero." },
      { text: "Grounding", correct: false, explanation: "El grounding conecta al modelo con datos externos en tiempo real, pero no modifica los pesos del modelo." },
      { text: "Quantización", correct: false, explanation: "La quantización comprime el modelo reduciendo la precisión numérica de sus pesos; no adapta su comportamiento a un dominio." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/how-to/fine-tuning"
  },
  {
    domain: "Dominio 1 - Modelos de IA",
    text: "¿Cuál es el propósito principal de los embeddings en sistemas de IA generativa?",
    multiple: false,
    options: [
      { text: "Generar imágenes a partir de texto", correct: false, explanation: "La generación de imágenes la realizan modelos como DALL-E; los embeddings son representaciones vectoriales de texto." },
      { text: "Representar texto como vectores numéricos para medir similitud semántica", correct: true, explanation: "Los embeddings transforman texto en vectores de alta dimensión donde textos con significados similares quedan cercanos, habilitando búsqueda semántica y RAG." },
      { text: "Ajustar los pesos del modelo durante el entrenamiento", correct: false, explanation: "Los pesos se ajustan en entrenamiento o fine-tuning; los embeddings son representaciones usadas en inferencia." },
      { text: "Reducir el número de tokens enviados al modelo", correct: false, explanation: "Los embeddings no reducen tokens; son representaciones vectoriales densas para tareas de similitud semántica." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/understand-embeddings"
  },
  {
    domain: "Dominio 1 - Modelos de IA",
    text: "¿Qué es el system message (mensaje del sistema) en un modelo de lenguaje conversacional?",
    multiple: false,
    options: [
      { text: "Un mensaje que el usuario envía al inicio de cada conversación", correct: false, explanation: "El system message lo configura el desarrollador, no el usuario final." },
      { text: "Instrucciones configuradas por el desarrollador que definen el comportamiento y personalidad del modelo", correct: true, explanation: "El system message establece el rol, tono, restricciones y contexto del asistente antes de que el usuario interactúe, moldeando el comportamiento del modelo durante toda la sesión." },
      { text: "El mensaje que el modelo genera automáticamente como bienvenida", correct: false, explanation: "El system message es una instrucción de configuración enviada al modelo, no una respuesta automática." },
      { text: "Un log interno que registra errores del modelo", correct: false, explanation: "Los logs de errores son diferentes; el system message es parte del contexto de conversación enviado al modelo." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/prompt-engineering"
  },

  /* ── DOMINIO 1 · Texto (NLP) ──────────────────────────────────────── */
  {
    domain: "Dominio 1 - Cargas de trabajo: Texto",
    text: "¿Cuál servicio de Azure AI analiza sentimientos, detecta idioma y extrae frases clave de texto?",
    multiple: false,
    options: [
      { text: "Azure AI Vision", correct: false, explanation: "Azure AI Vision analiza imágenes y vídeos, no texto." },
      { text: "Azure AI Language", correct: true, explanation: "Azure AI Language incluye análisis de sentimientos, detección de idioma, extracción de frases clave, reconocimiento de entidades y más capacidades de NLP." },
      { text: "Azure AI Translator", correct: false, explanation: "Azure AI Translator traduce texto entre idiomas pero no analiza sentimientos ni extrae frases clave." },
      { text: "Azure AI Content Safety", correct: false, explanation: "Content Safety detecta contenido dañino; no es el servicio principal para NLP de texto." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/language-service/overview"
  },
  {
    domain: "Dominio 1 - Cargas de trabajo: Texto",
    text: "¿Qué técnica de NLP identifica y clasifica nombres de personas, organizaciones y lugares dentro de un texto?",
    multiple: false,
    options: [
      { text: "Análisis de sentimientos", correct: false, explanation: "El análisis de sentimientos determina si el texto es positivo, negativo o neutro; no identifica entidades." },
      { text: "Reconocimiento de entidades nombradas (NER)", correct: true, explanation: "NER identifica y clasifica entidades como personas, organizaciones, ubicaciones, fechas y valores monetarios dentro del texto." },
      { text: "Clasificación de texto", correct: false, explanation: "La clasificación asigna categorías a documentos completos, no identifica entidades específicas dentro del texto." },
      { text: "Resumen automático", correct: false, explanation: "El resumen condensa el texto; no extrae entidades nombradas." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/language-service/named-entity-recognition/overview"
  },
  {
    domain: "Dominio 1 - Cargas de trabajo: Texto",
    text: "¿Cuál es la diferencia principal entre un modelo de lenguaje generativo y un modelo de clasificación de texto?",
    multiple: false,
    options: [
      { text: "Los modelos generativos solo trabajan con imágenes; los clasificadores solo con texto", correct: false, explanation: "Ambos tipos trabajan con texto. Los modelos generativos también pueden procesar imágenes, pero esa no es la diferencia definitoria." },
      { text: "Los modelos generativos producen texto nuevo; los clasificadores asignan etiquetas predefinidas", correct: true, explanation: "Los modelos generativos crean contenido nuevo (respuestas, resúmenes, código). Los clasificadores asignan el texto a categorías ya definidas como positivo/negativo o spam/no-spam." },
      { text: "Los clasificadores requieren más datos de entrenamiento que los modelos generativos", correct: false, explanation: "Los LLMs generativos suelen requerir enormes volúmenes de datos; esta no es la diferencia definitoria." },
      { text: "Los clasificadores no pueden usarse en Azure", correct: false, explanation: "Azure AI Language ofrece capacidades de clasificación de texto personalizadas." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/language-service/text-classification/overview"
  },

  /* ── DOMINIO 1 · Voz ──────────────────────────────────────────────── */
  {
    domain: "Dominio 1 - Cargas de trabajo: Voz",
    text: "¿Qué servicio de Azure AI convierte audio hablado en texto escrito (transcripción)?",
    multiple: false,
    options: [
      { text: "Azure AI Translator", correct: false, explanation: "Translator traduce texto entre idiomas; no convierte audio a texto." },
      { text: "Azure AI Language", correct: false, explanation: "Language procesa texto ya escrito; no realiza reconocimiento de voz." },
      { text: "Azure AI Speech - Speech-to-Text", correct: true, explanation: "Azure AI Speech incluye el servicio Speech-to-Text que transcribe audio en tiempo real o por lotes a texto escrito en múltiples idiomas." },
      { text: "Azure AI Vision", correct: false, explanation: "Vision analiza imágenes y vídeo, no audio." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/speech-service/speech-to-text"
  },
  {
    domain: "Dominio 1 - Cargas de trabajo: Voz",
    text: "Una empresa quiere crear un asistente de voz con una voz sintética que suene exactamente como su marca. ¿Qué característica de Azure AI Speech debe usar?",
    multiple: false,
    options: [
      { text: "Neural text-to-speech (TTS) estándar", correct: false, explanation: "El TTS estándar ofrece voces preconfiguradas de alta calidad, pero no permite crear una voz completamente personalizada de marca." },
      { text: "Custom Neural Voice", correct: true, explanation: "Custom Neural Voice permite crear una voz sintética única a partir de grabaciones de audio propias, ideal para identidad de marca corporativa." },
      { text: "Speech translation", correct: false, explanation: "Speech translation traduce audio de un idioma a otro; no crea voces personalizadas." },
      { text: "Speaker recognition", correct: false, explanation: "Speaker recognition identifica quién está hablando; no crea voces de marca." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/speech-service/custom-neural-voice"
  },
  {
    domain: "Dominio 1 - Cargas de trabajo: Voz",
    text: "¿Qué capacidad de Azure AI Speech permite traducir audio hablado de un idioma directamente a texto en otro idioma diferente?",
    multiple: false,
    options: [
      { text: "Text-to-Speech", correct: false, explanation: "Text-to-Speech convierte texto escrito a voz; no traduce entre idiomas." },
      { text: "Speaker recognition", correct: false, explanation: "Speaker recognition identifica al hablante; no realiza traducción." },
      { text: "Speech translation", correct: true, explanation: "Speech translation de Azure AI Speech convierte audio hablado en un idioma directamente a texto traducido en otro idioma, combinando reconocimiento de voz y traducción." },
      { text: "Custom Speech", correct: false, explanation: "Custom Speech mejora el reconocimiento en vocabularios especializados; no traduce entre idiomas." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/speech-service/speech-translation"
  },

  /* ── DOMINIO 1 · Visión ───────────────────────────────────────────── */
  {
    domain: "Dominio 1 - Cargas de trabajo: Visión",
    text: "¿Qué tarea de visión por computador devuelve las coordenadas de un rectángulo delimitador (bounding box) alrededor de cada objeto detectado?",
    multiple: false,
    options: [
      { text: "Clasificación de imágenes", correct: false, explanation: "La clasificación asigna una etiqueta a la imagen completa, sin indicar dónde está el objeto." },
      { text: "Detección de objetos", correct: true, explanation: "La detección de objetos localiza y clasifica múltiples objetos en una imagen, devolviendo las coordenadas del bounding box y la etiqueta de cada uno." },
      { text: "Segmentación semántica", correct: false, explanation: "La segmentación semántica asigna una clase a cada píxel, pero no se expresa como coordenadas de rectángulo." },
      { text: "OCR (reconocimiento óptico de caracteres)", correct: false, explanation: "OCR extrae texto de imágenes; no detecta objetos genéricos con bounding boxes." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/computer-vision/concept-object-detection"
  },
  {
    domain: "Dominio 1 - Cargas de trabajo: Visión",
    text: "¿Cuál servicio de Azure AI está especializado en detectar, analizar y verificar rostros en imágenes?",
    multiple: false,
    options: [
      { text: "Azure AI Vision", correct: false, explanation: "Azure AI Vision tiene capacidades básicas de detección facial, pero Azure AI Face es el servicio especializado con funcionalidades avanzadas." },
      { text: "Azure AI Custom Vision", correct: false, explanation: "Custom Vision entrena modelos personalizados de clasificación y detección; no está especializado en análisis facial." },
      { text: "Azure AI Face", correct: true, explanation: "Azure AI Face es el servicio especializado para detección facial, análisis de atributos, verificación de identidad y comparación de rostros." },
      { text: "Azure AI Content Safety", correct: false, explanation: "Content Safety detecta contenido inapropiado; no está especializado en análisis facial." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/computer-vision/overview-identity"
  },
  {
    domain: "Dominio 1 - Cargas de trabajo: Visión",
    text: "¿Qué servicio de Azure permite entrenar un modelo de clasificación de imágenes personalizado con fotos propias sin escribir código de entrenamiento?",
    multiple: false,
    options: [
      { text: "Azure Machine Learning Studio", correct: false, explanation: "AML Studio es una plataforma completa de ML; para visión personalizada de bajo código, Custom Vision es la opción más directa." },
      { text: "Azure AI Vision", correct: false, explanation: "Azure AI Vision es un servicio preentrenado general; para modelos personalizados se usa Azure AI Custom Vision." },
      { text: "Azure AI Custom Vision", correct: true, explanation: "Azure AI Custom Vision permite subir imágenes, etiquetarlas y entrenar un modelo de clasificación o detección personalizado desde una interfaz web sin código." },
      { text: "Azure AI Document Intelligence", correct: false, explanation: "Document Intelligence extrae información de documentos; no está orientado al entrenamiento de modelos de visión personalizados." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/custom-vision-service/overview"
  },

  /* ── DOMINIO 1 · Extracción de información ───────────────────────── */
  {
    domain: "Dominio 1 - Extracción de información",
    text: "¿Qué servicio de Azure AI extrae campos estructurados como fecha, importe total y número de factura de documentos escaneados?",
    multiple: false,
    options: [
      { text: "Azure AI Language", correct: false, explanation: "Language procesa texto no estructurado; no está optimizado para extraer campos de formularios con formato específico." },
      { text: "Azure AI Document Intelligence", correct: true, explanation: "Azure AI Document Intelligence (antes Form Recognizer) extrae campos estructurados de formularios, facturas, recibos, tarjetas y documentos personalizados." },
      { text: "Azure AI Vision (OCR)", correct: false, explanation: "OCR extrae todo el texto de una imagen sin clasificar ni estructurar los campos del documento." },
      { text: "Azure AI Search", correct: false, explanation: "Azure AI Search indexa y busca contenido; no extrae campos estructurados de documentos directamente." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/document-intelligence/overview"
  },
  {
    domain: "Dominio 1 - Extracción de información",
    text: "¿Cuál es la función principal de Azure AI Search con AI enrichment (enriquecimiento de IA)?",
    multiple: false,
    options: [
      { text: "Entrenar modelos de clasificación de texto personalizados", correct: false, explanation: "Azure AI Search no entrena modelos de clasificación; para eso se usa Azure AI Language o Azure Machine Learning." },
      { text: "Indexar contenido extrayendo conocimiento de texto, imágenes y documentos para habilitar búsquedas inteligentes", correct: true, explanation: "AI enrichment usa habilidades cognitivas (OCR, NER, traducción, etc.) durante la indexación para extraer metadatos y habilitar búsquedas semánticas e inteligentes." },
      { text: "Crear alertas cuando se detecta contenido inapropiado en documentos", correct: false, explanation: "Eso es función de Azure AI Content Safety, no de Azure AI Search." },
      { text: "Reemplazar a Azure AI Document Intelligence en la extracción de formularios", correct: false, explanation: "Son servicios complementarios; AI Search indexa y busca, Document Intelligence extrae campos estructurados." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/search/cognitive-search-concept-intro"
  },

  /* ── DOMINIO 1 · IA Generativa – Conceptos ───────────────────────── */
  {
    domain: "Dominio 1 - IA Generativa",
    text: "¿Qué es la Generación Aumentada por Recuperación (RAG)?",
    multiple: false,
    options: [
      { text: "Un método de entrenamiento que actualiza los pesos del modelo con datos nuevos en tiempo real", correct: false, explanation: "RAG no modifica los pesos del modelo; combina recuperación de información con generación en tiempo de inferencia." },
      { text: "Una técnica que combina la búsqueda de información relevante en una base de datos con la generación del LLM para responder con datos actuales y verificables", correct: true, explanation: "RAG recupera fragmentos relevantes de una base de conocimiento (vectorial o de búsqueda) y los incluye en el contexto del LLM, reduciendo alucinaciones y permitiendo respuestas basadas en datos actualizados." },
      { text: "Un tipo de modelo de lenguaje pequeño (SLM) optimizado para dispositivos móviles", correct: false, explanation: "RAG es una arquitectura de sistema, no un tipo de modelo; los SLMs son una categoría de tamaño de modelo." },
      { text: "Una técnica de compresión que reduce el tamaño de los modelos sin perder precisión", correct: false, explanation: "Eso describe cuantización o destilación, no RAG." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/search/retrieval-augmented-generation-overview"
  },
  {
    domain: "Dominio 1 - IA Generativa",
    text: "¿Qué son las 'alucinaciones' en el contexto de los LLMs?",
    multiple: false,
    options: [
      { text: "Errores de hardware que causan respuestas incorrectas del servidor", correct: false, explanation: "Las alucinaciones son un fenómeno del modelo lingüístico, no del hardware." },
      { text: "Cuando el modelo genera información que parece plausible pero es factualmente incorrecta o inventada", correct: true, explanation: "Las alucinaciones ocurren cuando el LLM produce texto coherente y confiado pero factualmente incorrecto, al no tener acceso a información actualizada o al interpolar incorrectamente." },
      { text: "Imágenes distorsionadas generadas por modelos de visión", correct: false, explanation: "El término alucinación en IA se refiere a texto incorrecto de LLMs, no a artefactos visuales." },
      { text: "Respuestas repetitivas cuando el parámetro temperature está en 0", correct: false, explanation: "La repetición es un fenómeno distinto; las alucinaciones son invenciones de hechos, no repeticiones." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/hallucinations"
  },
  {
    domain: "Dominio 1 - IA Generativa",
    text: "¿Qué describe el término 'prompt injection'?",
    multiple: false,
    options: [
      { text: "Un ataque que sobrecarga el modelo enviando prompts muy largos", correct: false, explanation: "Sobrecargar el contexto con tokens es un ataque de tipo token flooding, no prompt injection." },
      { text: "Instrucciones maliciosas ocultas en contenido que el modelo procesa, que anulan las instrucciones originales del sistema", correct: true, explanation: "El prompt injection ocurre cuando datos externos (páginas web, documentos, emails) contienen instrucciones que el modelo interpreta como comandos, anulando el system message original." },
      { text: "El proceso de inyectar ejemplos en el prompt para guiar al modelo (few-shot prompting)", correct: false, explanation: "Few-shot prompting es una técnica legítima de diseño de prompts, no un ataque de seguridad." },
      { text: "Un método para insertar variables dinámicas en las plantillas de prompts", correct: false, explanation: "La interpolación de variables en prompts es una práctica normal de desarrollo; no es prompt injection malicioso." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/prompt-engineering"
  },
  {
    domain: "Dominio 1 - IA Generativa",
    text: "¿Cuál es la diferencia entre un modelo de lenguaje grande (LLM) y un modelo de lenguaje pequeño (SLM)?",
    multiple: false,
    options: [
      { text: "Los LLMs solo pueden usarse en la nube; los SLMs solo en dispositivos locales", correct: false, explanation: "Ambos pueden usarse en la nube y en local; el despliegue no es la diferencia definitoria." },
      { text: "Los LLMs tienen más parámetros y mayor capacidad general; los SLMs son más eficientes y adecuados para tareas específicas con recursos limitados", correct: true, explanation: "Los LLMs (como GPT-4) tienen miles de millones de parámetros y gran versatilidad. Los SLMs (como Phi-3) tienen menos parámetros, consumen menos recursos y son ideales para dispositivos edge o tareas específicas." },
      { text: "Los SLMs son siempre más precisos que los LLMs en cualquier tarea", correct: false, explanation: "Los LLMs suelen superar a los SLMs en tareas generales; los SLMs pueden ser más eficientes en tareas específicas para las que fueron optimizados." },
      { text: "Los LLMs no pueden hacer fine-tuning; los SLMs sí", correct: false, explanation: "Ambos tipos de modelos admiten fine-tuning; esta no es la diferencia entre ellos." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/how-to/model-catalog-overview"
  },

  /* ── DOMINIO 2 · Microsoft Foundry – Conceptos ───────────────────── */
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Qué es Microsoft Azure AI Foundry (anteriormente Azure AI Studio)?",
    multiple: false,
    options: [
      { text: "Un servicio exclusivo para entrenar modelos de visión por computador", correct: false, explanation: "Foundry no está limitado a visión; es una plataforma completa para desarrollar soluciones de IA generativa." },
      { text: "Una plataforma unificada para explorar, construir, evaluar y desplegar aplicaciones de IA generativa en Azure", correct: true, explanation: "Azure AI Foundry es la plataforma central de Microsoft que integra el catálogo de modelos, herramientas de desarrollo, evaluación de seguridad y despliegue de aplicaciones de IA generativa." },
      { text: "Una herramienta de análisis de datos similar a Power BI pero con capacidades de IA", correct: false, explanation: "Foundry está enfocado en desarrollo de IA generativa, no en análisis y visualización de datos empresariales." },
      { text: "Un servicio de almacenamiento de modelos entrenados por los clientes", correct: false, explanation: "Aunque Foundry puede gestionar modelos, su propósito principal es el desarrollo y despliegue de aplicaciones de IA." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/what-is-ai-studio"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Qué es el catálogo de modelos (Model Catalog) de Azure AI Foundry?",
    multiple: false,
    options: [
      { text: "Un repositorio de datasets listos para entrenar modelos de machine learning", correct: false, explanation: "El catálogo de modelos contiene modelos, no datasets de entrenamiento." },
      { text: "Un repositorio centralizado con modelos de Microsoft, OpenAI, Meta, Mistral y otros proveedores, listo para explorar y desplegar", correct: true, explanation: "El Model Catalog de Foundry ofrece cientos de modelos de distintos proveedores (GPT, Phi, Llama, Mistral, etc.) que pueden explorarse, probarse y desplegarse directamente desde la plataforma." },
      { text: "Una lista de los servicios cognitivos disponibles en Azure AI Services", correct: false, explanation: "Azure AI Services es un conjunto separado de servicios; el Model Catalog está específicamente en Foundry y contiene modelos de lenguaje y multimodales." },
      { text: "Un almacén de versiones anteriores de modelos para rollback", correct: false, explanation: "El catálogo es para descubrir y desplegar modelos actuales, no para gestión de versiones anteriores." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/how-to/model-catalog-overview"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Para qué se usa el Azure AI Foundry Playground?",
    multiple: false,
    options: [
      { text: "Para entrenar modelos de clasificación de imágenes desde cero", correct: false, explanation: "El Playground es para probar modelos interactivamente, no para entrenar modelos desde cero." },
      { text: "Para probar modelos de IA de forma interactiva con prompts y configuraciones antes de integrarlos en una aplicación", correct: true, explanation: "El Playground de Foundry permite experimentar con distintos modelos, ajustar parámetros como temperature y max tokens, y probar system messages de forma interactiva sin escribir código." },
      { text: "Para monitorizar el uso y los costos de los modelos desplegados en producción", correct: false, explanation: "El monitoreo de costos se hace en Azure Cost Management; el Playground es una herramienta de experimentación." },
      { text: "Para crear pipelines de datos de entrenamiento", correct: false, explanation: "Los pipelines de datos se crean en Azure Machine Learning; el Playground es para experimentación con modelos." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/quickstarts/get-started-playground"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Qué es un proyecto (Project) dentro de Azure AI Foundry?",
    multiple: false,
    options: [
      { text: "Un contenedor de facturación independiente para controlar los costos de IA por equipo", correct: false, explanation: "Los proyectos organizan recursos de desarrollo; la facturación se gestiona principalmente a nivel de suscripción y hub." },
      { text: "Un espacio de trabajo colaborativo dentro de un hub donde se organizan recursos, conexiones y experimentos de IA", correct: true, explanation: "Un proyecto en Foundry es el espacio de trabajo donde los equipos organizan modelos, conexiones a servicios, flujos de prompts y experimentos, todo dentro del contexto de un hub." },
      { text: "Una instancia de modelo desplegada lista para recibir llamadas de API", correct: false, explanation: "Las instancias desplegadas son deployments o endpoints; los proyectos son espacios de trabajo de desarrollo." },
      { text: "Una plantilla predefinida de aplicación de IA que se puede clonar", correct: false, explanation: "Las plantillas existen en Foundry, pero un proyecto es el espacio de trabajo colaborativo, no una plantilla." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/concepts/ai-resources"
  },

  /* ── DOMINIO 2 · Agentes de IA con Foundry ───────────────────────── */
  {
    domain: "Dominio 2 - Agentes de IA",
    text: "¿Qué es Azure AI Agent Service?",
    multiple: false,
    options: [
      { text: "Un servicio para monitorizar el rendimiento de modelos de IA en producción", correct: false, explanation: "El monitoreo de modelos se hace con Azure Monitor; Agent Service es para crear agentes autónomos." },
      { text: "Un servicio administrado que permite crear agentes de IA capaces de razonar y ejecutar acciones usando herramientas y datos propios", correct: true, explanation: "Azure AI Agent Service permite construir agentes autónomos que pueden planificar tareas, usar herramientas (búsqueda, código, APIs), acceder a datos propios y completar objetivos complejos de varios pasos." },
      { text: "Un servicio de mensajería para conectar microservicios de IA entre sí", correct: false, explanation: "Azure Service Bus es para mensajería entre servicios; Agent Service crea agentes de IA autónomos." },
      { text: "Una herramienta para versionar y registrar modelos de machine learning", correct: false, explanation: "El registro de modelos se hace en Azure ML Model Registry; Agent Service crea agentes autónomos." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/agents/overview"
  },
  {
    domain: "Dominio 2 - Agentes de IA",
    text: "En el contexto de los agentes de IA, ¿qué son las 'herramientas' (tools)?",
    multiple: false,
    options: [
      { text: "Las GPU o CPU que el agente usa para ejecutar inferencia", correct: false, explanation: "Las herramientas en el contexto de agentes son capacidades funcionales, no hardware de cómputo." },
      { text: "Capacidades que el agente puede invocar para interactuar con el mundo externo, como búsqueda web, ejecución de código o llamadas a APIs", correct: true, explanation: "Las herramientas amplían las capacidades del agente más allá del texto: puede buscar información actualizada, ejecutar código Python, leer archivos o llamar a servicios externos." },
      { text: "Los parámetros de configuración como temperature y max tokens", correct: false, explanation: "Temperature y max tokens son hiperparámetros de inferencia del LLM; las herramientas son capacidades funcionales del agente." },
      { text: "Los datos de entrenamiento usados para hacer fine-tuning del agente", correct: false, explanation: "Los datos de entrenamiento son para ajustar el modelo base; las herramientas son capacidades en tiempo de ejecución." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/agents/concepts/tools"
  },
  {
    domain: "Dominio 2 - Agentes de IA",
    text: "¿Qué framework de orquestación de agentes de IA es desarrollado y soportado directamente por Microsoft e integrado en Azure AI Foundry?",
    multiple: false,
    options: [
      { text: "LangChain", correct: false, explanation: "LangChain es un framework popular de terceros, no desarrollado por Microsoft." },
      { text: "Semantic Kernel", correct: true, explanation: "Semantic Kernel es el framework de orquestación de IA de Microsoft, compatible con Python, C# y Java, e integrado directamente en Azure AI Foundry para construir agentes y flujos de IA." },
      { text: "AutoGen", correct: false, explanation: "AutoGen es un framework de Microsoft Research para agentes multi-agente, pero Semantic Kernel es el framework principal de orquestación integrado en Foundry." },
      { text: "Haystack", correct: false, explanation: "Haystack es un framework de terceros (deepset) para pipelines de NLP; no es el framework oficial de Microsoft." }
    ],
    doc: "https://learn.microsoft.com/es-es/semantic-kernel/overview/"
  },

  /* ── DOMINIO 2 · Texto y Voz con Foundry ─────────────────────────── */
  {
    domain: "Dominio 2 - Texto y Voz con Foundry",
    text: "¿Cómo se habilita el acceso a los modelos de Azure OpenAI (GPT-4, GPT-4o, etc.) desde Azure AI Foundry?",
    multiple: false,
    options: [
      { text: "Instalando un paquete de pip en el entorno de desarrollo local", correct: false, explanation: "Los modelos se acceden vía API; la instalación de paquetes cliente no equivale a habilitar el acceso al modelo en Foundry." },
      { text: "Creando un deployment del modelo deseado dentro de un proyecto de Foundry y usando el endpoint generado", correct: true, explanation: "En Foundry se crea un deployment del modelo (ej. GPT-4o), que genera un endpoint y una clave API. Las aplicaciones llaman a ese endpoint para usar el modelo." },
      { text: "Descargando los pesos del modelo a un blob storage de Azure", correct: false, explanation: "Los modelos de Azure OpenAI son servicios gestionados; no se descargan pesos a un storage propio." },
      { text: "Solicitando acceso al modelo mediante un ticket de soporte de Azure", correct: false, explanation: "Algunos modelos requieren acceso controlado, pero el mecanismo de uso es siempre a través de deployments en Foundry, no tickets de soporte para uso ordinario." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/how-to/create-resource"
  },
  {
    domain: "Dominio 2 - Texto y Voz con Foundry",
    text: "¿Qué es Prompt Flow en Azure AI Foundry?",
    multiple: false,
    options: [
      { text: "Una herramienta de análisis de costos de tokens consumidos por los modelos", correct: false, explanation: "Prompt Flow es una herramienta de desarrollo de flujos de IA, no de análisis de costos." },
      { text: "Una herramienta visual para diseñar, probar y desplegar flujos de trabajo de IA que encadenan llamadas a LLMs, herramientas y código", correct: true, explanation: "Prompt Flow permite construir pipelines de IA de forma visual o por código, encadenando nodos de LLM, Python, búsqueda y más, facilitando el desarrollo y la evaluación de aplicaciones de IA." },
      { text: "Un servicio de cola de mensajes para gestionar solicitudes concurrentes a los modelos", correct: false, explanation: "La gestión de colas se hace con Azure Service Bus o Event Hubs; Prompt Flow es una herramienta de orquestación de IA." },
      { text: "Un dashboard para monitorizar la latencia y disponibilidad de los endpoints de IA", correct: false, explanation: "El monitoreo de endpoints se hace con Azure Monitor; Prompt Flow es para diseñar y desplegar flujos de IA." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/how-to/prompt-flow"
  },
  {
    domain: "Dominio 2 - Texto y Voz con Foundry",
    text: "¿Para qué se usa Azure AI Speech dentro de una solución construida con Azure AI Foundry?",
    multiple: false,
    options: [
      { text: "Solo para transcribir reuniones de Teams", correct: false, explanation: "Azure AI Speech es un servicio general de voz; no está limitado a Teams." },
      { text: "Para agregar capacidades de voz a las aplicaciones: reconocimiento de voz, síntesis, traducción de audio y análisis de conversaciones", correct: true, explanation: "Azure AI Speech se integra en Foundry para habilitar entrada y salida de voz, transcripción en tiempo real, traducción de audio y análisis de interacciones de voz en aplicaciones de IA." },
      { text: "Exclusivamente para crear voces personalizadas de marca (Custom Neural Voice)", correct: false, explanation: "Custom Neural Voice es una funcionalidad dentro de Speech; el servicio incluye muchas otras capacidades como STT, TTS y traducción." },
      { text: "Para convertir texto en tablas de datos estructurados", correct: false, explanation: "La conversión de texto a datos estructurados es tarea de Document Intelligence o Language; Speech procesa audio." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/speech-service/overview"
  },

  /* ── DOMINIO 2 · Visión con Foundry ──────────────────────────────── */
  {
    domain: "Dominio 2 - Visión con Foundry",
    text: "¿Qué capacidad de Azure AI Vision permite generar automáticamente una descripción textual del contenido de una imagen?",
    multiple: false,
    options: [
      { text: "OCR (reconocimiento óptico de caracteres)", correct: false, explanation: "OCR extrae texto escrito presente en la imagen; no genera descripciones del contenido visual." },
      { text: "Image captioning (subtitulado de imágenes)", correct: true, explanation: "Image captioning de Azure AI Vision analiza el contenido visual de una imagen y genera automáticamente una descripción en lenguaje natural, útil para accesibilidad y búsqueda de imágenes." },
      { text: "Detección de objetos", correct: false, explanation: "La detección de objetos identifica y localiza objetos con bounding boxes, pero no genera descripciones narrativas de la imagen." },
      { text: "Background removal", correct: false, explanation: "Background removal elimina el fondo de una imagen; no genera descripciones textuales." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/computer-vision/concept-describe-images-40"
  },
  {
    domain: "Dominio 2 - Visión con Foundry",
    text: "¿Qué modelo multimodal de Azure AI permite analizar imágenes y texto de forma conjunta en una sola llamada?",
    multiple: false,
    options: [
      { text: "GPT-4 (solo texto)", correct: false, explanation: "GPT-4 base es solo texto; la variante multimodal es GPT-4o o GPT-4 con visión (GPT-4V)." },
      { text: "GPT-4o o GPT-4 Vision", correct: true, explanation: "GPT-4o y GPT-4V son modelos multimodales que aceptan imágenes y texto como entrada, permitiendo analizar imágenes, responder preguntas sobre ellas y generar descripciones en una sola llamada." },
      { text: "DALL-E 3", correct: false, explanation: "DALL-E 3 genera imágenes a partir de texto; no analiza imágenes existentes." },
      { text: "Whisper", correct: false, explanation: "Whisper es el modelo de reconocimiento de voz de OpenAI; no analiza imágenes." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/models"
  },
  {
    domain: "Dominio 2 - Visión con Foundry",
    text: "¿Qué servicio de Azure genera imágenes originales a partir de una descripción en texto?",
    multiple: false,
    options: [
      { text: "Azure AI Vision", correct: false, explanation: "Azure AI Vision analiza imágenes existentes; no genera imágenes nuevas." },
      { text: "Azure AI Custom Vision", correct: false, explanation: "Custom Vision entrena modelos de clasificación y detección; no genera imágenes." },
      { text: "Azure OpenAI Service - DALL-E", correct: true, explanation: "DALL-E, disponible a través de Azure OpenAI Service en Foundry, genera imágenes originales y realistas a partir de descripciones en lenguaje natural." },
      { text: "Azure AI Face", correct: false, explanation: "Azure AI Face detecta y analiza rostros; no genera imágenes." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/models#dall-e"
  },

  /* ── DOMINIO 2 · Content Understanding / Document Intelligence ────── */
  {
    domain: "Dominio 2 - Azure Content Understanding",
    text: "¿Qué es Azure AI Content Understanding?",
    multiple: false,
    options: [
      { text: "Un servicio para moderar contenido inapropiado en redes sociales", correct: false, explanation: "La moderación de contenido inapropiado es función de Azure AI Content Safety; Content Understanding extrae información estructurada de documentos multimedia." },
      { text: "Un servicio que extrae información estructurada y comprende el contenido de documentos, imágenes, audio y vídeo de forma multimodal", correct: true, explanation: "Azure AI Content Understanding (parte de la familia de Azure AI Services) extrae conocimiento estructurado de contenido multimedia complejo, combinando capacidades de visión, voz y lenguaje para entender documentos en múltiples formatos." },
      { text: "Una herramienta de análisis de sentimientos para contenido de redes sociales", correct: false, explanation: "El análisis de sentimientos en redes sociales lo hace Azure AI Language; Content Understanding se enfoca en extracción estructurada de documentos multimedia." },
      { text: "Un servicio de traducción de documentos multiidioma", correct: false, explanation: "La traducción de documentos la hace Azure AI Translator; Content Understanding extrae información estructurada." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/content-understanding/overview"
  },
  {
    domain: "Dominio 2 - Azure Content Understanding",
    text: "¿Cuál es la ventaja principal de Azure AI Content Understanding frente al OCR tradicional al procesar documentos complejos?",
    multiple: false,
    options: [
      { text: "Es más rápido porque procesa los documentos en paralelo", correct: false, explanation: "La velocidad no es la ventaja diferenciadora; la ventaja es la comprensión semántica del contenido." },
      { text: "Entiende el contexto y la estructura semántica del documento, no solo extrae texto sin formato", correct: true, explanation: "Mientras que el OCR solo extrae texto plano, Content Understanding comprende el significado, la jerarquía y las relaciones entre campos, tablas y elementos visuales del documento." },
      { text: "Solo procesa documentos PDF; el OCR puede procesar cualquier formato de imagen", correct: false, explanation: "Content Understanding soporta múltiples formatos incluyendo imágenes; esta no es la diferencia clave con el OCR." },
      { text: "Es más barato por página procesada que el OCR estándar de Azure", correct: false, explanation: "El costo no es la diferencia principal; la ventaja es la comprensión semántica y estructural." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/content-understanding/overview"
  },
  {
    domain: "Dominio 2 - Azure Content Understanding",
    text: "¿Qué tipo de contenido puede procesar Azure AI Content Understanding además de documentos de texto?",
    multiple: true,
    options: [
      { text: "Archivos de audio y transcripciones", correct: true, explanation: "Content Understanding puede analizar audio para extraer información estructurada de conversaciones, llamadas y grabaciones." },
      { text: "Imágenes y documentos escaneados", correct: true, explanation: "Content Understanding procesa imágenes y documentos escaneados, extrayendo estructura y significado del contenido visual." },
      { text: "Vídeos", correct: true, explanation: "Content Understanding puede analizar vídeos para extraer información estructurada de las escenas, diálogos y elementos visuales." },
      { text: "Bases de datos SQL", correct: false, explanation: "Content Understanding procesa contenido no estructurado y semiestructurado; no se conecta directamente a bases de datos SQL relacionales." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/content-understanding/overview"
  },

  /* ── DOMINIO 2 · Seguridad y evaluación ──────────────────────────── */
  {
    domain: "Dominio 2 - Seguridad en Foundry",
    text: "¿Qué es Azure AI Content Safety?",
    multiple: false,
    options: [
      { text: "Un firewall de red para proteger los endpoints de los modelos de IA", correct: false, explanation: "La protección de red es función de Azure Firewall o Network Security Groups; Content Safety analiza el contenido." },
      { text: "Un servicio que detecta y filtra contenido dañino (odio, violencia, autolesiones, contenido sexual) en texto e imágenes", correct: true, explanation: "Azure AI Content Safety analiza texto e imágenes para detectar contenido potencialmente dañino en categorías como odio, violencia, autolesiones y contenido sexual, con niveles de severidad configurables." },
      { text: "Un servicio de backup que protege los modelos contra pérdida de datos", correct: false, explanation: "La protección de datos se gestiona con Azure Backup; Content Safety analiza el contenido generado por IA." },
      { text: "Una herramienta de auditoría que registra todas las llamadas a la API de los modelos", correct: false, explanation: "El registro de llamadas a API se hace con Azure Monitor y Log Analytics; Content Safety filtra contenido dañino." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/content-safety/overview"
  },
  {
    domain: "Dominio 2 - Seguridad en Foundry",
    text: "¿Qué característica de Azure AI Foundry permite evaluar si las respuestas de un modelo son relevantes, coherentes y fundamentadas en las fuentes?",
    multiple: false,
    options: [
      { text: "Azure Monitor", correct: false, explanation: "Azure Monitor supervisa métricas de infraestructura y disponibilidad; no evalúa la calidad de respuestas de IA." },
      { text: "Evaluaciones (Evaluations) en Foundry", correct: true, explanation: "La funcionalidad de Evaluations en Foundry permite medir métricas de calidad como relevancia, coherencia, fundamentación (groundedness) y seguridad de las respuestas del modelo usando jueces de IA." },
      { text: "Azure AI Content Safety", correct: false, explanation: "Content Safety detecta contenido dañino; no evalúa la calidad o relevancia de las respuestas." },
      { text: "Azure Application Insights", correct: false, explanation: "Application Insights monitoriza aplicaciones web; no evalúa la calidad de respuestas de LLMs." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/how-to/evaluate-generative-ai-app"
  },

  /* ── DOMINIO 2 · Casos de uso combinados ─────────────────────────── */
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "Una empresa quiere crear un chatbot de atención al cliente que responda preguntas usando solo la información de su base de conocimiento interna. ¿Qué arquitectura es la más adecuada?",
    multiple: false,
    options: [
      { text: "Fine-tuning del modelo con los documentos de la empresa", correct: false, explanation: "El fine-tuning adapta el estilo y el comportamiento del modelo, pero no es la mejor solución para mantener respuestas actualizadas basadas en documentos específicos. RAG es más adecuado para este caso." },
      { text: "RAG: conectar el LLM a Azure AI Search indexado con los documentos de la empresa", correct: true, explanation: "RAG con Azure AI Search permite al LLM recuperar fragmentos relevantes de la base de conocimiento en tiempo real, garantizando respuestas fundamentadas en los documentos de la empresa y fácilmente actualizables." },
      { text: "Usar un modelo preentrenado sin modificaciones adicionales", correct: false, explanation: "Un modelo preentrenado no tiene acceso a la base de conocimiento interna de la empresa y podría alucinar información incorrecta." },
      { text: "Reentrenar el modelo desde cero con todos los documentos de la empresa", correct: false, explanation: "Reentrenar un LLM desde cero es extremadamente costoso y no es práctico para la mayoría de las empresas; RAG es la solución estándar para este caso." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/search/retrieval-augmented-generation-overview"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Qué componente de Azure AI Foundry se usa para conectar el proyecto a recursos externos como Azure AI Search, Azure Storage o Azure OpenAI?",
    multiple: false,
    options: [
      { text: "Deployments", correct: false, explanation: "Los deployments son instancias de modelos desplegados para inferencia; las conexiones a recursos externos se gestionan con Connections." },
      { text: "Connections (conexiones)", correct: true, explanation: "Las Connections en Foundry permiten al proyecto conectarse a recursos externos como Azure AI Search, Azure OpenAI, Azure Blob Storage y otros servicios, gestionando las credenciales de forma segura." },
      { text: "Compute instances", correct: false, explanation: "Las compute instances son recursos de cómputo para entrenamiento o notebooks; no son el mecanismo de conexión a servicios externos." },
      { text: "Evaluations", correct: false, explanation: "Evaluations mide la calidad de los modelos; no gestiona conexiones a recursos externos." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/how-to/connections-add"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Qué modelo de lenguaje pequeño (SLM) de la familia Phi de Microsoft está disponible en el catálogo de Azure AI Foundry y es conocido por su alta eficiencia con pocos parámetros?",
    multiple: false,
    options: [
      { text: "GPT-4o mini", correct: false, explanation: "GPT-4o mini es un modelo de OpenAI, no de la familia Phi de Microsoft." },
      { text: "Phi-3 / Phi-4", correct: true, explanation: "La familia Phi de Microsoft (Phi-3, Phi-3.5, Phi-4) son SLMs altamente eficientes disponibles en el catálogo de Foundry, que demuestran capacidades sorprendentes dado su pequeño tamaño de parámetros." },
      { text: "Llama 3", correct: false, explanation: "Llama 3 es de Meta, no de Microsoft; aunque está disponible en el catálogo de Foundry, no pertenece a la familia Phi." },
      { text: "Mistral Large", correct: false, explanation: "Mistral Large es de Mistral AI, no de Microsoft; también está en el catálogo de Foundry pero no es de la familia Phi." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/how-to/model-catalog-overview"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Cuál es la función del Azure AI Foundry SDK?",
    multiple: false,
    options: [
      { text: "Un framework de interfaz de usuario para crear aplicaciones web de IA con React", correct: false, explanation: "El Foundry SDK es para integración de IA en aplicaciones, no un framework de UI para React." },
      { text: "Un conjunto de bibliotecas de Python y otros lenguajes para interactuar programáticamente con los servicios y modelos de Azure AI Foundry", correct: true, explanation: "El Azure AI Foundry SDK (azure-ai-projects, azure-ai-inference, etc.) permite a los desarrolladores interactuar con proyectos, modelos, agentes y herramientas de Foundry desde sus aplicaciones en Python, JavaScript y otros lenguajes." },
      { text: "Una herramienta de línea de comandos exclusiva para desplegar modelos en producción", correct: false, explanation: "El despliegue puede hacerse con el SDK, pero también desde el portal; el SDK no es exclusivo para despliegues." },
      { text: "Una extensión de VS Code para visualizar métricas de modelos en tiempo real", correct: false, explanation: "Existe una extensión de VS Code para Foundry, pero el SDK es una biblioteca de programación, no una extensión de IDE." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/how-to/develop/sdk-overview"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Qué son los 'guardrails' en el contexto de Azure AI y los sistemas de IA generativa?",
    multiple: false,
    options: [
      { text: "Límites de velocidad (rate limits) que controlan cuántas solicitudes por minuto puede recibir un endpoint", correct: false, explanation: "Los rate limits son controles de uso de API; los guardrails son salvaguardas de comportamiento y seguridad del modelo." },
      { text: "Mecanismos de seguridad que controlan el comportamiento del modelo para evitar respuestas dañinas, sesgadas o fuera de los límites definidos", correct: true, explanation: "Los guardrails son las capas de protección (como Azure AI Content Safety, metaprompts de seguridad y filtros de contenido) que aseguran que el modelo se comporte dentro de los límites aceptables establecidos." },
      { text: "Reglas de infraestructura que definen en qué región de Azure se despliega el modelo", correct: false, explanation: "La selección de región es una configuración de despliegue; los guardrails son controles de comportamiento del modelo." },
      { text: "Políticas de backup automático de los datos de conversación", correct: false, explanation: "El backup de datos es una función de almacenamiento; los guardrails son controles de seguridad del comportamiento del modelo." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/content-safety/overview"
  },

  /* ── DOMINIO 2 · Fundamentos adicionales de Foundry ─────────────────── */
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Qué es un 'hub' en Azure AI Foundry?",
    multiple: false,
    options: [
      { text: "Un servidor de cómputo dedicado para entrenar modelos grandes", correct: false, explanation: "Los hubs no son servidores de cómputo; son unidades organizativas que agrupan proyectos y recursos compartidos." },
      { text: "La unidad organizativa de nivel superior en Foundry que centraliza recursos compartidos, conexiones y políticas de seguridad para varios proyectos", correct: true, explanation: "El hub actúa como contenedor padre de los proyectos en Foundry. Centraliza conexiones a servicios, configuraciones de red, identidades administradas y políticas de seguridad que todos los proyectos bajo ese hub comparten." },
      { text: "Un endpoint público que expone los modelos desplegados a internet", correct: false, explanation: "Los endpoints se crean dentro de los proyectos; el hub es la unidad organizativa superior." },
      { text: "Un cuaderno de Jupyter preconfigurado para experimentos de IA", correct: false, explanation: "Los notebooks se ejecutan dentro de proyectos; el hub no es un cuaderno de experimentación." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/concepts/ai-resources"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Cuál de las siguientes opciones describe correctamente el flujo para desplegar una aplicación de chat RAG con Azure AI Foundry?",
    multiple: false,
    options: [
      { text: "Crear un modelo → entrenarlo con documentos → desplegarlo como API", correct: false, explanation: "RAG no requiere entrenar el modelo con los documentos; usa búsqueda en tiempo de inferencia para recuperar fragmentos relevantes." },
      { text: "Indexar documentos en Azure AI Search → conectar el índice al LLM en Foundry → desplegar el flujo de chat como endpoint", correct: true, explanation: "El flujo RAG estándar en Foundry es: indexar la base de conocimiento en Azure AI Search, crear un flujo (Prompt Flow) que recupera fragmentos del índice y los pasa al LLM, y desplegar el flujo completo como endpoint." },
      { text: "Subir documentos a Blob Storage → llamar directamente al LLM con los documentos completos como contexto", correct: false, explanation: "Pasar documentos completos como contexto es ineficiente y tiene límites de tokens. La arquitectura correcta es indexar y recuperar solo los fragmentos relevantes." },
      { text: "Hacer fine-tuning del modelo con los documentos y desplegarlo sin necesidad de búsqueda", correct: false, explanation: "Fine-tuning adapta el estilo del modelo pero no garantiza respuestas basadas en los documentos actualizados; RAG es la solución estándar para este caso de uso." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/tutorials/deploy-chat-web-app"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Qué herramienta de Azure AI Foundry permite comparar el rendimiento de diferentes modelos en el mismo conjunto de datos de evaluación?",
    multiple: false,
    options: [
      { text: "Prompt Flow", correct: false, explanation: "Prompt Flow diseña y despliega flujos de IA; la comparación de modelos se hace con la funcionalidad de Evaluations." },
      { text: "Model benchmarks / Evaluations", correct: true, explanation: "Foundry incluye benchmarks de modelos y la funcionalidad de Evaluations que permite comparar varios modelos con los mismos datos de prueba, midiendo métricas de calidad, seguridad y rendimiento." },
      { text: "Azure Cost Management", correct: false, explanation: "Cost Management mide costos financieros; no compara el rendimiento técnico de modelos." },
      { text: "Azure DevOps Pipelines", correct: false, explanation: "DevOps Pipelines automatiza CI/CD; no es la herramienta para comparar modelos de IA en Foundry." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/how-to/evaluate-generative-ai-app"
  },

  /* ── DOMINIO 2 · Agentes avanzados ───────────────────────────────── */
  {
    domain: "Dominio 2 - Agentes de IA",
    text: "¿Qué patrón de diseño de agentes permite que múltiples agentes de IA especializados colaboren para resolver una tarea compleja?",
    multiple: false,
    options: [
      { text: "Single-agent (agente único con todas las herramientas)", correct: false, explanation: "Un agente único puede ser menos eficiente para tareas muy complejas que requieren especialización; los sistemas multi-agente permiten mayor especialización y paralelismo." },
      { text: "Multi-agent (sistema multi-agente)", correct: true, explanation: "En sistemas multi-agente, cada agente se especializa en una subtarea (ej. un agente de investigación, otro de redacción, otro de revisión) y se coordinan entre sí para completar objetivos complejos." },
      { text: "Chain-of-thought (cadena de pensamiento)", correct: false, explanation: "Chain-of-thought es una técnica de prompting que mejora el razonamiento de un solo modelo; no es un patrón de colaboración entre múltiples agentes." },
      { text: "Few-shot prompting", correct: false, explanation: "Few-shot proporciona ejemplos al modelo para guiar su respuesta; no es un patrón de colaboración entre agentes." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/agents/concepts/agents"
  },
  {
    domain: "Dominio 2 - Agentes de IA",
    text: "¿Qué herramienta integrada de Azure AI Agent Service permite al agente ejecutar código Python para realizar cálculos o análisis de datos?",
    multiple: false,
    options: [
      { text: "Function calling", correct: false, explanation: "Function calling permite al modelo invocar funciones externas definidas por el desarrollador; Code Interpreter es la herramienta específica para ejecutar código." },
      { text: "Code Interpreter", correct: true, explanation: "Code Interpreter es una herramienta integrada en Azure AI Agent Service que permite al agente escribir y ejecutar código Python en un entorno seguro y aislado para realizar cálculos, análisis de datos y generar visualizaciones." },
      { text: "Bing Search", correct: false, explanation: "Bing Search permite al agente buscar información en internet; Code Interpreter es la herramienta específica para ejecutar código." },
      { text: "Azure AI Search", correct: false, explanation: "Azure AI Search permite al agente buscar en bases de conocimiento propias; Code Interpreter ejecuta código Python." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/agents/how-to/tools/code-interpreter"
  },
  {
    domain: "Dominio 2 - Agentes de IA",
    text: "¿Qué es el 'function calling' en el contexto de los modelos de lenguaje de Azure OpenAI?",
    multiple: false,
    options: [
      { text: "Una función de Python que llama a la API de Azure OpenAI", correct: false, explanation: "Function calling es una capacidad del modelo, no el código del desarrollador que llama a la API." },
      { text: "La capacidad del modelo de identificar cuándo debe invocar una función externa y generar los parámetros correctos para hacerlo", correct: true, explanation: "Function calling permite al LLM detectar que necesita información o acción externa, y generar un JSON estructurado con el nombre de la función y sus parámetros. El desarrollador ejecuta la función y devuelve el resultado al modelo." },
      { text: "Un método para llamar a múltiples modelos en secuencia dentro de un flujo", correct: false, explanation: "Llamar a múltiples modelos en secuencia es un patrón de Prompt Flow; function calling es la capacidad de un modelo de invocar funciones externas." },
      { text: "La configuración que define cuántas llamadas por minuto puede hacer un deployment", correct: false, explanation: "Las llamadas por minuto son rate limits de la API; function calling es una capacidad funcional del modelo para invocar herramientas externas." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/how-to/function-calling"
  },

  /* ── DOMINIO 2 · Texto avanzado con Foundry ──────────────────────── */
  {
    domain: "Dominio 2 - Texto y Voz con Foundry",
    text: "¿Qué técnica de prompting incluye ejemplos de entrada y salida esperada dentro del mismo prompt para guiar al modelo?",
    multiple: false,
    options: [
      { text: "Zero-shot prompting", correct: false, explanation: "Zero-shot no incluye ejemplos; le pide al modelo que realice la tarea sin demostración previa." },
      { text: "Few-shot prompting", correct: true, explanation: "Few-shot prompting incluye entre 2 y 5 pares de ejemplo (pregunta + respuesta esperada) dentro del prompt para mostrarle al modelo el formato y estilo de respuesta deseados." },
      { text: "Chain-of-thought prompting", correct: false, explanation: "Chain-of-thought pide al modelo que razone paso a paso, pero no necesariamente incluye múltiples ejemplos completos de entrada-salida." },
      { text: "System prompting", correct: false, explanation: "System prompting define el rol y comportamiento general del modelo; few-shot es la técnica que usa ejemplos de demostración." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/prompt-engineering"
  },
  {
    domain: "Dominio 2 - Texto y Voz con Foundry",
    text: "¿Cuál modelo de Azure AI Services permite traducir texto entre más de 100 idiomas con una sola llamada a API?",
    multiple: false,
    options: [
      { text: "Azure AI Language", correct: false, explanation: "Azure AI Language tiene detección de idioma, pero no es el servicio de traducción multiidioma." },
      { text: "Azure AI Translator", correct: true, explanation: "Azure AI Translator soporta traducción entre más de 100 idiomas y dialectos, transliteración, detección de idioma y traducción de documentos completos con una API unificada." },
      { text: "Azure AI Speech - Speech Translation", correct: false, explanation: "Speech Translation traduce audio hablado; Azure AI Translator es el servicio para traducir texto escrito entre idiomas." },
      { text: "Azure OpenAI GPT-4o", correct: false, explanation: "GPT-4o puede traducir texto, pero Azure AI Translator es el servicio dedicado y optimizado para traducción masiva entre más de 100 idiomas." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/translator/overview"
  },
  {
    domain: "Dominio 2 - Texto y Voz con Foundry",
    text: "¿Qué característica del servicio Azure AI Language permite crear y entrenar modelos de comprensión del lenguaje natural personalizados para reconocer intenciones y entidades específicas del dominio?",
    multiple: false,
    options: [
      { text: "Análisis de sentimientos personalizado", correct: false, explanation: "El análisis de sentimientos personalizado clasifica texto en categorías; no está diseñado para reconocer intenciones y entidades de dominio." },
      { text: "Conversational Language Understanding (CLU)", correct: true, explanation: "CLU permite entrenar modelos personalizados que reconocen intenciones (qué quiere hacer el usuario) y entidades (qué elementos menciona) en texto conversacional, ideal para chatbots y asistentes de voz." },
      { text: "Question Answering (QnA)", correct: false, explanation: "QnA Maker / Question Answering extrae respuestas de una base de conocimiento; CLU es para reconocimiento de intenciones y entidades." },
      { text: "Text Analytics for Health", correct: false, explanation: "Text Analytics for Health extrae entidades médicas de texto clínico; CLU es el servicio de comprensión conversacional personalizable." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/language-service/conversational-language-understanding/overview"
  },
  {
    domain: "Dominio 2 - Texto y Voz con Foundry",
    text: "¿Qué servicio de Azure AI permite crear un chatbot de preguntas y respuestas a partir de una base de conocimiento en formato FAQ, documentos Word o páginas web?",
    multiple: false,
    options: [
      { text: "Azure Bot Service con QnA Maker / Question Answering", correct: true, explanation: "Azure AI Language - Question Answering (sucesor de QnA Maker) permite crear una base de conocimiento a partir de FAQs, documentos y URLs, y responder preguntas en lenguaje natural. Se integra con Azure Bot Service para crear chatbots." },
      { text: "Azure AI Agent Service", correct: false, explanation: "Agent Service crea agentes autónomos de múltiples pasos; para un chatbot de FAQ directo, Question Answering es más simple y específico." },
      { text: "Conversational Language Understanding (CLU)", correct: false, explanation: "CLU reconoce intenciones y entidades; Question Answering extrae respuestas directas de documentos." },
      { text: "Azure AI Content Safety", correct: false, explanation: "Content Safety filtra contenido dañino; no crea bases de conocimiento ni responde preguntas." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/language-service/question-answering/overview"
  },

  /* ── DOMINIO 2 · Visión avanzada con Foundry ─────────────────────── */
  {
    domain: "Dominio 2 - Visión con Foundry",
    text: "¿Qué es Azure AI Vision - Image Analysis 4.0 y qué lo diferencia de versiones anteriores?",
    multiple: false,
    options: [
      { text: "Es exactamente igual que versiones anteriores, solo con un número de versión actualizado", correct: false, explanation: "Image Analysis 4.0 incorpora capacidades multimodales significativamente más avanzadas que las versiones anteriores." },
      { text: "Incorpora modelos de visión-lenguaje (Florence) que permiten búsqueda de imágenes por texto, subtitulado denso y análisis multimodal más avanzado", correct: true, explanation: "Image Analysis 4.0 usa el modelo Florence de Microsoft, habilitando búsqueda vectorial de imágenes, subtitulado denso (describir regiones específicas), segmentación y consultas en lenguaje natural sobre imágenes." },
      { text: "Solo agrega soporte para más formatos de imagen como AVIF y HEIC", correct: false, explanation: "Los formatos adicionales son una mejora menor; la diferencia principal es la incorporación de modelos de visión-lenguaje." },
      { text: "Elimina la detección de objetos para enfocarse solo en OCR", correct: false, explanation: "Image Analysis 4.0 mantiene todas las capacidades anteriores y añade nuevas; no elimina funcionalidades." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/computer-vision/overview-image-analysis"
  },
  {
    domain: "Dominio 2 - Visión con Foundry",
    text: "¿Qué capacidad de Azure AI Vision permite leer texto manuscrito e impreso de imágenes y documentos PDF con alta precisión?",
    multiple: false,
    options: [
      { text: "Image captioning", correct: false, explanation: "Image captioning genera descripciones narrativas de imágenes; no extrae texto específico." },
      { text: "OCR (Read API)", correct: true, explanation: "La Read API de Azure AI Vision usa OCR de última generación para extraer texto impreso y manuscrito de imágenes, PDF y archivos TIFF de múltiples páginas con alta precisión y soporte para más de 150 idiomas." },
      { text: "Object detection", correct: false, explanation: "Object detection localiza objetos con bounding boxes; no extrae texto de documentos." },
      { text: "Spatial analysis", correct: false, explanation: "Spatial analysis analiza el movimiento y posición de personas en un espacio físico; no extrae texto." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/computer-vision/overview-ocr"
  },
  {
    domain: "Dominio 2 - Visión con Foundry",
    text: "¿Para qué se usa Azure AI Vision - Spatial Analysis?",
    multiple: false,
    options: [
      { text: "Para extraer texto de imágenes tomadas en espacios físicos como tiendas o almacenes", correct: false, explanation: "La extracción de texto es OCR; Spatial Analysis analiza el movimiento de personas." },
      { text: "Para analizar vídeo en tiempo real y comprender el movimiento y comportamiento de personas en espacios físicos", correct: true, explanation: "Spatial Analysis procesa transmisiones de vídeo para contar personas, detectar distancias entre ellas, identificar zonas de permanencia y analizar el flujo de movimiento en espacios como tiendas, fábricas u hospitales." },
      { text: "Para crear mapas 3D de entornos a partir de imágenes 2D", correct: false, explanation: "La reconstrucción 3D no es una función de Spatial Analysis; analiza movimiento y comportamiento en vídeo." },
      { text: "Para detectar defectos de fabricación en líneas de producción industrial", correct: false, explanation: "La detección de defectos se puede lograr con Custom Vision; Spatial Analysis está orientado al análisis de personas en espacios." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/computer-vision/intro-to-spatial-analysis-public-preview"
  },

  /* ── DOMINIO 2 · Document Intelligence avanzado ──────────────────── */
  {
    domain: "Dominio 2 - Azure Content Understanding",
    text: "¿Qué modelo precompilado de Azure AI Document Intelligence extrae automáticamente los campos clave de una factura comercial (número de factura, fecha, líneas de pedido, totales)?",
    multiple: false,
    options: [
      { text: "Modelo de recibo (Receipt model)", correct: false, explanation: "El modelo de recibo está optimizado para tickets de compra de retail; el modelo de factura es el adecuado para facturas comerciales B2B." },
      { text: "Modelo de factura (Invoice model)", correct: true, explanation: "El Invoice model de Document Intelligence está preentrenado para extraer campos estándar de facturas comerciales: número, fecha, proveedor, cliente, líneas de pedido, subtotales, impuestos y totales." },
      { text: "Modelo de diseño (Layout model)", correct: false, explanation: "El Layout model extrae la estructura del documento (tablas, párrafos, títulos) pero no campos semánticos específicos de facturas." },
      { text: "Modelo general (General Document model)", correct: false, explanation: "El General Document model extrae pares clave-valor genéricos; el Invoice model es el especializado para facturas." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/document-intelligence/concept-invoice"
  },
  {
    domain: "Dominio 2 - Azure Content Understanding",
    text: "¿Cuántos documentos de ejemplo se necesitan mínimamente para entrenar un modelo personalizado de Azure AI Document Intelligence?",
    multiple: false,
    options: [
      { text: "1 documento", correct: false, explanation: "Un solo documento no es suficiente para entrenar un modelo personalizado con precisión acceptable." },
      { text: "5 documentos etiquetados", correct: true, explanation: "Azure AI Document Intelligence permite comenzar a entrenar un modelo personalizado con un mínimo de 5 documentos etiquetados, aunque se recomienda usar más para mayor precisión." },
      { text: "100 documentos", correct: false, explanation: "100 documentos no es el mínimo requerido; se puede comenzar con 5, aunque más documentos mejoran la precisión." },
      { text: "1000 documentos", correct: false, explanation: "1000 documentos es un número muy alto; el mínimo real es 5 documentos etiquetados." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/document-intelligence/concept-custom"
  },

  /* ── DOMINIO 1 · Conceptos adicionales de ML ─────────────────────── */
  {
    domain: "Dominio 1 - Modelos de IA",
    text: "¿Qué es el aprendizaje automático supervisado?",
    multiple: false,
    options: [
      { text: "Un tipo de aprendizaje donde el modelo aprende explorando el entorno y recibiendo recompensas o penalizaciones", correct: false, explanation: "Eso describe el aprendizaje por refuerzo (reinforcement learning), no el supervisado." },
      { text: "Un tipo de aprendizaje donde el modelo se entrena con datos etiquetados (pares entrada-salida correcta)", correct: true, explanation: "En el aprendizaje supervisado, el modelo aprende la relación entre entradas y salidas a partir de ejemplos etiquetados. Las tareas típicas son clasificación y regresión." },
      { text: "Un tipo de aprendizaje donde el modelo descubre patrones en datos sin etiquetas", correct: false, explanation: "Eso describe el aprendizaje no supervisado (clustering, reducción de dimensionalidad)." },
      { text: "Un proceso donde un humano revisa y corrige cada predicción del modelo en tiempo real", correct: false, explanation: "La revisión humana en tiempo real no es la definición de aprendizaje supervisado; el término hace referencia al tipo de datos usados para entrenar el modelo." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-automated-ml"
  },
  {
    domain: "Dominio 1 - Modelos de IA",
    text: "¿Qué es AutoML (Automated Machine Learning) en Azure Machine Learning?",
    multiple: false,
    options: [
      { text: "Un servicio que genera código Python automáticamente para machine learning", correct: false, explanation: "AutoML no genera código; automatiza el proceso de selección de algoritmos y ajuste de hiperparámetros." },
      { text: "Una funcionalidad que automatiza la selección de algoritmos, ingeniería de características y ajuste de hiperparámetros para encontrar el mejor modelo", correct: true, explanation: "AutoML de Azure Machine Learning prueba automáticamente múltiples algoritmos y configuraciones, seleccionando el modelo con mejor rendimiento sin que el usuario necesite experiencia profunda en ML." },
      { text: "Un servicio de despliegue automático de modelos a producción sin intervención humana", correct: false, explanation: "El despliegue automático es parte de MLOps; AutoML se enfoca en el entrenamiento y selección del mejor modelo." },
      { text: "Una herramienta para etiquetar automáticamente los datos de entrenamiento", correct: false, explanation: "El etiquetado automático es una función separada en Azure ML (Data Labeling); AutoML automatiza la selección de algoritmos." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-automated-ml"
  },
  {
    domain: "Dominio 1 - Modelos de IA",
    text: "¿Cuál es la diferencia entre regresión y clasificación en machine learning?",
    multiple: false,
    options: [
      { text: "La regresión usa redes neuronales; la clasificación usa árboles de decisión", correct: false, explanation: "Ambas tareas pueden realizarse con redes neuronales, árboles de decisión u otros algoritmos; la diferencia está en el tipo de salida." },
      { text: "La regresión predice un valor numérico continuo; la clasificación predice una categoría discreta", correct: true, explanation: "Regresión: predice valores como precio de una casa o temperatura. Clasificación: predice categorías como 'spam/no spam', 'positivo/negativo' o 'perro/gato/pájaro'." },
      { text: "La clasificación es más precisa que la regresión en todos los casos", correct: false, explanation: "La precisión depende del problema y los datos; ninguna es inherentemente más precisa que la otra." },
      { text: "La regresión solo funciona con imágenes; la clasificación solo con texto", correct: false, explanation: "Ambas técnicas funcionan con cualquier tipo de datos estructurados; no están limitadas a un tipo de dato." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-automated-ml"
  },
  {
    domain: "Dominio 1 - Modelos de IA",
    text: "¿Qué es el clustering en machine learning no supervisado?",
    multiple: false,
    options: [
      { text: "Predecir a qué grupo pertenecerá un nuevo elemento usando etiquetas predefinidas", correct: false, explanation: "Predecir con etiquetas predefinidas es clasificación (supervisada); el clustering agrupa sin etiquetas previas." },
      { text: "Agrupar automáticamente elementos similares en conjuntos (clusters) sin etiquetas predefinidas", correct: true, explanation: "El clustering identifica grupos naturales en los datos basándose en similitudes, sin necesitar etiquetas. Se usa para segmentar clientes, detectar anomalías o explorar datos." },
      { text: "Un proceso de limpieza de datos que elimina valores atípicos (outliers)", correct: false, explanation: "La limpieza de datos es una etapa de preprocesamiento; el clustering es un algoritmo de aprendizaje no supervisado." },
      { text: "El proceso de dividir el dataset en conjuntos de entrenamiento y prueba", correct: false, explanation: "Dividir el dataset en train/test es una práctica de evaluación; el clustering es un algoritmo de agrupamiento." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-automated-ml"
  },

  /* ── DOMINIO 2 · Seguridad y Gobernanza avanzadas ────────────────── */
  {
    domain: "Dominio 2 - Seguridad en Foundry",
    text: "¿Qué es el 'groundedness detection' en Azure AI Content Safety?",
    multiple: false,
    options: [
      { text: "Una función que verifica si el usuario está conectado a internet antes de enviar una solicitud", correct: false, explanation: "Groundedness detection no tiene relación con la conectividad de red." },
      { text: "Una función que detecta si la respuesta de un LLM está fundamentada en las fuentes de contexto proporcionadas o si contiene información inventada", correct: true, explanation: "Groundedness detection analiza si las afirmaciones en la respuesta del modelo están respaldadas por los documentos de contexto, identificando alucinaciones o información no fundamentada." },
      { text: "Una herramienta que verifica si el modelo está usando la versión más reciente de sus pesos", correct: false, explanation: "Las actualizaciones de pesos son gestionadas por Microsoft; groundedness detection evalúa la calidad de las respuestas." },
      { text: "Un sistema de autenticación que verifica la identidad del usuario antes de cada llamada a la API", correct: false, explanation: "La autenticación se gestiona con Azure Active Directory y claves de API; groundedness detection evalúa la veracidad de las respuestas." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/content-safety/concepts/groundedness"
  },
  {
    domain: "Dominio 2 - Seguridad en Foundry",
    text: "¿Qué mecanismo de Azure AI Foundry ayuda a detectar vulnerabilidades de seguridad en aplicaciones de IA generativa antes del despliegue?",
    multiple: false,
    options: [
      { text: "Azure Security Center", correct: false, explanation: "Azure Security Center protege la infraestructura de nube; para vulnerabilidades específicas de IA generativa, Foundry ofrece evaluaciones de seguridad." },
      { text: "Safety evaluations y red teaming con IA en Foundry", correct: true, explanation: "Foundry incluye evaluaciones de seguridad automatizadas y capacidades de red teaming con IA que simulan ataques como prompt injection, jailbreaking y generación de contenido dañino para detectar vulnerabilidades antes del despliegue." },
      { text: "Azure DDoS Protection", correct: false, explanation: "DDoS Protection protege contra ataques de denegación de servicio en la red; no evalúa vulnerabilidades de comportamiento de modelos de IA." },
      { text: "Azure Key Vault", correct: false, explanation: "Key Vault protege secretos y claves de cifrado; no evalúa la seguridad del comportamiento de los modelos de IA." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/concepts/evaluation-approach-gen-ai"
  },
  {
    domain: "Dominio 2 - Seguridad en Foundry",
    text: "¿Qué es el 'jailbreaking' en el contexto de los modelos de IA?",
    multiple: false,
    options: [
      { text: "Un proceso para desbloquear capacidades de hardware en servidores de IA", correct: false, explanation: "Jailbreaking en IA no tiene relación con hardware; es un ataque a las restricciones de comportamiento del modelo." },
      { text: "Intentar manipular al modelo para que ignore sus restricciones de seguridad y genere contenido que normalmente rechazaría", correct: true, explanation: "El jailbreaking intenta mediante prompts ingeniosos hacer que el modelo ignore su system message y sus filtros de seguridad, generando contenido dañino, privado o restringido." },
      { text: "El proceso de extraer los pesos del modelo para copiarlos sin licencia", correct: false, explanation: "Extraer pesos es robo de modelo (model extraction); jailbreaking es manipular el comportamiento del modelo en inferencia." },
      { text: "Una técnica de optimización que acelera la inferencia del modelo en dispositivos con recursos limitados", correct: false, explanation: "La optimización para inferencia rápida es quantización o pruning; jailbreaking es un ataque de seguridad." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/content-safety/overview"
  },

  /* ── DOMINIO 1 · IA Responsable avanzado ─────────────────────────── */
  {
    domain: "Dominio 1 - IA Responsable",
    text: "¿Qué herramienta de Microsoft ayuda a los equipos a evaluar y mitigar el sesgo en los modelos de machine learning?",
    multiple: false,
    options: [
      { text: "Azure Monitor", correct: false, explanation: "Azure Monitor supervisa el rendimiento e infraestructura; no evalúa el sesgo en modelos de ML." },
      { text: "Responsible AI Dashboard en Azure Machine Learning", correct: true, explanation: "El Responsible AI Dashboard de Azure ML integra herramientas como Error Analysis, Fairness, Interpretability y Causal Analysis para identificar, diagnosticar y mitigar problemas de sesgo y equidad en los modelos." },
      { text: "Azure Policy", correct: false, explanation: "Azure Policy aplica reglas de gobernanza de infraestructura; no evalúa el sesgo en modelos de ML." },
      { text: "Azure AI Content Safety", correct: false, explanation: "Content Safety filtra contenido dañino en tiempo de inferencia; no analiza el sesgo estructural del modelo." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-responsible-ai-dashboard"
  },
  {
    domain: "Dominio 1 - IA Responsable",
    text: "¿Qué principio de IA responsable se aplica cuando una empresa diseña su sistema de IA de reconocimiento facial garantizando que funcione con igual precisión para personas de todos los grupos étnicos?",
    multiple: false,
    options: [
      { text: "Confiabilidad y seguridad", correct: false, explanation: "Confiabilidad trata sobre que el sistema funcione como se espera técnicamente; garantizar igual precisión para todos los grupos étnicos es una cuestión de equidad." },
      { text: "Equidad", correct: true, explanation: "La equidad (Fairness) exige que los sistemas de IA traten a todas las personas de manera justa, con igual rendimiento entre grupos demográficos, sin discriminar por etnia, género u otras características." },
      { text: "Transparencia", correct: false, explanation: "Transparencia trata sobre la comprensibilidad del sistema; garantizar igual rendimiento entre grupos es equidad." },
      { text: "Privacidad y seguridad", correct: false, explanation: "Privacidad protege los datos biométricos; la igualdad de rendimiento entre grupos étnicos es equidad." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-responsible-ai"
  },

  /* ── DOMINIO 2 · Preguntas de escenario ──────────────────────────── */
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "Una empresa de e-commerce quiere agregar búsqueda por imagen a su tienda (el usuario sube foto de un producto y encuentra artículos similares). ¿Qué combinación de servicios de Azure es más adecuada?",
    multiple: false,
    options: [
      { text: "Azure AI Custom Vision + Azure SQL Database", correct: false, explanation: "Custom Vision clasifica imágenes en categorías predefinidas; para búsqueda por similitud visual se necesitan embeddings de imágenes y búsqueda vectorial." },
      { text: "Azure AI Vision (embeddings de imágenes) + Azure AI Search (búsqueda vectorial)", correct: true, explanation: "Azure AI Vision genera embeddings vectoriales de imágenes, y Azure AI Search con índice vectorial permite encontrar imágenes similares por distancia coseno, habilitando búsqueda visual semántica." },
      { text: "Azure AI Face + Azure Cosmos DB", correct: false, explanation: "Azure AI Face analiza rostros; no está diseñado para búsqueda de productos por similitud visual." },
      { text: "DALL-E + Azure Blob Storage", correct: false, explanation: "DALL-E genera imágenes; no hace búsqueda por similitud visual de imágenes existentes." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/computer-vision/concept-image-retrieval"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "Un hospital quiere automatizar la extracción de diagnósticos, medicamentos y fechas de notas clínicas no estructuradas. ¿Qué servicio de Azure AI es el más apropiado?",
    multiple: false,
    options: [
      { text: "Azure AI Vision OCR", correct: false, explanation: "OCR extrae todo el texto sin analizar el significado médico; Text Analytics for Health comprende el contexto clínico." },
      { text: "Azure AI Language - Text Analytics for Health", correct: true, explanation: "Text Analytics for Health extrae y estructura entidades clínicas como diagnósticos, medicamentos, dosificaciones, síntomas y relaciones entre ellos de texto médico no estructurado." },
      { text: "Azure AI Document Intelligence - modelo de factura", correct: false, explanation: "El modelo de factura está optimizado para documentos financieros; Text Analytics for Health es el servicio especializado en texto médico." },
      { text: "Azure AI Custom Vision", correct: false, explanation: "Custom Vision analiza imágenes; para texto médico no estructurado se usa Text Analytics for Health." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/language-service/text-analytics-for-health/overview"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Cuál es la forma recomendada de almacenar y gestionar de forma segura las claves de API y cadenas de conexión usadas por una aplicación de Azure AI en producción?",
    multiple: false,
    options: [
      { text: "Incluirlas directamente en el código fuente del repositorio", correct: false, explanation: "Incluir credenciales en el código es una práctica de seguridad muy peligrosa; compromete las claves si el repositorio es accesible." },
      { text: "Almacenarlas en variables de entorno del servidor de producción sin cifrado adicional", correct: false, explanation: "Las variables de entorno sin cifrado adicional son mejor que el código fuente, pero no es la práctica recomendada de Azure para producción." },
      { text: "Usar Azure Key Vault para almacenar secretos y acceder a ellos con Managed Identity", correct: true, explanation: "Azure Key Vault almacena secretos, claves y certificados con cifrado y auditoría. Managed Identity permite a la aplicación acceder a Key Vault sin manejar credenciales explícitas, eliminando el riesgo de filtración." },
      { text: "Compartirlas por correo electrónico cifrado con los desarrolladores del equipo", correct: false, explanation: "Compartir claves por email, aunque cifrado, no es la práctica de gestión de secretos recomendada para producción en Azure." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/key-vault/general/overview"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Qué es un 'deployment' de modelo en Azure AI Foundry y qué proporciona?",
    multiple: false,
    options: [
      { text: "Un proceso de entrenamiento del modelo en los datos del usuario", correct: false, explanation: "El entrenamiento/fine-tuning es diferente al deployment; un deployment hace el modelo disponible para inferencia." },
      { text: "Una instancia del modelo alojada en Azure que expone un endpoint de API REST para realizar inferencias", correct: true, explanation: "Un deployment en Foundry provisiona el modelo seleccionado, genera un endpoint HTTPS con una clave de API y define la cuota de tokens por minuto, permitiendo a las aplicaciones llamar al modelo vía REST." },
      { text: "Un contenedor Docker que se descarga al servidor local del cliente", correct: false, explanation: "Los modelos de Azure OpenAI no se descargan a servidores locales; son servicios gestionados que exponen endpoints de API." },
      { text: "Una copia de seguridad del modelo para recuperación ante desastres", correct: false, explanation: "Las copias de seguridad de modelos las gestiona Microsoft; un deployment es una instancia activa del modelo lista para inferencia." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/how-to/create-resource"
  },

  /* ── DOMINIO 2 · Azure OpenAI avanzado ───────────────────────────── */
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Qué es el contexto (context window) de un modelo de lenguaje y por qué importa?",
    multiple: false,
    options: [
      { text: "La velocidad en tokens por segundo con la que el modelo genera respuestas", correct: false, explanation: "La velocidad de generación es la latencia/throughput; el contexto es la cantidad de texto que el modelo puede 'ver' a la vez." },
      { text: "La cantidad máxima de tokens (texto de entrada + salida) que el modelo puede procesar en una sola llamada", correct: true, explanation: "El context window define cuánto texto puede considerar el modelo simultáneamente. Un contexto más grande permite conversaciones más largas y documentos más extensos, pero aumenta el costo y la latencia." },
      { text: "El tamaño del dataset con el que fue entrenado el modelo", correct: false, explanation: "El dataset de entrenamiento es independiente del context window; este define el límite de inferencia, no de entrenamiento." },
      { text: "La cantidad de idiomas que el modelo puede procesar en una sola sesión", correct: false, explanation: "El soporte multiidioma es independiente del context window; este mide tokens, no idiomas." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/models"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Cuál es el propósito del parámetro 'max_tokens' al llamar a un modelo de Azure OpenAI?",
    multiple: false,
    options: [
      { text: "Limitar el número de solicitudes por minuto a la API", correct: false, explanation: "El límite de solicitudes por minuto es el rate limit, no max_tokens." },
      { text: "Establecer el número máximo de tokens que el modelo puede generar en su respuesta", correct: true, explanation: "max_tokens controla la longitud máxima de la respuesta generada. Si el modelo alcanza ese límite, la respuesta se trunca. Permite controlar costos y evitar respuestas excesivamente largas." },
      { text: "Definir el tamaño del dataset de contexto que se pasa al modelo", correct: false, explanation: "El contexto completo (prompt + historial) se envía en el cuerpo de la solicitud; max_tokens solo controla la longitud de la respuesta." },
      { text: "Configurar el número máximo de usuarios simultáneos que pueden usar el deployment", correct: false, explanation: "La concurrencia se gestiona con la cuota del deployment; max_tokens es un parámetro de la llamada individual al modelo." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/reference"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Qué modelo de Azure OpenAI está optimizado para tareas de razonamiento complejo con mayor tiempo de 'pensamiento' antes de responder?",
    multiple: false,
    options: [
      { text: "GPT-4o", correct: false, explanation: "GPT-4o está optimizado para velocidad y eficiencia multimodal; los modelos de razonamiento profundo son la serie o1." },
      { text: "GPT-3.5 Turbo", correct: false, explanation: "GPT-3.5 Turbo es un modelo de menor capacidad; los modelos de razonamiento complejo son la serie o1." },
      { text: "o1 / o3 (modelos de razonamiento)", correct: true, explanation: "La serie o1/o3 de OpenAI usa razonamiento encadenado interno (chain-of-thought interno) para resolver problemas complejos de matemáticas, ciencias y codificación, a costa de mayor latencia." },
      { text: "DALL-E 3", correct: false, explanation: "DALL-E 3 es un modelo de generación de imágenes; no realiza razonamiento complejo de texto." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/models"
  },

  /* ── DOMINIO 2 · Voz avanzada con Foundry ────────────────────────── */
  {
    domain: "Dominio 2 - Texto y Voz con Foundry",
    text: "¿Qué es Azure AI Speech - Custom Speech y para qué se usa?",
    multiple: false,
    options: [
      { text: "Un servicio para crear voces sintéticas personalizadas de marca", correct: false, explanation: "Crear voces de marca es Custom Neural Voice; Custom Speech mejora el reconocimiento de voz." },
      { text: "Una funcionalidad que mejora la precisión del reconocimiento de voz para vocabularios técnicos, marcas o acentos específicos", correct: true, explanation: "Custom Speech permite adaptar el modelo de Speech-to-Text a términos técnicos, nombres de productos, jerga del sector o acentos regionales específicos, mejorando la precisión en esos contextos." },
      { text: "Un modelo que convierte texto en voz con entonación personalizable", correct: false, explanation: "Convertir texto en voz es Text-to-Speech; Custom Speech mejora el reconocimiento (voz a texto)." },
      { text: "Un servicio para transcribir reuniones de múltiples hablantes con identificación de quién habla", correct: false, explanation: "La transcripción con identificación de hablantes es Speaker Diarization; Custom Speech mejora el vocabulario reconocido." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/speech-service/custom-speech-overview"
  },
  {
    domain: "Dominio 2 - Texto y Voz con Foundry",
    text: "¿Qué capacidad de Azure AI Speech permite identificar y separar las voces de diferentes hablantes en una grabación de audio?",
    multiple: false,
    options: [
      { text: "Speech translation", correct: false, explanation: "Speech translation traduce entre idiomas; no identifica quién habla en cada momento." },
      { text: "Speaker diarization", correct: true, explanation: "Speaker diarization segmenta una grabación de audio identificando qué partes corresponden a cada hablante diferente, útil para transcribir reuniones, entrevistas o llamadas con múltiples participantes." },
      { text: "Custom Neural Voice", correct: false, explanation: "Custom Neural Voice crea voces sintéticas; no identifica hablantes en grabaciones." },
      { text: "Keyword recognition", correct: false, explanation: "Keyword recognition detecta palabras de activación específicas; no distingue entre hablantes." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/speech-service/get-started-stt-diarization"
  },

  /* ── DOMINIO 1 · Conceptos de IA Generativa adicionales ──────────── */
  {
    domain: "Dominio 1 - IA Generativa",
    text: "¿Qué es el 'token' en el contexto de los modelos de lenguaje?",
    multiple: false,
    options: [
      { text: "Una clave de autenticación usada para llamar a la API del modelo", correct: false, explanation: "Las claves de autenticación son API keys; en el contexto de LLMs, token se refiere a la unidad de texto." },
      { text: "La unidad básica de texto que procesa el modelo, que puede ser una palabra, parte de una palabra o un carácter", correct: true, explanation: "Los LLMs no procesan palabras enteras sino tokens, que son fragmentos de texto (subpalabras). En inglés, 1 token ≈ 4 caracteres. Los costos de los modelos se calculan por número de tokens procesados." },
      { text: "Un identificador numérico único asignado a cada solicitud a la API", correct: false, explanation: "Los identificadores de solicitud son IDs de traza; los tokens son las unidades de texto del modelo." },
      { text: "El límite de velocidad máxima de solicitudes por segundo a la API", correct: false, explanation: "El límite de velocidad es el rate limit (TPM/RPM); los tokens son unidades de texto del modelo." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/prompt-engineering"
  },
  {
    domain: "Dominio 1 - IA Generativa",
    text: "¿Cuál es la función principal de un 'agente de IA' en comparación con un chatbot tradicional?",
    multiple: false,
    options: [
      { text: "Los agentes son más rápidos que los chatbots porque usan modelos más pequeños", correct: false, explanation: "La velocidad no es la diferencia definitoria; los agentes pueden usar modelos de cualquier tamaño." },
      { text: "Los agentes pueden planificar, tomar decisiones y ejecutar acciones de múltiples pasos de forma autónoma; los chatbots solo responden turno a turno", correct: true, explanation: "Un agente de IA tiene objetivos, puede descomponerlos en pasos, usar herramientas (búsqueda, código, APIs) y persistir en tareas complejas. Un chatbot tradicional solo responde a la entrada inmediata del usuario." },
      { text: "Los agentes solo funcionan con texto; los chatbots pueden manejar voz e imágenes", correct: false, explanation: "Los agentes modernos pueden ser multimodales; la diferencia clave es su capacidad de planificación y acción autónoma." },
      { text: "Los agentes requieren supervisión humana en cada paso; los chatbots son completamente autónomos", correct: false, explanation: "Es al contrario: los agentes tienen mayor autonomía; los chatbots son más lineales y reactivos." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/agents/overview"
  },
  {
    domain: "Dominio 1 - IA Generativa",
    text: "¿Qué significa que un modelo de IA sea 'multimodal'?",
    multiple: false,
    options: [
      { text: "Que el modelo puede ejecutarse en múltiples regiones de Azure simultáneamente", correct: false, explanation: "La disponibilidad multirregional es una característica de despliegue; multimodal se refiere a los tipos de datos que el modelo puede procesar." },
      { text: "Que el modelo puede procesar y generar múltiples tipos de datos como texto, imágenes, audio o vídeo", correct: true, explanation: "Un modelo multimodal acepta diferentes tipos de entrada (texto + imágenes, audio + texto, etc.) y puede generar diferentes tipos de salida. Ejemplo: GPT-4o procesa texto e imágenes y genera texto." },
      { text: "Que el modelo fue entrenado con datos de múltiples idiomas", correct: false, explanation: "El soporte multiidioma describe las capacidades lingüísticas; multimodal se refiere a los tipos de datos (texto, imagen, audio)." },
      { text: "Que el modelo puede ser usado tanto en modo práctica como en modo examen", correct: false, explanation: "Los modos de uso son una característica de la aplicación; multimodal es una propiedad arquitectónica del modelo." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/models"
  },

  /* ── DOMINIO 2 · Preguntas de escenario adicionales ──────────────── */
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "Una aseguradora quiere procesar miles de formularios de reclamación en PDF diariamente, extrayendo campos como número de póliza, fecha del siniestro e importe. ¿Qué servicio es el más adecuado?",
    multiple: false,
    options: [
      { text: "Azure AI Language con NER", correct: false, explanation: "NER extrae entidades de texto libre; para formularios estructurados con campos específicos, Document Intelligence es más preciso y eficiente." },
      { text: "Azure AI Document Intelligence con un modelo personalizado entrenado con los formularios de la aseguradora", correct: true, explanation: "Document Intelligence con modelo personalizado se entrena con los formularios específicos de la empresa, extrayendo con precisión los campos exactos del negocio a escala, ideal para procesamiento masivo de documentos estructurados." },
      { text: "Azure AI Vision OCR + análisis manual de los textos extraídos", correct: false, explanation: "OCR extrae todo el texto sin estructura; Document Intelligence extrae directamente los campos estructurados sin post-procesamiento manual." },
      { text: "Azure OpenAI GPT-4o procesando cada PDF como imagen", correct: false, explanation: "GPT-4o puede analizar imágenes de documentos, pero Document Intelligence está optimizado para extracción estructurada masiva con mayor precisión y menor costo a escala." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/document-intelligence/concept-custom"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "Un equipo de desarrollo quiere asegurarse de que su aplicación de IA generativa no genere contenido ofensivo o violento. ¿Qué servicio deben integrar?",
    multiple: false,
    options: [
      { text: "Azure AI Language - análisis de sentimientos", correct: false, explanation: "El análisis de sentimientos clasifica texto como positivo/negativo; no detecta contenido ofensivo o violento de forma específica." },
      { text: "Azure AI Content Safety", correct: true, explanation: "Azure AI Content Safety detecta y filtra contenido dañino en texto e imágenes en categorías de odio, violencia, autolesiones y contenido sexual, con niveles de severidad configurables para la aplicación." },
      { text: "Azure AD Conditional Access", correct: false, explanation: "Conditional Access controla el acceso de usuarios; no filtra el contenido generado por modelos de IA." },
      { text: "Azure API Management con throttling", correct: false, explanation: "API Management gestiona el tráfico de API; no filtra el contenido dañino generado por modelos." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/content-safety/overview"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Cuál de las siguientes es una ventaja clave de usar Managed Identity con Azure AI Services en lugar de claves de API?",
    multiple: false,
    options: [
      { text: "Las Managed Identities son gratuitas; las claves de API tienen costo adicional", correct: false, explanation: "El costo no es la ventaja diferenciadora; ambos mecanismos de autenticación no tienen costo separado." },
      { text: "Elimina la necesidad de almacenar y rotar credenciales manualmente, reduciendo el riesgo de filtración de secretos", correct: true, explanation: "Con Managed Identity, la aplicación se autentica automáticamente con Azure AD sin manejar claves explícitas. No hay secretos que almacenar, rotar ni que puedan filtrarse accidentalmente en el código." },
      { text: "Las Managed Identities ofrecen menor latencia que las claves de API", correct: false, explanation: "La latencia de inferencia no está determinada por el mecanismo de autenticación; ambos tienen latencia de autenticación negligible." },
      { text: "Solo las Managed Identities permiten acceder a modelos GPT-4; las claves API están restringidas a modelos más pequeños", correct: false, explanation: "El acceso a los modelos no depende del mecanismo de autenticación; tanto las claves API como las Managed Identities dan acceso a los mismos modelos." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/authentication"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Qué herramienta de Azure AI Foundry permite crear un flujo de IA de forma visual conectando nodos de LLM, búsqueda, Python y herramientas externas?",
    multiple: false,
    options: [
      { text: "Azure Machine Learning Designer", correct: false, explanation: "ML Designer crea pipelines de machine learning clásico; Prompt Flow es la herramienta visual de Foundry para flujos de IA generativa." },
      { text: "Prompt Flow", correct: true, explanation: "Prompt Flow en Azure AI Foundry permite diseñar visualmente flujos de IA conectando nodos (LLM, Python, búsqueda, herramientas), probarlos, evaluarlos y desplegarlos como endpoints en producción." },
      { text: "Azure Logic Apps", correct: false, explanation: "Logic Apps orquesta flujos de negocio y conectores SaaS; Prompt Flow está especializado en flujos de IA generativa con LLMs." },
      { text: "Azure Data Factory", correct: false, explanation: "Data Factory orquesta pipelines de datos ETL; Prompt Flow es para flujos de IA generativa." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/how-to/prompt-flow"
  },

  /* ── DOMINIO 1 · Casos de uso de IA ─────────────────────────────── */
  {
    domain: "Dominio 1 - Cargas de trabajo: Texto",
    text: "¿Qué tipo de tarea de NLP resume documentos largos en párrafos cortos que capturan las ideas principales?",
    multiple: false,
    options: [
      { text: "Clasificación de texto", correct: false, explanation: "La clasificación asigna etiquetas a documentos; no genera resúmenes en texto." },
      { text: "Extracción de frases clave", correct: false, explanation: "La extracción de frases clave identifica términos importantes, no genera resúmenes coherentes en prosa." },
      { text: "Resumen automático (summarization)", correct: true, explanation: "El resumen automático puede ser extractivo (selecciona frases del original) o abstractivo (genera nuevo texto). Azure AI Language y los LLMs de Azure OpenAI soportan ambos tipos." },
      { text: "Análisis de sentimientos", correct: false, explanation: "El análisis de sentimientos determina la polaridad emocional del texto; no produce resúmenes." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/language-service/summarization/overview"
  },
  {
    domain: "Dominio 1 - Cargas de trabajo: Texto",
    text: "¿Cuál es el uso principal de Azure AI Language - Question Answering (antes QnA Maker)?",
    multiple: false,
    options: [
      { text: "Entrenar modelos de clasificación de texto con datos personalizados", correct: false, explanation: "La clasificación personalizada usa Custom Text Classification de Language; Question Answering responde preguntas desde una base de conocimiento." },
      { text: "Construir bases de conocimiento que responden preguntas en lenguaje natural a partir de documentos, FAQs o URLs", correct: true, explanation: "Question Answering permite crear una base de conocimiento (pares pregunta-respuesta) desde documentos existentes y responder preguntas de usuarios con las respuestas más relevantes encontradas en esa base." },
      { text: "Analizar el sentimiento de preguntas enviadas por los clientes", correct: false, explanation: "El análisis de sentimientos es una función diferente de Azure AI Language; Question Answering extrae respuestas de una base de conocimiento." },
      { text: "Traducir preguntas de clientes al idioma del agente de soporte", correct: false, explanation: "La traducción es función de Azure AI Translator; Question Answering busca respuestas en la base de conocimiento." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/language-service/question-answering/overview"
  },
  {
    domain: "Dominio 1 - Cargas de trabajo: Visión",
    text: "¿Qué es el análisis de vídeo con Azure AI Vision y para qué casos de uso aplica?",
    multiple: false,
    options: [
      { text: "Solo extrae los fotogramas clave de un vídeo para comprimirlo", correct: false, explanation: "La compresión de vídeo no es una capacidad de Azure AI Vision; el análisis de vídeo extrae información semántica." },
      { text: "Analiza transmisiones de vídeo o archivos para detectar objetos, acciones, personas y eventos en el tiempo", correct: true, explanation: "Azure AI Vision para vídeo permite detectar objetos en movimiento, reconocer acciones, analizar afluencia de personas y extraer información semántica de secuencias de vídeo, aplicable en seguridad, retail e industria." },
      { text: "Convierte automáticamente vídeos a texto mediante subtitulado por IA", correct: false, explanation: "El subtitulado de vídeo (transcripción del audio) lo hace Azure AI Speech; el análisis de vídeo de Vision es sobre el contenido visual." },
      { text: "Es exclusivo para análisis de vídeos de vigilancia en entornos gubernamentales", correct: false, explanation: "Azure AI Vision para vídeo puede usarse en cualquier sector; no está limitado a entornos gubernamentales." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/computer-vision/intro-to-spatial-analysis-public-preview"
  },

  /* ── DOMINIO 2 · Preguntas multi-respuesta (multiple: true) ─────── */
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Cuáles de los siguientes son tipos de evaluaciones disponibles en Azure AI Foundry para medir la calidad de un modelo de IA generativa? (Selecciona todas las correctas)",
    multiple: true,
    options: [
      { text: "Groundedness (fundamentación en las fuentes)", correct: true, explanation: "Groundedness evalúa si las respuestas están basadas en los documentos de contexto proporcionados, detectando alucinaciones." },
      { text: "Relevance (relevancia de la respuesta)", correct: true, explanation: "Relevance mide si la respuesta aborda adecuadamente la pregunta del usuario." },
      { text: "Coherence (coherencia lingüística)", correct: true, explanation: "Coherence evalúa si la respuesta está bien estructurada y es fácil de leer." },
      { text: "Carbon footprint (huella de carbono)", correct: false, explanation: "La huella de carbono no es una métrica de calidad de respuestas de IA en Foundry; es una métrica de sostenibilidad de infraestructura." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/how-to/evaluate-generative-ai-app"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Cuáles de los siguientes modelos están disponibles en el catálogo de Azure AI Foundry? (Selecciona todos los correctos)",
    multiple: true,
    options: [
      { text: "GPT-4o (OpenAI)", correct: true, explanation: "GPT-4o de OpenAI está disponible en el catálogo de Azure AI Foundry a través de Azure OpenAI Service." },
      { text: "Llama 3 (Meta)", correct: true, explanation: "Los modelos Llama de Meta están disponibles en el catálogo de Foundry como modelos de terceros." },
      { text: "Phi-4 (Microsoft)", correct: true, explanation: "La familia Phi de Microsoft, incluyendo Phi-4, está disponible en el catálogo de Foundry." },
      { text: "Gemini (Google)", correct: false, explanation: "Los modelos Gemini de Google no están disponibles en el catálogo de Azure AI Foundry; se acceden a través de Google Cloud." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/how-to/model-catalog-overview"
  },
  {
    domain: "Dominio 1 - IA Responsable",
    text: "¿Cuáles de los siguientes son principios oficiales de IA responsable de Microsoft? (Selecciona todos los correctos)",
    multiple: true,
    options: [
      { text: "Equidad (Fairness)", correct: true, explanation: "Equidad es uno de los 6 principios oficiales: los sistemas de IA deben tratar a todas las personas de manera justa." },
      { text: "Confiabilidad y seguridad (Reliability & Safety)", correct: true, explanation: "Confiabilidad y seguridad es uno de los 6 principios: los sistemas deben funcionar de manera confiable y segura." },
      { text: "Rentabilidad (Profitability)", correct: false, explanation: "Rentabilidad no es un principio de IA responsable de Microsoft; es un objetivo de negocio, no un principio ético." },
      { text: "Inclusión (Inclusiveness)", correct: true, explanation: "Inclusión es uno de los 6 principios oficiales: los sistemas de IA deben beneficiar a todas las personas." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/machine-learning/concept-responsible-ai"
  },
  {
    domain: "Dominio 2 - Agentes de IA",
    text: "¿Cuáles de los siguientes son herramientas (tools) que Azure AI Agent Service soporta de forma nativa? (Selecciona todas las correctas)",
    multiple: true,
    options: [
      { text: "Code Interpreter (ejecución de código Python)", correct: true, explanation: "Code Interpreter está integrado nativamente en Azure AI Agent Service para ejecutar código Python en entorno seguro." },
      { text: "File Search (búsqueda en archivos subidos)", correct: true, explanation: "File Search permite al agente buscar información en documentos subidos por el usuario o el desarrollador." },
      { text: "Bing Search (búsqueda en internet)", correct: true, explanation: "La herramienta de Bing Search permite al agente obtener información actualizada de internet." },
      { text: "SQL Query Executor (ejecución de queries en bases de datos)", correct: false, explanation: "La ejecución directa de SQL no es una herramienta nativa de Agent Service; se puede implementar como función personalizada (function calling), pero no está integrada de forma nativa." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/agents/how-to/tools/overview"
  },

  /* ── DOMINIO 2 · Preguntas finales de repaso ─────────────────────── */
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿En qué se diferencia Azure AI Foundry de Azure AI Services?",
    multiple: false,
    options: [
      { text: "Foundry es para machine learning clásico; AI Services es para IA generativa", correct: false, explanation: "Es al contrario en cuanto al enfoque: Foundry está centrado en IA generativa; AI Services incluye servicios cognitivos preentrenados como Speech, Vision y Language." },
      { text: "Foundry es una plataforma de desarrollo de aplicaciones de IA generativa; AI Services son APIs listas para usar de capacidades de IA preentrenadas", correct: true, explanation: "Azure AI Services ofrece APIs de capacidades específicas preentrenadas (OCR, traducción, voz, etc.). Foundry es la plataforma integrada donde se orquestan esas capacidades junto con LLMs para construir aplicaciones completas de IA generativa." },
      { text: "Foundry reemplaza completamente a AI Services; no pueden usarse juntos", correct: false, explanation: "Foundry y AI Services son complementarios; Foundry puede conectarse a los servicios de AI Services a través de Connections." },
      { text: "AI Services es solo para Azure Government; Foundry está disponible en todas las regiones", correct: false, explanation: "Azure AI Services está disponible globalmente; esta no es la diferencia entre los dos." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/what-is-ai-studio"
  },
  {
    domain: "Dominio 2 - Microsoft Foundry",
    text: "¿Cuál es el propósito de los 'índices vectoriales' (vector indexes) en Azure AI Search al usarse con aplicaciones de IA generativa?",
    multiple: false,
    options: [
      { text: "Almacenar los pesos del modelo de lenguaje para acceso rápido durante la inferencia", correct: false, explanation: "Los pesos del modelo los gestiona Azure OpenAI Service; los índices vectoriales almacenan embeddings de documentos." },
      { text: "Almacenar embeddings de documentos para permitir búsqueda semántica por similitud, habilitando patrones RAG", correct: true, explanation: "Los índices vectoriales almacenan las representaciones vectoriales (embeddings) de los fragmentos de documentos. Al recibir una consulta, se convierte en embedding y se buscan los fragmentos más similares, que se pasan como contexto al LLM." },
      { text: "Indexar el historial de conversaciones de los usuarios para análisis de comportamiento", correct: false, explanation: "El historial de conversaciones puede almacenarse en bases de datos; los índices vectoriales son para búsqueda semántica de documentos." },
      { text: "Comprimir los documentos para reducir el costo de almacenamiento en Azure", correct: false, explanation: "Los embeddings vectoriales no comprimen documentos; son representaciones densas para búsqueda semántica, no para ahorro de almacenamiento." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/search/vector-search-overview"
  },
  {
    domain: "Dominio 1 - IA Generativa",
    text: "¿Cuál de las siguientes describe mejor el concepto de 'chain-of-thought prompting'?",
    multiple: false,
    options: [
      { text: "Encadenar múltiples llamadas a diferentes modelos en secuencia", correct: false, explanation: "Encadenar llamadas a modelos es un patrón de Prompt Flow o LangChain; chain-of-thought es una técnica de razonamiento dentro de un solo modelo." },
      { text: "Pedir al modelo que razone paso a paso antes de dar la respuesta final, mejorando la precisión en problemas complejos", correct: true, explanation: "Chain-of-thought prompting instruye al modelo a mostrar su razonamiento intermedio ('Pensemos paso a paso...') antes de la respuesta final, lo que mejora significativamente la precisión en problemas de matemáticas, lógica y razonamiento." },
      { text: "Proporcionar una cadena de ejemplos negativos para que el modelo evite ciertos comportamientos", correct: false, explanation: "Proporcionar ejemplos negativos es una técnica diferente; chain-of-thought es sobre mostrar el razonamiento paso a paso." },
      { text: "Un método de fine-tuning que encadena múltiples datasets de entrenamiento", correct: false, explanation: "Chain-of-thought es una técnica de prompting en inferencia, no un método de fine-tuning." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-services/openai/concepts/prompt-engineering"
  },
  {
    domain: "Dominio 2 - Seguridad en Foundry",
    text: "¿Qué significa 'responsible AI by design' en el contexto de Azure AI Foundry?",
    multiple: false,
    options: [
      { text: "Que todos los modelos en Foundry son de código abierto y auditables por cualquier persona", correct: false, explanation: "El código abierto no es un requisito de responsible AI by design; muchos modelos en Foundry son propietarios." },
      { text: "Que las herramientas de evaluación de seguridad, filtros de contenido y principios de IA responsable están integrados en la plataforma desde el inicio, no añadidos como complementos", correct: true, explanation: "Responsible AI by design significa que las salvaguardas (Content Safety, evaluaciones de seguridad, filtros de contenido, herramientas de equidad) son capacidades nativas de Foundry, no adiciones posteriores." },
      { text: "Que los usuarios deben firmar un contrato de uso responsable antes de acceder a Foundry", correct: false, explanation: "El contrato de servicios de Azure no es lo que define responsible AI by design; se refiere a la integración de salvaguardas en la plataforma." },
      { text: "Que Microsoft revisa manualmente cada respuesta generada por los modelos antes de enviarla al usuario", correct: false, explanation: "Microsoft no revisa manualmente cada respuesta; responsible AI by design se refiere a la integración de herramientas y filtros automáticos en la plataforma." }
    ],
    doc: "https://learn.microsoft.com/es-es/azure/ai-studio/concepts/responsible-use-of-ai-overview"
  }

]; // fin de QUESTIONS
