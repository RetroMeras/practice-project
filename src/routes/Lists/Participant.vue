<script setup lang="ts">
import { storeToRefs } from "pinia";
import { PlusIcon } from "vue-tabler-icons";
import Button from "../../components/basic/Button.vue";
import List from "../../components/basic/List.vue";
import ParticipantAdd from "../../components/Participant/ParticipantAdd.vue";
import ParticipantDelete from "../../components/Participant/ParticipantDelete.vue";
import ParticipantEdit from "../../components/Participant/ParticipantEdit.vue";
import ParticipantItem from "../../components/Participant/ParticipantItem.vue";
import { useMainStore } from "../../storage/main";

const store = useMainStore();
const { participants } = storeToRefs(store);
</script>

<template>
  <div>
    <h1 class="text-xl bold pb-5">Участники</h1>
    <List :items="participants" :titles="['Id', 'Название']">
      <template #utils>
        <div class="flex flex-row w-min gap-2 my-3">
          <ParticipantAdd><PlusIcon color="green" /></ParticipantAdd>
        </div>
      </template>
      <template #item="itemProps">
        <ParticipantItem
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
          <span>{{ modalProps.item.name }}</span>
        </div>
      </template>
      <template #modalButtons="modalProps">
        <ParticipantDelete :id="modalProps.item.id" :after="modalProps.close" />
        <ParticipantEdit
          :participant="modalProps.item"
          :after="modalProps.close"
        />
        <Button type="negative" @click="modalProps.close"> Закрыть </Button>
      </template>
    </List>
  </div>
</template>
