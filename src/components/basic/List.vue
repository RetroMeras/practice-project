<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  items: any[];
  titles: string[];
}>();

const selected = ref<number | undefined>(undefined);

const handleSelect = (index: number) => {
  if (index === selected.value) selected.value = undefined;
  else selected.value = index;
};
</script>

<template>
  <div>
    <div>
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
    <table
      class="w-full border text-left border-gray-200 relative overflow-y-scroll"
    >
      <tr class="w-full">
        <th
          v-for="(title, index) in titles"
          :key="index"
          class="sticky top-20 z-1 bg-gray-300 px-2 py-5 shadow-md break-all"
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
