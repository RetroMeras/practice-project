<script setup lang="ts">
import { storeToRefs } from "pinia";
import { PlusIcon } from "vue-tabler-icons";
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
      <template #utils="utilsProps">
        <div class="flex flex-row w-min gap-2 my-3">
          <EntityAdd><PlusIcon color="green" /></EntityAdd>
          <EntityEdit
            v-if="utilsProps.selected != undefined"
            :entity="entities[utilsProps.selected]"
            :after="utilsProps.clear"
          />
          <EntityDelete
            v-if="utilsProps.selected != undefined"
            :uuid="entities[utilsProps.selected].uuid"
            :after="utilsProps.clear"
          />
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
    </List>
  </div>
</template>
