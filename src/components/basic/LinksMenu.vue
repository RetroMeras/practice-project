<template>
  <Listbox class="w-full">
    <div class="relative mt-1 w-full">
      <ListboxButton
        class="relative p-2 w-full h-10 text-ellipsis whitespace-nowrap overflow-hidden rounded cursor-pointer shadow-md shadow-slate-200 border-slate-200 border text-sm"
      >
        {{ title }}
      </ListboxButton>
      <ListboxOptions
        class="absolute mt-1 p-2 z-50 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg flex flex-col gap-2 sm:text-sm"
      >
        <ListboxOption
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          class="cursor-pointer"
        >
          <router-link
            class="hover:underline underline-offset-4"
            :to="option.value"
          >
            {{ option.label }}
          </router-link>
        </ListboxOption>
      </ListboxOptions>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { IOption } from "../../types/ui/IOption";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

defineProps<{
  options: IOption[];
  title: string;
}>();
</script>
