<script setup lang="ts">
import { TrashIcon } from "vue-tabler-icons";
import { useMainStore } from "../../storage/main";
import Button from "../basic/Button.vue";

const { deleteResource } = useMainStore();

defineProps<{ id: string; after: () => void }>();
</script>

<template>
  <Button
    type="negative"
    @click="
      () => {
        deleteResource(id);
        after();
      }
    "
  >
    <TrashIcon color="red" />
  </Button>
</template>
