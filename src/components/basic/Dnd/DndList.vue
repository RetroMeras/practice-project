<script setup lang="ts">
defineProps<{ items: any[] }>();
</script>

<template>
  <dnd-zone>
    <dnd-container :dnd-model="items" class="row">
      <template v-for="item in items" :key="item.id">
        <dnd-item :dnd-model="item" :dnd-id="item.id">
          {{ item.value }}
        </dnd-item>
      </template>
    </dnd-container>
  </dnd-zone>
</template>
