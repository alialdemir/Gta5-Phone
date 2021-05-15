<template>
  <f7-page :page-content="false">
    <div class="gta-tab-keypad mt-6">
      <div style="height: 50px">
        <div class="text-center font-bold mt-6 text-3xl">{{ phoneNumber }}</div>
        <f7-button class="capitalize" v-show="phoneNumber"
          >Kişilere Ekle</f7-button
        >
      </div>
      <div class="gta-tab-keypad__number mt-6">
        <gta-number-button
          @click="setPhoneNumber"
          v-for="(keypad, index) in keypads"
          v-bind:key="index"
          :label="keypad.label"
          >{{ keypad.text }}</gta-number-button
        >
        <div></div>

        <gta-number-button color="green" @click="call">
          <f7-icon f7="phone_fill" size="32px" color="white"></f7-icon>
        </gta-number-button>

        <div
          v-show="phoneNumber"
          class="flex justify-center self-center"
          @click="removePhoneNumber"
        >
          <img
            src="/icon/backspace-outline.svg"
            class="gta-tab-keypad__call-icon"
          />
        </div>
      </div>
    </div>
  </f7-page>
</template>

<script>
export default {
  data: () => ({
    phoneNumber: '',
    keypads: [
      { text: '1' },
      { text: '2', label: 'A B C' },
      { text: '3', label: 'D E F' },
      { text: '4', label: 'D H I' },
      { text: '5', label: 'J K L' },
      { text: '6', label: 'M N O' },
      { text: '7', label: 'P Q R S' },
      { text: '8', label: 'T U V' },
      { text: '9', label: 'W X Y Z' },
      { text: '*' },
      { text: '0', label: '+' },
      { text: '#' },
    ],
  }),

  methods: {
    call() {
      if (this.phoneNumber) {
        this.$f7.views.main.router.navigate({
          name: 'Calling',
          params: { phoneNumber: this.phoneNumber },
        });
      }
    },

    setPhoneNumber(number) {
      this.phoneNumber += number;

      this.$store.dispatch('playSound', {
        sound: '/sound/KeypadClick.ogg',
        loop: false,
      });
    },

    removePhoneNumber() {
      this.phoneNumber = this.phoneNumber.substring(
        0,
        this.phoneNumber.length - 1
      );
    },
  },
};
</script>

<style lang="less">
.gta-tab-keypad {
  &__number {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 1.5em;
    padding: 1em;
    padding-bottom: 0;
  }

  &__call {
    padding: 1em;
    margin-left: -16px;

    &-icon {
      width: 24px;
      height: 24px;
    }
  }

  & .gta-number-button {
    margin: 0 auto;
    height: 70px;
    width: 70px;
  }
}
</style>