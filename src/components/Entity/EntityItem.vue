<script setup lang="ts">
import { IEntity } from "../../types/IEntity";

defineProps<{
  item: IEntity;
  select: () => void;
}>();
</script>

<template>
  <tr class="hover:bg-gray-200 tr" @click="select">
    <td class="py-1 px-2">{{ item.title }}</td>
    <td class="py-1 px-2">{{ item.description }}</td>
  </tr>
</template>
