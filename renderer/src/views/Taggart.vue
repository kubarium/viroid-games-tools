<template>
  <v-container fluid>
    <v-row>
      <h1>Taggart</h1>
    </v-row>

    <v-divider />

    <v-row>
      <v-col>
        <h2 class="title">Individual Operations</h2>
        <v-divider />
        <v-form>
          <v-container>
            <v-row class="align-center">
              <v-col>
                <v-text-field placeholder="Type your tag" />
              </v-col>
              <v-col style="outline:1px solid red">
                <v-row class="d-flex justify-space-around">
                  <v-btn class="primary">Check</v-btn>
                  <v-btn class="green" dark>Insert</v-btn>
                  <v-btn class="red" dark>Remove</v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>

      <v-divider vertical class="mx-2" />

      <v-col>
        <v-row class="align-center">
          <h2 class="title">List of Tags</h2>
          <v-spacer />
          <a @click="getTags('#')" class="mx-1">#</a>
          <a v-for="i in 26" :key="i" @click="getTags(i)" class="mx-1">
            {{ stringify(i) }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    stringify(code) {
      return String.fromCharCode(64 + code);
    },
    getTags(startsWith) {
      //do shit
      console.log(this.stringify(startsWith));
    }
  }
};
</script>

<style>
</style>