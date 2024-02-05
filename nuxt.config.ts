// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  devServer: {
    port: 4000
  },
  ssr: false,
  devtools: { enabled: true }
})
