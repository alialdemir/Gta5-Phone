module.exports = {
  // Nuxt modules
  modules: [
    'nuxt7',
    '@nuxtjs/pwa',
  ],

  // PWA manifest
  // https://github.com/nuxt-community/pwa-module
  manifest: {
    name: 'Gta5-Phone',
    description: ''
  },

  target: 'static',

  // Framework7 Config
  framework7: {},

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/', prefix: 'gta-' },
    { path: '~/components/app-icon/', prefix: 'gta-' },
    { path: '~/components/apps/calculator/', prefix: 'gta-' },
    { path: '~/components/apps/phone/', prefix: 'gta-' },
    { path: '~/components/apps/phone/contact/', prefix: 'gta-' },
    { path: '~/components/apps/photos/', prefix: 'gta-' },
    { path: '~/components/list/', prefix: 'gta-' },
  ],

  axios: {
    baseURL: '/',
  },

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
    },

    postcss: {
      preset: {
        features: {
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          "focus-within-pseudo-class": false
        }
      }
    }
  },

  // Additional CSS configuration
  css: [
    '@/assets/css/tailwind.min.css'
    // './assets/tailwind.min.css'
  ],

  server: {
    host: '0' // default: localhost
  }

}
