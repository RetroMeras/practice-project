// https://en.wikipedia.org/wiki/Relational_algebra

export interface IRelation{
  uuid: string;
  title: string;
  symbol: string; // for example ~ means A ~ B
  description: string;
  examples: string[];
  properties: [IProperty, IProperty];
  from: string;
  to: string;
  login: string;
}

export const PROPERTIES = ["many", "one"]
export type IProperty = typeof PROPERTIES[number]
