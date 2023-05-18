<script setup lang="ts">
import { ComputedRef, computed, reactive, watch } from "vue";
import { useStore } from "vuex";
import { Category, ErrorIF } from "@/models";
import { useI18n } from "vue-i18n";
import { CategoryState } from "@/store/modules/category/types";
import CategoryForm from "@/components/category/CategoryForm.vue";
import { useToast } from "@/composables";
import { useRoute } from "vue-router";

const category = reactive({
  name: "",
  parent_id: 0,
});

const store = useStore();
const route = useRoute();
const { t } = useI18n();
const { toastSuccess, toastError } = useToast();

const categoryStoreState = store.state["category"] as CategoryState;
const id = computed(() => route.params.id);
const categoryItem: ComputedRef<Category> = computed(
  () => categoryStoreState.item
);
store.dispatch("category/show", id.value);

watch(categoryItem, () => {
  category.name = categoryItem.value.name;
  category.parent_id = categoryItem.value.parent_id as number;
});

const handleSubmit = async (category: Category) => {
  try {
    await store.dispatch("category/update", { id: id.value, data: category });
    toastSuccess({ title: t("edit-success") });
  } catch (error) {
    toastError({ title: (error as ErrorIF).message });
  }
};
</script>

<template>
  <category-form
    :form-title="$t('category-edit')"
    :btn="$t('edit')"
    :category="category"
    @submit="handleSubmit"
  />
</template>
