<script setup lang="ts">
const props = defineProps<{
  name: string;
  label: string;
  value: string;
}>();
const emit = defineEmits(["update:value"]);
const handleImage = (event: any) => {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  console.log(url);
  emit("update:value", url);
};
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
        type="file"
        class="shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        @input="handleImage"
      />
    </div>
  </div>
</template>
