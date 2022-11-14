<script setup lang="ts">
export interface ICircle {
  x: number;
  y: number;
  radius: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  label: string;
}

const props = withDefaults(defineProps<ICircle>(), {
  fill: "red",
  stroke: "black",
  strokeWidth: 1,
});

const alpha = Math.PI / 3;
const cosA = Math.cos(alpha);
const dx = Math.sqrt((Math.pow(props.radius, 2) / 2) * (1 + cosA));
const dy = Math.sqrt((Math.pow(props.radius, 2) / 2) * (1 - cosA));
const width = 2 * dx;
const height = 2 * dy;
const textConfig = {
  x: props.x - dx,
  y: props.y - dy,
  width,
  height,
  align: "center",
  verticalAlign: "middle",
  text: props.label,
  fontSize: 15,
  fontFamily: "Calibri",
  fill: props.stroke,
};
</script>

<template>
  <v-circle :config="props"> </v-circle>
  <v-text :config="textConfig" />
</template>
