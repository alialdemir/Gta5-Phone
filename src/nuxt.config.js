//import Calculator from './components/apps/calculator/Calculator.vue';

module.exports = {
  // Nuxt modules
  modules: [
    'nuxt7',
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],

  // PWA manifest
  // https://github.com/nuxt-community/pwa-module
  manifest: {
    name: 'Gta5-Phone',
    description: ''
  },

  // Framework7 Config
  framework7: {
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/', prefix: 'gta-' },
    { path: '~/components/app-icon/', prefix: 'gta-' },
    { path: '~/components/apps/calculator/', prefix: 'gta-' },
    { path: '~/components/apps/phone/', prefix: 'gta-' },
    { path: '~/components/apps/phone/contatc/', prefix: 'gta-' },
    { path: '~/components/apps/photos/', prefix: 'gta-' },
  ],

  // Build configuration
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    },

    // Extract CSS in a separated file
    extractCSS: true,

    // You can extend webpack config here
    extend(config) {
      // ...
    }
  },

  // Additional CSS configuration
  css: [
    './assets/app.css'
  ]
}
