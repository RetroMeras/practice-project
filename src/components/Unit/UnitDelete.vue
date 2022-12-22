<script setup lang="ts">
import { TrashIcon } from "vue-tabler-icons";
import { useMainStore } from "../../storage/main";
import Button from "../basic/Button.vue";

const { deleteUnit } = useMainStore();

defineProps<{ id: string; after: () => void }>();
</script>

<template>
  <Button
    type="negative"
    @click="
      () => {
        deleteUnit(id);
        after();
      }
    "
  >
    <TrashIcon color="red" />
  </Button>
</template>
