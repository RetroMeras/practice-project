<script setup lang="ts">
import { storeToRefs } from "pinia";
import List from "../../components/basic/List.vue";
import RelationItem from "../../components/Relation/RelationItem.vue";
import { useMainStore } from "../../storage/main";

const store = useMainStore();
const { relations } = storeToRefs(store);
</script>

<template>
  <List
    v-slot="slotProps"
    :items="relations"
    :titles="['Название', 'Обозначение', 'Описание']"
  >
    <RelationItem
      :item="slotProps.item"
      :select="slotProps.select"
      :odd="slotProps.index % 2 !== 0"
      :selected="slotProps.selected"
    />
  </List>
</template>
