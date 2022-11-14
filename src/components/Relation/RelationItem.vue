<script setup lang="ts">
import { useMainStore } from "../../storage/main";
import { IRelation } from "../../types/IRelation";
import Button from "../basic/Button.vue";

defineProps<{
  item: IRelation;
}>();

const { deleteRelation } = useMainStore();
</script>

<template>
  <div class="flex flex-row p-2 gap-2">
    <div>{{ item.title }}</div>
    <div>{{ item.symbol }}</div>
    <div>{{ item.description }}</div>
    <Button @click="deleteRelation(item.uuid)">Удалить</Button>
  </div>
</template>
