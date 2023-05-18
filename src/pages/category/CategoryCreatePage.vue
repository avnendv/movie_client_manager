<script setup lang="ts">
import { reactive } from "vue";
import { useStore } from "vuex";
import { Category, ErrorIF } from "@/models";
import { useI18n } from "vue-i18n";
import CategoryForm from "@/components/category/CategoryForm.vue";
import { useToast } from "@/composables";

const store = useStore();
const category = reactive({
  name: "",
  parent_id: 0,
});
const { t } = useI18n();
const { toastSuccess, toastError } = useToast();

const handleSubmit = async (category: Category) => {
  try {
    await store.dispatch("category/store", category);
    toastSuccess({ title: t("create-success") });
  } catch (error) {
    toastError({ title: (error as ErrorIF).message });
  }
};
</script>

<template>
  <category-form
    :form-title="$t('category-create')"
    :btn="$t('create')"
    :category="category"
    @submit="handleSubmit"
  />
</template>
