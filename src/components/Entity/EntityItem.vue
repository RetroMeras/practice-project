<script setup lang="ts">
import { IEntity } from "../../types/IEntity";
defineProps<{
  item: IEntity;
}>();
</script>

<template>
  <div class="flex flex-row p-2 gap-2">
    <div>{{ item.title }}</div>
    <div>{{ item.description }}</div>
  </div>
</template>
