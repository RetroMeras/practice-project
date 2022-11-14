<script setup lang="ts">
import { reactive, ref } from "vue";
import { useMainStore } from "../../storage/main";
import Button from "../basic/Button.vue";
import Input from "../basic/Input.vue";
import Modal from "../basic/Modal.vue";

const modalOpened = ref(false);
const { emptyEntity, addEntity } = useMainStore();

const entity = reactive({ ...emptyEntity });

const handleSelect = () => {
  addEntity(entity);
};
</script>

<template>
  <Button type="positive" @click="modalOpened = true"><slot></slot></Button>
  <Modal
    v-model:opened="modalOpened"
    title="Добавление сущности"
    cancel="Отмена"
    submit="Создать"
    @submit="handleSelect"
  >
    <div>
      <Input v-model="entity.title" title="Title" />
      <Input v-model="entity.description" title="Description" />
    </div>
  </Modal>
</template>
