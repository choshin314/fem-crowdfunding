<template>
  <div>
    <Header />
    <main class="font-sans bg-gray-400 bg-opacity-100">
      <base-content-wrapper class="-translate-y-24">
        <ProjectTitleCard />
        <div class="bg-white">price stats days</div>
        <div>
          <h3>about project</h3>
          <p>about about</p>
          <p>about about about</p>
          <div>card</div>
          <div>card</div>
          <div>card</div>
        </div>
      </base-content-wrapper>
    </main>
  </div>
</template>
<script>
import Header from "./components/Header";
import ProjectTitleCard from "./components/ProjectTitleCard";

export default {
  components: { Header, ProjectTitleCard },
};
</script>

<style></style>
