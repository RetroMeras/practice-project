<script setup lang="ts">
import { TrashIcon } from "vue-tabler-icons";
import { useMainStore } from "../../storage/main";
import Button from "../basic/Button.vue";

const { deleteRelation } = useMainStore();

defineProps<{ id: string; after: () => void }>();
</script>

<template>
  <Button
    type="negative"
    @click="
      () => {
        deleteRelation(id);
        after();
      }
    "
  >
    <TrashIcon color="red" />
  </Button>
</template>
