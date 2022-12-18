<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useMainStore } from "../../storage/main";
import { ICreator } from "../../types/ICreator";
import {
  generate_participants_dict,
  generate_resources_dict,
} from "../../utils/dicts";

defineProps<{
  item: ICreator;
  select: () => void;
}>();

const store = useMainStore();
const { participants, resources } = storeToRefs(store);

const particpants_dict = generate_participants_dict(participants.value);
const resources_dict = generate_resources_dict(resources.value);
</script>

<template>
  <tr class="hover:bg-gray-200 tr break-all" @click="select">
    <td class="py-5 px-2 w-1/4">{{ item.id }}</td>
    <td class="py-5 px-2 w-1/4">
      {{ particpants_dict[item.participant].name || "" }}
    </td>
    <td class="py-5 px-2 w-1/4">
      {{ resources_dict[item.resource].name || "" }}
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
