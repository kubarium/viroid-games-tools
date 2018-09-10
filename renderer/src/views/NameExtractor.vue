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
                <input class="file-input" type="file" name="ebook" @change="$store.commit('changeFile',$event)">
                <span class="file-cta">
                  <span class="file-label">
                    Choose an e-book
                  </span>
                </span>
              </label>
            </div>
          </div>
          <div class="control">
            <input type="text" class="input book-name" v-tooltip.top="$store.state.file.realname||'Choose a file'" v-model="$store.state.file.name">
          </div>
          <div class="control">
            <button class="button is-primary" :disabled="$store.state.file.name=='' || $store.state.file.realname==''" @click="$store.dispatch('extract')">
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
            <label class="label">Detected Names
              <span v-show="$store.state.detectedNames.length">({{$store.state.detectedNames.length}})</span>
            </label>
            <div class="tags ">
              <span class="tag" :class="{'is-info':!item.processed,'is-success':item.processed}" v-for="(item,index) in $store.state.detectedNames" :key="item.label" @click="$store.dispatch('findPassage',item.label)">{{item.label}}
                <button class="delete is-small" @click="$store.commit('deleteDetectedName',index)"></button>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Workbench</label>

            <tabs type="boxed">
              <tab-pane label="Description" selected>Description</tab-pane>
              <tab-pane label="Tags">Tags</tab-pane>
            </tabs>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Passages <span v-show="$store.state.passages.length">({{$store.state.passages.length}})</span></label>
                      <!-- <AceEditor :fontSize="14" :showPrintMargin="false" :showGutter="true" :wrapEnabled="true" :highlightActiveLine="true" mode="text" theme="github" :onSelectionChange="onSelectionChange" :value=braceValue :editorProps="{$blockScrolling: true}"/>
                       -->
                      <!-- <editor v-model="$store.getters.passages" @init="editorInit" lang="html" theme="chrome" width="100cw" height="100ch" wrapEnabled="true"></editor> -->
                      <div class="passages">{{$store.state.passages}}</div>
                      </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs, TabPane } from "vue-bulma-tabs";
/* import "brace";

import { Ace as AceEditor } from "vue2-brace-editor";
import "brace/mode/text";
import "brace/theme/github"; */

export default {
  components: { editor: require('vue2-ace-editor'), Tabs, TabPane },
  data() {
    return {

    };
  },
  computed:{
    braceValue() {
      console.log("brace for fuck up")
      //return this.$store.getters.getPassages()
    }
  },
  methods: {
    editorInit: function () {
            require('brace/ext/language_tools') //language extension prerequsite...
            require('brace/mode/html')                
            require('brace/mode/javascript')    //language
            require('brace/mode/less')
            require('brace/theme/chrome')
            require('brace/snippets/javascript') //snippet
        },
    onSelectionChange() {}
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
.tags {
  max-height: calc(30vh);
  overflow: auto;
}
.tag {
  cursor: help;
}
.passages{
  outline:1px solid red
}
</style>

