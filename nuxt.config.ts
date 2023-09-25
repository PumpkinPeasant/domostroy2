// import vuetifyConfig from './vuetify.config';
// import viteConfig from './vite.config';

export default defineNuxtConfig({
    modules: ['@invictus.codes/nuxt-vuetify'],
    // @ts-ignore
    plugins: [],
    watch: ['~/vuetify.config.ts'],
    dev: true,
    // vuetify: vuetifyConfig,
    // vite: viteConfig,
    app: {
        head: {
            title: 'Домострой 29 | Каркасное строительство',
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
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
                },
            ]
        },
    }
})
