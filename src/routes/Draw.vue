<script setup lang="ts">
import { onMounted } from "vue";
import { forceGraph, INode, ILink } from "../utils/draw/forceGraph";

const nodes: INode[] = [
  { id: "1", label: "1" },
  { id: "2", label: "2" },
  { id: "3", label: "3" },
  { id: "4", label: "4" },
  { id: "5", label: "5" },
  { id: "6", label: "6" },
  { id: "7", label: "7" },
  { id: "8", label: "8" },
];
const links: ILink[] = [
  { id: "1", target: "1", source: "2" },
  { id: "2", target: "1", source: "3" },
  { id: "3", target: "1", source: "4" },
  { id: "4", target: "1", source: "5" },
  { id: "5", target: "1", source: "7" },
  { id: "6", target: "2", source: "7" },
  { id: "7", target: "3", source: "5" },
  { id: "8", target: "5", source: "7" },
  { id: "9", target: "6", source: "7" },
  { id: "10", target: "6", source: "8" },
  { id: "11", target: "8", source: "8" },
];

onMounted(forceGraph({ nodes, links }, {}));
</script>

<template>
  <div>
    <svg id="canvas"></svg>
  </div>
</template>

<style>
.canvas {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}

.bar {
  fill: #3f4f5f;
}
</style>
