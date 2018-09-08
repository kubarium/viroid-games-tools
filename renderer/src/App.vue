<template>
  <div id="app">
    <navbar/>
    <router-view/>
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

<style lang="scss">
@import "./node_modules/bulma/bulma.sass";

html {
  border: 1px solid #209cee;
  overflow-y: hidden;
  height: 100%;
}
.section {
  padding: 2rem 1.5rem;
}
.file-input {
  left: 20px;
}
</style>
