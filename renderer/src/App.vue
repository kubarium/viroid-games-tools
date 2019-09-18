<template>
  <v-app>
    <toolbar />

    <v-content id="main">
      <v-container fluid>
        <keep-alive>
          <router-view />
        </keep-alive>
      </v-container>
    </v-content>

    <v-footer app color="primary" class="white--text">
      <span>
        <a
          @click="$electron.shell.openExternal('http://viroidgames.com')"
          class="white--text text-no-underline"
        >
          Viroid Games
        </a>
      </span>
      <div class="flex-grow-1"></div>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>
<script>
import Navbar from "@/views/Navbar.vue";
import Toolbar from "@/views/Toolbar.vue";
export default {
  components: {
    Navbar,
    Toolbar
  }
};
</script>


<style lang="scss">
html {
  border: 1px solid var(--v-primary-base);
  overflow: hidden !important;
}
.text-no-underline {
  text-decoration: none;
}
.v-content {
  /* max-height: 100%; */
}
.section1 {
  padding: 2rem 1.5rem;
}
.file-input {
  left: 20px;
}
.tabs a {
  margin-bottom: -3px;
}
</style>
