import { featureCard1, featureCard2, featureCard3, featureCard4, heroSlide1, heroSlide2, heroSlide3, service_card_1, service_card_2, service_card_3, service_card_4 } from "../assets/images";

export const navItems = [
    {
        id: 1,
        label: "Services",
        path: "/services",
        hasDropdown: true,
    },
    {
        id: 2,
        label: "Solutions",
        path: "/solutions",
        hasDropdown: true,
    },
    {
        id: 3,
        label: "Digital Assets",
        path: "/digital-assets",
        hasDropdown: true,
    },
    {
        id: 4,
        label: "Startup Enablement",
        path: "/startup-enablement",
        hasDropdown: true,
    },
];

export const heroSlides = [
    {
        id: 1,
        title: "Empowering Businesses with Nextgen Solutions",
        description:
            "Architecting high-performance digital solutions tailored to bridge the gap between where your business is today and where technology can take it tomorrow.",
        buttonText: "Our Solutions",
        buttonPath: "/solutions",
        image: heroSlide1,
    },
    {
        id: 2,
        title: "Personalized Software Development for Your Business",
        description:
            "We build scalable digital products designed around your unique business requirements and growth objectives.",
        buttonText: "Our Services",
        buttonPath: "/services",
        image: heroSlide2,
    },
    {
        id: 3,
        title: "Transforming Ideas into Digital Experiences",
        description:
            "Combining strategy, technology, and innovation to create digital experiences that move businesses forward.",
        buttonText: "Explore More",
        buttonPath: "/about",
        image: heroSlide3,
    },
];

export const featuredInsights = [
    {
        id: 1,
        type: "NEWSROOM",
        title: "Transforming businesses through next-generation digital solutions",
        description:
            "Discover how our technology solutions help organizations accelerate transformation, improve performance, and create meaningful digital experiences.",
        image: featureCard1,
        path: "/insights/digital-transformation",
    },
    {
        id: 2,
        type: "NEWSROOM",
        title: "Building intelligent solutions for modern enterprises",
        description:
            "Empowering organizations with scalable technology and intelligent platforms designed to solve complex business challenges.",
        image: featureCard2,
        path: "/insights/intelligent-solutions",
    },
    {
        id: 3,
        type: "INSIGHTS",
        title: "Leveraging generative AI and data analytics for sustainable growth",
        description:
            "Explore how artificial intelligence and advanced analytics can unlock new opportunities and drive smarter business decisions.",
        image: featureCard3,
        path: "/insights/generative-ai",
    },
    {
        id: 4,
        type: "CASE STUDY",
        title: "Transforming IT service management for a global enterprise",
        description:
            "See how modern digital platforms can streamline operations, improve efficiency, and deliver better customer experiences.",
        image: featureCard4,
        path: "/case-study/it-transformation",
    },
];

export const statisticsContent = {
    title: "From digital change to AI-powered advantage",
    description:
        "We help enterprises reimagine how they work, serve, and grow with AI-led transformation that turns complexity into clarity and ambition into measurable progress.",

    stats: [
        {
            id: 1,
            value: "8500+",
            label: "Changemakers driving revolution",
        },
        {
            id: 2,
            value: "16+",
            label: "Countries with our presence and clientele",
        },
        {
            id: 3,
            value: "300+",
            label: "Active clients across the globe",
        },
        {
            id: 4,
            value: "25+",
            label: "Years of industry experience",
        },
        {
            id: 5,
            value: "1000+",
            label: "Successful projects delivered worldwide",
        },
    ],
};

export const servicesContent = {
    title: "Our services",
    buttonText: "DISCOVER OUR FULL CAPABILITIES",
    buttonPath: "/services",

    cards: [
        {
            id: 1,
            title: "AI Transformation",
            description:
                "Drive measurable business value with scalable AI capabilities across GenAI, Predictive AI, ML, and automation.",
            image: service_card_1,
            path: "/services/ai-transformation",
        },
        {
            id: 2,
            title: "Cloud Solutions",
            description:
                "From cloud migration to optimisation, we create secure, scalable environments that improve agility and reduce complexity.",
            image: service_card_2,
            path: "/services/cloud-solutions",
        },
        {
            id: 3,
            title: "Digital Strategy",
            description:
                "We bring strategy, design, and technology into one connected approach to modernise systems and customer journeys.",
            image: service_card_3,
            path: "/services/digital-strategy",
        },
        {
            id: 4,
            title: "Data & Analytics",
            description:
                "Organise, analyse, and activate your data to uncover insights faster and make better business decisions.",
            image: service_card_4,
            path: "/services/data-analytics",
        },
        {
            id: 5,
            title: "Cyber Security",
            description:
                "Protect your enterprise infrastructure with advanced threat monitoring and multi-layer security protocols.",
            image: service_card_2,
            path: "/services/cyber-security",
        },
    ],
};