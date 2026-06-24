export interface Hotspot {
  id: string;
  label: string;
  position3d: [number, number, number];
  position2d: { top: string; left: string };
  title: string;
  description: string;
}

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'cabeza',
    label: '01',
    position3d: [0, 1.55, 0.85],
    position2d: { top: '20%', left: '52%' },
    title: 'Cabeza y articulación temporomandibular',
    description: 'Evaluación de la simetría facial y la articulación temporomandibular, clave para detectar tensión muscular y dolor oclusal.',
  },
  {
    id: 'mandibula',
    label: '02',
    position3d: [0, 1.05, 1.05],
    position2d: { top: '44%', left: '47%' },
    title: 'Mandíbula y arcada dentaria',
    description: 'Examen intraoral con oroscopia para identificar puntas de esmalte, ganchos y desgaste irregular de la arcada.',
  },
  {
    id: 'dientes',
    label: '03',
    position3d: [0, 0.95, 1.2],
    position2d: { top: '54%', left: '60%' },
    title: 'Piezas dentales',
    description: 'Revisión pieza por pieza: fracturas, caries, movilidad y piezas supernumerarias.',
  },
  {
    id: 'senos',
    label: '04',
    position3d: [0, 1.35, 0.55],
    position2d: { top: '28%', left: '34%' },
    title: 'Senos paranasales',
    description: 'Radiología digital para evaluar senos paranasales y descartar sinusitis de origen dental.',
  },
];
