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
                <a href="https://support.whiterabbitexpress.com" target="_blank" rel="noopener noreferrer" class="navbar-item is-uppercase is-size-7 has-text-weight-bold">Help</a>
                <a href="https://my.whiterabbitexpress.com/dashboard" target="_blank" rel="noopener noreferrer" class="navbar-item is-uppercase is-size-7 has-text-weight-bold">Sign in</a>

                <div class="navbar-item" :class="{'has-dropdown':entry.items, 'is-hoverable':entry.items}" v-for="(entry,index) in menu" :key="index">
                    <a class="navbar-link is-uppercase is-size-7 has-text-weight-bold">{{entry.label}} {{entry.items && entry.items.length}}</a>
                    <div class="navbar-dropdown" v-if="entry.items">
                        <!-- 
                        <tooltip size="large" type="info" rounded label="Create urban settlements of different size. Includes important people with their name and profession, lineage and wealth. Additionally, generate major historical events for the settlement." placement="bottom">
                            <a href="/" class="navbar-item is-uppercase is-size-7">
                                <font-awesome-icon icon="home" v-if=""/> Village
                            </a>
                        </tooltip>
                        <a href="/fr/" class="navbar-item is-uppercase is-size-7">Treasure</a> -->
                        <a href="/" class="navbar-item is-uppercase is-size-7" v-for="item in entry.items" :key="item.label">{{item.label}}</a>
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
