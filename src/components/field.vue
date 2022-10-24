<template>
  <div>{{ props.label }}: {{ props.value }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{ label: string; value: string }>();
</script>
