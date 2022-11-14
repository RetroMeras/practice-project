<script setup lang="ts">
import Circle, { ICircle } from "../components/Draw/Circle.vue";
import Relation from "../components/Draw/Relation.vue";

const konvaConfigs = {
  width: 500,
  height: 500,
};

const circles: ICircle[] = [
  {
    x: 100,
    y: 100,
    radius: 50,
    label: "0",
  },
  {
    x: 100,
    y: 300,
    radius: 50,
    label: "1",
  },
  {
    x: 300,
    y: 300,
    radius: 30,
    label: "2",
  },
  {
    x: 300,
    y: 200,
    radius: 25,
    label: "3",
  },
];

const relations = [
  [0, 1],
  [0, 2],
  [2, 1],
  [0, 3],
  [3, 1],
];
</script>

<template>
  <div>
    <v-stage :config="konvaConfigs">
      <v-layer>
        <Relation
          v-for="(relation, idx) in relations"
          :key="idx"
          :first="circles[relation[0]]"
          :second="circles[relation[1]]"
        />
        <Circle
          v-for="(circle, idx) in circles"
          :key="idx"
          :x="circle.x"
          :y="circle.y"
          :radius="circle.radius"
          :label="circle.label"
        />
      </v-layer>
    </v-stage>
  </div>
</template>
