<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { computed, reactive, ref, defineEmits } from "vue";
import { useMainStore } from "../../storage/main";
import { IOption } from "../../types/ui/IOption";
import BasicSelect from "../basic/BasicSelect.vue";
import Input from "../basic/Input.vue";
import Modal from "../basic/Modal.vue";

const { emptyRelation, addRelation, entities } = useMainStore();

const selectOptions = computed(() =>
  entities.map((item) => ({ value: item.id, label: item.title } as IOption))
);

defineProps<{ opened: boolean }>();
const emit = defineEmits<{
  (e: "update:opened", value: boolean): void;
}>();

const relation = reactive({ ...emptyRelation });
const parent0 = ref(entities[0].id);
const parent1 = ref(entities[0].id);

const handleSubmit = () => {
  addRelation({
    ...relation,
    parents: [parent0.value, parent1.value],
    id: uuidv4(),
  });
};

// Подумай над стилями особенно BasicSelect
</script>

<template>
  <Modal
    :opened="opened"
    title="Добавление отношения"
    cancel="Отмена"
    submit="Создать"
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
          v-model:value="parent0"
          :options="selectOptions"
          class="w-32"
        />
        <Input v-model="relation.symbol" title="Обозначение" />
        <BasicSelect
          v-model:value="parent1"
          :options="selectOptions"
          class="w-32"
        />
      </div>
    </div>
  </Modal>
</template>
