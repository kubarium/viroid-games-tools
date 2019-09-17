<template>
  <v-app-bar
    id="titlebar"
    absolute
    app
    dark
    color="primary"
    scroll-off-screen
    scroll-target="#main"
  >
    <v-app-bar-nav-icon>
      <img src="../assets/viroid_64x64_transparent.png" height="36" />
    </v-app-bar-nav-icon>

    <v-toolbar-title>
      <router-link
        to="/"
        class="font-weight-bold subheading text-uppercase text-no-underline white--text"
      >
        Viroid Games Tools</router-link
      >
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text to="/name-extractor">
        <v-icon>fas fa-file-alt</v-icon> Name Extractor
      </v-btn>
      <v-btn text to="/">
        <v-icon>fas fa-shield-alt</v-icon> Coat of Arms
      </v-btn>
      <v-btn small icon @click="currentWindow.minimize()">
        <v-icon>fas fa-window-minimize</v-icon>
      </v-btn>
      <v-btn small icon @click="currentWindow.maximize()">
        <v-icon>fas fa-window-maximize</v-icon>
      </v-btn>
      <v-btn small icon @click="currentWindow.close()">
        <v-icon>fas fa-window-close</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import menu from "@/menu.json";
export default {
  created() {
    this.menu = menu;
  },
  data() {
    return {
      currentWindow: this.$electron.remote.getCurrentWindow(),
      isMaximized: this.$electron.remote.getCurrentWindow().isMaximized()
    };
  }
};
</script>
<style lang="scss" scoped>
#titlebar {
  -webkit-app-region: drag;
}
.navbar-end,
.navbar-brand {
  -webkit-app-region: no-drag;
}
.navbar-menu:nth-child(2) {
  & .navbar-item:not(:last-child) {
    border-right: 1px solid rgba(255, 255, 255, 0.25);
  }
}
[data-icon] {
  margin-right: 5px;
  min-width: 15px;
}
.os-buttons span {
  margin: 0 5px;
}
</style>