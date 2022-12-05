<script setup lang="ts">
import LinksMenu from "./components/basic/LinksMenu.vue";
</script>

<template>
  <div class="w-full h-20">
    <div
      class="header flex flex-row py-5 px-10 justify-between fixed top-0 left-0 z-10 right-0 h-20 shadow-lg items-center bg-white"
    >
      <router-link class="hover:underline underline-offset-4" to="/">
        На главную
      </router-link>
      <div class="flex flex-row gap-4 items-center">
        <LinksMenu
          title="Справочники"
          class="w-28"
          :options="[
            { label: 'Сущности', value: '/lists/entities' },
            { label: 'Отношения', value: '/lists/relations' },
          ]"
        />
        <router-link
          class="hover:underline underline-offset-4 text-sm"
          to="/settings"
        >
          Настройки
        </router-link>
      </div>
    </div>
  </div>
  <div class="my-10 mx-10">
    <router-view />
  </div>
</template>
