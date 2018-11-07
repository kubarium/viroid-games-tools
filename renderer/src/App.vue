<template>
  <v-app class="app">

    <toolbar />
    <!-- <v-toolbar app>
    </v-toolbar> -->

    <v-content id="main">
      <v-container fluid>
        <keep-alive>
          <router-view />
        </keep-alive>
      </v-container>
    </v-content>

  </v-app>
</template>
<script>
import Navbar from "@/views/Navbar.vue";
import Toolbar from "@/views/Toolbar.vue";
export default {
  components: {
    Navbar,
    Toolbar,
  }
};
</script>


<style lang="scss">
html {
  border: 1px solid #209cee;
  border-top: 0;
  height: 100%;
  overflow: hidden;
}
.app {
  padding-top: 3.25rem;
}
.text-no-underline {
  text-decoration: none;
}
main,
v-content {
  max-height: calc(100vh - 3.25rem - 1px);
  overflow: auto;
  outline: 1px solid red;
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
