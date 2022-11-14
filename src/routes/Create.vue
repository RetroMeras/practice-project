<script setup lang="ts">
import { storeToRefs } from "pinia";
import List from "../components/basic/List.vue";
import EntityAdd from "../components/Entity/EntityAdd.vue";
import EntityItem from "../components/Entity/EntityItem.vue";
import RelationAdd from "../components/Relation/RelationAdd.vue";
import RelationItem from "../components/Relation/RelationItem.vue";
import { useMainStore } from "../storage/main";

const store = useMainStore();
const { entities, relations } = storeToRefs(store);
</script>

<template>
  <div class="flex flex-row gap-5">
    <div class="entityWrapper w-1/2">
      <EntityAdd> Добавить сущность </EntityAdd>
      <List v-slot="slotProps" :items="entities">
        <EntityItem :item="slotProps.item" />
      </List>
    </div>
    <div class="relationWrapper w-1/2">
      <RelationAdd> Добавить отношение </RelationAdd>
      <List v-slot="slotProps" :items="relations">
        <RelationItem :item="slotProps.item" />
      </List>
    </div>
  </div>
</template>
