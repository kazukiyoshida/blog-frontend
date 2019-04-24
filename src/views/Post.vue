<template lang="pug">
  div.post
    div.header-space
    <TopPost />
    <PostContent />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopPost from '@/components/TopPost.vue';
import PostContent from '@/components/PostContent.vue';

@Component({
  components: {
    TopPost,
    PostContent,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.header-space {
  height: 54px;
  width: 100%;
  background-color: white;
}
</style>
