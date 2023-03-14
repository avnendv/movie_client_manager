<script setup lang="ts">
defineProps<{
  isShow: boolean;
}>();
</script>
<template>
  <teleport to="body">
    <!-- loader Start -->
    <div class="loading" :class="{ hidden: !isShow }">
      <div class="loader simple-loader">
        <div class="bars-6"></div>
      </div>
    </div>
    <!-- loader END -->
  </teleport>
</template>
<style scoped lang="scss">
.hidden {
  display: none;
}
.loading {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  .loader.simple-loader {
    display: -webkit-box;
    background-color: rgba($color: #f5f6fa, $alpha: 0.85);
  }
  .bars-6 {
    width: 45px;
    aspect-ratio: 0.75;
    background: no-repeat linear-gradient(#000 0 0) 0% 50%,
      no-repeat linear-gradient(#000 0 0) 50% 50%,
      no-repeat linear-gradient(#000 0 0) 100% 50%;
    background-size: 20% 50%;
    animation: b6 1s infinite linear;
    margin: auto;
  }
  @keyframes b6 {
    20% {
      background-position: 0% 0%, 50% 50%, 100% 50%;
    }
    40% {
      background-position: 0% 100%, 50% 0%, 100% 50%;
    }
    60% {
      background-position: 0% 50%, 50% 100%, 100% 0%;
    }
    80% {
      background-position: 0% 50%, 50% 50%, 100% 100%;
    }
  }
}
</style>
