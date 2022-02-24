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
            name: 'Vache',
            path: [images, 'cow.svg'].join('/'),
            title: "La vache",
            description: `Elle <i data-sound="meugle">meugle</i>, beugle, ou migit.`,
            facts: [],
            sounds: {
                'meugle': [sounds, 'cow.mp3'].join('/'),
            },
            colors: {
                'background': '#FDF0EF',
                'text': '#E88894',
                'accent': '#E88894'
            }
        },
        {
            name: 'Mouton',
            path: [images, 'sheep.svg'].join('/'),
            title: "Le mouton",
            description: `Il <i data-sound="bele">bêle</i>.`,
            facts: [
                "Les moutons sont reconnus pour pratiquer l'automédication lorsqu’ils sont malades. Ils mangent des plantes en fonction de leurs maux."
            ],
            sounds: {
                'bele': [sounds, 'sheep.mp3'].join('/'),
            },
            colors: {
                'background': '#FEF4EF',
                'text': '#df5f6f',
                'accent': '#df5f6f'
            }
        },
        {
            name: 'Poule',
            path: [images, 'chicken.svg'].join('/'),
            title: "La poule",
            description: `Elle <i data-sound="caquette">caquette</i> <small>(quand elle pond)</small>, crételle <small>(après la ponte)</small> ou glousse lorsqu'elle veut couver ou appelle ses poussins.`,
            facts: [],
            sounds: {
                'caquette': [sounds, 'chicken.mp3'].join('/'),
            },
            colors: {
                'background': '#F7EBE8',
                'text': '#DA6666',
                'accent': '#DA6666'
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
            name: 'Chien',
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
        {
            name: 'Gorille',
            path: [images, 'gorilla.svg'].join('/'),
            title: "Le gorille",
            description: `Il <i data-sound="cri">cri</i> ou <i data-sound="hurle">hurle</i>.`,
            facts: [
                "Chaque soir, les gorilles se construisent un nid pour y dormir, en utilisant la végétation",
                "Ils utilisent des branches pour le bord du nid et mettent des feuilles au centre pour dormir confortablement.",
            ],
            sounds: {
                'cri': [sounds, 'gorilla.mp3'].join('/'),
                'hurle': [sounds, 'gorilla-2.mp3'].join('/'),
            },
            colors: {
                'background': '#FAFAFA',
                'text': '#474747',
                'accent': '#474747'
            }
        },
        {
            name: 'Elephant',
            path: [images, 'elephant.svg'].join('/'),
            title: "L'éléphant",
            description: `Il <i data-sound="barrit">barrit</i>, barète <small>(lorsqu'il est contrarié)</small> ou barronne.`,
            facts: [
                "Le lobe temporal de l'éléphant est plus grand et plus dense que celui des humains - d'où le dicton <q> <i>les éléphants n'oublient jamais</i> </q>.",
            ],
            sounds: {
                'barrit': [sounds, 'elephant.mp3'].join('/'),
            },
            colors: {
                'background': '#F6FDFF',
                'text': '#5CB4C8',
                'accent': '#5CB4C8'
            }
        },
        {
            name: 'Tortue',
            path: [images, 'turtle.svg'].join('/'),
            title: "La tortue",
            description: "Il n'existe pas de nom spécifique pour le \"cri\" de la tortue, car il ne s'agit pas d'un cri mais plutôt d'un sifflement ou d'une stridulation (comme les insectes de type criquet).",
            facts: [],
            sounds: {},
            colors: {
                'background': '#F3F8EE',
                'text': '#4B672E',
                'accent': '#4B672E'
            }
        },
        {
            name: 'Escargot',
            path: [images, 'snail.svg'].join('/'),
            title: "L'escargot",

            description: "Certaines espèces produisent des cris plaintifs lorsqu'ils sont attrapés.",
            facts: [
                "En captivité, des Planorbis corneus, émettent une note aiguë, analogue au son produit par une flûte, à chaque nourrissement quotidien."
            ],
            sounds: {},
            colors: {
                'background': '#F8F1EE',
                'text': '#A1726E',
                'accent': '#A1726E'
            }
        },

    ]
})()
