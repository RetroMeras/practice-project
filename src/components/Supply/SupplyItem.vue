<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useMainStore } from "../../storage/main";
import { ISupply } from "../../types/ISupply";

defineProps<{
  item: ISupply;
  select: () => void;
}>();

const store = useMainStore();
const { participants, resources, units } = storeToRefs(store);

const get = (arr: any[], id: string) =>
  arr.find((item) => item.id === id)?.name || "";
</script>

<template>
  <tr class="hover:bg-gray-200 tr break-all" @click="select">
    <td class="py-5 px-2">{{ item.id }}</td>
    <td class="py-5 px-2">{{ get(resources, item.resource) }}</td>
    <td class="py-5 px-2">{{ get(participants, item.seller) }}</td>
    <td class="py-5 px-2">{{ get(participants, item.buyer) }}</td>
    <td class="py-5 px-2">
      {{ `${item.price.value} ${get(units, item.price.unit)}` }}
    </td>
    <td class="py-5 px-2">
      {{ `${item.size.value} ${get(units, item.size.unit)}` }}
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
