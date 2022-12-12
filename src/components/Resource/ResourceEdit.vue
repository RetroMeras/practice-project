<script setup lang="ts">
import { ref } from "vue";
import { PencilIcon } from "vue-tabler-icons";
import { useMainStore } from "../../storage/main";
import { IResource } from "../../types/IResource";
import Button from "../basic/Button.vue";
import ResourceForm from "./ResourceForm.vue";

const modalOpened = ref(false);
const { editResource } = useMainStore();

const props = defineProps<{ resource: IResource; after: () => void }>();

const handleSubmit = (resource: IResource) => {
  editResource(resource);
  props.after();
};
</script>

<template>
  <Button type="positive" @click="modalOpened = true">
    <PencilIcon color="green" />
  </Button>
  <ResourceForm
    v-model:opened="modalOpened"
    :resource="resource"
    submit="Изменить"
    title="Изменить ресурс"
    @submit="handleSubmit"
  />
</template>
