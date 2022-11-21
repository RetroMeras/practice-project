<script setup lang="ts">
defineProps<{ item: any }>();
</script>

<template>
  <div class="px-5 py-3 cursor-pointer border">{{ item.value }}</div>
</template>
