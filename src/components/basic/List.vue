<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  items: any[];
  titles: string[];
}>();

const selected = ref<number | undefined>(undefined);

const handleSelect = (index: number) => {
  selected.value = index;
};
</script>

<template>
  <div>
    <table>
      <tr>
        <th
          v-for="(title, index) in titles"
          :key="index"
          class="sticky top-0 z-1 bg-pink-300"
        >
          {{ title }}
        </th>
      </tr>
      <tr>
        <slot
          v-for="(item, index) in items"
          :item="item"
          :select="handleSelect(index)"
        ></slot>
      </tr>
    </table>
  </div>
</template>
