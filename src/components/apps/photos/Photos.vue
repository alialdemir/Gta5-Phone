<template>
  <f7-page>
    <div class="gta-photo-container">
      <f7-navbar :transparent="true" back-link="Geri">
        <f7-nav-title text-color="white">Resimler</f7-nav-title>
      </f7-navbar>

      <div class="gta-photo-container__content">
        <div v-for="(photo, index) in photos" v-bind:key="index">
          <img :src="photo.src" @click="selectPhoto(photo)" />
        </div>
      </div>

      <f7-photo-browser
        :photos="photos.map((item) => item.src)"
        page-back-link-text="Geri"
        theme="dark"
        type="page"
        ref="pageDark"
        :routable-modals="false"
      ></f7-photo-browser>
    </div>
  </f7-page>
</template>

<script>
export default {
  data: () => ({
    photos: [
      { src: 'https://placekitten.com/800/800' },
      { src: 'https://placekitten.com/1024/1024' },
    ],
  }),

  methods: {
    selectPhoto(photo) {
      this.$refs.pageDark.open();
    },
  },
};
</script> 

<style lang="less" scoped>
.gta-photo-container {
  &__content {
    margin-top: -41px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.2em;

    & img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>

<style lang="less">
.photo-browser-page {
  .toolbar.toolbar-bottom {
    margin-bottom: 18px;
  }
}
</style>
