export interface ClinicalCase {
  id: string;
  tag: string;
  title: string;
  problema: string;
  diagnostico: string;
  procedimiento: string;
  resultado: string;
  youtubeId?: string;
  pending?: boolean;
}

export const CASES: ClinicalCase[] = [
  {
    id: 'evaluacion-oclusal',
    tag: 'Examen odontológico',
    title: 'Evaluación oclusal en campo',
    problema: 'Dificultad para masticar y pérdida de alimento durante la ingesta.',
    diagnostico: 'Examen intraoral con oroscopia: puntas de esmalte y desgaste irregular de la arcada.',
    procedimiento: 'Odontoplastía para equilibrar la oclusión, registrada en el vídeo.',
    resultado: 'Masticación normalizada y recuperación del confort al comer.',
    // TODO: substituir VIDEO_ID pelo ID real do video de YouTube que enviará o Dr. Diego
    youtubeId: 'VIDEO_ID',
  },
  {
    id: 'exodoncia-pendiente',
    tag: 'Exodoncia · por publicar',
    title: 'Próximo caso clínico',
    problema: 'Por documentar',
    diagnostico: 'Por documentar',
    procedimiento: 'Por documentar',
    resultado: 'Por documentar',
    pending: true,
  },
];
