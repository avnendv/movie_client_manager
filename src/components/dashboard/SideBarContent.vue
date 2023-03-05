<template>
  <aside class="sidebar sidebar-default navs-rounded-all">
    <div class="sidebar-header d-flex align-items-center justify-content-start">
      <router-link :to="{ name: 'dashboard' }" class="navbar-brand">
        <!--Logo start-->
        <svg width="30" class="" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)"
            fill="currentColor" />
          <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)"
            fill="currentColor" />
          <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)"
            fill="currentColor" />
          <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)"
            fill="currentColor" />
        </svg>
        <!--logo End-->
        <h4 class="logo-title">VMovie</h4>
      </router-link>

      <div class="sidebar-toggle" data-toggle="sidebar" data-active="true">
        <i class="icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.25 12.2744L19.25 12.2744" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"></path>
            <path d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976" stroke="currentColor" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </i>
      </div>
    </div>
    <div class="sidebar-body pt-0 data-scrollbar">
      <div class="sidebar-list">
        <!-- Sidebar Menu Start -->
        <ul class="navbar-nav iq-main-menu" id="sidebar-menu">
          <li class="nav-item static-item">
            <a class="nav-link static-item disabled" href="#" tabindex="-1">
              <span class="default-icon">Admin</span>
              <span class="mini-icon">-</span>
            </a>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'dashboard' }" class="nav-link">
              <i class="icon fas fa-tachometer-alt"></i>
              <span class="item-name">{{ $t("dashboard") }}</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'category-manager' }" class="nav-link">
              <i class="icon fas fa-list"></i>
              <span class="item-name">{{ $t("category-manager") }}</span>
            </router-link>
            <ul class="nav sub-sidenav">
              <li class="nav-item">
                <router-link :to="{ name: 'category-create' }" class="nav-link">
                  <span class="item-name">{{ $t("category-create") }}</span>
                </router-link>
              </li>

            </ul>
          </li>
        </ul>
        <!-- Sidebar Menu End -->
      </div>
    </div>
    <div class="sidebar-footer"></div>
  </aside>
</template>

<style scoped>
.icon {
  margin: auto;
}

.sub-sidenav {
  display: none;
}

.active~.sub-sidenav {
  display: inline;
}

.navs-rounded-all .navbar-nav .sub-sidenav .nav-item:not(.static-item) {
  padding-left: 0;
}

.sidebar-default .navbar-nav .nav-item .nav-link:not(.disabled, .router-link-exact-active).active {
  background-color: unset;
  color: #6c757d;
  font-weight: 500;
}
</style>
