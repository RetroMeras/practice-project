import { IRelation } from "./relation";

export interface IEntity{
  title: string;
  description: string;
  examples: string[];
  relations: IRelation[]
}