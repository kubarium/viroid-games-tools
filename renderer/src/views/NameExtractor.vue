<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex md6 xs6>
            <span class="display-1">Name Digger</span>
          </v-flex>
          <v-flex md6 xs6>
            <file-picker />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex v-for="i in 2" :key="`6${i}`" xs6>
        <v-card dark color="secondary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <!-- <div class="section">
    <div class="level">
      <div class="level-left">
        <span class="title is-size-5">Name Extractorsss</span>
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
            <button class="button is-primary" :class="{'is-loading':isLoading}" :disabled="isLoading || $store.state.file.name=='' || $store.state.file.realname==''" @click="extract">
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

              <span v-show="$store.state.detectedNames.length===0">Detected names in e-books will be listed here</span>
            </div>
          </div>
          <div class="field">
            <label class="label">Workbench</label>
            <v-tabs color="cyan" dark slider-color="yellow">
              <v-tab ripple>
                Description
              </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>Description</v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab ripple>
                Tags
              </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>Tags</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
            
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
                  <span v-show="numOfPassages">with {{$store.state.passagesFor}} ({{numOfPassages}})</span>
                </div>
                <div class="level-right">
                  <v-slider v-show="numOfPassages>5*pageSize" class="pulled-right" color="info" :value="page" :max="Math.floor(numOfPassages/pageSize)" @change="revealPassages"></v-slider>
                  <nav class="pagination is-small" role="navigation" aria-label="pagination" v-show="numOfPassages<=5*pageSize">
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
              <p v-html="passage" class="passage"></p>
            </div>
            <div class="panel-block" v-show="numOfPassages===0">Select a detected name to see where it's mentioned in the book</div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import FilePicker from "@/components/FilePicker.vue";
export default {
  components: { FilePicker },
  data() {
    return { page: 0, pageSize: 5, isLoading: false };
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
    extract() {
      this.isLoading = true;
      this.$store.dispatch("extract").then(() => (this.isLoading = false));
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
.passage {
  /* white-space: pre-line; */
}
</style>