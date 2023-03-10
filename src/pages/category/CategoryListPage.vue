<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-header d-flex justify-content-between flex-wrap">
          <div class="header-title">
            <h4 class="card-title mb-0">{{ $t("category-manager") }}</h4>
          </div>
          <div class="">
            <router-link :to="{name: 'category-create'}" class="text-center btn btn-primary btn-icon mt-lg-0 mt-md-0 mt-3">
              <i class="fas fa-plus"></i> <span>{{ $t("category-create") }}</span>
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
                <tr class="">
                  <td class="">1</td>
                  <td class="">test</td>
                  <td class="">test</td>
                  <td class="">test</td>
                  <td class="">
                    <router-link :to="{name: 'category-detail', params: {id: 1}}" class="btn btn-sm btn-icon text-info flex-end">
                      <i class="fas fa-eye"></i>
                    </router-link>
                    <router-link :to="{name: 'category-edit', params: {id: 1}}" class="btn btn-sm btn-icon text-primary flex-end">
                      <i class="fas fa-edit"></i>
                    </router-link>
                    <router-link to="#" class="btn btn-sm btn-icon text-danger">
                      <i class="fas fa-trash"></i>
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
