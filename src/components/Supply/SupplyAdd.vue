<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useMainStore } from "../../storage/main";
import { ISupply } from "../../types/ISupply";
import Button from "../basic/Button.vue";
import SupplyForm from "./SupplyForm.vue";

const modalOpened = ref(false);
const store = useMainStore();
const { addSupply, emptySupply } = store;
const { participants, resources, units } = storeToRefs(store);

const handleAdd = (supply: ISupply) => {
  addSupply(supply);
};
</script>

<template>
  <Button
    type="positive"
    :disabled="participants.length < 2"
    @click="modalOpened = true"
  >
    <slot></slot>
  </Button>
  <SupplyForm
    v-if="participants.length >= 2 && resources.length > 0 && units.length > 0"
    v-model:opened="modalOpened"
    title="Создать поставку"
    submit="Создать"
    :supply="{ ...emptySupply }"
    @submit="handleAdd"
  />
</template>
