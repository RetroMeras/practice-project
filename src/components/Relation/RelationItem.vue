<script setup lang="ts">
import { IRelation } from "../../types/IRelation";
import RelationDelete from "./RelationDelete.vue";
import RelationEdit from "./RelationEdit.vue";

defineProps<{
  item: IRelation;
}>();
</script>

<template>
  <div class="flex flex-row p-2 gap-2">
    <div class="flex flex-row w-full">
      <div class="w-1/3">{{ item.title }}</div>
      <div class="w-1/3">{{ item.symbol }}</div>
      <div class="w-1/3">{{ item.description }}</div>
    </div>
    <div class="w-1/3 flex flex-row shrink-0">
      <RelationEdit :relation="item" />
      <RelationDelete :uuid="item.uuid" />
    </div>
  </div>
</template>
