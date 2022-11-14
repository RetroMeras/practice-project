export interface IEntity{
  uuid: string;
  title: string;
  description: string;
  examples: string[];
  relations: string[]; // ids
  login: string;
}