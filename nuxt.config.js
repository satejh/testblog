export default {
  loading: {
    height: '3px',
    duration: 3000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blogerpedia',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    '@nuxtjs/auth',
    '@nuxtjs/sitemap',

  ],

  sitemap: {
    hostname: 'https://blogerpedia.com',
    gzip: true,
    exclude: [
      '/error',
      '/register/**',
      '/private/**'
    ],
    routes: [
      '/features/aws-native-security-services',
      '/features/azure-native-cloud-security',
      '/features/microservices',
      '/posts/amazon-detective',
      '/posts/amazon-guard-duty',
      '/posts/amazon-inspector',
      '/posts/amazon-macie',
      '/posts/authelia-create-password',
      '/posts/aws-artifact',
      '/posts/aws-audit-manager',
      '/posts/aws-certificate-manager',
      '/posts/aws-cloud-hsm',
      '/posts/aws-directory-service',
      '/posts/aws-firewall-manager',
      '/posts/aws-identity-and-access-management',
      '/posts/aws-key-management-service',
      '/posts/cia-traids',
      '/posts/docker-installation-debian-11',
      '/posts/docker-installation-ubuntu-18-04-debian',
      '/posts/docker-useful-commands',
      '/posts/getting-started-docker-compose',
      '/posts/routing-eigrp',
      '/posts/set-permanent-dns-nameservers-in-debian',
      '/posts/tcp-3-way-handshake'

    ]
  },

  markdownit: {
    runtime: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://api.blogerpedia.com',
    browserBaseURL: 'https://api.blogerpedia.com',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isDev, isClient }) {

      config.node= {
         fs: 'empty'
       }
   }
  },
  auth: {
    strategies: {
    local: {
    endpoints: {
    login: {
    url: 'auth/local',
    method: 'post',
    propertyName: 'jwt'
    },
    user: {
    url: 'users/me',
    method: 'get',
    propertyName: false
    },
    logout: false
    }
    }
    }
   },
}





