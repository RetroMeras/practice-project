<script setup lang="ts">
import { IRelation } from "../../types/IRelation";

defineProps<{
  item: IRelation;
  select: () => void;
}>();
</script>

<template>
  <tr class="hover:bg-gray-200 tr break-all" @click="select">
    <td class="py-5 px-2 w-1/6">{{ item.symbol }}</td>
    <td class="py-5 px-2 w-2/6">{{ item.title }}</td>
    <td class="py-5 px-2 w-3/6">
      {{
        item.description.length < 60
          ? item.description
          : item.description.slice(0, 60) + "..."
      }}
    </td>
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