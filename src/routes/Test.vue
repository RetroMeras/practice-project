<script setup lang="ts">
// import { ref, watch } from "vue";
// import BasicSelect from "../components/basic/BasicSelect.vue";
import Button from "../components/basic/Button.vue";
import { IEntity } from "../types/IEntity";
import { IRelation } from "../types/IRelation";
import { post } from "../utils/request";
// const handleClick = () => {
//   console.log(1);
// };

// const modalOpened = ref(false);
// const value = ref("123123");

// const value = ref("1");

// watch([value], () => {
//   console.log(value.value);
// });

// const options = [
//   { value: "1", label: "Durward Reynolds" },
//   { value: "2", label: "Kenton Towne" },
//   { value: "3", label: "Therese Wunsch" },
//   { value: "4", label: "Benedict Kessler" },
//   { value: "5", label: "Katelyn Rohan" },
// ];

const entity: Omit<IEntity, "examples" | "relations"> = {
  uuid: "",
  title: "Тестовая сущность",
  description: "некоторое описание тестовой сущности",
  login: "1",
};
const createEntity = async () => {
  const data = await post("http://localhost:3000/entity", entity);
  if (data.status == 200) console.log(await data.json());
};

const relation: Omit<IRelation, "examples" | "properties"> = {
  uuid: "",
  title: "Тестовая сущность",
  description: "некоторое описание тестовой сущности",
  symbol: "A",
  login: "1",
  from: "fdff33e1-e984-4de0-8120-483913daba00",
  to: "a7e4b93e-231e-4d96-9921-9f8633c58c33",
};
const createRelation = async () => {
  const data = await post("http://localhost:3000/relation", relation);
  if (data.status == 200) console.log(await data.json());
};
</script>

<template>
  <div class="flex flex-col gap-5">
    <Button :type="'primary'" @click="createEntity">Post Entity</Button>
    <Button :type="'primary'" @click="createRelation">Post Relation</Button>
    <!-- <div>
      <BasicSelect v-model:value="value" :options="options" />
    </div> -->
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
