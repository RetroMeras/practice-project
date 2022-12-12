<script setup lang="ts">
import { storeToRefs } from "pinia";
import { PlusIcon } from "vue-tabler-icons";
import Button from "../../components/basic/Button.vue";
import List from "../../components/basic/List.vue";
import ResourceAdd from "../../components/Resource/ResourceAdd.vue";
import ResourceDelete from "../../components/Resource/ResourceDelete.vue";
import ResourceEdit from "../../components/Resource/ResourceEdit.vue";
import ResourceItem from "../../components/Resource/ResourceItem.vue";
import { useMainStore } from "../../storage/main";

const store = useMainStore();
const { resources } = storeToRefs(store);
</script>

<template>
  <div>
    <h1 class="text-xl bold pb-5">Ресурсы</h1>
    <List :items="resources" :titles="['Id', 'Название']">
      <template #utils>
        <div class="flex flex-row w-min gap-2 my-3">
          <ResourceAdd><PlusIcon color="green" /></ResourceAdd>
        </div>
      </template>
      <template #item="itemProps">
        <ResourceItem
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
        <ResourceDelete :id="modalProps.item.id" :after="modalProps.close" />
        <ResourceEdit :resource="modalProps.item" :after="modalProps.close" />
        <Button type="negative" @click="modalProps.close"> Закрыть </Button>
      </template>
    </List>
  </div>
</template>
