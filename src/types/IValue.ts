export interface IValue {
  value: number;
  unit: string; // id
}

export interface IUnit {
  id: string;
  name: string;
  currency: boolean
}
