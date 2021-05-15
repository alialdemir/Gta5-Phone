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
      class="gta-contact-detail__avatar flex justify-center flex-col items-center"
    >
      <img src="/images/avatar.svg" />
      <f7-button class="mt-4 mb-2">Resim Ekle</f7-button>
    </div>

    <div class="flex justify-evenly">
      <f7-button
        v-for="(menuButton, index) in menuButtons"
        v-bind:key="index"
        large
        fill
        text-color="blue"
        class="gta-contact-detail__menu-buttons flex flex-col"
      >
        <f7-link
          :icon-ios="menuButton.icon"
          :icon-aurora="menuButton.icon"
          :icon-md="menuButton.icon"
          href="/ContactDetail"
        ></f7-link>
        <span class="text-sm">{{ menuButton.text }}</span>
      </f7-button>
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

    <f7-list>
      <f7-list-item text-color="blue" title="Mesaj Gönder"></f7-list-item>
      <f7-list-item text-color="blue" title="Hızlı Aramaya Ekle"></f7-list-item>
      <f7-list-item text-color="red" title="Kişiyi Sil"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  props: {
    popupOpened: false,
  },

  data: () => ({
    menuButtons: [
      {
        icon: 'f7:chat_bubble_fill',
        text: 'Mesaj',
      },
      {
        icon: 'f7:phone_fill',
        text: 'Ara',
      },
      {
        icon: 'f7:videocam_fill',
        text: 'Video',
      },
      {
        icon: 'f7:text_bubble_fill',
        text: 'Whatsapp',
      },
    ],
  }),
};
</script>
<style lang="less" scoped>
.gta-contact-detail {
  &__avatar {
    margin-top: 4.25rem;

    & img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }

  &__menu-buttons {
    height: 70px;
    width: 70px;
    background-color: #1c1c1d;
  }
}
</style>