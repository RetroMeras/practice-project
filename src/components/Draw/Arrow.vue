<script setup lang="ts">
import {defineProps} from "vue";

export interface IArrow{
  points: number[]
  stroke?: string;
  strokeWidth?: number
}

const props = withDefaults(defineProps<IArrow>(), {stroke: "black", strokeWidth: 1});
</script>

<template>
  <v-arrow :config="props" />
</template>
