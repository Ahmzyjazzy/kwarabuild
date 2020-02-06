
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
	  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
	  { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.6.3/css/ionicons.min.css' },
	  { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/css/all.min.css'}
	],
	script: [
		{ src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
	],
  },
  /*
  ** Customize the progress-bar color
  */
	loading: { color: '#fff' },
	router: {
	linkActiveClass: 'active-page',
	linkExactActiveClass: 'exact-active-page',
	},
  /*
  ** Global CSS
  */
  css: [
	'~/assets/css/pace-theme.css',
	'~/assets/css/styles.css',	
	'~/assets/css/error.css',
	'~/assets/css/responsive.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [ 
   '~/plugins/vee-validate',
   '~/plugins/localforage'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
	'@nuxtjs/dotenv',
	'@nuxtjs/toast',
	'vue-sweetalert2/nuxt'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  toast: {
    position: 'bottom-center',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },
    /**
   * workbpx config for service worker
   */
  pwa: {
	workbox: {
	  /* workbox options */
	//   autoRegister: false,
	}
  },
  srcDir: 'src',
  /*
  ** Build configuration
  */
  build: {
	extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
