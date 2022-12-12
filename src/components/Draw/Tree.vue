<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useMainStore } from "../../storage/main";
import { Tree } from "../../utils/draw/tree";

const props = defineProps<{ root: string }>();

const store = useMainStore();
const { participants, resources, supplies } = storeToRefs(store);

const root =
  resources.value.find((item) => item.id == props.root) || resources.value[0];

onMounted(() => {
  const chart = Tree(
    "#treeContainer",
    {
      material: "Стул",
      company: {
        name: "Я",
        url: "https://www.google.com",
      },
      children: [
        {
          material: "Каркас",
          company: {
            name: "Я",
            url: "https://www.google.com",
          },
          children: [
            {
              material: "Трубы",
              company: {
                name: "Я",
                url: "https://www.google.com",
              },
              children: [
                {
                  material: "Железо",
                  company: {
                    name: "Я",
                    url: "https://www.google.com",
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        {
          material: "Спинка",
          company: {
            name: "Я",
            url: "https://www.google.com",
          },
          children: [
            {
              material: "Ткань",
              company: {
                name: "Я",
                url: "https://www.google.com",
              },
              children: [],
            },
            {
              material: "Паралон",
              company: {
                name: "Я",
                url: "https://www.google.com",
              },
              children: [],
            },
            {
              material: "Дерево",
              company: {
                name: "Я",
                url: "https://www.google.com",
              },
              children: [],
            },
          ],
        },
        {
          material: "Сидушка",
          company: {
            name: "Я",
            url: "https://www.google.com",
          },
          children: [
            {
              material: "Ткань",
              company: {
                name: "Я",
                url: "https://www.google.com",
              },
              children: [],
            },
            {
              material: "Паралон",
              company: {
                name: "Я",
                url: "https://www.google.com",
              },
              children: [],
            },
            {
              material: "Дерево",
              company: {
                name: "Я",
                url: "https://www.google.com",
              },
              children: [],
            },
          ],
        },
      ],
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
