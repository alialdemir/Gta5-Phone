<template>
  <f7-page>
    <div
      class="main pt-3 h-full"
      :style="{
        'background-image': 'url(' + config.background_default.value + ')',
      }"
    >
      <div class="main__apps">
        <div
          class="flex justify-center"
          v-for="(app, index) in getApps"
          v-bind:key="index"
        >
          <gta-app-icon :app="app" />
        </div>
      </div>

      <div class="main__apps-bottom">
        <div
          class="flex justify-center"
          v-for="(app, index) in bottomApps"
          v-bind:key="index"
        >
          <gta-app-icon :app="app" />
        </div>
      </div>
    </div>
  </f7-page>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      apps: 'apps',
      config: 'config',
    }),

    getApps() {
      return (this.apps || []).filter((item) => !item.inHomePage);
    },

    bottomApps() {
      return (this.apps || []).filter((item) => item.inHomePage);
    },
  },

  created() {
    this.$store.dispatch('getApps');
  },
};
</script>

<style lang="less">
.main__apps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(7, 1fr);

  &-bottom {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
}

.main__apps > div {
  text-align: center;
}
</style>

