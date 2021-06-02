<template>
  <div class="w-4 hamburger md:hidden">
    <div
      class="relative h-full z-10 flex flex-col justify-between"
      @click="toggleMenu"
    >
      <span class="w-full hamburger-line bg-white"></span>
      <span class="w-full hamburger-line bg-white"></span>
      <span class="w-full hamburger-line bg-white"></span>
    </div>
    <HeaderNavigationMobileBackdrop :show="showMenu" />
    <HeaderNavigationMobileMenu :show="showMenu" />
  </div>
</template>

<script>
import HeaderNavigationMobileBackdrop from "./HeaderNavigationMobileBackdrop.vue";
import HeaderNavigationMobileMenu from "./HeaderNavigationMobileMenu";
export default {
  components: {
    HeaderNavigationMobileMenu,
    HeaderNavigationMobileBackdrop,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style>
.hamburger {
  height: 15px;
}
.hamburger-line {
  height: 3px;
}
</style>
