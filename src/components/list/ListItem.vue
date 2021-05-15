<template>
  <div class="gta-list-item flex p-2" @click="listItemClick">
    <img class="mr-2 w-12 h-12 rounded-full" :src="item.image" />

    <div class="gta-list-item__border pb-3">
      <div class="flex justify-between">
        <h3 class="m-0">{{ item.fullname }}</h3>
        <div>
          <span class="text-gray-400">{{ item.date }}</span>
          <f7-icon
            v-if="rightArrowHide"
            f7="chevron_right"
            size="18px"
            class="text-gray-400"
          ></f7-icon>
        </div>
      </div>
      <span
        class="gta-list-item__message text-gray-400 inline-block whitespace-nowrap overflow-hidden overflow-ellipsis"
      >
        <f7-icon f7="checkmark_alt" size="18px" class="text-gray-400"></f7-icon>
        {{ item.message }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      default: {
        image: 'http://192.168.1.180:3000/images/avatar.svg',
        fullname: '',
        message: '',
        date: '',
      },
    },

    rightArrowHide: {
      default: true,
    },
  },

  methods: {
    listItemClick() {
      this.$emit('click', this.item);
    },
  },
};
</script>

<style lang="less">
.gta-list-item {
  &__border {
    border-bottom: 1px solid rgba(243, 244, 246, 0.5);
  }

  &__message {
    width: 275px;
  }
}
</style>