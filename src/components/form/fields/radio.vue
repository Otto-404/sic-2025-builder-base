<template>
  <fieldset class="mt-4">
    <legend class="sr-only">{{ name }}</legend>
    <div class="space-y-5">
      <div
        v-for="option in options"
        :key="option.value"
        class="relative flex items-start"
      >
        <div class="flex h-5 items-center">
          <input
            :id="name + '-' + option.value"
            v-model="model"
            :name="name"
            :value="option.value"
            :aria-describedby="`${option.value}-description`"
            :checked="option.value === model"
            :disabled="option.disabled || disabled"
            :readonly="readonly"
            type="radio"
            class="h-4 w-4 border-gray-300 text-primary focus:ring-primary/90"
          />
        </div>
        <div
          class="ml-3 text-sm"
        >
          <label :for="name + '-' + option.value" class="font-medium text-gray-700 font-open-sans">{{ option.label }}</label>
        </div>
      </div>
    </div>
  </fieldset>
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
    required: true,
    default: ''
  },
  options: {
    type: Array,
    required: true,
    default: () => []
  },
});

const model = useVModel(props, 'modelValue');
</script>