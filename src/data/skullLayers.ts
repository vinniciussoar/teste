export interface SkullLayer {
  id: string;
  index: string;
  title: string;
  text: string;
  /** nombre del mesh en el GLB que corresponde a esta capa (cuando exista) */
  meshName?: string;
}

export const SKULL_LAYERS: SkullLayer[] = [
  {
    id: 'craneo',
    index: '01',
    title: 'Cráneo y articulación temporomandibular',
    text: 'Punto de partida del examen: simetría craneal y movimiento de la articulación temporomandibular, donde se origina buena parte del dolor oclusal.',
    meshName: 'ATM',
  },
  {
    id: 'arcada',
    index: '02',
    title: 'Arcada dentaria',
    text: 'Disposición y desgaste de cada pieza dental, evaluados con oroscopia para detectar puntas de esmalte y rampas irregulares.',
    meshName: 'Arcada',
  },
  {
    id: 'raices',
    index: '03',
    title: 'Raíces y hueso alveolar',
    text: 'Estructuras solo visibles mediante radiología digital — esenciales para detectar fracturas, quistes apicales o piezas retenidas.',
    meshName: 'Raices',
  },
  {
    id: 'senos',
    index: '04',
    title: 'Senos paranasales',
    text: 'Cavidades evaluadas cuando hay sospecha de sinusitis de origen dental, identificando el foco antes de indicar cirugía.',
    meshName: 'Senos',
  },
];
