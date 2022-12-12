<script setup lang="ts">
import { reactive } from "vue";
import { IUnit } from "../../types/IValue";
import Input from "../basic/Input.vue";
import Modal from "../basic/Modal.vue";

const props = defineProps<{
  opened: boolean;
  unit: IUnit;
  submit: string;
  title: string;
}>();
const emit = defineEmits<{
  (e: "update:opened", value: boolean): void;
  (e: "submit", value: IUnit): void;
}>();

const unit = reactive({ ...props.unit });

const handleSubmit = () => {
  emit("submit", { ...unit });
  emit("update:opened", false);
};
</script>

<template>
  <Modal
    :opened="opened"
    :title="title"
    cancel="Отмена"
    :submit="submit"
    @update:opened="(value: boolean) => emit('update:opened', value)"
    @submit="handleSubmit"
  >
    <div>
      <Input v-model="unit.name" title="Название" />
    </div>
  </Modal>
</template>
