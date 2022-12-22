<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useMainStore } from "../../storage/main";
import { ISupply } from "../../types/ISupply";
import {
  generate_creators_dict,
  generate_participants_dict,
  generate_resources_dict,
} from "../../utils/dicts";

defineProps<{
  item: ISupply;
  select: () => void;
}>();

const store = useMainStore();
const { participants, resources, creators, units } = storeToRefs(store);

const creators_dict = computed(() => generate_creators_dict(creators.value));
const participants_dict = computed(() =>
  generate_participants_dict(participants.value)
);
const resources_dict = computed(() => generate_resources_dict(resources.value));

const get_participant = (id: string) =>
  creators_dict.value[id]
    ? participants_dict.value[creators_dict.value[id].participant].name
    : "";
const get_resource = (id: string) =>
  creators_dict.value[id]
    ? resources_dict.value[creators_dict.value[id].resource].name
    : "";
const get = (arr: any[], id: string) =>
  arr.find((item) => item.id === id)?.name || "";
</script>

<template>
  <tr class="hover:bg-gray-200 tr break-all" @click="select">
    <td class="py-5 px-2">{{ item.id }}</td>
    <td class="py-5 px-2">
      {{ get_resource(item.seller) }}
    </td>
    <td class="py-5 px-2">
      {{ get_participant(item.seller) }}
    </td>
    <td class="py-5 px-2">
      {{ get_participant(item.buyer) }}
    </td>
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
