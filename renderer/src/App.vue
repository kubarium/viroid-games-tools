<template>
  <div class="app">
    <navbar/>
    <main>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </main>
  </div>
</template>
<script>
import Navbar from "@/views/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>
<style src="bulma"></style>

<style lang="scss">
//@import "./node_modules/bulma/bulma.sass";

html {
  border: 1px solid #209cee;
  border-top: 0;
  height: 100%;
  overflow: hidden;
}
.app {
  padding-top: 3.25rem;
}
main {
  max-height: calc(100vh - 3.25rem - 1px);
  overflow: auto;
}
.section {
  padding: 2rem 1.5rem;
}
.file-input {
  left: 20px;
}
.tabs a {
  margin-bottom: -3px;
}
</style>
