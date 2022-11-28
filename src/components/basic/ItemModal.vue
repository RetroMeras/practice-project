<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

const props = defineProps<{
  opened: boolean;
  title: string;
}>();
const emit = defineEmits<{
  (event: "update:opened", value: boolean): void;
}>();

const setIsOpen = (value: boolean) => {
  emit("update:opened", value);
};
</script>

<template>
  <TransitionRoot appear :show="opened" as="template">
    <Dialog :open="props.opened" @close="setIsOpen">
      <div class="fixed z-40 top-0 left-0 w-screen h-screen bg-modal" />
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0 scale-95"
        enter-to="opacity-100 scale-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100 scale-100"
        leave-to="opacity-0 scale-95"
      >
        <DialogPanel
          class="fixed z-50 bg-white border w-1/3 top-20 left-1/3 p-5 rounded"
        >
          <DialogTitle class="mb-1 text-xl">{{ props.title }}</DialogTitle>
          <div class="my-5">
            <slot name="content"></slot>
          </div>
          <div class="flex flex-row gap-2 ml-auto w-fit">
            <slot name="buttons"></slot>
          </div>
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>
