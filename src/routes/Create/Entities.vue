<script setup lang="ts">
import { storeToRefs } from "pinia";
import List from "../../components/basic/List.vue";
import EntityAdd from "../../components/Entity/EntityAdd.vue";
import EntityItem from "../../components/Entity/EntityItem.vue";
import { useMainStore } from "../../storage/main";

const store = useMainStore();
const { entities } = storeToRefs(store);
</script>

<template>
  <div class="flex flex-row gap-5">
    <div class="entityWrapper w-1/2">
      <EntityAdd> Добавить сущность </EntityAdd>
      <List v-slot="slotProps" :items="entities">
        <EntityItem :item="slotProps.item" />
      </List>
    </div>
  </div>
</template>
