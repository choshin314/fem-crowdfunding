<template>
  <base-card class="pt-14 z-0 relative">
    <img
      class="
        absolute
        top-0
        left-1/2
        transform
        -translate-y-1/2 -translate-x-1/2
      "
      src="../assets/images/logo-mastercraft.svg"
    />
    <div class="relative text-center mb-10">
      <h1 class="text-3xl font-bold mb-4">Mastercraft Bamboo Monitor Riser</h1>
      <p class="text-gray-dark">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
    </div>
    <div class="flex justify-between">
      <base-button
        class="
          bg-primary
          text-white
          px-10
          flex
          items-center
          active:bg-primary-dark
          focus:outline-none
          focus:ring focus:ring-offset-2
        "
        >Back this project</base-button
      >
      <base-button class="bg-gray-light bg-opacity-20 flex items-center">
        <img class="inline-block" src="../assets/images/icon-bookmark.svg" />
        <span class="ml-4 pr-6">Bookmark</span>
      </base-button>
    </div>
  </base-card>
</template>

<script>
export default {};
</script>

<style></style>
