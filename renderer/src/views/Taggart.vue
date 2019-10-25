<template>
  <v-container fluid>
    <v-row>
      <h1>Taggart</h1>
    </v-row>

    <v-divider />

    <v-row>
      <v-col>
        <v-container>
          <v-row>
            <h2 class="title">Individual Operations</h2>
          </v-row>
        </v-container>
        <v-divider />
        <v-container>
          <v-form @submit="$store.dispatch('taggart/queryTag')">
            <v-row class="align-center">
              <v-col cols="7">
                <v-text-field
                  placeholder="Type your tag"
                  v-model="query"
                  :label="$store.state.taggart.query.status"
                />
              </v-col>
              <v-col>
                <v-row class="justify-space-around">
                  <v-btn
                    class="primary"
                    @click="$store.dispatch('taggart/queryTag')"
                    >Check</v-btn
                  >
                  <v-btn
                    class="green white--text"
                    @click="$store.dispatch('taggart/insertTag')"
                    :disabled="!$store.state.taggart.query.insertable"
                    >Insert</v-btn
                  >
                  <v-btn
                    class="red white--text"
                    :disabled="!$store.state.taggart.query.removable"
                    >Remove</v-btn
                  >
                </v-row>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-col>

      <v-divider vertical class="mx-2" />

      <v-col>
        <v-container>
          <v-row class="align-center">
            <h2 class="title">List of Tags</h2>
            <v-spacer />
            <a @click="getTags('#')" class="mx-1">#</a>
            <a v-for="i in 26" :key="i" @click="getTags(i)" class="mx-1">
              {{ stringify(i) }}
            </a>
          </v-row>
        </v-container>

        <v-divider />
        <v-container>
          <v-row>
            <p v-for="tag in $store.state.taggart.tags" :key="tag.id">
              {{ tag.data() }}
            </p>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    query: {
      get() {
        return this.$store.state.taggart.query.tag;
      },
      set(value) {
        this.$store.commit("taggart/updateTaggart", {
          tag: value,
          insertable: false,
          removable: false,
          exists: false,
          updating: true,
          status: "Submit to check"
        });
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    stringify(code) {
      return String.fromCharCode(64 + code);
    },
    getTags(startsWith) {
      //do shit
      console.log(this.stringify(startsWith));
      this.$store.dispatch("taggart/getTags", startsWith);
    }
  }
};
</script>

<style>
</style>