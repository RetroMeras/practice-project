<script setup lang="ts">
import { useMainStore } from "../../storage/main";
import { IEntity } from "../../types/IEntity";
import Button from "../basic/Button.vue";
import { PencilIcon, TrashIcon } from "vue-tabler-icons";

defineProps<{
  item: IEntity;
}>();

const { deleteEntity, editEntity } = useMainStore();
</script>

<template>
  <div class="flex flex-row p-2 gap-2">
    <div class="w-1/3">{{ item.title }}</div>
    <div class="w-1/3">{{ item.description }}</div>
    <div class="w-1/3 flex flex-row">
      <Button type="positive" @click="editEntity(item)">
        <PencilIcon color="green" />
      </Button>
      <Button type="negative" @click="deleteEntity(item.uuid)">
        <TrashIcon color="red" />
      </Button>
    </div>
  </div>
</template>
