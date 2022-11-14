import {defineStore} from 'pinia'
import { IEntity } from '../types/IEntity'
import { IRelation } from '../types/IRelation'
import { deleteReq, get, post } from "../utils/request";

const API_URL = "http://localhost:3000";

const postEntity = (entity: IEntity) => {
  return post(`${API_URL}/entity`, {
    uuid: "",
    title: entity.title,
    description: entity.description,
    login: entity.login
  } as Omit<IEntity, "examples" | "relations">)
}
const postRelation = (relation: IRelation) => {
  return post(`${API_URL}/relation`, {
    uuid: "",
    title: relation.title,
    description: relation.description,
    login: relation.login,
    symbol: relation.symbol,
    from: relation.from,
    to: relation.to
  } as Omit<IRelation, "examples" | "properties">)
}
const putEntity = (entity: IEntity) => {
  return post(`${API_URL}/entity/${entity.uuid}`, {
    uuid: entity.uuid,
    title: entity.title,
    description: entity.description,
    login: entity.login
  } as Omit<IEntity, "examples" | "relations">)
}
const putRelation = (relation: IRelation) => {
  return post(`${API_URL}/relation/${relation.uuid}`, {
    uuid: relation.uuid,
    title: relation.title,
    description: relation.description,
    login: relation.login,
    symbol: relation.symbol,
    from: relation.from,
    to: relation.to
  } as Omit<IRelation, "examples" | "properties">)
}
const getEntities = async (): Promise<IEntity[] | null> => {
  const response = await get(`${API_URL}/entity`);
  if(response.status != 200)
    return null
  return response.json() as Promise<IEntity[]>
}
const getRelations = async (): Promise<IRelation[] | null> => {
  const response = await get(`${API_URL}/relation`);
  if(response.status != 200)
    return null
  return response.json() as Promise<IRelation[]>
}
const deleteEntity = (uuid: string) => {
  return deleteReq(`${API_URL}/entity/${uuid}`)
}
const deleteRelation = (uuid: string) => {
  return deleteReq(`${API_URL}/relation/${uuid}`)
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
        console.log(data)
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
        await postEntity(entity);
        await this.fetchEntities();
      },
      addRelation: async function (relation: IRelation) {
        await postRelation(relation)
        await this.fetchRelations();
        return true
      },
      editEntity: async function (entity: IEntity) {
        await putEntity(entity);
        await this.fetchEntities();
      },
      editRelation: async function (relation: IRelation) {
        await putRelation(relation)
        await this.fetchRelations();
      },
      deleteEntity: async function(uuid: string){
        await deleteEntity(uuid);
        await Promise.all([this.fetchEntities(), this.fetchRelations()])
      },
      deleteRelation: async function(uuid: string){
        await deleteRelation(uuid);
        await this.fetchRelations();
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