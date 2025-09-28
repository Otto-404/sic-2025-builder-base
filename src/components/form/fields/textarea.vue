<template>
  <textarea v-model="model" class="border border-gray-300 rounded p-2 w-full" />
</template>

<script setup>
import { useVModel } from '@vueuse/core';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

const model = useVModel(props, 'modelValue');
</script>