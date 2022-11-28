<script setup lang="ts">
import { storeToRefs } from "pinia";
import { PlusIcon } from "vue-tabler-icons";
import Button from "../../components/basic/Button.vue";
import List from "../../components/basic/List.vue";
import RelationAdd from "../../components/Relation/RelationAdd.vue";
import RelationDelete from "../../components/Relation/RelationDelete.vue";
import RelationEdit from "../../components/Relation/RelationEdit.vue";
import RelationItem from "../../components/Relation/RelationItem.vue";
import { useMainStore } from "../../storage/main";

const store = useMainStore();
const { relations } = storeToRefs(store);
</script>

<template>
  <div>
    <h1 class="text-xl bold pb-5">Отношения</h1>
    <List :items="relations" :titles="['Обозначение', 'Название', 'Описание']">
      <template #utils>
        <div class="flex flex-row w-min gap-2 my-3">
          <RelationAdd><PlusIcon color="green" /></RelationAdd>
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
        <RelationEdit :relation="modalProps.item" :after="modalProps.close" />
        <Button type="negative" @click="modalProps.close">Закрыть</Button>
      </template>
    </List>
  </div>
</template>
