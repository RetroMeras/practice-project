<script setup lang="ts">
import { storeToRefs } from "pinia";
import { reactive, ref, computed } from "vue";
import { useMainStore } from "../../storage/main";
import { IParticipant, IParticipantSubmit } from "../../types/IParticipant";
import BasicSelect from "../basic/BasicSelect.vue";
import Input from "../basic/Input.vue";
import Modal from "../basic/Modal.vue";

const props = defineProps<{
  opened: boolean;
  participant: IParticipant;
  submit: string;
  title: string;
  edit?: boolean;
}>();
const emit = defineEmits<{
  (e: "update:opened", value: boolean): void;
  (e: "submit", value: IParticipantSubmit): void;
}>();

const store = useMainStore();
const { resources } = storeToRefs(store);

const participant = reactive({ ...props.participant });
const resourceOptions = computed(() =>
  resources.value.map((item) => ({
    value: item.id,
    label: item.name,
  }))
);
const resource = ref("");

const handleSubmit = () => {
  emit("submit", { ...participant, resource: resource.value });
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
      <div v-if="!edit">
        <label for="resource">Ресурс</label>
        <BasicSelect
          id="resource"
          v-model:value="resource"
          :options="resourceOptions"
        />
      </div>
    </div>
  </Modal>
</template>
