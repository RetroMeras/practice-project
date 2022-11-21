<script setup lang="ts">
import { IRelation } from "../../types/IRelation";

defineProps<{
  item: IRelation;
  select: () => void;
}>();
</script>

<template>
  <tr class="hover:bg-gray-200 tr" @click="select">
    <td class="py-1 px-2">{{ item.title }}</td>
    <td class="py-1 px-2">{{ item.symbol }}</td>
    <td class="py-1 px-2">{{ item.description }}</td>
  </tr>
</template>

<style>
tr[odd="true"] {
  background-color: #efefef;
}
tr[selected="true"] {
  outline: solid 2px #afafaf;
}
</style>
