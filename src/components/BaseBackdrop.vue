<template>
  <portal to="modal">
    <transition
      appear
      enter-active-class="transition-all duration-200 ease-in"
      leave-active-class="transition-all duration-200 ease-in"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        class="fixed inset-0 z-20 bg-black bg-opacity-50 bg-fixed"
        v-on="$listeners"
      ></div>
    </transition>
  </portal>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, default: false },
  },
  methods: {
    handleClick() {
      this.$emit("backdropClicked");
    },
  },
};
</script>

<style>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.5;
}
</style>
