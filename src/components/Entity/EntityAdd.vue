<script setup lang="ts">
import { ref } from "vue";
import { useMainStore } from "../../storage/main";
import { IEntity } from "../../types/IEntity";
import Button from "../basic/Button.vue";
import EntityForm from "./EntityForm.vue";

const modalOpened = ref(false);
const { addEntity, emptyEntity } = useMainStore();

const handleSubmit = (entity: IEntity) => {
  addEntity(entity);
};
</script>

<template>
  <Button type="positive" @click="modalOpened = true"><slot></slot></Button>
  <EntityForm
    v-model:opened="modalOpened"
    :entity="emptyEntity"
    submit="Создать"
    title="Добавить сущность"
    @submit="handleSubmit"
  />
</template>
