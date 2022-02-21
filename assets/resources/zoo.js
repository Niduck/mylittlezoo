(function () {
    let images = '/assets/images/zoo'
    let sounds = '/assets/audio/zoo'
    window.zoo = [
        {
            name: 'Canard',
            path: [images, 'duck.svg'].join('/'),
            title: "Le canard",
            description: `Il <i data-sound="cancane">cancane</i>, caquette, nasille ou nasillonne.`,
            facts: [
                "Le canard femelle adulte est une canne ; le jeune canard, un caneton ; le canard sauvage de l’année, ne maîtrisant pas encore son vol, un halbran."
            ],
            sounds: {
                'cancane': [sounds, 'duck.mp3'].join('/'),
            },
            colors: {
                'background': '#C8E7E0',
                'text': '#387466',
                'accent': '#387466'
            }
        },
        {
            name: 'Cochon',
            path: [images, 'pig.svg'].join('/'),
            title: "Le cochon",
            description: `Il <i data-sound="grouine">grouine</i>, grogne, ou couine.`,
            facts: [
                "Les cochons sont des animaux très sociables qui aiment dormir les uns contre les autres, surtout lorsqu’il fait froid.",
            ],
            sounds: {
                'grouine': [sounds, 'pig.mp3'].join('/'),
            },
            colors: {
                'background': '#FDF0EF',
                'text': '#E88894',
                'accent': '#E88894'
            }
        },
        {
            name: 'Chat',
            path: [images, 'cat.svg'].join('/'),
            title: "Le chat",
            description: `Il <i data-sound="miaule">miaule</i>, feule <small>(l'orsqu'il n'est pas content)</small>, ou ronronne.`,
            facts: [],
            sounds: {
                'miaule': [sounds, 'cat.mp3'].join('/'),
            },
            colors: {
                'background': '#E6D9CA',
                'text': '#8d602b',
                'accent': '#8d602b'
            }
        },
        {
            name: 'Clien',
            path: [images, 'dog.svg'].join('/'),
            title: "Le chien",
            description: `Il <i data-sound="dog">aboie</i> pour avertir du danger. <br/> Il grogne lorsqu'il a peur ou qu'il n'est pas content.`,
            facts: [],
            sounds: {
                'dog': [sounds, 'dog.mp3'].join('/'),
            },
            colors: {
                'background': '#F4F4F7',
                'text': '#3A4BA0',
                'accent': '#3A4BA0'
            }
        },
        {
            name: 'Lion',
            path: [images, 'lion.svg'].join('/'),
            title: "Le lion",
            description: `Il <i data-sound="rugit">rugit</i> ou grogne.`,
            facts: [
                "Les lions aiment se détendre et paresser.",
                "Ils passent entre 16 et 20 heures par jour à se reposer et à dormir."
            ],
            sounds: {
                'rugit': [sounds, 'lion.mp3'].join('/'),
            },
            colors: {
                'background': '#FFF0DF',
                'text': '#DB7943',
                'accent': '#DB7943'
            }
        },

    ]
})()
