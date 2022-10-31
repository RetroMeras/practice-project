<script setup lang="ts">
import { reactive, ref } from "vue";
import { IEntity } from "../../types/entity";
import Button from "../basic/Button.vue";

const emit = defineEmits<{
  (event: "push", item: IEntity): void;
}>();

const modalOpened = ref(false);
const entity = reactive<IEntity>({
  title: "",
  description: "",
  examples: [],
  relations: [],
});

const handleSubmit = () => {
  emit("push", { ...entity });
};
</script>

<template>
  <Button type="positive" @click="modalOpened = true"><slot></slot></Button>
  <Modal
    v-model:opened="modalOpened"
    title="Добавление сущности"
    cancel="Отмена"
    submit="Создать"
    @submit="handleSubmit"
  >
    <div>
      <Input v-model="entity.title" title="Title" />
      <Input v-model="entity.description" title="Description" />
    </div>
  </Modal>
</template>
