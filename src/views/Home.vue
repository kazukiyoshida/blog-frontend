<template lang="pug">
  div.home
    div.header-space
    <TopPost />
    <TopPost />
    <TopPost />
    <TopPost />
    <TopPost />
    <TopPost />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopPost from '@/components/TopPost.vue';

@Component({
  components: {
    TopPost,
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
