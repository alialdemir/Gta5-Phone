<template>
  <div class="gta-number-button flex justify-center">
    <button
      @click="onClick"
      ref="numberButton"
      :class="{
        'gta-number-button__content-gray': color === 'gray',
        'gta-number-button__content-green': color === 'green',
        'gta-number-button__content-orange': color === 'orange',
        'gta-number-button__content-red': color === 'red',
        'gta-number-button__content-gray-slate': color === 'gray-slate',
      }"
      class="gta-number-button__content"
    >
      <slot />

      <span class="gta-number-button__content-text" v-if="label">{{
        label
      }}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    label: '',
    color: {
      default: 'gray',
    },
  },

  methods: {
    onClick() {
      this.$emit(
        'click',
        ((this.$refs.numberButton.innerText || '').split('') || []).shift()
      );
    },
  },
};
</script>

<style lang="less">
@calculator-spacing: 0.5em;
@calculator-color-apricot: #ff9403;
@calculator-color-red: #ff3b30;
@calculator-color-slate-red: #ff1b30;
@calculator-color-black: #000;
@calculator-color-charcoal: #333333;
@calculator-color-green: rgb(52, 199, 89);
@calculator-color-green-slate: #2ecc71;
@calculator-color-slate: #727272;
@calculator-color-white: #fff;
@calculator-animation: ease-in;
@calculator-animation-speed: 0.2s;

.gta-number-button {
  & button {
    outline: none;
    padding: unset;
    border: unset;
    line-height: 30px;
  }

  &__content {
    border-radius: 50%;
    color: inherit;
    line-height: inherit;
    font-size: 1.5em;
    font-weight: inherit;
    transition: background-color @calculator-animation-speed
        @calculator-animation,
      color @calculator-animation-speed @calculator-animation;
    will-change: background-color, color;

    &-green {
      background-color: @calculator-color-green;

      &:active {
        background-color: @calculator-color-green-slate;
      }
    }

    &-gray {
      background-color: @calculator-color-charcoal;

      &:active {
        background-color: @calculator-color-slate;
      }
    }

    &-orange {
      background-color: @calculator-color-apricot;

      &:active {
        background-color: @calculator-color-white;
      }
    }

    &-gray-slate {
      background-color: @calculator-color-slate;
      color: @calculator-color-black;

      &:active {
        background-color: @calculator-color-white;
      }
    }

    &-red {
      background-color: @calculator-color-red;
      color: @calculator-color-white;

      &:active {
        background-color: @calculator-color-slate-red;
      }
    }

    &-text {
      display: block;
      margin-top: -11px;
      font-size: 10px;
    }
  }
}
</style>