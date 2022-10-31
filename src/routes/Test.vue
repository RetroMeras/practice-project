<script setup lang="ts">
import { ref } from "vue";
const handleClick = () => {
  console.log(1);
};

const modalOpened = ref(false);
const value = ref("123123");
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="flex flex-row gap-2">
      <Button type="positive" @click="handleClick">Добавить сущность</Button>
      <Button type="negative" @click="handleClick">Добавить сущность</Button>
      <Button type="primary" @click="handleClick">Добавить сущность</Button>
    </div>
    <div>
      <Button @click="modalOpened = true">open modal</Button>
      <Modal v-model:opened="modalOpened" title="Title" />
    </div>
    <div>
      <Input v-model="value" title="Value" />
      <div>{{ value }}</div>
    </div>
  </div>
</template>
