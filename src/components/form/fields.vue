<template>
  <div class="form__container-fields">
    <template v-for="(field, index) in fields" :key="index">
      <Field :field="field" :order="index" :initial-value="values[field.name] ?? undefined" />
    </template>
  </div>
</template>

<script setup>
import Field from '@/components/form/field.vue';

const props = defineProps({
  fields: {
    type: Array,
    required: true,
    default: () => []
  },
  values: {
    type: Object,
    required: false,
    default: () => ({})
  }
});
</script>