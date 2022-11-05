export interface IEntity{
  id: string;
  title: string;
  description: string;
  examples: string[];
  relations: string[] // ids
}