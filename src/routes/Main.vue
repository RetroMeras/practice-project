<script setup lang="ts">
import { reactive, watch } from "vue";
import Input_with_label from "../components/input_with_label.vue";
import field from "../components/field.vue";
import Textarea_with_label from "../components/textarea_with_label.vue";
import Datepicker_with_label from "../components/datepicker_with_label.vue";
import Avatar_input from "../components/avatar_input.vue";

const user = reactive({
  name: "",
  surname: "",
  patronymic: "",
  message: "",
  date: new Date().toString(),
  avatar: "",
});

watch([user.date], () => {
  console.log(user.date);
});

const formatter = Intl.DateTimeFormat("ru-RU", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});
</script>

<template>
  <div class="flex flex-row gap-10">
    <div class="flex flex-col w-1/2 gap-4">
      <Avatar_input v-model:value="user.avatar" label="Аватар" name="avatar" />
      <Input_with_label
        v-model:value="user.name"
        label="Фамилия"
        placeholder="Введите фамилию"
        name="surname"
      />
      <Input_with_label
        v-model:value="user.surname"
        label="Имя"
        placeholder="Введите имя"
        name="name"
      />
      <Input_with_label
        v-model:value="user.patronymic"
        label="Отчество"
        placeholder="Введите отчество"
        name="patronymic"
      />
      <Textarea_with_label
        v-model:value="user.message"
        label="О себе"
        placeholder="Расскажите о себе"
        name="message"
      />
      <Datepicker_with_label
        v-model:value="user.date"
        label="Дата рождения"
        placeholder="Введите дату рождения"
        name="birthday"
      />
    </div>
    <div class="flex flex-col w-1/2 gap-3">
      <img
        class="inline-block h-14 w-14 rounded-full"
        :src="user.avatar"
        alt="Avatar"
      />
      <field label="Фамилия" :value="user.surname" />
      <field label="Имя" :value="user.name" />
      <field label="Отчество" :value="user.patronymic" />
      <field label="О себе" :value="user.message" />
      <field
        label="Дата рождения"
        :value="formatter.format(new Date(user.date))"
      />
    </div>
  </div>
</template>
