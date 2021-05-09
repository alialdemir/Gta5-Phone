<template>
  <div class="gta-mobile-phone">
    <div id="sensor"></div>
    <div id="selfieCam"></div>
    <div id="speaker"></div>
    <div class="gta-mobile-phone__content">
      <div class="gta-mobile-phone__content-top-bar fixed z-10">
        <span class="signal">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
        <span class="wifi"><hr /></span>
        <span class="time">2:30 PM</span>
        <span class="battery">100%</span>
      </div>

      <slot></slot>
    </div>
    <div class="flex justify-center ml-5 mt-4">
      <f7-link href="/" class="flex">
        <button id="home"></button>
      </f7-link>
    </div>
  </div>
</template>

<script lang="ts">
import { f7Link, f7Page } from 'framework7-vue';
export default {
  components: {
    f7Link,
    f7Page,
  },
};
</script>

<style lang="less">
.page {
  background: #000;
}
.gta-mobile-phone {
  margin: 8px;
  height: 98%;
  background: white;
  padding-top: 10px;
  padding-bottom: 2px;
  border-radius: 30px;
  box-shadow: 4px 2px 0 #c5ae87, 5px 5px 3px #c5ae87, -4px 5px 3px #c5ae87,
    -4px -2px 3px #c5ae87, 4px -2px 3px #c5ae87;
  color: #fff;
  max-width: 375px;
  max-height: 812px;

  &__content {
    width: 98%;
    height: 84%;
    overflow: hidden;
    position: relative;
    background: #000;
    margin: 1% auto 1% auto;
    border: 1px solid black;

    &-top-bar {
      position: relative;
      text-align: center;
      font-size: 10px;
      padding: 1px 3px 2px;
    }

    & .signal,
    & .wifi {
      float: left;
    }

    & .wifi {
      height: 10px;
      width: 10px;
      position: relative;
      left: 5px;
      top: -1px;
      overflow: hidden;

      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
    }

    & .wifi hr {
      border: none;
      padding: 0px;
      margin: 0px;
      position: relative;
      top: 7px;
      left: 7px;
      height: 6px;
      width: 6px;
      background: #fff;

      -moz-border-radius: 10px;
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }

    & .wifi hr:before {
      content: '';
      display: block;
      height: 8px;
      width: 8px;
      position: absolute;
      left: -3px;
      top: -3px;
      border: 2px solid #fff;
      -moz-border-radius: 10px;
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }

    & .wifi hr:after {
      content: '';
      display: block;
      height: 14px;
      width: 14px;
      position: absolute;
      left: -6px;
      top: -6px;
      border: 2px solid #fff;
      -moz-border-radius: 10px;
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }

    & .time {
      position: relative;
      left: 6px;
      font-weight: bold;
      font-size: 9px;
    }

    & .battery {
      float: right;
      font-size: 9px;
      position: relative;
      top: 2px;
    }

    & .battery:after {
      content: '';
      display: block;
      height: 6px;
      width: 17px;
      background: #fff;
      float: right;
      margin: 2px 3px 0px 6px;

      box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.7);
    }

    & .battery:before {
      content: '';
      display: block;
      height: 2px;
      width: 1px;
      background: rgba(255, 255, 255, 0.9);
      float: right;
      position: relative;
      top: 4px;
      right: 2px;

      box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.3);
    }
  }
}

#sensor {
  width: 8px;
  height: 8px;
  border-radius: 35px;
  background: black;
  margin: 0 auto 10px auto;
}

#selfieCam {
  width: 12px;
  height: 12px;
  background: black;
  border-radius: 6px;
  float: left;
  position: relative;
  right: -30%;
  top: -4px;
}

#speaker {
  width: 50px;
  height: 6px;
  background: black;
  border-radius: 4px;
  margin: 10px auto 30px auto;
}

#home {
  background-color: rgba(250, 250, 250, 0.8);
  width: 45px;
  height: 45px;
  border-width: 3px;
  border-style: solid;
  border-color: #c5ae87;
  border-radius: 35px;
  margin: 0px auto 5px auto;
  display: block;
  outline: none;
}
</style>