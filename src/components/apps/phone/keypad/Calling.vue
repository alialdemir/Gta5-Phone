<template>
  <f7-page>
    <div
      class="gta-calling h-full bg-cover bg-center"
      :style="{
        'background-image': 'url(' + backgroundImage + ')',
      }"
    ></div>
    <div class="gta-calling__number absolute -inset-y-0.5 w-full">
      <div class="gta-calling__number-phone text-center">
        <span class="text-5xl">
          {{ phoneNumber }}
        </span>
        <span class="text-gray-400">Aranıyor...</span>
      </div>

      <div class="gta-calling__stop">
        <gta-number-button color="red" @click="stop">
          <f7-icon f7="phone_down_fill" size="32px" color="white"></f7-icon>
        </gta-number-button>
      </div>
    </div>
  </f7-page>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      config: 'config',
    }),

    phoneNumber() {
      return this.$f7.views.main.router.currentRoute.params.phoneNumber;
    },

    backgroundImage() {
      return this.config.background_default.value;
    },
  },

  created() {
    // this.$store.dispatch('playSound', {
    //   sound: '/sound/PhoneCallSound.ogg',
    // });
  },

  methods: {
    stop() {
      this.$store.dispatch('stopSound', {
        sound: '/sound/PhoneCallSound.ogg',
      });

      this.$f7.views.main.router.back();
    },
  },
};
</script>

 <style lang="less" scoped>
.gta-calling {
  opacity: 0.5;

  &__number {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 1.5em;

    &-phone {
      grid-row: 2;
      grid-column: 2;
    }
  }

  &__stop {
    grid-row: 4;
    grid-column: 2;

    &-icon {
      width: 24px;
      height: 24px;
    }

    & .gta-number-button {
      margin: 0 auto;
      height: 70px;
      width: 70px;
    }
  }
}
</style>

 