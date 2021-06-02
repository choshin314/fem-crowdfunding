<template>
  <base-card>
    <div class="flex flex-col items-center md:items-start md:flex-row">
      <div
        class="
          flex-auto flex flex-col
          items-center
          md:flex-row
          md:items-start
          md:justify-between
          md:mr-12
        "
      >
        <div class="text-center md:text-left">
          <span class="font-bold text-3xl block mb-2">$89,914</span>
          <span class="text-gray-dark">of $100,000 backed</span>
        </div>
        <span
          class="hidden md:inline-block h-16 w-0.5 bg-gray-900 bg-opacity-20"
        ></span>
        <span
          class="md:hidden my-6 h-0.5 w-20 bg-gray-900 bg-opacity-20"
        ></span>
      </div>

      <div
        class="
          flex-auto flex flex-col
          items-center
          md:flex-row
          md:items-start
          md:justify-between
          md:mr-12
        "
      >
        <div class="text-center md:text-left">
          <span class="font-bold text-3xl block mb-2">5,007</span>
          <span class="text-gray-dark">total backers</span>
        </div>
        <span
          class="hidden md:inline-block h-16 w-0.5 bg-gray-900 bg-opacity-20"
        ></span>
        <span
          class="md:hidden my-6 h-0.5 w-20 bg-gray-900 bg-opacity-20"
        ></span>
      </div>
      <div class="flex-auto">
        <div class="text-center md:text-left">
          <span class="font-bold text-3xl block mb-2">56</span>
          <span class="text-gray-dark">days left</span>
        </div>
      </div>
    </div>
    <div class="relative mt-9 h-3 rounded-3xl bg-gray-light bg-opacity-50">
      <div
        class="absolute left-0 top-0 h-3 rounded-3xl bg-gray-light"
        :style="progressStyles"
      ></div>
    </div>
  </base-card>
</template>

<script>
export default {
  props: {
    raised: { type: Number, default: 89914 },
    goal: { type: Number, default: 100000 },
  },
  computed: {
    goalPercentage() {
      return Math.floor((this.raised / this.goal) * 100);
    },
    progressStyles() {
      return {
        width: `${this.goalPercentage}%`,
      };
    },
  },
};
</script>

<style></style>
