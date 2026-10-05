import { featureCard1, featureCard2, featureCard3, featureCard4, heroSlide1, heroSlide2, heroSlide3 } from "../assets/images";

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