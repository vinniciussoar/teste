export interface Service {
  id: string;
  index: string;
  name: string;
  short: string;
  sections: [string, string][];
}

export const SERVICES: Service[] = [
  {
    id: 'examen-odontoplastia',
    index: '01',
    name: 'Examen Odontológico y Odontoplastía',
    short: 'Ajuste oclusal para mejorar la masticación, el confort con el freno y el rendimiento.',
    sections: [
      ['¿Qué incluye?', 'Evaluación de cada pieza dental, encías y articulación temporomandibular. La odontoplastía (ajuste oclusal) corrige puntas de esmalte, ganchos y rampas que generan dolor y dificultan la masticación.'],
      ['Beneficios', 'Mejor masticación y aprovechamiento del alimento, mayor confort con el bocado y prevención de problemas mayores a futuro.'],
      ['Frecuencia recomendada', 'Revisión anual en caballos adultos; semestral en animales de alta competición o mayores de 15 años.'],
    ],
  },
  {
    id: 'exodoncias',
    index: '02',
    name: 'Exodoncias (Extracciones Dentales)',
    short: 'Diferentes técnicas de extracción con enfoque mínimamente invasivo.',
    sections: [
      ['Técnicas', 'Extracción intraoral con sedación (técnica de elección por su bajo trauma), extraoral para piezas fragmentadas o profundas, y quirúrgica para fracturas antiguas.'],
      ['Cuándo se indica', 'Dientes fracturados con dolor, caries profundas, piezas supernumerarias, movilidad excesiva o foco de sinusitis persistente.'],
      ['Cuidados posteriores', 'Dieta blanda de 7 a 10 días, antibioticoterapia controlada y revisión de control a los 15 días.'],
    ],
  },
  {
    id: 'sinusitis',
    index: '03',
    name: 'Tratamiento de Sinusitis Secundaria',
    short: 'Infección sinusal de origen dental, tratada en su causa y no solo en sus síntomas.',
    sections: [
      ['¿Qué es?', 'Infección de los senos paranasales causada por una afección dental, generalmente una raíz comprometida. Sin tratar el origen, los antibióticos solo enmascaran el problema.'],
      ['Signos característicos', 'Secreción nasal por una sola fosa, mal aliento intenso y, en algunos casos, asimetría facial.'],
      ['Protocolo', 'Radiografía y oroscopia para identificar la causa, tratamiento del foco infeccioso, drenaje y limpieza sinusal, con controles a los 15 y 30 días.'],
    ],
  },
  {
    id: 'cirugia-sinusal',
    index: '04',
    name: 'Cirugía Sinusal Avanzada',
    short: 'Trepanación y sinusotomía para acceso y tratamiento de los senos paranasales.',
    sections: [
      ['Cuándo es necesaria', 'Acumulación de material purulento, quistes o tumores que no responden al tratamiento conservador, o extracción de fragmentos dentales atrapados.'],
      ['Técnicas', 'Trepanación (apertura controlada para drenaje) y sinusotomía (acceso amplio para casos complejos), con apoyo de endoscopia sinusal cuando se requiere.'],
      ['Recuperación', 'Retorno a la actividad habitual en 15 a 30 días, con seguimiento y visitas de control.'],
    ],
  },
  {
    id: 'radiologia',
    index: '05',
    name: 'Radiología Digital de Cabeza Equina',
    short: 'Soporte en imágenes de alta precisión para estructuras dentales y óseas.',
    sections: [
      ['¿Para qué sirve?', 'Permite visualizar raíces dentales, senos paranasales, hueso alveolar y articulación temporomandibular — estructuras imposibles de evaluar a simple vista.'],
      ['Cuándo se indica', 'Sospecha de sinusitis, fractura dental, quiste apical, diente retenido, evaluación pre-quirúrgica y examen pre-compra.'],
      ['En campo', 'Radiografía digital realizada en el haras, con interpretación inmediata del especialista.'],
    ],
  },
  {
    id: 'pre-compra',
    index: '06',
    name: 'Examen Odontológico Pre-compra',
    short: 'Evaluación dental completa antes de adquirir el animal.',
    sections: [
      ['¿Qué incluye?', 'Evaluación de la oclusión, estado de las raíces, lesiones y posibles infecciones subclínicas, documentada con fotografías e informe escrito.'],
      ['¿Por qué importa?', 'Problemas no detectados pueden significar tratamientos costosos tras la compra. El examen protege la inversión y aporta transparencia.'],
      ['Entregable', 'Informe técnico detallado, firmado por el especialista.'],
    ],
  },
];

export const WA_LINK = 'https://wa.link/wzy3jo';
