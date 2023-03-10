<template>
  <form class="card">
    <div class="card-header d-flex justify-content-between flex-wrap">
      <div class="header-title">
        <h4 class="card-title mb-0">{{ $t("category-create") }}</h4>
      </div>
    </div>
    <div class="row p-4">
      <div class="form-group col-md-6">
        <label class="form-label" for="fname">{{ $t("category.name") }}:</label>
        <input
          type="text"
          class="form-control"
          :placeholder="$t('category.name') + '...'"
        />
      </div>
      <div class="form-group col-md-6">
        <label class="form-label" for="lname"
          >{{ $t("category.parent-name") }}:</label
        >
        <select class="form-select">
          <option value="">Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div class="form-group col-md-12">
        <button type="submit" class="btn btn-primary">
          {{ $t("create") }}
        </button>
        <button type="reset" class="ms-1 btn btn-secondary">
          {{ $t("cancel") }}
        </button>
      </div>
    </div>
  </form>
</template>
