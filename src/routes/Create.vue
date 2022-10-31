<script setup lang="ts">
import { ref } from "vue";
import { IRelation } from "../types/relation";
import { IEntity } from "../types/entity";

const entities = ref<IEntity[]>([]);
const relations = ref<IRelation[]>([]);
</script>

<template>
  <div class="flex flex-row gap-5">
    <div class="entityWrapper w-full">
      <label for=""></label>
      <EntityAdd @push="(entity: IEntity) => entities.push(entity)">
        Добавить сущность
      </EntityAdd>
      <List v-slot="slotProps" :items="entities">
        <EntityItem :item="slotProps.item" />
      </List>
    </div>
    <div class="relationWrapper w-full">
      <RelationAdd @push="(relation: IRelation) => relations.push(relation)">
        Добавить отношение
      </RelationAdd>
      <List v-slot="slotProps" :items="relations">
        <RelationItem :item="slotProps.item" />
      </List>
    </div>
  </div>
</template>
