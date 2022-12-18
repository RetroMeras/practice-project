<script setup lang="ts">
defineProps<{
  title: string;
  modelValue: boolean;
}>();
const emit = defineEmits<{
  (event: "update:modelValue", value: boolean): void;
}>();
</script>

<template>
  <div class="w-full flex flex-row gap-4">
    <label :for="title">{{ title }}</label>
    <input
      :id="title"
      :checked="modelValue"
      class="rounded p-2"
      type="checkbox"
      @change="(event) => emit('update:modelValue', !modelValue)"
    />
  </div>
</template>
