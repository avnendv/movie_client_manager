<script setup lang="ts">
import { ComputedRef, computed } from "vue";
import { Category } from "@/models";
import { useStore } from "vuex";
import { CategoryState } from "@/store/modules/category/types";

const { category } = defineProps({
  formTitle: String,
  btn: String,
  category: {
    type: Object,
    default: {},
  },
});
const emit = defineEmits(["submit"]);

const store = useStore();

const categoryStoreState = store.state["category"] as CategoryState;
const categories: ComputedRef<Category[]> = computed(
  () => categoryStoreState.list
);
store.dispatch("category/list");

const categoriesExpectChild: ComputedRef<Category[]> = computed(() =>
  categories.value.filter((category) => category.parent_id === 0)
);

const handleSubmit = () => {
  emit("submit", category);
};
</script>

<template>
  <form class="card" @submit.prevent="handleSubmit">
    <div class="card-header d-flex justify-content-between flex-wrap">
      <div class="header-title">
        <h4 class="card-title mb-0">{{ formTitle }}</h4>
      </div>
    </div>
    <div class="row p-4">
      <div class="form-group col-md-6">
        <label class="form-label" for="fname">{{ $t("category.name") }}:</label>
        <input
          type="text"
          id="name"
          class="form-control"
          :placeholder="$t('category.name') + '...'"
          v-model="category.name"
        />
      </div>
      <div class="form-group col-md-6">
        <label class="form-label" for="lname"
          >{{ $t("category.parent-name") }}:</label
        >
        <select id="parent-id" class="form-select" v-model="category.parent_id">
          <option value="0">Choose...</option>
          <option
            v-for="cat in categoriesExpectChild"
            :value="cat.id"
            :key="cat.id"
          >
            {{ cat.name }}
          </option>
        </select>
      </div>
      <div class="form-group col-md-12">
        <button type="submit" class="btn btn-primary">
          {{ btn }}
        </button>
        <button
          type="button"
          @click="$router.push({ name: 'category-manager' })"
          class="ms-1 btn btn-secondary"
        >
          {{ $t("cancel") }}
        </button>
      </div>
    </div>
  </form>
</template>
