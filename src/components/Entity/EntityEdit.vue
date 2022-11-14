<script setup lang="ts">
import { ref } from "vue";
import { PencilIcon } from "vue-tabler-icons";
import { useMainStore } from "../../storage/main";
import { IEntity } from "../../types/IEntity";
import Button from "../basic/Button.vue";
import EntityForm from "./EntityForm.vue";

const modalOpened = ref(false);
const { editEntity } = useMainStore();

defineProps<{ entity: IEntity }>();

const handleSubmit = (entity: IEntity) => {
  editEntity(entity);
};
</script>

<template>
  <Button type="positive" @click="modalOpened = true">
    <PencilIcon color="green" />
  </Button>
  <EntityForm
    v-model:opened="modalOpened"
    :entity="entity"
    @submit="handleSubmit"
  />
</template>
