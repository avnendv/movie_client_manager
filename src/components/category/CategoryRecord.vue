<script setup lang="ts">
defineProps<{
  id: number;
  name: string;
  slug: string;
  parent: string;
}>();
</script>

<template>
  <tr>
    <td class="">{{ id }}</td>
    <td class="">{{ name }}</td>
    <td class="">{{ slug }}</td>
    <td class="">{{ parent }}</td>
    <td class="">
      <router-link
        :to="{
          name: 'category-detail',
          params: { id: id },
        }"
        class="btn btn-sm btn-icon text-info flex-end"
      >
        <i class="fas fa-eye"></i>
      </router-link>
      <router-link
        :to="{
          name: 'category-edit',
          params: { id: id },
        }"
        class="btn btn-sm btn-icon text-primary flex-end"
      >
        <i class="fas fa-edit"></i>
      </router-link>
      <router-link to="#" class="btn btn-sm btn-icon text-danger">
        <i class="fas fa-trash"></i>
      </router-link>
    </td>
  </tr>
</template>
