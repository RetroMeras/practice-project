<script setup lang="ts">
const props = defineProps<{
  label: string;
  name: string;
  value: string;
  placeholder: string;
}>();
const emit = defineEmits(["update:value"]);
</script>
<template>
  <div>
    <label :for="props.name" class="block text-sm font-medium text-gray-700">{{
      props.label
    }}</label>
    <div class="mt-1">
      <input
        :id="props.name"
        :value="props.value"
        :placeholder="props.placeholder"
        type="date"
        class="shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        @input="
          emit('update:value', ($event.target as HTMLInputElement).value || '')
        "
      />
    </div>
  </div>
</template>
