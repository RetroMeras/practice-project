<script setup lang="ts">
import { computed } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import DndCard from "./DndCard.vue";
defineProps<{ items: any[] }>();
const emit = defineEmits<{
  updateItems(items: any[]): void;
}>();

const handleDrag = (newItems: any[]) => {
  emit.updateItems(newItems);
};
const dragOptions = computed(() => ({
  animation: 0,
  group: "description",
  disabled: false,
  ghostClass: "ghost",
}));
</script>

<template>
  <VueDraggableNext
    :value="items"
    item-key="id"
    :component-data="{ tag: 'ul', name: 'flip-list', type: 'transition' }"
    class="list-group"
    tag="transition-group"
    v-bind="dragOptions"
    @input="handleDrag"
  >
    <DndCard
      v-for="item in items"
      :key="item.id"
      :item="item"
      class="list-group-item"
    />
  </VueDraggableNext>
</template>

<style>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
</style>
