<template>
  <header class="bg-cover header-bg h-75 md:h-96">
    <div class="w-full md:w-11/12 max-w-6xl px-6 pt-8 md:pt-12 mx-auto">
      <div class="flex justify-between relative">
        <div class="relative z-10">
          <img src="../assets/images/logo.svg" alt="crowdfund logo" />
        </div>
        <HeaderNavigation />
        <HeaderNavigationMobile />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderNavigation from "./HeaderNavigation";
import HeaderNavigationMobile from "./HeaderNavigationMobile";
export default {
  components: { HeaderNavigation, HeaderNavigationMobile },
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
