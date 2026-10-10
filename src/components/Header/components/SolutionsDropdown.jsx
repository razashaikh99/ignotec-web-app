import Button from "../../Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { heroSlide2 } from "../../../assets/images";

const sectors = [
    { title: "Sectors", items: [
        ["Banking & Financial Services", "banking-financial-services"],
        ["Healthcare & Life Sciences", "healthcare-life-sciences"],
        ["Retail & E-Commerce", "retail-e-commerce"],
    ] },
    { title: "More Sectors", items: [
        ["Manufacturing", "manufacturing"],
        ["Telecom & Media", "telecom-media"],
    ] },
];

const SolutionsDropdown = ({ mobile = false, onNavigate }) => (
    <div className={mobile ? "space-y-4 rounded-lg bg-white p-4" : "grid min-h-130 grid-cols-[28%_1fr] bg-white text-black shadow-xl 2xl:min-h-162"}>
        {mobile ? (
            <Link to="/solutions" onClick={onNavigate} className="font-semibold text-[#182b4e] hover:underline">All Solutions →</Link>
        ) : (
            <aside className="bg-[#f3f3f3] p-8 2xl:p-14">
                <Link to="/solutions" onClick={onNavigate} className="text-3xl font-medium hover:underline">Solutions</Link>
                <img src={heroSlide2} alt="" className="mt-8 aspect-3/2 w-full object-cover" />
                <h3 className="mt-7 text-xl font-medium leading-relaxed 2xl:text-2xl">Transforming industries with innovative solutions</h3>
                <Button to="/solutions" onClick={onNavigate} variant="text" className="mt-7 text-sm hover:underline">LEARN MORE</Button>
            </aside>
        )}
        <div className={mobile ? "space-y-4" : "grid grid-cols-2 content-start gap-12 px-10 py-12 2xl:gap-20 2xl:px-24"}>
            {sectors.map((sector) => (
                <div key={sector.title}>
                    <h3 className="text-lg font-medium text-[#182b4e] 2xl:text-2xl">{sector.title}</h3>
                    <ul className="mt-2 space-y-2 xl:mt-4 xl:space-y-4">
                        {sector.items.map(([label, slug]) => (
                            <li key={slug}>
                                <Link to={`/solutions/${slug}`} onClick={onNavigate} className="group/link inline-flex items-center gap-2 text-sm leading-6 text-[#304971] hover:text-purple-700 focus-visible:underline 2xl:text-lg">
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

export default SolutionsDropdown;
