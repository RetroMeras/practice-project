<script setup lang="ts">
import { storeToRefs } from "pinia";
import { PlusIcon } from "vue-tabler-icons";
import Button from "../../components/basic/Button.vue";
import List from "../../components/basic/List.vue";
import SupplyAdd from "../../components/Supply/SupplyAdd.vue";
import SupplyDelete from "../../components/Supply/SupplyDelete.vue";
import SupplyEdit from "../../components/Supply/SupplyEdit.vue";
import SupplyItem from "../../components/Supply/SupplyItem.vue";
import { useMainStore } from "../../storage/main";

const store = useMainStore();
const { supplies } = storeToRefs(store);
</script>

<template>
  <div>
    <h1 class="text-xl bold pb-5">Поставки</h1>
    <List
      :items="supplies"
      :titles="['Id', 'Ресурс', 'Поставщик', 'Покупатель', 'Цена', 'Размер']"
    >
      <template #utils>
        <div class="flex flex-row w-min gap-2 my-3">
          <SupplyAdd><PlusIcon color="green" /></SupplyAdd>
        </div>
      </template>
      <template #item="itemProps">
        <SupplyItem
          :item="itemProps.item"
          :select="itemProps.select"
          :odd="itemProps.index % 2 !== 0"
          :selected="itemProps.selected"
        />
      </template>
      <template #modal="modalProps">
        <div>
          <span>{{ modalProps.item.id }}</span>
          -
          <span>{{ modalProps.item.resource }}</span>
          -
          <span>{{ modalProps.item.seller }}</span>
          -
          <span>{{ modalProps.item.buyer }}</span>
          -
          <span>{{ modalProps.item.price }}</span>
          -
          <span>{{ modalProps.item.size }}</span>
        </div>
      </template>
      <template #modalButtons="modalProps">
        <SupplyDelete :id="modalProps.item.id" :after="modalProps.close" />
        <SupplyEdit :supply="modalProps.item" :after="modalProps.close" />
        <Button type="negative" @click="modalProps.close">Закрыть</Button>
      </template>
    </List>
  </div>
</template>
