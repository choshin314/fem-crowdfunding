<template>
  <transition
    appear
    enter-active-class="transition-all duration-500 ease-in-out"
    leave-active-class="transition-all duration-500 ease-in-out"
    enter-class="opacity-0"
    enter-to-class="opacity-50"
    leave-class="opacity-50"
    leave-to-class="opacity-0"
  >
    <div
      v-if="show"
      class="fixed top-0 left-0 h-full w-full min-h-screen backdropbg"
    ></div>
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
.backdropbg {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.05));
  opacity: 0.5;
  z-index: 5;
}
</style>
