<template>
  <transition
    appear
    :duration="400"
    enter-active-class="transition-all duration-200 delay-100 ease-in-out"
    leave-active-class="transition-all duration-200 ease-in-out"
    enter-class="opacity-0 scale-y-125"
    enter-to-class="opacity-100 scale-y-100"
    leave-class="opacity-100 scale-y-100"
    leave-to-class="opacity-0 scale-y-125"
  >
    <base-card
      v-if="show"
      class="
        absolute
        z-10
        w-full
        top-10
        left-1/2
        transform
        -translate-x-1/2
        font-medium
        text-lg
        px-0
        py-0
        bg-white
      "
    >
      <ul>
        <li class="p-6 border-b-1 border-gray-400 border-opacity-10">
          <a href="">About</a>
        </li>
        <li class="p-6 border-b-1 border-gray-400 border-opacity-10">
          <a href="">Discover</a>
        </li>
        <li class="p-6"><a href="">Get Started</a></li>
      </ul>
    </base-card>
  </transition>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, default: false },
  },
};
</script>

<style></style>
