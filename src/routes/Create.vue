<script setup lang="ts">
import { useMainStore } from "../storage/main";

const { entities, relations, addEntity, addRelation } = useMainStore();
</script>

<template>
  <div class="flex flex-row gap-5">
    <div class="entityWrapper w-full">
      <label for=""></label>
      <EntityAdd @push="addEntity"> Добавить сущность </EntityAdd>
      <List v-slot="slotProps" :items="entities">
        <EntityItem :item="slotProps.item" />
      </List>
    </div>
    <div class="relationWrapper w-full">
      <RelationAdd @push="addRelation"> Добавить отношение </RelationAdd>
      <List v-slot="slotProps" :items="relations">
        <RelationItem :item="slotProps.item" />
      </List>
    </div>
  </div>
</template>
