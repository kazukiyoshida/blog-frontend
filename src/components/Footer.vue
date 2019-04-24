<template lang="pug">
  div.footer
    div.blank-box
    div.one-sentence
      p.desc I'm happy you're interested in my blog! <br /> Please text me anytime :)
    div.sns
      a(href="https://twitter.com/qooa_ml" class="icon" target="_blank")
        <font-awesome-icon size="2x" :icon="{ prefix: 'fab', iconName: 'twitter' }" />
      a(href="https://www.facebook.com/profile.php?id=100002189958429<Paste>" class="icon" target="_blank")
        <font-awesome-icon size="2x" :icon="{ prefix: 'fab', iconName: 'facebook' }" />
      a(href="https://github.com/kazukiyoshida" class="icon" target="_blank")
        <font-awesome-icon size="2x" :icon="{ prefix: 'fab', iconName: 'github' }" />
      a(href="https://jp.quora.com/profile/Yohsida-Kazuki" class="icon" target="_blank")
        <font-awesome-icon size="2x" :icon="{ prefix: 'fab', iconName: 'quora' }" />
    div.categories
      router-link(to="/" class="elements") BOOKS
      router-link(to="/" class="elements") COMPUTER
      router-link(to="/" class="elements") ABOUTME
    div.copyrights
      p.copyright © 2019 Kazuki Yoshida
      a(href="https://twitter.com/qooa_ml" class="legals" target="_blank") Contact
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

/* Fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faTwitter, faGithub, faQuora } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebook);
library.add(faTwitter);
library.add(faGithub);
library.add(faQuora);
Vue.component('font-awesome-icon', FontAwesomeIcon);

@Component
export default class Footer extends Vue {}

</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  background-color: #000000;
  color: #ffffff;
}
.blank-box {
  height: 30px;
}
.one-sentence {
  width: 70%;
  margin-left : auto;
  margin-right : auto;
  border: thin solid #666666;
  display: center;
}
.desc {
  margin: 50px auto;
  font-size: 11px;
}
.sns {
  width: 70%;
  margin-left : auto;
  margin-right : auto;
  border: thin solid #666666;
  display: center;
  display: flex;
  justify-content: center;
  border-top: 0px solid #333;
}
.icon {
  color: #ffffff;
  margin: 60px 10px;
  &:hover {
    color: #999;
  }
}
.categories {
  width: 70%;
  margin-left : auto;
  margin-right : auto;
  border: thin solid #666666;
  display: center;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 10px;
  border-top: 0px solid #333;
}
.elements {
  padding: 30px 5px;
  color: white;
  text-decoration: none;
  cursor: pointer;
}
.elements:hover {
  color: #999;
}
.copyrights {
  width: 70%;
  margin-left : auto;
  margin-right : auto;
  padding: 15px 0px 0px 0px;
  display: center;
  display: flex;
  font-size: 8px;
}
.legals {
  color: #3279BE;
  padding: 0px 5px;
  margin: 0 0 40px 0;
  text-decoration: none;
  cursor: pointer;
}
.legals:hover {
  color: #3279BE;
  text-decoration: underline;
}
</style>
