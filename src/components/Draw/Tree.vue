<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useMainStore } from "../../storage/main";
import { Tree } from "../../utils/draw/tree";

const props = defineProps<{ id: string }>();

const store = useMainStore();
const { participants, resources, supplies } = storeToRefs(store);

const root =
  resources.value.find((item) => item.id == props.id) || resources.value[0];

onMounted(() => {
  const chart = Tree(
    "#treeContainer",
    {
      material: root.name,
      company: {
        name: "Я",
        url: "https://www.google.com",
      },
      children: [],
    },
    {
      dx: 30,
    }
  );
});
</script>

<template>
  <svg id="treeContainer"></svg>
</template>
