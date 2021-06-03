<template v-if="show">
  <portal to="modal-overlay">
    <transition
      appear
      enter-active-class="transition-all duration-300 ease-in"
      leave-active-class="transition-all duration-300 ease-in"
      enter-class="opacity-0 scale-90"
      enter-to-class="opacity-100 scale-100"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-125"
    >
      <article
        class="
          z-30
          fixed
          left-1/2
          top-1/3
          px-6
          max-w-3xl
          w-full
          transform
          -translate-x-1/2
        "
      >
        <slot v-if="show"></slot>
      </article>
    </transition>
  </portal>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, default: false },
  },
};
</script>

<style></style>
