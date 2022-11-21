<script setup lang="ts">
import { ref } from "vue";
import { PencilIcon } from "vue-tabler-icons";
import { useMainStore } from "../../storage/main";
import { IRelation } from "../../types/IRelation";
import Button from "../basic/Button.vue";
import RelationForm from "./RelationForm.vue";

const modalOpened = ref(false);
const { editRelation } = useMainStore();

defineProps<{ relation: IRelation }>();

const handleSubmit = (relation: IRelation) => {
  editRelation(relation);
};
</script>

<template>
  <Button type="positive" @click="modalOpened = true">
    <PencilIcon color="green" />
  </Button>
  <RelationForm
    v-model:opened="modalOpened"
    title="Изменить отношение"
    submit="Изменить"
    :relation="relation"
    @submit="handleSubmit"
  />
</template>
