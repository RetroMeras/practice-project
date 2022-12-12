<script setup lang="ts">
import { reactive } from "vue";
import { IParticipant } from "../../types/IParticipant";
import Input from "../basic/Input.vue";
import Modal from "../basic/Modal.vue";

const props = defineProps<{
  opened: boolean;
  participant: IParticipant;
  submit: string;
  title: string;
}>();
const emit = defineEmits<{
  (e: "update:opened", value: boolean): void;
  (e: "submit", value: IParticipant): void;
}>();

const participant = reactive({ ...props.participant });

const handleSubmit = () => {
  emit("submit", { ...participant });
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
      <Input v-model="participant.name" title="Название" />
    </div>
  </Modal>
</template>
