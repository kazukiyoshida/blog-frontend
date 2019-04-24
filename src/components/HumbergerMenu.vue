<template lang="pug">
  div.menu
    button.button(type="button" name="button")
      span.top
      span.middle
      span.bottom
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HumbergerMenu extends Vue {}

</script>

<style scoped lang="scss">
</style>
