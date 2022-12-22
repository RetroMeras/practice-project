<script setup lang="ts">
import { storeToRefs } from "pinia";
import { PlusIcon } from "vue-tabler-icons";
import Button from "../../components/basic/Button.vue";
import List from "../../components/basic/List.vue";
import UnitAdd from "../../components/Unit/UnitAdd.vue";
import UnitDelete from "../../components/Unit/UnitDelete.vue";
import UnitEdit from "../../components/Unit/UnitEdit.vue";
import UnitItem from "../../components/Unit/UnitItem.vue";
import { useMainStore } from "../../storage/main";

const store = useMainStore();
const { units } = storeToRefs(store);
</script>

<template>
  <div>
    <h1 class="text-xl bold pb-5">Единицы измерения</h1>
    <List :items="units" :titles="['Id', 'Название']">
      <template #utils>
        <div class="flex flex-row w-min gap-2 my-3">
          <UnitAdd><PlusIcon color="green" /></UnitAdd>
        </div>
      </template>
      <template #item="itemProps">
        <UnitItem
          :item="itemProps.item"
          :select="itemProps.select"
          :odd="itemProps.index % 2 !== 0"
          :selected="itemProps.selected"
        />
      </template>
      <template #modal="modalProps">
        <div>
          <div>Id - {{ modalProps.item.id }}</div>
          <div>Название - {{ modalProps.item.name }}</div>
        </div>
      </template>
      <template #modalButtons="modalProps">
        <UnitDelete :id="modalProps.item.id" :after="modalProps.close" />
        <UnitEdit :unit="modalProps.item" :after="modalProps.close" />
        <Button type="negative" @click="modalProps.close"> Закрыть </Button>
      </template>
    </List>
  </div>
</template>
