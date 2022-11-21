<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  items: any[];
  titles: string[];
}>();

const selected = ref<number | undefined>(undefined);

const handleSelect = (index: number) => {
  console.log(index);
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
    <table class="w-full border-2 border-gray-200">
      <tr>
        <th
          v-for="(title, index) in titles"
          :key="index"
          class="sticky top-0 z-1 bg-gray-200 text-left p-2"
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
