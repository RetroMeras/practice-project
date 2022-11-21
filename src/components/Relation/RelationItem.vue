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
    <div class="w-1/4">{{ item.title }}</div>
    <div class="w-1/4">{{ item.symbol }}</div>
    <div class="w-1/4">{{ item.description }}</div>
    <div class="w-1/4 flex flex-row">
      <RelationEdit :relation="item" />
      <RelationDelete :uuid="item.uuid" />
    </div>
  </div>
</template>
