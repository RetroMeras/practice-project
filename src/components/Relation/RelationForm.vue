<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed, reactive, ref } from "vue";
import { useMainStore } from "../../storage/main";
import { IRelation } from "../../types/IRelation";
import { IOption } from "../../types/ui/IOption";
import BasicSelect from "../basic/BasicSelect.vue";
import Input from "../basic/Input.vue";
import Modal from "../basic/Modal.vue";

const store = useMainStore();
const { entities } = storeToRefs(store);

const selectOptions = computed(() =>
  entities.value.map(
    (item) => ({ value: item.uuid, label: item.title } as IOption)
  )
);

const props = defineProps<{
  opened: boolean;
  submit: string;
  title: string;
  relation: IRelation;
}>();
const emit = defineEmits<{
  (e: "submit", relation: IRelation): void;
  (e: "update:opened", value: boolean): void;
}>();

const relation = reactive({ ...props.relation });
const from = ref(entities.value[0].uuid);
const to = ref(entities.value[1].uuid);

const handleSubmit = () => {
  emit("submit", { ...relation } as IRelation);
  emit("update:opened", false);
};

// Подумай над стилями особенно BasicSelect
</script>

<template>
  <Modal
    :opened="opened"
    cancel="Отмена"
    :submit="submit"
    :title="title"
    @update:opened="(value: boolean) => emit('update:opened', value)"
    @submit="handleSubmit"
  >
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <Input v-model="relation.title" title="Название" />
        <Input v-model="relation.description" title="Описание" />
      </div>
      <div class="flex flex-row gap-2 items-end">
        <BasicSelect
          v-model:value="from"
          :options="selectOptions"
          class="w-32"
        />
        <Input v-model="relation.symbol" title="Обозначение" />
        <BasicSelect v-model:value="to" :options="selectOptions" class="w-32" />
      </div>
    </div>
  </Modal>
</template>
