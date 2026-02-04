export default defineNuxtConfig({
    css: ['~/assets/css/index.css', '~/assets/css/_colors.css', '~/assets/css/_variables.css'],
    dev: true,
    target: 'static',
    modules: [
        [
            "@nuxt/image",
            'yandex-metrika-module-nuxt3',
            {
                id: process.env.YANDEX_METRICA,
                webvisor: true,
                consoleLog: true,
                clickmap: true,
                useCDN: false,
                trackLinks: true,
                accurateTrackBounce: true,
            }
        ]
    ],
    app: {
        head: {
            title: 'Строительство домов под ключ в Северодвинске и Архангельской области | «Домострой»',
            meta: [
                {
                    name: 'description',
                    content: 'Строительство загородных домов в Северодвинске и Архангельской области под ключ. Компания «Домострой» специализируется на на проектировании и строительстве частных домов и коттеджей.'
                },
                {
                    name: 'og:description',
                    content: 'Строительство загородных домов в Северодвинске и Архангельской области под ключ. Компания «Домострой» специализируется на на проектировании и строительстве частных домов и коттеджей.'
                },
                {
                    name: 'yandex-verification',
                    content: 'ee04c6b02a168aa5'
                },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico'
                },
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
                    href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap'
                },
            ],
            htmlAttrs: {
                lang: 'ru'
            }
        },
    },
    build: {
        // @ts-ignore
        postcss: {
            plugins: {
                'postcss-preset-env': {
                    autoprefixer: {grid: true},
                    stage: 3,
                    features: {
                        'nesting-rules': true
                    }
                }
            }
        }
    },
})
