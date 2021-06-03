<template>
  <transition
    appear
    enter-active-class="transition-all duration-200 ease-in-out"
    leave-active-class="transition-all duration-200 ease-in-out"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="show" class="fixed inset-0 z-10 mobile-menu-overlay"></div>
  </transition>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, default: false },
  },
};
</script>

<style>
.mobile-menu-overlay {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.1)
  );
}
</style>
