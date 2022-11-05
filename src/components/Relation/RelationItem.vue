<script setup lang="ts">
import { IRelation } from "../../types/IRelation";

defineProps<{
  item: IRelation;
}>();
</script>

<template>
  <div class="flex flex-row p-2 gap-2">
    <div>{{ item.title }}</div>
    <div>{{ item.symbol }}</div>
    <div>{{ item.description }}</div>
  </div>
</template>
