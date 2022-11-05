<script setup lang="ts">
import { ref, watch } from "vue";
import BasicSelect from "../components/basic/BasicSelect.vue";
// const handleClick = () => {
//   console.log(1);
// };

// const modalOpened = ref(false);
// const value = ref("123123");

const value = ref("1");

watch([value], () => {
  console.log(value.value);
});

const options = [
  { value: "1", label: "Durward Reynolds" },
  { value: "2", label: "Kenton Towne" },
  { value: "3", label: "Therese Wunsch" },
  { value: "4", label: "Benedict Kessler" },
  { value: "5", label: "Katelyn Rohan" },
];
</script>

<template>
  <div class="flex flex-col gap-5">
    <div>
      <BasicSelect v-model:value="value" :options="options" />
    </div>
    <!-- <div class="flex flex-row gap-2">
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
    </div> -->
  </div>
</template>
