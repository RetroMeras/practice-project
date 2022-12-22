import { IValue } from "./IValue";

export interface ISupply {
  id: string;
  buyer: string; // id of creator
  seller: string; // id of creator
  price: IValue;
  size: IValue;
}
