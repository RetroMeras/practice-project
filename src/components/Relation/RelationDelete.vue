<script setup lang="ts">
import { TrashIcon } from "vue-tabler-icons";
import { useMainStore } from "../../storage/main";
import Button from "../basic/Button.vue";

const { deleteRelation } = useMainStore();

defineProps<{ uuid: string }>();
</script>

<template>
  <Button type="negative" @click="deleteRelation(uuid)">
    <TrashIcon color="red" />
  </Button>
</template>
