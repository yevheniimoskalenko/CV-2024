// https://nuxt.com/docs/api/configuration/nuxt-config
import {compression} from 'vite-plugin-compression2'
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    // ['@nuxtjs/google-fonts', {
    //   families: {
        
    //   }
    // }]
  ],

  vite: {
    plugins: [																		
        compression({
        include: /\.(html|xml|css|json|js|mjs|svg|yaml|yml|vue|toml)$/,
        algorithm: 'gzip',
        deleteOriginalAssets: false,
    })
    ],
    build: {
      rollupOptions: {
        treeshake: true,
      },
  },
  }
})