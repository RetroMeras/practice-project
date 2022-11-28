<script setup lang="ts">
import { storeToRefs } from "pinia";
import { PlusIcon } from "vue-tabler-icons";
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
      <template #utils="utilsProps">
        <div class="flex flex-row w-min gap-2 my-3">
          <RelationAdd><PlusIcon color="green" /></RelationAdd>
          <RelationEdit
            v-if="utilsProps.selected !== undefined"
            :relation="relations[utilsProps.selected]"
            :after="utilsProps.clear"
          />
          <RelationDelete
            v-if="utilsProps.selected !== undefined"
            :uuid="relations[utilsProps.selected].uuid"
            :after="utilsProps.clear"
          />
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
    </List>
  </div>
</template>
