<script setup lang="ts">
import { computed, ComputedRef, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { Category } from "../../models";
import { CategoryState } from "../../store/modules/category/types";
import { getCategoryParentName } from "../../utils";

import { LoadingComponent } from "../../components";

const store = useStore();
const route = useRoute();
const categoryStoreState = store.state["category"] as CategoryState;
const isPending = computed(() => categoryStoreState.isPending);
const isPendingShow = computed(() => categoryStoreState.isPendingShow);
const categories: ComputedRef<Category[]> = computed(
  () => categoryStoreState.list
);
const category: ComputedRef<Category> = computed(() => categoryStoreState.item);
store.dispatch("category/show", route.params["id"]);
const categoryList = () => {
  !categories.value.length && store.dispatch("category/list");
};
categoryList();

watchEffect(() => {
  if (category.value?.name) {
    document.title = category.value.name;
  }
});
</script>

<template>
  <loading-component :isShow="isPending || isPendingShow" />
  <div class="d-flex justify-content-end mb-4">
    <router-link
      :to="{ name: 'category-create' }"
      class="btn btn-primary me-2"
      >{{ $t("category-create") }}</router-link
    >
    <router-link
      v-if="category && category.id"
      :to="{
        name: 'category-edit',
        params: { id: category.id },
      }"
      class="btn btn-secondary"
      >{{ $t("category-edit") }}</router-link
    >
  </div>
  <div v-if="category && categories">
    <div>{{ "ID: " + category.id }}</div>
    <div>{{ $t("category.name") + ": " + category.name }}</div>
    <div>{{ $t("category.slug") + ": " + category.slug }}</div>
    <div>
      {{
        $t("category.parent-name") +
        ": " +
        getCategoryParentName(category.parent_id, categories)
      }}
    </div>
  </div>
  <div v-else class="text-center fst-italic">{{ $t("category.not-exists") }}</div>
</template>
