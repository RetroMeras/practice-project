<script setup lang="ts">
import { ref } from "vue";
import { useMainStore } from "../../storage/main";
import { IParticipantSubmit } from "../../types/IParticipant";
import Button from "../basic/Button.vue";
import ParticipantForm from "./ParticipantForm.vue";

const modalOpened = ref(false);
const { addParticipant, emptyParticipant } = useMainStore();

const handleSubmit = (participant: IParticipantSubmit) => {
  addParticipant(participant);
};
</script>

<template>
  <Button type="positive" @click="modalOpened = true"><slot></slot></Button>
  <ParticipantForm
    v-model:opened="modalOpened"
    :participant="emptyParticipant"
    submit="Создать"
    title="Добавить сущность"
    @submit="handleSubmit"
  />
</template>
