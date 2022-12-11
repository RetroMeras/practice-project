<script setup lang="ts">
import { onMounted } from "vue";
import { Tree } from "../../utils/draw/tree";

onMounted(() => {
  const chart = Tree(
    "#treeContainer",
    {
      material: "Человек",
      company: {
        name: "Я",
        url: "https://www.google.com",
      },
      children: [
        {
          material: "Часть мамы",
          company: {
            name: "Мама",
            url: "https://www.google.com",
          },
          children: [
            {
              material: "Часть мамы мамы",
              company: {
                name: "Мама мамы",
                url: "https://www.google.com",
              },
              children: [
                {
                  material: "Часть мамы мамы мамы",
                  company: {
                    name: "Мама мамы мамы",
                    url: "https://www.google.com",
                  },
                  children: [],
                },
                {
                  material: "Часть папы мамы мамы",
                  company: {
                    name: "Папа мамы мамы",
                    url: "https://www.google.com",
                  },
                  children: [],
                },
              ],
            },
            {
              material: "Часть папы мамы",
              company: {
                name: "Папа Мамы",
                url: "https://www.google.com",
              },
              children: [],
            },
          ],
        },
        {
          material: "Часть папы",
          company: {
            name: "Папа",
            url: "https://www.google.com",
          },
          children: [
            {
              material: "Часть мамы папы",
              company: {
                name: "Мама папы",
                url: "https://www.google.com",
              },
              children: [],
            },
            {
              material: "Часть папы папы",
              company: {
                name: "Папа папы",
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
