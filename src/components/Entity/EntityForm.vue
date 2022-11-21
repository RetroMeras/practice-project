<script setup lang="ts">
import { reactive } from "vue";
import { IEntity } from "../../types/IEntity";
import Input from "../basic/Input.vue";
import Modal from "../basic/Modal.vue";

const props = defineProps<{
  opened: boolean;
  entity: IEntity;
  submit: string;
  title: string;
}>();
const emit = defineEmits<{
  (e: "update:opened", value: boolean): void;
  (e: "submit", value: IEntity): void;
}>();

const entity = reactive({ ...props.entity });

const handleSubmit = () => {
  emit("submit", { ...entity });
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
      <Input v-model="entity.title" title="Title" />
      <Input v-model="entity.description" title="Description" />
    </div>
  </Modal>
</template>
