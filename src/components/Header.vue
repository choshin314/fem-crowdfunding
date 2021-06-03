<template>
  <header class="bg-cover header-bg h-75 md:h-96">
    <div class="w-full md:w-11/12 max-w-6xl px-6 pt-8 md:pt-12 mx-auto">
      <div class="flex justify-between relative">
        <div class="relative z-20">
          <img src="../assets/images/logo.svg" alt="crowdfund logo" />
        </div>
        <HeaderNavigation />
        <HeaderNavigationMobileToggle @burgerClick="toggleMobileMenu" />
        <HeaderNavigationMobileOverlay :show="showMobile" />
        <HeaderNavigationMobileMenu :show="showMobile" />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderNavigation from "./HeaderNavigation";
// import HeaderNavigationMobile from "./HeaderNavigationMobile";
import HeaderNavigationMobileOverlay from "./HeaderNavigationMobileOverlay";
import HeaderNavigationMobileMenu from "./HeaderNavigationMobileMenu";
import HeaderNavigationMobileToggle from "./HeaderNavigationMobileToggle";
export default {
  data() {
    return {
      showMobile: false,
    };
  },
  components: {
    HeaderNavigation,
    // HeaderNavigationMobile,
    HeaderNavigationMobileMenu,
    HeaderNavigationMobileOverlay,
    HeaderNavigationMobileToggle,
  },
  methods: {
    toggleMobileMenu() {
      this.showMobile = !this.showMobile;
    },
  },
};
</script>

<style>
.header-bg {
  background-image: url("../assets/images/image-hero-mobile.jpg");
}

@media (min-width: 768px) {
  .header-bg {
    background-image: url("../assets/images/image-hero-desktop.jpg");
  }
}
</style>
