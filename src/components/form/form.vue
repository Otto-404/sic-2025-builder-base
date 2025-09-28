<template>
  <form
    class="form"
    :autocomplete="autocomplete"
    @submit.prevent.stop="onSubmit"
  >
    <div class="form__container">
      <div class="form__container-section">
        <div class="flex flex-col gap-4 justify-between h-full">
          <div class="form__container-section-title">
            <h3>{{ title }}</h3>
            <p v-if="description">{{ description }}</p>
            <hr class="mt-4" />
          </div>

          <Fields :fields="fields" :values="model" />

          <div class="form__container-section-footer">
            <hr class="my-6" />

            <div class="flex justify-end">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useVModel } from '@vueuse/core'
import { useForm } from 'vee-validate'
import Fields from '@/components/form/fields.vue'

const emit = defineEmits(['on:submit']);

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: false,
    default: ''
  },
  description: {
    type: String,
    required: false,
    default: ''
  },
  autocomplete: {
    type: String,
    required: false,
    default: 'off'
  },
  fields: {
    type: Array,
    required: false,
    default: () => []
  }
});

const model = useVModel(props, 'modelValue');

const { handleSubmit } = useForm({
  initialValues: model
});

const onSubmit = handleSubmit((values) => {
  emit('on:submit', values);
});
</script>