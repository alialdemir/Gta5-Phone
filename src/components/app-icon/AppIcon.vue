<template>
  <div class="gta-app-icon">
    <f7-link :href="app.url" class="flex justify-center text-center flex-col">
      <img :src="app.src" />
      <div v-if="app.name && !app.inHomePage">
        <h5 class="whitespace-nowrap mt-2">{{ app.name }}</h5>
      </div>
    </f7-link>
  </div>
</template>

<script>
import { f7Page, f7Link } from 'framework7-vue';

export default {
  props: {
    app: {
      default: {
        src: '',
        name: '',
      },
      require: true,
    },
  },

  components: {
    f7Page,
    f7Link,
  },
};
</script>

<style lang="less">
.gta-app-icon {
  height: 80px;

  & img {
    width: 45px;
  }

  h5 {
    color: #fff;
    font-size: 12px;
  }
}
</style>