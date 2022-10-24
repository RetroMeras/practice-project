<script setup lang="ts">
const props = defineProps<{
  label: string;
  value: string;
  placeholder: string;
}>();
const emit = defineEmits(["update:value"]);
</script>
<template>
  <div>
    <label for="email" class="block text-sm font-medium text-gray-700">{{
      props.label
    }}</label>
    <div class="mt-1">
      <input
        :value="props.value"
        :placeholder="props.placeholder"
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        @input="emit('update:value', $event.target?.value || '')"
      />
    </div>
  </div>
</template>
