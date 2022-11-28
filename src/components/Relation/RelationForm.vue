<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed, reactive, ref } from "vue";
import { useMainStore } from "../../storage/main";
import { IRelation, PROPERTIES } from "../../types/IRelation";
import { IOption } from "../../types/ui/IOption";
import BasicSelect from "../basic/BasicSelect.vue";
import Input from "../basic/Input.vue";
import Modal from "../basic/Modal.vue";
import { ArrowRightIcon } from "vue-tabler-icons";

const store = useMainStore();
const { entities } = storeToRefs(store);

const selectOptions = computed(() =>
  entities.value.map(
    (item) => ({ value: item.uuid, label: item.title } as IOption)
  )
);
const propertyOptions = computed(() =>
  PROPERTIES.map(
    (item, index) => ({ value: index.toString(), label: item } as IOption)
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

const fromProperty = ref(entities.value[0].uuid);
const toProperty = ref(entities.value[1].uuid);

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
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-2">
        <Input v-model="relation.title" title="Название" />
        <Input v-model="relation.description" title="Описание" />
        <Input v-model="relation.symbol" title="Обозначение" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="parents">Сущности</label>
        <div
          id="parents"
          class="flex flex-row gap-5 justify-center align-middle"
        >
          <div class="flex flex-row gap-1 justify-center align-middle w-full">
            <BasicSelect
              id="from"
              v-model:value="from"
              :options="selectOptions"
            />
          </div>
          <div class="w-max h-full">
            <ArrowRightIcon />
          </div>
          <div class="flex flex-row gap-1 justify-center align-middle w-full">
            <BasicSelect id="to" v-model:value="to" :options="selectOptions" />
          </div>
        </div>
        <label for="properties">Свойства</label>
        <div id="properties" class="flex flex-row gap-5">
          <BasicSelect
            v-model:value="fromProperty"
            :options="propertyOptions"
          />
          <BasicSelect v-model:value="toProperty" :options="propertyOptions" />
        </div>
      </div>
    </div>
  </Modal>
</template>
