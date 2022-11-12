<script setup lang="ts">
import {defineProps} from "vue";

export interface ICircle {
  x: number;
  y: number;
  radius: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

const props = withDefaults(defineProps<ICircle>(), {fill: 'red', stroke: "black", strokeWidth: 1});

</script>

<template>
  <v-circle :config="props" />
</template>
