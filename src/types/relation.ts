// https://en.wikipedia.org/wiki/Relational_algebra

export interface IRelation{
  id: string;
  title: string;
  symbol: string; // for example ~ means A ~ B
  description: string;
  examples: string[];
  properties: [IProperty, IProperty]
  parents: [string, string] // ids
}


export type IProperty = "many" | "one"
