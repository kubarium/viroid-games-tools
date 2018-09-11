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
          <div class="panel">
            <div class="panel-heading">Detected Names
              <span v-show="$store.state.detectedNames.length">({{$store.state.detectedNames.length}})</span>
            </div>
            <div class="panel-block tags">

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
          <div class="panel">
            <div class="panel-heading">
              <div class="level">
                <div class="level-left">
                  <span>
                    Passages&nbsp;
                  </span>
                  <span v-show="numOfPassages">for {{$store.state.passagesFor}} ({{numOfPassages}})</span>
                </div>
                <div class="level-right">
                  <slider v-show="numOfPassages>5*pageSize" class="pulled-right" type="info" :value="page" :max="Math.floor(numOfPassages/pageSize)" :step="1" @change="revealPassages"></slider>
                  <nav class="pagination" role="navigation" aria-label="pagination" v-show="numOfPassages<=5*pageSize">
                    <ul class="pagination-list">
                      <li>
                        <a class="pagination-link" :class="{'is-current':page==pagination-1}" v-for="pagination in Math.ceil(numOfPassages/pageSize)" :key="pagination" @click="revealPassages(pagination-1)">{{pagination}}</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div class="panel-block" v-for="(passage,index) in $store.state.passages.slice(page*pageSize,page*pageSize+pageSize)" :key="index">
              <span v-html="passage"></span>
            </div>
            <div class="panel-block" v-show="numOfPassages===0">Select a detected name to see where it's mentioned in the book</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs, TabPane } from "vue-bulma-tabs";
import Slider from "vue-bulma-slider";

export default {
  components: { Slider, Tabs, TabPane },
  data() {
    return { page: 0, pageSize: 5 };
  },
  computed: {
    numOfPassages: function() {
      return this.$store.state.passages.length;
    }
  },
  watch: {
    numOfPassages: function() {
      this.page = 0;
    }
  },
  methods: {
    revealPassages(page) {
      this.page = parseInt(page);
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
</style>