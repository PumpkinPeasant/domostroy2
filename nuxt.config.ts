export default defineNuxtConfig({
    // @ts-ignore
    css: ['~/assets/scss/index.scss', '~/assets/scss/_colors.scss', '~/assets/scss/_variables.scss'],
    dev: true,
    target: 'static',
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
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico'},
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
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap'
                },
            ]
        },
    },
    build: {
        // @ts-ignore
        postcss: {
            plugins: {
                'postcss-preset-env': {
                    autoprefixer: { grid: true },
                    stage: 3,
                    features: {
                        'nesting-rules': true
                    }
                }
            }
        }
    },
})
