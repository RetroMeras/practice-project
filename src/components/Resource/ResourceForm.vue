<script setup lang="ts">
import { reactive } from "vue";
import { IResource } from "../../types/IResource";
import Input from "../basic/Input.vue";
import Modal from "../basic/Modal.vue";

const props = defineProps<{
  opened: boolean;
  resource: IResource;
  submit: string;
  title: string;
}>();
const emit = defineEmits<{
  (e: "update:opened", value: boolean): void;
  (e: "submit", value: IResource): void;
}>();

const resource = reactive({ ...props.resource });

const handleSubmit = () => {
  emit("submit", { ...resource });
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
      <Input v-model="resource.name" title="Название" />
    </div>
  </Modal>
</template>
