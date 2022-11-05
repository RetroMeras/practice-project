<script setup lang="ts">
import { reactive, ref } from "vue";
import { useMainStore } from "../../storage/main";

const modalOpened = ref(false);
const { emptyRelation, addRelation } = useMainStore();

const relation = reactive({ ...emptyRelation });
</script>

<template>
  <Button type="positive" @click="modalOpened = true"><slot></slot></Button>
  <Modal
    v-model:opened="modalOpened"
    title="Добавление отношения"
    cancel="Отмена"
    submit="Создать"
    @submit="() => addRelation(relation)"
  >
    <div>
      <Input v-model="relation.title" title="Название" />
      <Input v-model="relation.description" title="Описание" />
      <Input v-model="relation.symbol" title="Обозначение" />
    </div>
  </Modal>
</template>
