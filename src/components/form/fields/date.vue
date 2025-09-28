<template>
  <input type="date" v-model="model" :name="name" class="border border-gray-300 rounded p-2 w-full" />
</template>

<script setup>
import { useVModel } from '@vueuse/core';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
});

const model = useVModel(props, 'modelValue');
</script>