<template>
  <div>
    <base-backdrop :show="show" @click="toggleShow"></base-backdrop>
    <base-modal :show="show"
      ><div class="bg-white rounded-lg">hello world</div></base-modal
    >
  </div>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, default: false },
    toggleShow: { type: Function },
  },
};
</script>

<style></style>
