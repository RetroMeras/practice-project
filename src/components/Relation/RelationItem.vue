<script setup lang="ts">
import { useMainStore } from "../../storage/main";
import { IRelation } from "../../types/IRelation";
import Button from "../basic/Button.vue";

defineProps<{
  item: IRelation;
}>();

const { deleteRelation, editRelation } = useMainStore();
</script>

<template>
  <div class="flex flex-row p-2 gap-2">
    <div class="w-1/4">{{ item.title }}</div>
    <div class="w-1/4">{{ item.symbol }}</div>
    <div class="w-1/4">{{ item.description }}</div>
    <div class="w-1/4 flex flex-row">
      <Button @click="editRelation(item)">Редактировать</Button>
      <Button @click="deleteRelation(item.uuid)">Удалить</Button>
    </div>
  </div>
</template>
