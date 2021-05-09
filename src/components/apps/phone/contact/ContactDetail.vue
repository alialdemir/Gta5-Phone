<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link text-color="blue" back>İptal</f7-link>
      </f7-nav-left>

      <f7-nav-title>Kişi Ekle</f7-nav-title>

      <f7-nav-right>
        <f7-link text-color="blue" back>Kaydet</f7-link>
      </f7-nav-right>
    </f7-navbar>

    <div
      class="gta-contact-detail__avatar mt-5 flex justify-center flex-col items-center"
    >
      <img src="/images/avatar.svg" />
      <f7-button class="mt-4">Resim Ekle</f7-button>
    </div>
    <f7-list inline-labels no-hairlines-md>
      <f7-list-input type="text" placeholder="Ad soyad" clear-button>
      </f7-list-input>

      <f7-list-input type="text" placeholder="Numara" clear-button>
      </f7-list-input>
    </f7-list>

    <f7-list inline-labels no-hairlines-md>
      <f7-list-input type="textarea" placeholder="Not"> </f7-list-input>
    </f7-list>

    <f7-list>
      <f7-list-item link="#" title="Zil Sesi" after="Varsayılan">
        <template #media>
          <f7-icon icon="demo-list-icon"></f7-icon>
        </template>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  props: {
    popupOpened: false,
  },
};
</script>
<style lang="less" scoped>
.gta-contact-detail {
  &__avatar {
    & img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
}
</style>