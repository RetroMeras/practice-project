<script setup lang="ts">
import { useMainStore } from "../../storage/main";
import { IEntity } from "../../types/IEntity";
import Button from "../basic/Button.vue";

const props = defineProps<{
  item: IEntity;
}>();

const { deleteEntity } = useMainStore();

const handleDelete = async () => {
  console.log(1);
  await deleteEntity(props.item.uuid);
};
</script>

<template>
  <div class="flex flex-row p-2 gap-2">
    <div>{{ item.title }}</div>
    <div>{{ item.description }}</div>
    <Button @click="handleDelete">Удалить</Button>
  </div>
</template>
