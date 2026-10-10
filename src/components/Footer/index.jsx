import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import Button from "../Button";

const services = [
    [
        ["Digital Transformation", "/services"],
        ["Website Design & Development", "/services/website-design-development"],
        ["Applications Design & Development", "/services/applications-design-development"],
        ["WordPress & Shopify Development", "/services/wordpress-shopify-development"],
        ["Marketing & Landing Pages", "/services/marketing-landing-pages"],
        ["E-Commerce Growth & Management", "/services/e-commerce-growth-management"],
        ["Branding & Creative Solutions", "/services/branding-creative-solutions"],
        ["Maintenance Contract", "/services/maintenance-contract"],
        ["Online Strategy Consultation", "/services/online-strategy-consultation"],
    ],
    [
        ["Digital Marketing & Growth Strategy", "/services"],
        ["Social Media Marketing", "/services/social-media-marketing"],
        ["Search Engine Optimization (SEO)", "/services/seo"],
        ["Search Engine Marketing (SEM)", "/services/sem"],
        ["PPC Marketing Service", "/services/ppc-marketing"],
        ["Ads Campaign Management", "/services/ads-campaign-management"],
        ["Content & Copywriting Solutions", "/services/content-copywriting"],
        ["Enterprise IT Solutions", "/services/it-infrastructure-management"],
    ],
];
const columns = [
    { title: "Industries", links: [["Communications", "/solutions/telecom-media"], ["Banking & Financial Services", "/solutions/banking-financial-services"], ["Public Sector", "/solutions/public-sector"], ["Health", "/solutions/healthcare-life-sciences"], ["Retail", "/solutions/retail-e-commerce"]] },
    { title: "Insights", links: [["Case Studies", "/case-studies"], ["Newsroom", "/insights/news"], ["Whitepapers / EBooks", "/insights/whitepapers"], ["Blogs", "/insights/blogs"]] },
    { title: "Quick Links", links: [["Start Here", "/"], ["Who we are", "/about"], ["Career", "/careers"], ["Blogs", "/insights/blogs"], ["Connect With Us", "/contact"]] },
];
const legal = [["Privacy Policy", "/privacy-policy"], ["Terms & Conditions", "/terms"], ["Sitemap", "/sitemap"], ["Cookie Policy", "/cookie-policy"]];
// Preview routes until company social URLs are supplied.
const socials = [{ name: "LinkedIn", slug: "linkedin" }, { name: "Facebook", slug: "facebook" }, { name: "Instagram", slug: "instagram" }, { name: "YouTube", slug: "youtube" }, { name: "X", slug: "x" }];

const SocialIcon = ({ name }) => {
    const icons = { LinkedIn: FaLinkedinIn, Facebook: FaFacebookF, Instagram: FaInstagram, YouTube: FaYoutube, X: FaXTwitter };
    const Icon = icons[name];
    return <Icon aria-hidden="true" size={20} className="shrink-0" />;
};

const FooterLinks = ({ links, service = false }) => (
    <ul className="space-y-4 text-sm leading-6">
        {links.map(([label, path], index) => <li key={label} className={service && index === links.length - 1 ? "pt-3" : ""}><Link to={path} className={`transition-colors hover:text-purple-700 focus-visible:underline ${service && index === 0 ? "font-medium" : ""}`}>{label}</Link></li>)}
    </ul>
);

const Footer = () => {
    const id = useId();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [status, setStatus] = useState("");
    const subscribe = (event) => {
        event.preventDefault();
        const value = email.trim();
        if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || value.length > 254) {
            setError("Please enter a valid email address.");
            setStatus("");
            event.currentTarget.elements.namedItem("email").focus();
            return;
        }
        console.log("Newsletter subscription payload:", { email: value });
        setError("");
        setStatus("Email validated and logged for preview.");
    };

    return (
        <footer className="bg-[#ededed] text-black">
            <div className="mx-auto max-w-480 px-6 pt-14 pb-10 lg:px-11 lg:pt-16">
                <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 xl:grid-cols-5">
                    <div className="sm:col-span-2">
                        <h2 className="mb-6 text-xl font-normal">Services</h2>
                        <div className="grid gap-8 sm:grid-cols-2 xl:gap-10">{services.map((links, index) => <FooterLinks key={index} links={links} service />)}</div>
                    </div>
                    {columns.map(({ title, links }) => <div key={title}><h2 className="mb-6 text-xl font-normal">{title}</h2><FooterLinks links={links} /></div>)}
                </div>
                <div className="mt-14 flex flex-col justify-between gap-8 lg:mt-20 lg:flex-row lg:items-end">
                    <div className="w-full max-w-120">
                        <h2 className="text-xl font-normal">Subscribe</h2>
                        <p className="mt-1 text-sm leading-6">Stay updated on how future of technology is shaping.</p>
                        <form onSubmit={subscribe} noValidate className="mt-5">
                            <label htmlFor={`${id}-email`} className="sr-only">Email address for newsletter</label>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <input id={`${id}-email`} name="email" type="email" autoComplete="email" value={email} onChange={(event) => { setEmail(event.target.value); setError(""); setStatus(""); }} placeholder="Enter your email here"
                                    aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} className={`min-w-0 flex-1 rounded-full border bg-[#e3e3e3] px-4 py-3 text-sm outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 ${error ? "border-red-500" : "border-gray-500"}`} />
                                <Button type="submit" variant="subtle" showArrow={false}>Submit</Button>
                            </div>
                            {error && <p id={`${id}-error`} role="alert" className="mt-2 text-xs text-red-600">{error}</p>}
                            {status && <p role="status" className="mt-2 text-xs text-green-700">{status}</p>}
                        </form>
                    </div>
                    <div className="flex items-center gap-3" aria-label="Social links">
                        {socials.map(({ name, slug }) => <Link key={name} to={`/about/connect/${slug}`} aria-label={name} className="flex size-11 items-center justify-center rounded-full bg-[#d9d9d9] text-[#383838] transition-colors hover:bg-purple-700 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4">
                            <SocialIcon name={name} />
                        </Link>)}
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 bg-[#eef0f2]">
                <div className="mx-auto flex max-w-360 flex-col items-start justify-between gap-5 px-6 py-7 text-sm tracking-wide text-[#626873] lg:flex-row lg:items-center lg:px-14">
                    <div className="flex flex-wrap gap-x-8 gap-y-3">{legal.map(([label, path]) => <Link key={path} to={path} className="transition-colors hover:text-purple-700">{label}</Link>)}</div>
                    <p>© {new Date().getFullYear()} Ignotec. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
