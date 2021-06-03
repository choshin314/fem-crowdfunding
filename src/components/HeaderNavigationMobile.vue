<template>
  <div class="absolute top-0">
    <HeaderNavigationMobileOverlay :show="show" />
    <HeaderNavigationMobileMenu :show="show" />
  </div>
</template>

<script>
import HeaderNavigationMobileOverlay from "./HeaderNavigationMobileOverlay.vue";
import HeaderNavigationMobileMenu from "./HeaderNavigationMobileMenu";
export default {
  components: {
    HeaderNavigationMobileMenu,
    HeaderNavigationMobileOverlay,
  },
  props: {
    show: { type: Boolean, default: false },
  },
};
</script>

<style></style>
