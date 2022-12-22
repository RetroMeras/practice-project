<script setup lang="ts">
import { ref } from "vue";
import { PencilIcon } from "vue-tabler-icons";
import { useMainStore } from "../../storage/main";
import { IUnit } from "../../types/IValue";
import Button from "../basic/Button.vue";
import UnitForm from "./UnitForm.vue";

const modalOpened = ref(false);
const { editUnit } = useMainStore();

const props = defineProps<{ unit: IUnit; after: () => void }>();

const handleSubmit = (unit: IUnit) => {
  editUnit(unit);
  props.after();
};
</script>

<template>
  <Button type="positive" @click="modalOpened = true">
    <PencilIcon color="green" />
  </Button>
  <UnitForm
    v-model:opened="modalOpened"
    :unit="unit"
    submit="Изменить"
    title="Изменить единицу измерения"
    @submit="handleSubmit"
  />
</template>
