<template>
  <div>
    <DoughnutChart :chart-data="testData" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { DoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { Item } from "../types/atomic";

Chart.register(...registerables);

const props = defineProps<{ items: Item[] }>();

const options = ref({
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
});

const testData = computed(() => ({
  labels: props.items.map((item) => item.label),
  datasets: [
    {
      data: props.items.map((item) => item.value),
      backgroundColor: props.items.map((item) => item.color),
    },
  ],
}));
</script>
