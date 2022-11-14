<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { useMainStore } from "../../storage/main";
import { IOption } from "../../types/ui/IOption";
import BasicSelect from "../basic/BasicSelect.vue";
import Input from "../basic/Input.vue";
import Modal from "../basic/Modal.vue";

const { emptyRelation, addRelation, entities } = useMainStore();

const selectOptions = computed(() =>
  entities.map((item) => ({ value: item.uuid, label: item.title } as IOption))
);

defineProps<{ opened: boolean }>();
const emit = defineEmits<{
  (e: "update:opened", value: boolean): void;
}>();

const relation = reactive({ ...emptyRelation });
const from = ref(entities[0].uuid);
const to = ref(entities[0].uuid);

const handleSubmit = () => {
  addRelation({
    ...relation,
    from: from.value,
    to: to.value,
  });
};
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
