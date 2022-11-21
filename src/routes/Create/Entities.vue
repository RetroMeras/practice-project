<script setup lang="ts">
import { storeToRefs } from "pinia";
import List from "../../components/basic/List.vue";
import EntityItem from "../../components/Entity/EntityItem.vue";
import { useMainStore } from "../../storage/main";

const store = useMainStore();
const { entities } = storeToRefs(store);
</script>

<template>
  <List v-slot="slotProps" :items="entities" :titles="['Название', 'Описание']">
    <EntityItem
      :item="slotProps.item"
      :select="slotProps.select"
      :odd="slotProps.index % 2 !== 0"
      :selected="slotProps.selected"
    />
  </List>
</template>
