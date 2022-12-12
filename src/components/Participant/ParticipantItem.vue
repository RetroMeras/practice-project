<script setup lang="ts">
import { IParticipant } from "../../types/IParticipant";

defineProps<{
  item: IParticipant;
  select: () => void;
}>();
</script>

<template>
  <tr class="hover:bg-gray-200 tr break-all" @click="select">
    <td class="py-5 px-2 w-1/4">{{ item.name }}</td>
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
