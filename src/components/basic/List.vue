<script setup lang="ts">
defineProps<{
  items: any[];
}>();
</script>

<template>
  <slot v-for="item in items" :item="item"></slot>
</template>
