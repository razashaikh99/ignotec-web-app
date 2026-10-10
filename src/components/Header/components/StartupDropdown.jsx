import Button from "../../Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { featureCard4 } from "../../../assets/images";

const groups = [
    { title: "Company", items: [
        ["Overview", "/startup-enablement"],
        ["Leadership", "/startup-enablement/leadership"],
        ["Global Presence", "/startup-enablement/global-presence"],
    ] },
    { title: "Connect", items: [
        ["Contact Us", "/contact"],
        ["Partners", "/startup-enablement/partners"],
    ] },
];

const StartupDropdown = ({ mobile = false, onNavigate }) => (
    <div className={mobile ? "space-y-4 rounded-lg bg-white p-4" : "grid min-h-130 grid-cols-[28%_1fr] bg-white text-black shadow-xl 2xl:min-h-162"}>
        {mobile ? (
            <Link to="/startup-enablement" onClick={onNavigate} className="font-semibold text-[#182b4e] hover:underline">Startup Enablement →</Link>
        ) : (
            <aside className="bg-[#f3f3f3] p-8 2xl:p-14">
                <Link to="/startup-enablement" onClick={onNavigate} className="text-3xl font-medium hover:underline">Startup Enablement</Link>
                <img src={featureCard4} alt="" className="mt-8 aspect-3/2 w-full object-cover" />
                <h3 className="mt-7 text-xl font-medium leading-relaxed 2xl:text-2xl">Discover our mission, vision, and leadership team</h3>
                <Button to="/startup-enablement" onClick={onNavigate} variant="text" className="mt-7 text-sm hover:underline">LEARN MORE</Button>
            </aside>
        )}
        <div className={mobile ? "space-y-4" : "grid grid-cols-2 content-start gap-12 px-10 py-12 2xl:gap-20 2xl:px-24"}>
            {groups.map((group) => (
                <div key={group.title}>
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
            ))}
        </div>
    </div>
);

export default StartupDropdown;
