<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useMainStore } from "../../storage/main";
import { IRelation } from "../../types/IRelation";
import Button from "../basic/Button.vue";
import RelationForm from "./RelationForm.vue";

const modalOpened = ref(false);
const store = useMainStore();
const { addRelation, emptyRelation } = store;
const { entities } = storeToRefs(store);

const handleAdd = (relation: IRelation) => {
  addRelation(relation);
};
</script>

<template>
  <Button
    type="positive"
    :disabled="entities.length < 2"
    @click="modalOpened = true"
  >
    <slot></slot>
  </Button>
  <RelationForm
    v-if="entities.length >= 2"
    v-model:opened="modalOpened"
    title="Создать отношение"
    submit="Создать"
    :relation="{ ...emptyRelation }"
    @submit="handleAdd"
  />
</template>
