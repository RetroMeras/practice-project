<template>
  <Listbox
    :modelValue="value"
    @update:modelValue="(item: string) => emit('update:value', item)"
  >
    <ListboxButton>
      {{ options.find((item) => item.value == value)?.label || "   " }}
    </ListboxButton>
    <ListboxOptions>
      <ListboxOption
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { IOption } from "../../types/ui/IOption";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

defineProps<{
  options: IOption[];
  value: string;
}>();
const emit = defineEmits<{
  (e: "update:value", value: string): void;
}>();
</script>
