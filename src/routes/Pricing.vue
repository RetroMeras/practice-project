<script setup lang="ts">
import { reactive, ref } from "vue";
import Chart from "../components/chart.vue";
import Input_with_label from "../components/input_with_label.vue";
import Number_with_label from "../components/number_with_label.vue";
import { Item } from "../types/atomic";

const new_data = reactive<Item>({ label: "", value: 0, color: "#000000" });

const handleAddItem = () => {
  data.value.push({ ...new_data });
};

const data = ref<Item[]>([
  {
    label: "Один",
    value: 15,
    color: "#ffaaff",
  },
  {
    label: "Второй",
    value: 27,
    color: "#353535",
  },
  {
    label: "Три",
    value: 33,
    color: "#f0fff0",
  },
  {
    label: "Четверть",
    value: 25,
    color: "#d2d2d2",
  },
]);
</script>

<template>
  <div class="flex flex-row gap-10">
    <div class="flex flex-col w-1/2 gap-4">
      <Input_with_label
        v-model:value="new_data.label"
        label="Label"
        placeholder="Введите название"
        name="label"
      />
      <Number_with_label
        v-model:value="new_data.value"
        label="Value"
        placeholder="Введите фамилию"
        name="value"
      />
      <Input_with_label
        v-model:value="new_data.color"
        label="Color"
        placeholder="Введите фамилию"
        name="color"
      />
      <button @click="handleAddItem">Добавить</button>
    </div>

    <div>
      <Chart :items="data.map((item) => ({ ...item, value: item.value }))" />
    </div>
  </div>
</template>
