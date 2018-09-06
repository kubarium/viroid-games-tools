<template>
  <div id="app">
    <navbar/>
    <!-- <router-view/> -->
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

<style lang="scss" >
html {
  border: 1px solid #209cee;
  overflow-y: initial;
  height: 100%;
}
</style>
