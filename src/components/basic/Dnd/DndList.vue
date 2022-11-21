<script setup lang="ts">
import { VueDraggableNext } from "vue-draggable-next";
import DndCard from "./DndCard.vue";
defineProps<{ items: any[] }>();
const emit = defineEmits<{
  updateItems(items: any[]): void;
}>();

const handleDrag = (newItems: any[]) => {
  emit.updateItems(newItems);
};
</script>

<template>
  <VueDraggableNext :value="items" @input="handleDrag">
    <DndCard v-for="item in items" :key="item.id" :item="item" />
  </VueDraggableNext>
</template>
