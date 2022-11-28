<script setup lang="ts">
import { ref } from "vue";
import ItemModal from "./ItemModal.vue";

defineProps<{
  items: any[];
  titles: string[];
}>();

const selected = ref<number | undefined>(undefined);

const opened = ref<boolean>(false);

const handleSelect = (index: number) => {
  if (index === selected.value) {
    selected.value = undefined;
  } else {
    selected.value = index;
    opened.value = true;
  }
};

const close = () => {
  opened.value = false;
};
</script>

<template>
  <div>
    <div class="h-16 sticky top-20 z-1 bg-white">
      <div class="flex align-middle justify-start">
        <slot
          name="utils"
          :selected="selected"
          :clear="
            () => {
              selected = undefined;
            }
          "
        ></slot>
      </div>
    </div>
    <ItemModal
      v-if="selected != undefined"
      v-model:opened="opened"
      title="Просмотр"
    >
      <template #content>
        <slot name="modal" :item="items[selected]"></slot>
      </template>
      <template #buttons>
        <slot name="modalButtons" :item="items[selected]" :close="close"></slot>
      </template>
    </ItemModal>
    <table class="w-full border text-left border-gray-200 overflow-y-scroll">
      <tr class="w-full">
        <th
          v-for="(title, index) in titles"
          :key="index"
          class="sticky top-36 z-1 bg-gray-300 px-2 py-5 shadow-gray-600 shadow-md break-all"
        >
          {{ title }}
        </th>
      </tr>
      <slot
        v-for="(item, index) in items"
        name="item"
        :item="item"
        :select="() => handleSelect(index)"
        :index="index"
        :selected="index === selected"
      ></slot>
    </table>
  </div>
</template>
