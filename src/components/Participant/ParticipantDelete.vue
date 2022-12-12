<script setup lang="ts">
import { TrashIcon } from "vue-tabler-icons";
import { useMainStore } from "../../storage/main";
import Button from "../basic/Button.vue";

const { deleteParticipant } = useMainStore();

defineProps<{ id: string; after: () => void }>();
</script>

<template>
  <Button
    type="negative"
    @click="
      () => {
        deleteParticipant(id);
        after();
      }
    "
  >
    <TrashIcon color="red" />
  </Button>
</template>
