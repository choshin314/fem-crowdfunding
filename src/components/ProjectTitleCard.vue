<template>
  <base-card class="pt-14 z-0 relative px-6 md:px-12">
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
      <h1 class="text-xl md:text-3xl font-bold mb-4">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p class="text-gray-dark text-sm md:text-base">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
    </div>
    <div class="flex justify-between">
      <base-button
        @click="toggleModal"
        class="
          bg-primary
          text-white
          px-10
          mr-2
          flex
          items-center
          active:bg-primary-dark
          hover:bg-primary-dark
          focus:outline-none
          focus:ring focus:ring-offset-2
        "
        >Back this project</base-button
      >
      <base-button class="bg-gray-light bg-opacity-20 flex items-center">
        <img class="inline-block" src="../assets/images/icon-bookmark.svg" />
        <span class="hidden sm:inline-block ml-4 pr-6">Bookmark</span>
      </base-button>
    </div>
    <ProjectBackingModal
      v-if="showModal"
      :show="showModal"
      :toggleShow="toggleModal"
    />
  </base-card>
</template>

<script>
import ProjectBackingModal from "./ProjectBackingModal.vue";

export default {
  data() {
    return {
      product: { title: "Bamboo Riser" },
      showModal: false,
    };
  },
  components: { ProjectBackingModal },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style></style>
