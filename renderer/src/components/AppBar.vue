<template>
  <v-app-bar id="titlebar" absolute app dark color="primary">
    <img src="../assets/viroid_64x64_transparent.png" />
    <v-toolbar-title>
      <router-link
        to="/"
        class="font-weight-bold subtitle-1 text-uppercase text-no-underline white--text"
      >
        Viroid Games Tools</router-link
      >
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items class="hidden-sm-and-down">
      <v-sheet v-for="(entry, index) in menu" :key="index">
        <v-menu v-if="entry.items" offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn text small v-on="on">
              {{ entry.label }}
            </v-btn>
          </template>

          <v-list min-width="240">
            <v-list-item
              class="d-flex v-list-item--link"
              v-for="(item, index) in entry.items"
              :key="index"
            >
              <router-link :to="item.url" class="text-no-underline">
                <v-list-item-title>
                  <v-icon small v-if="item.icon">fas {{ item.icon }}</v-icon>
                  {{ item.label }}
                </v-list-item-title>
              </router-link>
              <v-spacer />
              <v-tooltip bottom max-width="20%" v-if="item.desc">
                <template v-slot:activator="{ on }">
                  <span v-on="on">
                    <v-icon x-small>fas fa-question</v-icon>
                  </span>
                </template>

                <span>{{ item.desc }}</span>
              </v-tooltip>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn text small :to="entry.url" v-else>
          <v-icon left small>fas {{ entry.icon }}</v-icon> {{ entry.label }}
        </v-btn>

        <v-divider vertical class="mx-2" />
      </v-sheet>

      <!-- <v-divider vertical class="mx-2" /> -->
      <v-btn x-small icon @click="currentWindow.minimize()">
        <v-icon x-small>fas fa-window-minimize</v-icon>
      </v-btn>

      <v-btn x-small icon @click="toggleWindowSize">
        <v-icon x-small v-if="isMaximized">fas fa-window-restore</v-icon>
        <v-icon x-small v-else>fas fa-window-maximize</v-icon>
      </v-btn>

      <v-btn x-small icon @click="currentWindow.close()">
        <v-icon x-small>fas fa-window-close</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import menu from "@/data/menu.json";
export default {
  name: "app-bar",
  created() {
    this.menu = menu;
  },
  mounted() {
    this.currentWindow.addListener("maximize", this.normalizeMaximization);
    this.currentWindow.addListener("unmaximize", this.normalizeMaximization);
  },
  data() {
    return {
      currentWindow: this.$electron.remote.getCurrentWindow(),
      isMaximized: this.$electron.remote.getCurrentWindow().isMaximized()
    };
  },
  methods: {
    normalizeMaximization() {
      this.isMaximized = this.$electron.remote.getCurrentWindow().isMaximized();
    },
    toggleWindowSize() {
      if (this.isMaximized) {
        this.currentWindow.unmaximize();
        this.isMaximized = false;
      } else {
        this.currentWindow.maximize();
        this.isMaximized = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#titlebar {
  -webkit-app-region: drag;
}
.v-toolbar__title,
.v-toolbar__items {
  -webkit-app-region: no-drag;
}
.navbar-menu:nth-child(2) {
  & .navbar-item:not(:last-child) {
    border-right: 3px solid red;
    // rgba(255, 255, 255, 0.25);
  }
}
.v-btn--icon {
  margin-right: 5px;
  min-width: 15px;
}
.os-buttons span {
  margin: 0 5px;
}
</style>