<script setup lang="ts">
import { ref } from "vue";
import { PencilIcon } from "vue-tabler-icons";
import { useMainStore } from "../../storage/main";
import { IRelation } from "../../types/IRelation";
import Button from "../basic/Button.vue";
import RelationForm from "./RelationForm.vue";

const modalOpened = ref(false);
const { editRelation } = useMainStore();

const props = defineProps<{ relation: IRelation; after: () => void }>();

const handleSubmit = (relation: IRelation) => {
  editRelation(relation);
  props.after();
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
