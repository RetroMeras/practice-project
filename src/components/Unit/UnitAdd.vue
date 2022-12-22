<script setup lang="ts">
import { ref } from "vue";
import { useMainStore } from "../../storage/main";
import { IUnit } from "../../types/IValue";
import Button from "../basic/Button.vue";
import UnitForm from "./UnitForm.vue";

const modalOpened = ref(false);
const { addUnit, emptyUnit } = useMainStore();

const handleSubmit = (unit: IUnit) => {
  addUnit(unit);
};
</script>

<template>
  <Button type="positive" @click="modalOpened = true"><slot></slot></Button>
  <UnitForm
    v-model:opened="modalOpened"
    :unit="emptyUnit"
    submit="Создать"
    title="Добавить единицу измерения"
    @submit="handleSubmit"
  />
</template>
