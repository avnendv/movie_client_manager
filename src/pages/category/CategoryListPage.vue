<script setup lang="ts">
import { ComputedRef, computed } from "vue";
import { useStore } from "vuex";
import { Category } from "@/models";
import { CategoryState } from "@/store/modules/category/types";

import { LoadingComponent, CategoryRecord } from "@/components";
import { getCategoryParentName } from "@/utils";

const store = useStore();
const categoryStoreState = store.state["category"] as CategoryState;
const isPending = computed(() => categoryStoreState.isPending);
const categories: ComputedRef<Category[]> = computed(
  () => categoryStoreState.list
);
store.dispatch("category/list");

</script>

<template>
  <loading-component :isShow="isPending" />
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-header d-flex justify-content-between flex-wrap">
          <div class="header-title">
            <h4 class="card-title mb-0">{{ $t("category-manager") }}</h4>
          </div>
          <div class="">
            <router-link
              :to="{ name: 'category-create' }"
              class="text-center btn btn-primary btn-icon mt-lg-0 mt-md-0 mt-3"
            >
              <i class="fas fa-plus"></i>
              <span>{{ $t("category-create") }}</span>
            </router-link>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>{{ $t("category.name") }}</th>
                  <th>{{ $t("category.slug") }}</th>
                  <th>{{ $t("category.parent-name") }}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <category-record
                  v-for="category in categories"
                  :key="category.id"
                  :id="category.id"
                  :name="category.name"
                  :slug="category.slug"
                  :parent="getCategoryParentName(category.parent_id, categories)"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
