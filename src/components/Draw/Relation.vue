<script setup lang="ts">
import { defineProps, ref } from "vue";
import Arrow from "./Arrow.vue";
import { ICircle } from "./Circle.vue";

export interface IRealtion {
  first: ICircle;
  second: ICircle;
}

const props = defineProps<IRealtion>();

const dx = props.first.x - props.second.x;
const dy = props.first.y - props.second.y;
const dc = Math.sqrt(dx * dx + dy * dy);
const r1 = ref(props.first.radius);
const r2 = ref(props.second.radius);

const points = [
  props.second.x + ((dc - r1.value) * dx) / dc,
  props.second.y + ((dc - r1.value) * dy) / dc,
  props.first.x - ((dc - r2.value) * dx) / dc,
  props.first.y - ((dc - r2.value) * dy) / dc,
];
</script>

<template>
  <Arrow :points="points" />
</template>
