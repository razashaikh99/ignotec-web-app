import Button from "../../Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { featureCard1 } from "../../../assets/images";

const groups = [
    {
        title: "Digital Transformation",
        items: [
            ["Website Design & Development", "website-design-development"],
            ["Applications Design & Development", "applications-design-development"],
            ["WordPress & Shopify Development", "wordpress-shopify-development"],
            ["Marketing & Landing Pages", "marketing-landing-pages"],
            ["E-Commerce Growth & Management", "e-commerce-growth-management"],
            ["Branding & Creative Solutions", "branding-creative-solutions"],
            ["Maintenance Contract", "maintenance-contract"],
        ],
    },
    {
        title: "Digital Marketing & Growth Strategy",
        items: [
            ["Social Media Marketing", "social-media-marketing"],
            ["Search Engine Optimization (SEO)", "seo"],
            ["Search Engine Marketing (SEM)", "sem"],
            ["PPC Marketing Service", "ppc-marketing"],
            ["Ads Campaign Management", "ads-campaign-management"],
            ["Content & Copywriting Solutions", "content-copywriting"],
        ],
    },
    {
        title: "Enterprise IT Solutions",
        items: [
            ["IT Infrastructure Management", "it-infrastructure-management"],
            ["IT Support & Service Management", "it-support-service-management"],
            ["Procurement Management", "procurement-management"],
        ],
    },
    { title: "Online Strategy Consultation", path: "/services/online-strategy-consultation" },
];

const ServiceGroup = ({ group, onNavigate }) => (
    <div>
        <h3 className="text-lg font-medium text-[#182b4e] 2xl:text-2xl">
            {group.path ? <Link to={group.path} onClick={onNavigate} className="hover:underline">{group.title}</Link> : group.title}
        </h3>
        {group.items && (
            <ul className="mt-2 space-y-2 xl:mt-4 xl:space-y-4">
                {group.items.map(([label, slug]) => (
                    <li key={slug}>
                        <Link to={`/services/${slug}`} onClick={onNavigate} className="group/link inline-flex items-center gap-2 text-sm leading-6 text-[#304971] hover:text-purple-700 focus-visible:underline 2xl:text-lg">
                            {label}
                            <ArrowRight aria-hidden="true" className="size-4 shrink-0 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                    </li>
                ))}
            </ul>
        )}
    </div>
);

const ServicesDropdown = ({ mobile = false, onNavigate }) => {
    if (mobile) {
        return (
            <div className="space-y-4 rounded-lg bg-white p-4">
                <Link to="/services" onClick={onNavigate} className="font-semibold text-[#182b4e] hover:underline">All Services →</Link>
                {groups.map((group) => <ServiceGroup key={group.title} group={group} onNavigate={onNavigate} />)}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-[28%_1fr] bg-white text-black shadow-xl">
            <aside className="bg-[#f3f3f3] p-8 2xl:p-14">
                <Link to="/services" onClick={onNavigate} className="text-3xl font-medium hover:underline">Services</Link>
                <img src={featureCard1} alt="" className="mt-8 aspect-3/2 w-full object-cover" />
                <h3 className="mt-7 text-xl font-medium leading-relaxed 2xl:text-2xl">Why data standards matter &amp; why they’re important</h3>
                <Button to="/insights/data-standards" onClick={onNavigate} variant="text" className="mt-7 text-sm hover:underline">LEARN MORE</Button>
            </aside>
            <div className="grid grid-cols-2 gap-12 px-10 py-12 2xl:gap-20 2xl:px-24">
                <div className="space-y-10">{groups.slice(0, 2).map((group) => <ServiceGroup key={group.title} group={group} onNavigate={onNavigate} />)}</div>
                <div className="space-y-10">{groups.slice(2).map((group) => <ServiceGroup key={group.title} group={group} onNavigate={onNavigate} />)}</div>
            </div>
        </div>
    );
};

export default ServicesDropdown;
