<template>
  <f7-page>
    <div class="gta-settings">
      <h1 class="ml-4 mt-5">Ayarlar</h1>

      <f7-list>
        <f7-list-item>
          <div class="gta-settings__profile flex items-center">
            <img class="rounded-full" :src="config.account.profilePicture" />

            <div class="flex flex-col">
              <span class="font-bold ml-2">{{ config.account.fullname }}</span>
              <span class="ml-2">{{ config.account.phoneNumber }}</span>
            </div>
          </div>

          <f7-icon
            f7="chevron_right"
            size="18px"
            class="text-gray-400"
          ></f7-icon>
        </f7-list-item>
      </f7-list>

      <f7-list class="gta-settings__list">
        <f7-list-item>
          <div>
            <f7-icon
              f7="airplane"
              size="22px"
              class="rounded p-1"
              bg-color="orange"
              color="white"
            ></f7-icon>

            <span class="ml-2">Ulaşılamaz</span>
          </div>

          <f7-toggle color="green"></f7-toggle>
        </f7-list-item>

        <f7-list-item>
          <div>
            <f7-icon
              f7="airplane"
              size="22px"
              class="rounded p-1"
              bg-color="gray"
              color="white"
            ></f7-icon>

            <span class="ml-2">Genel</span>
          </div>

          <f7-icon
            f7="chevron_right"
            size="18px"
            class="text-gray-400"
          ></f7-icon>
        </f7-list-item>
      </f7-list>

      <f7-block-title class="mt-5">Bildirimler</f7-block-title>
      <f7-list class="gta-settings__list">
        <f7-list-item v-for="(app, index) in getApps" v-bind:key="index">
          <div class="flex items-center">
            <img :src="app.src" />

            <span class="ml-2">{{ app.name }}</span>
          </div>

          <f7-toggle color="green"></f7-toggle>
        </f7-list-item>
      </f7-list>
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
      return (this.apps || []).filter((item) => item.isNotification);
    },
  },
};
</script>
 
 <style lang="less">
.gta-settings {
  &__profile {
    & img {
      width: 60px;
      height: 60px;
    }
  }

  &__list {
    & img {
      width: 30px;
    }
  }
}
</style>

