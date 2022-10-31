<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  title: string;
}>();
const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <div class="w-full">
    <label :for="title">{{ title }}</label>
    <input
      :id="title"
      :value="modelValue"
      class="w-full border rounded p-2"
      @input="(event) => emit('update:modelValue', (event.target as HTMLInputElement | undefined)?.value || '')"
    />
  </div>
</template>
