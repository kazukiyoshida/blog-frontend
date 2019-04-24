<template lang="pug">
  div.post-abstract
    div.title
      span Functional Programing is The Future of Our World.
    div.subtitle
      span Let's start to learn Haskell, for great good, indeed.
    div.date
      p April 15, 2019
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PostAbstract extends Vue {}

</script>

<style scoped lang="scss">
.post-abstract {
  background-color: #ffffff;
}
.title {
  margin: 20px 20px 5px 20px;
  font-size: calc(25px + 0.75vw);
  line-height: 30px;
  font-weight: bold;
  text-align : left;
}
.subtitle {
  margin: 0px 20px 5px 20px;
  font-size: 16px;
  text-align : left;
  color: #474747;
}
.date {
  margin: 0px 20px 50px 20px;
  font-size: 12px;
  text-align : left;
  color: #767676;
}
</style>
