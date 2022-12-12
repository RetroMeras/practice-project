<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed, reactive, ref } from "vue";
import { useMainStore } from "../../storage/main";
import { ISupply } from "../../types/ISupply";
import { IValue } from "../../types/IValue";
import { IOption } from "../../types/ui/IOption";
import BasicSelect from "../basic/BasicSelect.vue";
import NumberInput from "../basic/NumberInput.vue";
import Modal from "../basic/Modal.vue";

const store = useMainStore();
const { participants, resources, units } = storeToRefs(store);

const participantOptions = computed(() =>
  participants.value.map(
    (participant) =>
      ({ value: participant.id, label: participant.name } as IOption)
  )
);
const resourceOptions = computed(() =>
  resources.value.map((resource) => ({
    value: resource.id,
    label: resource.name,
  }))
);

const unitOptions = computed(() =>
  units.value.map((unit) => ({ value: unit.id, label: unit.name }))
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
const seller = ref(participants.value[0].id);
const buyer = ref(participants.value[1].id);
const resource = ref(resources.value[0].id);

const price_value = ref(0);
const price_unit = ref(units.value[0].id);

const size_value = ref(0);
const size_unit = ref(units.value[0].id);

const handleSubmit = () => {
  emit("submit", {
    ...supply,
    buyer: buyer.value,
    seller: seller.value,
    resource: resource.value,
    price: {
      value: price_value.value,
      unit: price_unit.value,
    } as IValue,
    size: {
      value: size_value.value,
      unit: size_unit.value,
    } as IValue,
  } as ISupply);
  emit("update:opened", false);
};
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
        <div>
          <label for="seller">Продавец</label>
          <BasicSelect
            id="seller"
            v-model:value="seller"
            :options="participantOptions"
          />
        </div>
        <div>
          <label for="buyer">Покупатель</label>
          <BasicSelect
            id="buyer"
            v-model:value="buyer"
            :options="participantOptions"
          />
        </div>
        <div>
          <label for="resource">Ресурс</label>
          <BasicSelect
            id="resource"
            v-model:value="resource"
            :options="resourceOptions"
          />
        </div>
      </div>
      <div>
        <label for="price">Цена</label>
        <div id="price" class="flex flex-row gap-2">
          <NumberInput v-model="price_value" />
          <BasicSelect v-model:value="price_unit" :options="unitOptions" />
        </div>
        <label for="size">Размер</label>
        <div class="flex flex-row gap-2">
          <NumberInput v-model="size_value" />
          <BasicSelect v-model:value="size_unit" :options="unitOptions" />
        </div>
      </div>
    </div>
  </Modal>
</template>
