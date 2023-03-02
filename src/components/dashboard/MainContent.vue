<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper position-relative">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">{{ $t(`${$route.meta.title}`) }}</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'dashboard' }">{{ $t("home") }}</router-link>
              </li>
              <li class="breadcrumb-item active">
                {{ $t(`${$route.meta.title}`) }}
              </li>
            </ol>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <!-- your content here -->
      <router-view />
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>
