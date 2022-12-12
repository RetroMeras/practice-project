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
    <List :items="supplies" :titles="['Обозначение', 'Название', 'Описание']">
      <template #utils>
        <div class="flex flex-row w-min gap-2 my-3">
          <SupplyAdd><PlusIcon color="green" /></SupplyAdd>
        </div>
      </template>
      <template #item="itemProps">
        <RelationItem
          :item="itemProps.item"
          :select="itemProps.select"
          :odd="itemProps.index % 2 !== 0"
          :selected="itemProps.selected"
        />
      </template>
      <template #modal="modalProps">
        <div>
          <span>{{ modalProps.item.title }}</span>
          -
          <span>{{ modalProps.item.description }}</span>
        </div>
      </template>
      <template #modalButtons="modalProps">
        <RelationDelete
          :uuid="modalProps.item.uuid"
          :after="modalProps.close"
        />
        <RelationEdit :supply="modalProps.item" :after="modalProps.close" />
        <Button type="negative" @click="modalProps.close">Закрыть</Button>
      </template>
    </List>
  </div>
</template>
