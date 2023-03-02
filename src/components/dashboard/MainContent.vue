<script setup lang="ts">
import { NavbarContent, FooterContent } from "./index";
</script>
<template>
  <main class="main-content">
    <div class="position-relative iq-banner">
      <!--Nav Start-->
      <navbar-content />
      <!--Nav End-->
    </div>
    <div class="conatiner-fluid content-inner mt-n5 py-0">
      <div class="row">
        <div class="col-md-12 col-lg-12">
          <!-- your content here -->
          <router-view />
        </div>
      </div>
    </div>
    <!-- Footer Section Start -->
    <footer-content />
    <!-- Footer Section End -->
  </main>
</template>
