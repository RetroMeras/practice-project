<script setup lang="ts"></script>

<template>
  <div class="w-full h-20">
    <div
      class="header flex flex-row py-5 px-10 justify-between fixed top-0 left-0 right-0 h-20 shadow-md items-center"
    >
      <div>Header</div>
      <div class="flex flex-row gap-4 items-center">
        <router-link class="hover:underline underline-offset-4" to="/">
          Главная
        </router-link>
        <router-link class="hover:underline underline-offset-4" to="/create">
          Создать
        </router-link>
        <router-link class="hover:underline underline-offset-4" to="/create">
          Анализ
        </router-link>
        <router-link class="hover:underline underline-offset-4" to="/create">
          Схема
        </router-link>
      </div>
    </div>
  </div>
  <div class="my-10 mx-10">
    <router-view />
  </div>
</template>
