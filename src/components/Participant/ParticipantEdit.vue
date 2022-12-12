<script setup lang="ts">
import { ref } from "vue";
import { PencilIcon } from "vue-tabler-icons";
import { useMainStore } from "../../storage/main";
import { IParticipant } from "../../types/IParticipant";
import Button from "../basic/Button.vue";
import ParticipantForm from "./ParticipantForm.vue";

const modalOpened = ref(false);
const { editParticipant } = useMainStore();

const props = defineProps<{ participant: IParticipant; after: () => void }>();

const handleSubmit = (participant: IParticipant) => {
  editParticipant(participant);
  props.after();
};
</script>

<template>
  <Button type="positive" @click="modalOpened = true">
    <PencilIcon color="green" />
  </Button>
  <ParticipantForm
    v-model:opened="modalOpened"
    :participant="participant"
    submit="Изменить"
    title="Изменить сущность"
    @submit="handleSubmit"
  />
</template>
