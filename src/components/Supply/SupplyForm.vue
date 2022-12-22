<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed, reactive, ref } from "vue";
import { useMainStore } from "../../storage/main";
import { ISupply } from "../../types/ISupply";
import { IValue } from "../../types/IValue";
import BasicSelect from "../basic/BasicSelect.vue";
import NumberInput from "../basic/NumberInput.vue";
import Modal from "../basic/Modal.vue";
import {
  generate_participants_dict,
  generate_resources_dict,
} from "../../utils/dicts";
import { ICreator } from "../../types/ICreator";

const store = useMainStore();
const { participants, resources, units, creators } = storeToRefs(store);

// const creators_dict = computed(() => generate_creators_dict(creators.value));
const participants_dict = computed(() =>
  generate_participants_dict(participants.value)
);
const resources_dict = computed(() => generate_resources_dict(resources.value));

const creatorOptions = computed(() =>
  creators.value.map((creator: ICreator) => ({
    value: creator.id,
    label:
      participants_dict.value && resources_dict.value
        ? `${participants_dict.value[creator.participant].name} | ${
            resources_dict.value[creator.resource].name
          }`
        : "",
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
const seller = ref(supply.seller);
const buyer = ref(supply.buyer);

const price_value = ref(supply.price.value);
const price_unit = ref(supply.price.unit);

const size_value = ref(supply.size.value);
const size_unit = ref(supply.size.unit);

const handleSubmit = () => {
  emit("submit", {
    ...supply,
    buyer: buyer.value,
    seller: seller.value,
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
            :options="creatorOptions"
          />
        </div>
        <div>
          <label for="buyer">Покупатель</label>
          <BasicSelect
            id="buyer"
            v-model:value="buyer"
            :options="creatorOptions"
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
