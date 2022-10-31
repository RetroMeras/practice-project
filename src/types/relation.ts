export interface IRelation{
  title: string;
  symbol: string; // for example ~ means A ~ B
  description: string;
  examples: string[];
  properties: IProperty[]
  types: IRelationType[]
}

export type IProperty = "transitive" | // for all x,y,z: x~y and y~z => x~z
  "intransitivity" | // for all x,y, z: x~y and y~z => not x~z
  "symmetric" | // for all x,y: x~y => y~x
  "antisymmetric" | // for all x,y: x~y and y~x => x=y
  "asymetric" | // for all x,y: x~y => not y~x
  "reflexive" | // for all x: x~x
  "irreflexive" | // for all x: not x~x
  "connected" | // for all x,y: x != y => x~y or y~x
  "strongly conneted" // for all x,y: x~y or y~x

export type IRelationType = "equality" | // reflexive, symmetric, transitive
  "preorder" | // reflexive, transitive
  "weak order" | // reflexive, antisymmetric, transitive
  "strong order" | // reflexive, asymmetric, transitive
  "linear order" // weak order + strongly conneted
