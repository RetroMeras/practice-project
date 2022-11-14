<script setup lang="ts">
import { TrashIcon } from "vue-tabler-icons";
import { useMainStore } from "../../storage/main";
import Button from "../basic/Button.vue";

const { deleteEntity } = useMainStore();

defineProps<{ uuid: string }>();
</script>

<template>
  <Button type="negative" @click="deleteEntity(uuid)">
    <TrashIcon color="red" />
  </Button>
</template>
