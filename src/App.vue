<template>
  <div id="app">
    <HeaderSp />
    <!-- <LowHeader /> -->
    <router-view/>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderSp from '@/components/HeaderSp.vue';
import LowHeader from '@/components/LowHeader.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    HeaderSp,
    LowHeader,
    Footer,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">

/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  overscroll-behavior: none;
}

a {
  text-decoration: none;
  color: black;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
