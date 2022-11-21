<script setup lang="ts">
import { ref } from "vue";
import { PencilIcon } from "vue-tabler-icons";
import { useMainStore } from "../../storage/main";
import { IEntity } from "../../types/IEntity";
import Button from "../basic/Button.vue";
import EntityForm from "./EntityForm.vue";

const modalOpened = ref(false);
const { editEntity } = useMainStore();

const props = defineProps<{ entity: IEntity; after: () => void }>();

const handleSubmit = (entity: IEntity) => {
  editEntity(entity);
  props.after();
};
</script>

<template>
  <Button type="positive" @click="modalOpened = true">
    <PencilIcon color="green" />
  </Button>
  <EntityForm
    v-model:opened="modalOpened"
    :entity="entity"
    submit="Изменить"
    title="Изменить сущность"
    @submit="handleSubmit"
  />
</template>
