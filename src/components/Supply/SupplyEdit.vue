<script setup lang="ts">
import { ref } from "vue";
import { PencilIcon } from "vue-tabler-icons";
import { useMainStore } from "../../storage/main";
import { ISupply } from "../../types/ISupply";
import Button from "../basic/Button.vue";
import SupplyForm from "./SupplyForm.vue";

const modalOpened = ref(false);
const { editSupply } = useMainStore();

const props = defineProps<{ supply: ISupply; after: () => void }>();

const handleSubmit = (supply: ISupply) => {
  editSupply(supply);
  props.after();
};
</script>

<template>
  <Button type="positive" @click="modalOpened = true">
    <PencilIcon color="green" />
  </Button>
  <SupplyForm
    v-model:opened="modalOpened"
    title="Изменить отношение"
    submit="Изменить"
    :supply="supply"
    @submit="handleSubmit"
  />
</template>
