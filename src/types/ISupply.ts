import { IValue } from "./IValue";

export interface ISupply {
  id: string;
  buyer: string; // id
  seller: string; // id
  resource: string; // id
  price: IValue;
  size: IValue;
}
