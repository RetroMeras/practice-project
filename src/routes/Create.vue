<script setup lang="ts">
import { ref } from "vue";
import { IRelation } from "../types/relation";
import { IEntity } from "../types/entity";

const entities = ref<IEntity[]>([]);
const relations = ref<IRelation[]>([]);
</script>

<template>
  <div>
    <div class="entityWrapper">
      <div class="addEntity">Добавить сущность</div>
      <div class="listEntity">Сущности</div>
    </div>
    <div class="relationWrapper">
      <div class="addRelation">Добавить отношение</div>
      <div class="listRelation">Список отношений</div>
    </div>
  </div>
</template>
