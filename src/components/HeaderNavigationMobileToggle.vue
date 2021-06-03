<template>
  <div class="z-20 w-4 hamburger md:hidden">
    <div
      class="relative h-full flex flex-col justify-between"
      @click="sendClick"
    >
      <span class="w-full hamburger-line bg-white"></span>
      <span class="w-full hamburger-line bg-white"></span>
      <span class="w-full hamburger-line bg-white"></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sendClick() {
      this.$emit("burgerClick");
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
