<template>
  <f7-page>
    <div class="gta-messages">
      <f7-navbar>
        <f7-nav-right>
          <f7-link
            @click="messageDetail('-')"
            icon-ios="f7:square_pencil"
            text-color="blue"
            icon-aurora="f7:square_pencil"
            icon-md="f7:square_pencil"
          ></f7-link>
        </f7-nav-right>
      </f7-navbar>

      <f7-block-title class="mt-4">Messages</f7-block-title>

      <gta-list-item
        v-for="(message, index) in messages"
        v-bind:key="index"
        @click="messageDetail(message.phoneNumber)"
        :item="message"
      />
    </div>
  </f7-page>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        image: 'http://192.168.1.180:3000/images/avatar.svg',
        fullname: 'Michael Jackson',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
        date: '5:51 PM',
        phoneNumber: '562123',
      },
      {
        image: 'http://192.168.1.180:3000/images/avatar.svg',
        fullname: 'Michael Jackson',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
        date: '5:51 PM',
        phoneNumber: '562123',
      },
      {
        image: 'http://192.168.1.180:3000/images/avatar.svg',
        fullname: 'Michael Jackson',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
        date: '5:51 PM',
        phoneNumber: '562123',
      },
      {
        image: 'http://192.168.1.180:3000/images/avatar.svg',
        fullname: 'Michael Jackson',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
        date: '5:51 PM',
        phoneNumber: '562123',
      },
    ],
  }),

  methods: {
    messageDetail(phoneNumber) {
      this.$f7.views.main.router.navigate({
        name: 'MessageDetail',
        params: { phoneNumber },
      });
    },
  },
};
</script>

<style lang="less">
.page-content {
  padding-top: 0px;
}
</style>