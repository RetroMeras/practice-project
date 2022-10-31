<script setup lang="ts">
import { reactive, ref } from "vue";
import { IRelation } from "../../types/relation";
import Button from "../basic/Button.vue";

const emit = defineEmits<{
  (event: "push", item: IRelation): void;
}>();

const modalOpened = ref(false);
const entity = reactive<IRelation>({
  title: "",
  symbol: "",
  description: "",
  examples: [],
  properties: [],
  types: [],
});

const handleSubmit = () => {
  emit("push", { ...entity });
};
</script>

<template>
  <Button type="positive" @click="modalOpened = true"><slot></slot></Button>
  <Modal
    v-model:opened="modalOpened"
    title="Добавление отношения"
    cancel="Отмена"
    submit="Создать"
    @submit="handleSubmit"
  >
    <div>
      <Input v-model="entity.title" title="Название" />
      <Input v-model="entity.description" title="Описание" />
      <Input v-model="entity.symbol" title="Обозначение" />
    </div>
  </Modal>
</template>
