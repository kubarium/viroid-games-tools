<template>
  <div class="section">
    <h1 class="title is-size-5">Name Extractor</h1>
    <hr>
    <div class="container is-fullhd has-text-centered" style="outline:1px solid red">

      <brace style="height: 500px" :fontsize="'15px'" :theme="'github'" :mode="'json'" :codefolding="'markbegin'" :softwrap="'free'" :selectionstyle="'text'" :highlightline="true">
      </brace>
    </div>
  </div>
</template>

<script>
import brace from "vue-bulma-brace";
export default {
  components: { brace }
};
</script>
