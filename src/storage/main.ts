import {defineStore} from 'pinia'
import { computed, ref } from 'vue'
import { IEntity } from '../types/IEntity'
import { IRelation } from '../types/IRelation'

// https://pinia.vuejs.org/core-concepts/#option-stores

export const useMainStore = defineStore('main', () =>{
  const entities = ref<IEntity[]>([]);
  const relations = ref<IRelation[]>([]);

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
  }
  const addRelation = (relation: IRelation): boolean => {
    const firstIdx = entities.value.findIndex((entity) => entity.id == relation.parents[0]);
    const secondIdx = entities.value.findIndex((entity) => entity.id == relation.parents[1]);
    if (firstIdx == -1 || secondIdx == -1) return false;

    relations.value.push(relation);
    entities.value[firstIdx].relations.push(relation.id)
    entities.value[secondIdx].relations.push(relation.id)

    return true
  }

  return {entities, relations, addEntity, addRelation, emptyRelation, emptyEntity}
})