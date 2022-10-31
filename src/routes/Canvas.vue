<script setup lang="ts">
import { onMounted, ref } from "vue";

let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;

const SIZE_STEP = 20;

const rect_width = ref(20);
const rect_height = ref(20);

onMounted(() => {
  canvas = document.getElementById("canvas") as HTMLCanvasElement;
  canvas.width = 600;
  canvas.height = 300;
  ctx = canvas.getContext("2d");
  draw();
});

const drawRect = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  ctx.beginPath();
  ctx.rect(x, y, rect_width.value, rect_height.value);
  ctx.stroke();
};

const draw = () => {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas?.width || 0, canvas?.height || 0);
  drawRect(ctx, 20, 20);
};

const resizeRect = (dx: number, dy: number) => {
  rect_width.value += dx;
  rect_height.value += dy;
  draw();
};
</script>

<template>
  <div>
    <div class="flex flex-row gap-3">
      <button @click="resizeRect(SIZE_STEP, 0)">w+</button>
      <button @click="resizeRect(-SIZE_STEP, 0)">w-</button>
      <button @click="resizeRect(0, SIZE_STEP)">h+</button>
      <button @click="resizeRect(0, -SIZE_STEP)">h-</button>
    </div>
    <canvas id="canvas" class="border-4 border-black" />
  </div>
</template>
