<script setup lang="ts">
import { ref } from "vue";
import { useMainStore } from "../../storage/main";
import Button from "../basic/Button.vue";
import RelationForm from "./RelationForm.vue";

const modalOpened = ref(false);
const { entities } = useMainStore();
</script>

<template>
  <Button
    type="positive"
    :disabled="entities.length < 2"
    @click="modalOpened = true"
  >
    <slot></slot>
  </Button>
  <RelationForm v-if="entities.length >= 2" v-model:opened="modalOpened" />
</template>
