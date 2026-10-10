import { careerBg, featureCard1, featureCard2, featureCard3, featureCard4, featureCard5, featureCard6, featureCard7, heroSlide1, heroSlide2, heroSlide3, service_card_1, service_card_2, service_card_3, service_card_4 } from "../assets/images";
import { microsoft, temenos, sap, ibm, salesforce, oracle, redhat, servicenow, aws } from "../assets/images";

export const partnersContent = {
    title: "Built on strong technology alliances",
    description: "We partner with the world’s leading technology providers to deliver high-impact services that help enterprises transform, scale, and create lasting business value.",
    buttonText: "VIEW ALL PARTNERS",
    buttonPath: "/startup-enablement/partners",
    partners: [
        { id: "microsoft", name: "Microsoft", image: microsoft },
        { id: "temenos", name: "Temenos", image: temenos },
        { id: "sap", name: "SAP", image: sap },
        { id: "ibm", name: "IBM", image: ibm },
        { id: "salesforce", name: "Salesforce", image: salesforce },
        { id: "oracle", name: "Oracle", image: oracle },
        { id: "redhat", name: "Red Hat", image: redhat },
        { id: "servicenow", name: "ServiceNow", image: servicenow },
        { id: "aws", name: "AWS", image: aws },
    ],
};

export const careersContent = {
    title: "Where careers take shape",
    description: "Build meaningful work with a team that values growth, collaboration, and real impact.",
    buttonText: "EXPLORE CAREERS",
    buttonPath: "/careers",
    image: careerBg,
};

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
    {
        id: 5,
        type: "INSIGHTS",
        title: "Building scalable cloud platforms for growing businesses",
        description:
            "Explore how flexible cloud architecture helps teams launch faster, manage costs, and adapt to changing business needs.",
        image: featureCard5,
        path: "/insights/scalable-cloud-platforms",
    },
    {
        id: 6,
        type: "NEWSROOM",
        title: "Connecting strategy and design to create better digital products",
        description:
            "Discover how collaboration between designers and developers brings useful, intuitive digital experiences to life.",
        image: featureCard6,
        path: "/insights/digital-product-design",
    },
    {
        id: 7,
        type: "CASE STUDY",
        title: "Modernizing an online store for a seamless customer journey",
        description:
            "Follow a sample retail transformation that connects product discovery, checkout, and order management in one experience.",
        image: featureCard7,
        path: "/case-study/e-commerce-modernization",
    },
    {
        id: 8,
        type: "INSIGHTS",
        title: "Turning business data into actionable insights with analytics",
        description:
            "Learn how clear dashboards and connected data can help teams track performance and make informed decisions.",
        image: featureCard3,
        path: "/insights/business-data-analytics",
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
