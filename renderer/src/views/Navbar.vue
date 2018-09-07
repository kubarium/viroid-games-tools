<template>
  <nav id="titlebar" role="navigation" aria-label="main navigation" class="navbar is-info">
    <div class="navbar-brand">
      <router-link to="/" class="site-name navbar-item is-size-7 is-uppercase has-text-weight-bold">
        <img src="../assets/viroid_64x64_transparent.png" /> Viroid Games Tools</router-link>
      <div role="button" aria-label="menu" aria-expanded="false" class="navbar-burger is-active">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
    </div>
    <div class="navbar-menu is-active">
      <div class="navbar-end">
        <router-link to="/name-extractor" rel="noopener noreferrer" class="navbar-item is-uppercase is-size-7 has-text-weight-bold">
          <font-awesome-icon icon="file-alt" /> Name Extractor</router-link>
        <router-link to="/" rel="noopener noreferrer" class="navbar-item is-uppercase is-size-7 has-text-weight-bold">
          <font-awesome-icon icon="shield-alt" />Coat of Arms</router-link>

        <div class="navbar-item has-dropdown is-hoverable" v-for="(entry,index) in menu" :key="index">
          <a class="navbar-link is-uppercase is-size-7 has-text-weight-bold">{{entry.label}}</a>
          <div class="navbar-dropdown" v-if="entry.items">
            <tooltip size="large" type="info" rounded :label="item.desc" placement="bottom" v-for="item in entry.items" :key="item.label">
              <router-link :to="item.url" class="navbar-item  is-size-7">
                <span class="is-uppercase">
                  <font-awesome-icon :icon="item.icon" v-if="item.icon" /> {{item.label}}

                  <!-- <div class="navbar-item has-dropdown is-hoverable" v-if="item.items">
                    <a class="navbar-link is-uppercase is-size-7 has-text-weight-bold">{{entry.label}}</a>
                    <div class="navbar-dropdown">
                      <a href="/" class="navbar-item  is-size-7" v-for="(entry,index) in item.items" :key="index">{{entry.label}}</a>
                    </div>
                  </div> -->
                </span>
              </router-link>
            </tooltip>
          </div>
        </div>

      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item os-buttons">
          <span @click="currentWindow.minimize()">
            <font-awesome-icon icon="window-minimize" />
          </span>
          <span @click="currentWindow.maximize()">
            <font-awesome-icon icon="window-maximize" />
          </span>
          <span @click="currentWindow.close()">
            <font-awesome-icon icon="window-close" />
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Tooltip from "vue-bulma-tooltip";
import menu from "@/menu.json";
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
    console.log(this.$electron.remote.getCurrentWindow().getTitle());
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
  }, */,
  components: { Tooltip }
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
