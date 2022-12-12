<script setup lang="ts">
defineProps<{
  modelValue: number;
}>();
const emit = defineEmits<{
  (event: "update:modelValue", value: number): void;
}>();
</script>

<template>
  <div class="w-full">
    <input
      :value="modelValue"
      class="w-full border rounded p-2"
      type="number"
      @input="(event) => emit('update:modelValue', +((event.target as HTMLInputElement | undefined)?.value || 0))"
    />
  </div>
</template>
