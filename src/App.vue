<template>
  <main class="min-h-screen bg-gray-200 bg-[radial-gradient(circle,_black_1px,_transparent_1px)] bg-[length:5px_5px]">
    <section class="p-4 max-w-4xl mx-auto">
      <div v-if="loading">Loading...</div>
      <div v-else-if="errors">{{ errors }}</div>
      <div v-else>
        <Form v-model="model" v-bind="data" @on:submit="handleSubmit" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue';
import { getForm } from '@/api/rest/form';
import Form from '@/components/form/form.vue';

const loading = ref(false);
const data = ref(null);
const errors = ref(null);

const model = ref({});

const formId = computed(() => import.meta.env.VITE_FORM_ID);

const handleSubmit = (formData) => {
  alert('Form submitted with data:\n' + JSON.stringify(formData, null, 2));
};

const getData = () => {
  loading.value = true;

  getForm(formId.value)
    .then((response) => {
      data.value = response;
    })
    .catch((error) => {
      errors.value = error.message || 'Error fetching form data';
    })
    .finally(() => {
      loading.value = false;
    });
};

getData();
</script>
