// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/seo', '@nuxtjs/tailwindcss'],
  site: {
    url: 'https://eesti-hambaravi.ee',
    name: 'Hambaravi Sinu lähedal!',
    description: 'Parim viis hambaarstide leidmiseks!',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  }
})