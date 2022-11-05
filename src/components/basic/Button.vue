<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    type?: "positive" | "negative" | "primary";
    disabled?: boolean;
  }>(),
  {
    type: "primary",
    disabled: false,
  }
);
const emit = defineEmits(["click"]);

const color = computed(() => {
  if (props.disabled) {
    return "border-slate-200 shadow-slate-200 cursor-not-allowed";
  }
  switch (props.type) {
    case "positive":
      return "border-positive-200  shadow-positive-200";
    case "negative":
      return "border-negative-200  shadow-negative-200";
    default:
      return "border-primary-200  shadow-primary-200";
  }
});
</script>

<template>
  <button
    class="px-5 py-2 border-2 rounded shadow-sm bg-white w-full"
    :class="color"
    :disabled="disabled"
    @click="emit('click')"
  >
    <slot></slot>
  </button>
</template>
