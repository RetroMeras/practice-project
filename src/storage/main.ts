import {defineStore} from 'pinia'
import { IEntity } from '../types/IEntity'
import { IRelation } from '../types/IRelation'
import { get, post } from "../utils/request";


const postEntity = async (entity: IEntity) => {
  return post("http://localhost:3000/entity", {
    uuid: "",
    title: entity.title,
    description: entity.description,
    login: entity.login
  } as Omit<IEntity, "examples" | "relations">)
}
const postRelation = async (relation: IRelation) => {
  return post("http://localhost:3000/relation", {
    uuid: "",
    title: relation.title,
    description: relation.description,
    login: relation.login,
    symbol: relation.symbol,
    from: relation.from,
    to: relation.to
  } as Omit<IRelation, "examples" | "properties">)
}
const getEntities = async (): Promise<IEntity[] | null> => {
  const response = await get("http://localhost:3000/entity");
  if(response.status != 200)
    return null
  return response.json() as Promise<IEntity[]>
}
const getRelations = async (): Promise<IRelation[] | null> => {
  const response = await get("http://localhost:3000/relation");
  if(response.status != 200)
    return null
  return response.json() as Promise<IRelation[]>
}

const emptyEntity = {
  uuid: '',
  title: "",
  description: "",
  examples: [],
  relations: [],
  login: '1',
} as IEntity

const emptyRelation = {
  uuid: "",
  title: "",
  symbol: "",
  description: "",
  examples: [],
  from: '',
  to: '',
  properties: ["many", "many"],
  login: '1'
} as IRelation

// https://pinia.vuejs.org/core-concepts/#option-stores
export const useMainStore = () => {
  const innerStore = defineStore('main', {
    state: () => ({
        entities: [] as IEntity[],
        relations: [] as IRelation[],
    }),
    getters: {
      emptyEntity: () => ({...emptyEntity}),
      emptyRelation: () => ({...emptyRelation})
    },
    actions:{
      fetchEntities: async function (){
        const data = await getEntities();
        if(data){
          this.entities = data
        }
      },
      fetchRelations: async function (){
        const data = await getRelations();
        if(data){
          this.relations = data
        }
      },
      addEntity: async function (entity: IEntity) {
        this.entities.push({...entity});
        await postEntity(entity);
      },
      addRelation: async function (relation: IRelation): Promise<boolean> {
        this.relations.push({...relation});
        await postRelation(relation)
        return true
      }
    }
  })
  const store = innerStore();

  if(store.entities.length == 0){
    store.fetchEntities()
  }
  if(store.relations.length == 0){
    store.fetchRelations()
  }

  return store
}