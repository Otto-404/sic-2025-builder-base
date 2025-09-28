<template>
  <div class="form__container-field">
    <div class="form__container-field-label">
      <label :for="field.name" class="truncate" :title="field.label">
        {{ field.label }}
        <span class="text-red-600">{{ field.required ? '*' : '' }}</span>
      </label>
    </div>

    <component v-if="current" :is="current" v-bind="componentProps" v-model="value" />

    <span v-if="errors.length" class="form__container-field-error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup>
import '@/utils/vee-validate';
import { useField } from 'vee-validate';
import { computed, markRaw, ref } from 'vue';

const props = defineProps({
  field: {
    type: Object,
    required: true,
    default: () => ({})
  },
  order: {
    type: Number,
    required: true,
    default: 0
  },
  initialValue: {
    type: [String, Number, Boolean, Date, Object, Array],
    default: ''
  }
});

const componentProps = computed(() => ({
  name: props.field.name,
  options: props.field.options || [],
}));

const current = ref();

const components = import.meta.glob('./fields/*.vue');

const getComponent = async () => {
  const module = await components[`./fields/${props.field.type}.vue`]();
  current.value = markRaw(module.default);
}

const { value, errors, errorMessage } = useField(
  props.field.name,
  {
    required: props.field.required
  },
  {
    validateOnValueUpdate: true,
    initialValue: props.initialValue
  }
);

getComponent();
</script>