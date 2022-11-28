<script setup lang="ts">
import { IEntity } from "../../types/IEntity";

defineProps<{
  item: IEntity;
  select: () => void;
}>();
</script>

<template>
  <tr class="hover:bg-gray-200 tr" @click="select">
    <td class="py-1 px-2 w-1/3">{{ item.title }}</td>
    <td class="py-1 px-2 w-2/3">{{ item.description }}</td>
  </tr>
</template>

<style>
tr[odd="true"] {
  background-color: #d9d9d9;
}
tr[selected="true"] {
  outline: solid 2px #afafaf;
}
</style>
