<template>
  <f7-page>
    <div class="gta-calculator">
      <div class="gta-calculator__header">
        <div class="gta-calculator__value">
          <h1 class="m-0">
            {{ current }}
          </h1>
          <h2 class="m-0">
            {{ total }}<span v-if="selected"> {{ selected }}</span>
          </h2>
        </div>
      </div>

      <div class="gta-calculator__body">
        <gta-number-button
          color="gray-slate"
          v-show="current === 0"
          @click="(current = 0), (total = 0), (selected = null)"
        >
          <abbr title="All Clear"> AC </abbr>
        </gta-number-button>

        <gta-number-button
          color="gray-slate"
          v-show="current !== 0"
          @click="(current = 0), (total = 0), (selected = null)"
        >
          <abbr title="Clear"> C </abbr>
        </gta-number-button>

        <gta-number-button color="gray-slate" click="current = -current">
          &plusmn;
        </gta-number-button>

        <gta-number-button
          color="gray-slate"
          @click="current = Number(current) * 0.01"
        >
          %
        </gta-number-button>

        <gta-number-button color="orange" @click="calculate('/')">
          &divide;
        </gta-number-button>

        <gta-number-button @click="numberTotal(7)"> 7 </gta-number-button>

        <gta-number-button @click="numberTotal(8)"> 8 </gta-number-button>

        <gta-number-button @click="numberTotal(9)"> 9 </gta-number-button>

        <gta-number-button color="orange" @click="calculate('*')">
          &times;
        </gta-number-button>

        <gta-number-button @click="numberTotal(4)"> 4 </gta-number-button>

        <gta-number-button @click="numberTotal(5)"> 5 </gta-number-button>

        <gta-number-button @click="numberTotal(6)"> 6 </gta-number-button>

        <gta-number-button color="orange" @click="calculate('-')">
          &minus;
        </gta-number-button>

        <gta-number-button @click="numberTotal(1)"> 1 </gta-number-button>

        <gta-number-button @click="numberTotal(2)"> 2 </gta-number-button>

        <gta-number-button @click="numberTotal(3)"> 3 </gta-number-button>

        <gta-number-button color="orange" @click="calculate('+')">
          &plus;
        </gta-number-button>

        <gta-number-button
          class="gta-calculator__buton gta-calculator__button--double"
          @click="numberTotal(0)"
        >
          0
        </gta-number-button>

        <gta-number-button
          @click="
            current.toString().indexOf('.') == -1 ? (current += '.') : null
          "
        >
          .
        </gta-number-button>

        <gta-number-button color="orange" @click="calculate()">
          &equals;
        </gta-number-button>
      </div>
    </div>
  </f7-page>
</template>

<script>
export default {
  data: () => ({
    current: 0,
    total: 0,
    operators: ['+', '-', '*', '/'],
    selected: null,
  }),

  computed: {
    answer: function () {
      return eval(this.total + this.selected + Number(this.current));
    },
  },

  methods: {
    updateTotal: function () {
      this.total = this.answer;
    },

    calculate: function (symbol = null) {
      this.updateTotal();
      this.selected = symbol;
      this.current = 0;
    },

    numberTotal(number) {
      this.current === 0
        ? (this.current = String(number))
        : (this.current += number);
    },
  },
};
</script>

<style lang="less">
@calculator-spacing: 0.5em;
@calculator-color-white: #fff;

.gta-calculator {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: @calculator-spacing;
  padding: (@calculator-spacing * 2);
  background-color: #000;
  color: @calculator-color-white;
  line-height: 1;
  font-weight: 200;
}

.gta-calculator__header,
.gta-calculator__body {
  grid-column: span 4;
}

.gta-calculator__header {
  grid-row: span 1;
  overflow: hidden;
  display: grid;
  justify-content: end;
  align-items: end;
}

.gta-calculator__body {
  grid-row: span 55;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1.2em;
}

.gta-calculator__value {
  font-size: 2.4em;
  text-align: right;
}

.gta-calculator__button--double {
  grid-column: span 2;
  .gta-number-button__content {
    border-radius: 2.5em;
  }
}
</style>