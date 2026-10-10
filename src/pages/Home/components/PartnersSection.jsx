import Button from "../../../components/Button";
import { partnersContent } from "../../../config";
import PartnerCard from "./PartnerCard";

const PartnersSection = () => {
    const { title, description, buttonText, buttonPath, partners } = partnersContent;

    return (
        <section className="bg-[#f8f8f8] py-16 lg:py-22">
            <div className="mx-auto grid max-w-360 items-center gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-14">
                <div>
                    <h2 className="max-w-125 text-3xl leading-tight font-semibold tracking-tight text-[#111] sm:text-4xl lg:text-5xl">{title}</h2>
                    <p className="mt-7 max-w-140 text-base md:leading-8 text-[#304971] lg:text-lg">{description}</p>
                    <Button to={buttonPath} variant="outline" className="mt-9">{buttonText}</Button>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {partners.map((partner) => <PartnerCard key={partner.id} partner={partner} />)}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
