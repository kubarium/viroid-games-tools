<template>
    <nav id="titlebar" role="navigation" aria-label="main navigation" class="navbar is-info">
        <div class="navbar-brand">
            <span class="site-name navbar-item is-size-7 is-uppercase has-text-weight-bold">Viroid Games Tools</span>
            <div role="button" aria-label="menu" aria-expanded="false" class="navbar-burger">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </div>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">

                <a href="/" target="_blank" rel="noopener noreferrer" class="navbar-item is-uppercase is-size-7 has-text-weight-bold">Name Extractor</a>
                <a href="/" target="_blank" rel="noopener noreferrer" class="navbar-item is-uppercase is-size-7 has-text-weight-bold">Coat of Arms</a>

                <div class="navbar-item has-dropdown is-hoverable" v-for="(entry,index) in menu" :key="index">
                    <a class="navbar-link is-uppercase is-size-7 has-text-weight-bold">{{entry.label}}</a>
                    <div class="navbar-dropdown" v-if="entry.items">
                        <tooltip size="large" type="info" rounded :label="item.desc" placement="bottom" v-for="item in entry.items" :key="item.label">
                            <a href="/" class="navbar-item  is-size-7">
                                <span class="is-uppercase">
                                    <font-awesome-icon :icon="item.icon" v-if="item.icon" /> {{item.label}}
                                </span>
                            </a>
                        </tooltip>
                    </div>
                </div>

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

<style scoped>
#titlebar {
  -webkit-app-region: drag;
}
.navbar-end {
  -webkit-app-region: no-drag;
}
.has-dropdown [data-icon] {
  margin-right: 5px;
}
.os-buttons span {
  margin: 0 5px;
}
</style>
