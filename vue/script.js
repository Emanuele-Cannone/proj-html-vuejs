var app = new Vue({
    el: "#app",
    data:{ 

    menu: ['home', 'about', 'projects', 'process', 'testimonials'],

    projects:['all', 'institutional', 'social', 'events', 'innovation', 'enviroment', 'technology'],

    human: 
        [
            {
                icon: 'far fa-user',
                title: 'human capital',
                description: 'Humanizing business: Harness the power of technology to improve the way people work.'
            },
            {
                icon: 'fas fa-chart-pie',
                title: 'core business',
                description: 'It takes innovative approaches to transform, modernize, and run existing platforms.'
            },
            {
                icon: 'fas fa-plus',
                title: 'performance',
                description: 'Archieving maximum impact and value from investments in finance and supply chain.'
            }
        ],

    dates: 
        [
            {
                number: 0,
                type: 'employees',
                specific: 'lorem ipsum dolor sit amet.'
            },
            {
                number: 0,
                type: 'partners',
                specific: 'lorem ipsum dolor sit amet.'
            },
            {
                number: 0,
                type: 'costumers',
                specific: 'lorem ipsum dolor sit amet.'
            },
        ],

    process:
        [
            {
                title: 'Collection of information',
                description: 'Lorem ipsum dolor sit amet consectetur'
            },
            {
                title: 'Strategic planning',
                description: 'Lorem ipsum dolor sit amet consectetur'
            },
            {
                title: 'Assignment of responsibilities',
                description: 'Lorem ipsum dolor sit amet consectetur'
            },
            {
                title: 'Formatting process',
                description: 'Lorem ipsum dolor sit amet consectetur'
            },
            {
                title: 'Continuity formalization',
                description: 'Lorem ipsum dolor sit amet consectetur'
            },
        ],

    articles:
        [
            {
                img: 'logo-1.png',
                alt: 'logo-1',
                descriptionUp: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore nobis ipsum ut aliquam, eaque eius suscipit fugiat a corporis dolores saepe minima quibusdam',
                descriptionDown: 'alias adipisci praesentium minus natus distinctio itaque?'
            },
            {
                img: 'logo-2.png',
                alt: 'logo-2',
                descriptionUp: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore nobis ipsum ut aliquam, eaque eius suscipit fugiat a corporis dolores saepe minima quibusdam',
                descriptionDown: 'alias adipisci praesentium minus natus distinctio itaque?'
            },
            {
                img: 'logo-3.png',
                alt: 'logo-3',
                descriptionUp: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore nobis ipsum ut aliquam, eaque eius suscipit fugiat a corporis dolores saepe minima quibusdam',
                descriptionDown: 'alias adipisci praesentium minus natus distinctio itaque?'
            },
        ],

    contacts:
    [
        {
            icon: 'fas fa-phone-alt',
            details: '+1(305) 1234-5678'
        },
        {
            icon: 'fas fa-envelope',
            details: 'hello@example.com'
        },
        {
            icon: 'fas fa-map-marker-alt',
            details: 'Main Avenue, 987'
        },
    ]

    }

});