// import vuetifyConfig from './vuetify.config';
// import viteConfig from './vite.config';

export default defineNuxtConfig({
    // modules: ['@invictus.codes/nuxt-vuetify'],
    // @ts-ignore
    plugins: [],
    css: ['~/assets/scss/index.scss', '~/assets/scss/_colors.scss', '~/assets/scss/_variables.scss'],
    // watch: ['~/vuetify.config.ts'],
    dev: true,
    // vuetify: vuetifyConfig,
    // vite: viteConfig,
    app: {
        head: {
            title: 'Домострой | Каркасное строительство',
            meta: [
                {
                    name: 'description',
                    content: 'Каркасное строительство домов в Северодвинске.'
                }
            ],
            link: [
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
                }, {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap'
                },
            ]
        },
    }
})
