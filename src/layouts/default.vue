<template>
  <f7-app v-bind="f7params">
    <mobile-phone>
      <f7-view main url="/"></f7-view>
    </mobile-phone>
  </f7-app>
</template> 


<script>
import Routers from '../router';
export default {
  data() {
    return {
      f7params: {
        theme: 'ios',
        routes: Routers,
      },
    };
  },

  created() {
    this.$store.dispatch('loadConfig');
    this.$store.dispatch('eventListener');
    this.$store.dispatch('forceIosTheme');
  },
};
</script>

<style>
@import 'tailwindcss/dist/utilities.min.css';
</style>