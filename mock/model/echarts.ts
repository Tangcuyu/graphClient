interface PieModel {
  value: number;
  name: string;
}

export const pieModel: PieModel[] = [
  { value: 40, name: '' },
  { value: 38, name: 'rose 2' },
  { value: 32, name: 'rose 3' },
  { value: 30, name: 'rose 4' },
  { value: 28, name: 'rose 5' },
  { value: 26, name: 'rose 6' },
  { value: 22, name: 'rose 7' },
  { value: 18, name: 'rose 8' }
];

export type EChartModel = PieModel;
