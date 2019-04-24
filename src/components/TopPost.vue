<template lang="pug">
  div.top-post
    router-link(to="post1" class="link")
      div.top-post-image
        img(src="../assets/functional_programing_books.png" alt="" class="topimg")
      <PostAbstract />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostAbstract from '@/components/PostAbstract.vue';

@Component({
  components: {
  PostAbstract,
  },
})
export default class TopPost extends Vue {}
</script>

<style scoped lang="scss">
.top-post {
  z-index: 1;
  cursor: pointer;
  &:hover {
    opacity:0.7;
  }
}
.top-post-image {
  background-color: #000000;
}
.topimg {
  max-width: 100%;
  max-height: 100%;
  vertical-align: bottom;
}
</style>
