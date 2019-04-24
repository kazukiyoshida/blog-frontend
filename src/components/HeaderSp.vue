<template lang="pug">
  div.header
   div.center
     div.top
       div.subtitle
         router-link(to="/" class="category")
           span.tbo The blog of
           span.ky Kazuki Yoshida
     div.bottom
       div.categories
         router-link(to="post1" class="category") BOOKS
         router-link(to="post1" class="category") COMPUTER
         router-link(to="post1" class="category") PERSONAL
   div.right
     nav
       .burger--container
         span.burger--line
         span.burger--line
         span.burger--line
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class HeaderSp extends Vue {}

</script>

<style scoped lang="scss">
.header {
  height: 54px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: white;
  display: flex;
  border-bottom: 1px solid #D0D0D0;
}
.left {
  height: 54px;
  width: 54px;
  background-color: black;
  margin: 0 0 0 20px;
}
.center {
  height: 54px;
  padding: 0 0 0 20px;
  width: calc(100% - 20px - 44px - 20px);
  font-size: 11px;
}
.top {
  height: 27px;
  width: 100%;
  border-bottom: 1px solid #D0D0D0;
  line-height: 28px;  /* テキストの縦中央そろえ */
}
.right {
  height: 54px;
  width: 44px;
  margin: 0 20px 0 0;
}
.subtitle {
  float: left;
}
.ky {
  font-weight: bold;
  padding: 0 5px;
}
.categories {
  float: left;
  font-weight: bold;
  line-height: 28px;
}
.category {
  padding: 0 10px 0 0;
  &:hover {
    color: #999;
  }
}
nav {
  width: 100%;
}
.mobile--menu {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 8rem;
  padding: 2rem;
  width: 100%;
}

.burger {
  &--container {
    display: flex;
    margin-left: auto;
    height: 22px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
    padding: 16px 0 16px 16px;
    cursor: pointer;
  }

  &--line {
    background-color: black;
    display: inline-block;
    height: 1.6px;
    width: 100%;
  }
}

</style>

