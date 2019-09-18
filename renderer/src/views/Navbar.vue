<template>
  <nav
    id="titlebar"
    role="navigation"
    aria-label="main navigation"
    class="navbar is-info is-fixed-top"
  >
    <div class="navbar-brand">
      <router-link
        to="/"
        class="site-name navbar-item is-size-7 is-uppercase has-text-weight-bold"
      >
        <img src="../assets/viroid_64x64_transparent.png" /> Viroid Games
        Tools</router-link
      >
    </div>
    <div class="navbar-menu is-active">
      <div class="navbar-end">
        <router-link
          to="/name-extractor"
          rel="noopener noreferrer"
          class="navbar-item is-uppercase is-size-7 has-text-weight-bold"
        >
          <v-icon>fas fa-file-alt</v-icon> Name Extractor
        </router-link>

        <router-link
          to="/"
          rel="noopener noreferrer"
          class="navbar-item is-uppercase is-size-7 has-text-weight-bold"
        >
          <v-icon>fas fa-shield-alt</v-icon>
          Coat of Arms
        </router-link>

        <div
          class="navbar-item has-dropdown is-hoverable"
          v-for="(entry, index) in menu"
          :key="index"
        >
          <a class="navbar-link is-uppercase is-size-7 has-text-weight-bold">{{
            entry.label
          }}</a>
          <div class="navbar-dropdown" v-if="entry.items">
            <router-link
              :to="item.url"
              class="navbar-item  is-size-7"
              v-tooltip.left="item.desc"
              v-for="item in entry.items"
              :key="item.label"
            >
              <span class="is-uppercase">
                <v-icon v-if="item.icon">fas {{ item.icon }}</v-icon>
                {{ item.label }}
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item os-buttons">
          <span @click="currentWindow.minimize()">
            <v-icon>fas fa-window-minimize</v-icon>
          </span>
          <span @click="currentWindow.maximize()">
            <v-icon>fas fa-window-maximize</v-icon>
          </span>
          <span @click="currentWindow.close()">
            <v-icon>fas fa-window-close</v-icon>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import menu from "@/data/menu.json";
/* "items": [
          {
            "label": "Urban",
            "url": "/urban-name-generator"
          },
          {
            "label": "River"
          },
          {
            "label": "Island"
          },
          {
            "label": "Continent"
          },
          {
            "label": "Valley"
          },
          {
            "label": "Mountain"
          }
        ] */
export default {
  name: "Navbar",
  created() {
    this.menu = menu;
  },
  data() {
    return {
      currentWindow: this.$electron.remote.getCurrentWindow(),
      isMaximized: this.$electron.remote.getCurrentWindow().isMaximized()
    };
  } /* 
  watch: {
    isMaximized: function() {
      this.currentWindow = this.$electron.remote.getCurrentWindow();
    }
  },
  methods: {
    toggleWindowSize() {
      if (this.isMaximized) {
        this.currentWindow.unmaximize();
        this.isMaximized = false;
      } else {
        this.currentWindow.maximize();
        this.isMaximized = true;
      }
    }
  }, */
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
