<script setup lang="ts">
import { IEntity } from "../../types/IEntity";
import EntityEdit from "./EntityEdit.vue";
import EntityDelete from "./EntityDelete.vue";

defineProps<{
  item: IEntity;
}>();
</script>

<template>
  <div class="flex flex-row p-2 gap-2">
    <div class="w-1/3">{{ item.title }}</div>
    <div class="w-1/3">{{ item.description }}</div>
    <div class="w-1/3 flex flex-row">
      <EntityEdit :entity="item" />
      <EntityDelete :uuid="item.uuid" />
    </div>
  </div>
</template>
