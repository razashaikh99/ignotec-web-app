import Button from "../../Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { featureCard3 } from "../../../assets/images";

const groups = [
    { title: "Company Overview", items: [
        ["Who We Are", "/about"],
        ["Digital Showcase", "/about/digital-showcase"],
        ["Trusted Collaborations", "/about/trusted-collaborations"],
        ["Partner Experiences", "/about/partner-experiences"],
        ["Manifesto", "/about/manifesto"],
    ] },
    { title: "Corporate Resources & Responsibility", items: [
        ["Blogs", "/insights/blogs"],
        ["News & Updated", "/insights/news"],
        ["Sustainability & ESG", "/about/sustainability-esg"],
        ["Community Engagement", "/about/community-engagement"],
    ] },
    { title: "Connect With Us", items: [
        ["Facebook", "/about/connect/facebook"],
        ["Instagram", "/about/connect/instagram"],
        ["LinkedIn", "/about/connect/linkedin"],
        ["WhatsApp", "/about/connect/whatsapp"],
        ["Support Center", "/support"],
    ] },
];

const AboutGroup = ({ group, onNavigate }) => (
    <div>
        <h3 className="text-lg font-medium text-[#182b4e] 2xl:text-2xl">{group.title}</h3>
        <ul className="mt-2 space-y-2 xl:mt-4 xl:space-y-4">
            {group.items.map(([label, path]) => (
                <li key={path}>
                    <Link to={path} onClick={onNavigate} className="group/link inline-flex items-center gap-2 text-sm leading-6 text-[#304971] hover:text-purple-700 focus-visible:underline 2xl:text-lg">
                        {label}<ArrowRight aria-hidden="true" className="size-4 shrink-0 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const AboutDropdown = ({ mobile = false, onNavigate }) => (
    <div className={mobile ? "space-y-4 rounded-lg bg-white p-4" : "grid min-h-130 grid-cols-[28%_1fr] bg-white text-black shadow-xl 2xl:min-h-170"}>
        {mobile ? (
            <>
                <Link to="/about" onClick={onNavigate} className="font-semibold text-[#182b4e] hover:underline">About Us →</Link>
                {groups.map((group) => <AboutGroup key={group.title} group={group} onNavigate={onNavigate} />)}
            </>
        ) : (
            <>
                <aside className="bg-[#f3f3f3] p-8 2xl:p-14">
                    <Link to="/about" onClick={onNavigate} className="text-3xl font-medium hover:underline">About Us</Link>
                    <img src={featureCard3} alt="" className="mt-8 aspect-3/2 w-full object-cover" />
                    <h3 className="mt-7 text-xl font-medium leading-relaxed 2xl:text-2xl">Financial performance and shareholder information</h3>
                    <Button to="/about/financial-performance" onClick={onNavigate} variant="text" className="mt-7 text-sm hover:underline">LEARN MORE</Button>
                </aside>
                <div className="grid grid-cols-2 content-start gap-12 px-10 py-12 2xl:gap-20 2xl:px-24">
                    <div className="space-y-10">{groups.slice(0, 2).map((group) => <AboutGroup key={group.title} group={group} onNavigate={onNavigate} />)}</div>
                    <AboutGroup group={groups[2]} onNavigate={onNavigate} />
                </div>
            </>
        )}
    </div>
);

export default AboutDropdown;
