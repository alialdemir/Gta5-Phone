<template>
  <f7-app v-bind="f7params">
    <mobile-phone v-show="isShowMobile">
      <f7-view main url="/"></f7-view>
    </mobile-phone>
  </f7-app>
</template> 


<script>
import Routers from '../router';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      isShowMobile: 'isShowMobile',
    }),
  },

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