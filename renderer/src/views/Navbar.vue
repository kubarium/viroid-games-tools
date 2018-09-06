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
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link is-uppercase is-size-7 has-text-weight-bold">Entity Generators</a>
                    <div class="navbar-dropdown">
                        <tooltip label="Create urban settlements of different size. Includes important people with their name and profession, lineage and wealth. Additionally, generate major historical events for the settlement." placement="top-right">

                            <a href="/" class="navbar-item is-uppercase is-size-7">
                                <font-awesome-icon icon="home" /> Village
                            </a>
                        </tooltip>
                        <a href="/fr/" class="navbar-item is-uppercase is-size-7">Treasure</a>
                        <a href="/" class="navbar-item is-uppercase is-size-7">Person</a>
                    </div>
                </div>
                <div class="navbar-item">
                    <button class="button" @click="currentWindow.minimize()">
                        <font-awesome-icon icon="window-minimize" />
                    </button>
                    <button class="button" @click="currentWindow.maximize()">
                        <font-awesome-icon icon="window-maximize" />
                    </button>
                    <button class="button" @click="currentWindow.restore()">
                        <font-awesome-icon icon="window-restore" />
                    </button>
                    <button class="button" @click="currentWindow.close()">
                        <font-awesome-icon icon="window-close" />
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
//import tooltip from "../../../node_modules/vue-bulma-tooltip";
import Tooltip from "vue-bulma-tooltip";
//const tooltip = window.require("vue-bulma-tooltip");
//const remote = window.require('electron').remote;
export default {
  name: "Navbar",
  created() {
    this.$store.dispatch("fucksake", "dallama");
  },
  data() {
    return {
      currentWindow: this.$electron.remote.getCurrentWindow()
    };
  },
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
</style>
