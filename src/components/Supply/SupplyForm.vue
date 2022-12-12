<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed, reactive, ref } from "vue";
import { useMainStore } from "../../storage/main";
import { ISupply } from "../../types/ISupply";
import { IOption } from "../../types/ui/IOption";
import BasicSelect from "../basic/BasicSelect.vue";
import Modal from "../basic/Modal.vue";
import { ArrowRightIcon } from "vue-tabler-icons";

const store = useMainStore();
const { participants } = storeToRefs(store);

const selectOptions = computed(() =>
  participants.value.map(
    (item) => ({ value: item.id, label: item.name } as IOption)
  )
);

const props = defineProps<{
  opened: boolean;
  submit: string;
  title: string;
  supply: ISupply;
}>();
const emit = defineEmits<{
  (e: "submit", supply: ISupply): void;
  (e: "update:opened", value: boolean): void;
}>();

const supply = reactive({ ...props.supply });
const from = ref(participants.value[0].id);
const to = ref(participants.value[1].id);

const handleSubmit = () => {
  emit("submit", { ...supply } as ISupply);
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
        <label for="parents">Поставки</label>
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
      </div>
    </div>
  </Modal>
</template>
