<script setup lang="ts">
import {defineProps} from "vue";
import Arrow from "./Arrow.vue";
import { ICircle } from "./Circle.vue";

export interface IRealtion{
  first: ICircle;
  second: ICircle;
}

const props = defineProps<IRealtion>();

const dx = props.first.x - props.second.x;
const dy = props.first.y - props.second.y;
const dc = Math.sqrt(dx*dx + dy*dy);
const r1 = props.first.radius;
const r2 = props.second.radius;

console.log(dx, dy, dc, r1, r2)
const points = [
  props.second.x + (dc - r1) * dx/dc,
  props.second.y + (dc - r1) * dy/dc,
  props.first.x - (dc - r2) * dx/dc,
  props.first.y - (dc - r2) * dy/dc,
]
console.group("Points")
console.log([props.first.x, props.first.y, props.second.x, props.second.y])
console.log(points)
console.groupEnd()

</script>

<template>
  <Arrow :points="points" />
</template>
