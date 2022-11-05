<script setup lang="ts">
import List from "../components/basic/List.vue";
import EntityAdd from "../components/Entity/EntityAdd.vue";
import EntityItem from "../components/Entity/EntityItem.vue";
import RelationAdd from "../components/Relation/RelationAdd.vue";
import RelationItem from "../components/Relation/RelationItem.vue";
import { useMainStore } from "../storage/main";

const { entities, relations } = useMainStore();
</script>

<template>
  <div class="flex flex-row gap-5">
    <div class="entityWrapper w-full">
      <label for=""></label>
      <EntityAdd> Добавить сущность </EntityAdd>
      <List v-slot="slotProps" :items="entities">
        <EntityItem :item="slotProps.item" />
      </List>
    </div>
    <div class="relationWrapper w-full">
      <RelationAdd> Добавить отношение </RelationAdd>
      <List v-slot="slotProps" :items="relations">
        <RelationItem :item="slotProps.item" />
      </List>
    </div>
  </div>
</template>
