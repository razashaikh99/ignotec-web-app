import { heroSlide1, heroSlide2, heroSlide3 } from "../assets/images";

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