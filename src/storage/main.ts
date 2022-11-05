import {defineStore} from 'pinia'
import { computed, ref } from 'vue'
import { IEntity } from '../types/IEntity'
import { IRelation } from '../types/IRelation'


const updateEntites = (entities: IEntity[]) => {
  const storage = window.localStorage;
  storage.setItem("entities", JSON.stringify(entities))
}
const updateRelations = (relations: IRelation[]) => {
  const storage = window.localStorage;
  storage.setItem("relations", JSON.stringify(relations))
}


const getEntities = () => {
  const storage = window.localStorage;
  const entities = storage.getItem('entities')
  if (!entities) return null
  return JSON.parse(entities) as IEntity[]
}
const getRelations = () => {
  const storage = window.localStorage;
  const relations = storage.getItem('relations')
  if (!relations) return null
  return JSON.parse(relations) as IRelation[]
}



// https://pinia.vuejs.org/core-concepts/#option-stores
export const useMainStore = defineStore('main', () =>{
  const entities = ref<IEntity[]>(getEntities() || []);
  const relations = ref<IRelation[]>(getRelations() || []);

  const emptyEntity = computed(() => ({
    id: '',
    title: "",
    description: "",
    examples: [],
    relations: [],
  } as IEntity))
  const emptyRelation = computed(() => ({
    id: "",
    title: "",
    symbol: "",
    description: "",
    examples: [],
    parents: ["", ""],
    properties: ["many", "many"],
  } as IRelation))
  const addEntity = (entity: IEntity) => {
    entities.value.push(entity);
    updateEntites(entities.value);
  }
  const addRelation = (relation: IRelation): boolean => {
    const firstIdx = entities.value.findIndex((entity) => entity.id == relation.parents[0]);
    const secondIdx = entities.value.findIndex((entity) => entity.id == relation.parents[1]);
    if (firstIdx == -1 || secondIdx == -1) return false;

    relations.value.push(relation);
    entities.value[firstIdx].relations.push(relation.id)
    entities.value[secondIdx].relations.push(relation.id)

    updateRelations(relations.value)
    updateEntites(entities.value)

    return true
  }

  return {entities, relations, addEntity, addRelation, emptyRelation, emptyEntity}
})