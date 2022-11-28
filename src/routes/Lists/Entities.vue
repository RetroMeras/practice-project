<script setup lang="ts">
import { storeToRefs } from "pinia";
import { PlusIcon } from "vue-tabler-icons";
import Button from "../../components/basic/Button.vue";
import List from "../../components/basic/List.vue";
import EntityAdd from "../../components/Entity/EntityAdd.vue";
import EntityDelete from "../../components/Entity/EntityDelete.vue";
import EntityEdit from "../../components/Entity/EntityEdit.vue";
import EntityItem from "../../components/Entity/EntityItem.vue";
import { useMainStore } from "../../storage/main";

const store = useMainStore();
const { entities } = storeToRefs(store);
</script>

<template>
  <div>
    <h1 class="text-xl bold pb-5">Сущности</h1>
    <List :items="entities" :titles="['Название', 'Описание']">
      <template #utils>
        <div class="flex flex-row w-min gap-2 my-3">
          <EntityAdd><PlusIcon color="green" /></EntityAdd>
        </div>
      </template>
      <template #item="itemProps">
        <EntityItem
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
        <EntityDelete :uuid="modalProps.item.uuid" :after="modalProps.close" />
        <EntityEdit :entity="modalProps.item" :after="modalProps.close" />
        <Button type="negative" @click="modalProps.close"> Закрыть </Button>
      </template>
    </List>
  </div>
</template>
