<script setup lang="ts">
import { ref } from "vue";
import { useMainStore } from "../../storage/main";
import { IResource } from "../../types/IResource";
import Button from "../basic/Button.vue";
import ResourceForm from "./ResourceForm.vue";

const modalOpened = ref(false);
const { addResource, emptyResource } = useMainStore();

const handleSubmit = (resource: IResource) => {
  addResource(resource);
};
</script>

<template>
  <Button type="positive" @click="modalOpened = true"><slot></slot></Button>
  <ResourceForm
    v-model:opened="modalOpened"
    :resource="emptyResource"
    submit="Создать"
    title="Добавить ресурс"
    @submit="handleSubmit"
  />
</template>
