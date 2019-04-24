<template lang="pug">
  div.low-header
    div.left
      router-link(to="/" class="category") Log in
    div.middle
      div.middle-center
        span Not a Gates Notes insider yet?
        span.sign-up Sign up
    div.right
      router-link(to="/" class="category") Follow
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LowHeader extends Vue {}

</script>

<style scoped lang="scss">
.low-header {
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #F3F3F3;
  display: flex;
}
.left {
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 11px;
  color: #3279BE;
}
.middle {
  flex-grow: 5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.middle-center {
  width: 100%;
  border-left: 1px solid #D0D0D0;
  border-right: 1px solid #D0D0D0;
  font-weight: bold;
  font-size: 8px;
}
.right {
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 11px;
}
.sign-up {
  font-weight: bold;
  color: #3279BE;
}
</style>
