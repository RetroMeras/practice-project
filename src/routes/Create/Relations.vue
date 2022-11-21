<script setup lang="ts">
import { storeToRefs } from "pinia";
import List from "../../components/basic/List.vue";
import RelationAdd from "../../components/Relation/RelationAdd.vue";
import RelationItem from "../../components/Relation/RelationItem.vue";
import { useMainStore } from "../../storage/main";

const store = useMainStore();
const { relations } = storeToRefs(store);
</script>

<template>
  <div class="flex flex-row gap-5">
    <div class="relationWrapper w-1/2">
      <RelationAdd> Добавить отношение </RelationAdd>
      <List v-slot="slotProps" :items="relations">
        <RelationItem :item="slotProps.item" />
      </List>
    </div>
  </div>
</template>
