<script setup lang="ts">
import { TrashIcon } from "vue-tabler-icons";
import { useMainStore } from "../../storage/main";
import Button from "../basic/Button.vue";

const { deleteEntity } = useMainStore();

defineProps<{ uuid: string; after: () => void }>();
</script>

<template>
  <Button
    type="negative"
    @click="
      () => {
        deleteEntity(uuid);
        after();
      }
    "
  >
    <TrashIcon color="red" />
  </Button>
</template>
