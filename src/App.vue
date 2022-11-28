<script setup lang="ts">
import LinksMenu from "./components/basic/LinksMenu.vue";
</script>

<template>
  <div class="w-full h-20">
    <div
      class="header flex flex-row py-5 px-10 justify-between fixed top-0 left-0 z-50 right-0 h-20 shadow-md items-center bg-white"
    >
      <router-link class="hover:underline underline-offset-4" to="/">
        Главная
      </router-link>
      <div class="flex flex-row gap-4 items-center">
        <LinksMenu
          title="Списки"
          class="w-28"
          :options="[
            { label: 'Сущности', value: '/create/entities' },
            { label: 'Отношения', value: '/create/relations' },
          ]"
        />
        <!-- <router-link
          class="hover:underline underline-offset-4"
          to="/create/entitys"
        >
          Сущности
        </router-link>
        <router-link
          class="hover:underline underline-offset-4"
          to="/create/relations"
        >
          Отношения
        </router-link>
        <router-link class="hover:underline underline-offset-4" to="/analyze">
          Анализ
        </router-link>
        <router-link class="hover:underline underline-offset-4" to="/draw">
          Схема
        </router-link> -->
      </div>
    </div>
  </div>
  <div class="my-10 mx-10">
    <router-view />
  </div>
</template>
