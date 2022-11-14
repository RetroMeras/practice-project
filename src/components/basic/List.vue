<script setup lang="ts">
defineProps<{
  items: any[];
}>();
</script>

<template>
  <div>
    <slot v-for="item in items" :item="item"></slot>
  </div>
</template>
