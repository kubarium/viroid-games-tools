<template>
  <div class="section">
    <div class="level">
      <div class="level-left">
        <span class="title is-size-5">Name Extractor</span>
      </div>
      <div class="level-right">
        <div class="field has-addons">
          <div class="control">
            <div class="file is-dark has-name ">
              <label class="file-label">
                <input class="file-input" type="file" name="resume" @change="changeFile">
                <span class="file-cta">
                  <span class="file-label">
                    Choose an e-book
                  </span>
                </span>
              </label>
            </div>
          </div>
          <div class="control">
            <input type="text" class="input book-name" v-tooltip.top="file.realname||'Choose a file'" v-model="file.name">
          </div>
          <div class="control">
            <button class="button is-primary" :disabled="file.name=='' || file.realname==''">
              Process
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="container is-fullhd">
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Detected Names</label>
            <div class="tags ">
              <p class="tag" :class="{'is-info':!item.processed,'is-success':item.processed}" v-for="item in detectedNames" :key="item.label">{{item.label}}</p>
            </div>
          </div>
          <div class="field">
            <label class="label">Workbench</label>

            <tabs>
              <tab-pane label="Description" selected>Description</tab-pane>
              <tab-pane label="Tags">Tags</tab-pane>
            </tabs>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Passages</label>
            <brace style="height: 500px" :fontsize="'15px'" :theme="'github'" :mode="'json'" :codefolding="'markbegin'" :softwrap="'free'" :selectionstyle="'text'" :highlightline="true">
            </brace>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { Tabs, TabPane } from "vue-bulma-tabs";

import brace from "vue-bulma-brace";
export default {
  components: { brace, Tabs, TabPane },
  data() {
    return {
      file: {
        name: "",
        realname: ""
      },
      detectedNames: [
        { label: "sik", processed: false },
        { label: "yarrak", processed: true }
      ]
    };
  },
  methods: {
    changeFile(event) {
      const selectedFileName =
        event.target.files.length > 0 ? event.target.files[0].name : "";

      this.file.name = selectedFileName;
      this.file.realname = selectedFileName;
    }
  }
};
</script>

<style lang="scss" scoped>
.tile.is-parent {
  padding: 10px;
}
.columns .field {
  padding: 0.5rem 0;
}
.level-right {
  flex-grow: 1;
}
.book-name {
  min-width: 25rem;
}
</style>

