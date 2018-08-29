<template>
  <div>

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
            <a class="navbar-link is-uppercase is-size-7 has-text-weight-bold">English</a>
            <div class="navbar-dropdown">
              <a href="/" class="navbar-item is-uppercase is-size-7 router-link-exact-active router-link-active">English</a>
              <a href="/fr/" class="navbar-item is-uppercase is-size-7">Franaçais</a>
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
    <p>{{asd}}</p>
  </div>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      asd: "Vue",
      currentWindow: this.$electron.remote.getCurrentWindow()
    };
  },
  methods: {}
};
</script>

<style>
#titlebar {
  -webkit-app-region: drag;
}
.navbar-end {
  -webkit-app-region: no-drag;
}
</style>
