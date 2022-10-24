<script setup lang="ts">
import { ref } from "vue";
import Input_with_label from "../components/input_with_label.vue";

const value = ref("");
</script>

<template>
  <div>Value: {{ value }}</div>
  <Input_with_label v-model:value="value" label="Value" placeholder="" />
</template>
