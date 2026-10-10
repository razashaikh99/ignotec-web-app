import Button from "../../../components/Button";
import { careersContent } from "../../../config";

const CareersSection = () => {
    const { title, description, buttonText, buttonPath, image } = careersContent;

    return (
        <section className="relative isolate flex min-h-100 items-center justify-center overflow-hidden bg-gray-900 px-6 py-20 text-center text-white lg:min-h-140 lg:py-28">
            <img src={image} alt="" loading="lazy" className="absolute inset-0 -z-20 size-full object-cover object-center" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/70" />
            <div className="mx-auto w-full max-w-250">
                <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-6xl">{title}</h2>
                <p className="mx-auto mt-6 max-w-120 text-base leading-7 text-white/90 lg:text-lg">{description}</p>
                <Button to={buttonPath} variant="light" className="mt-8 focus-visible:outline-white">
                    {buttonText}
                </Button>
            </div>
        </section>
    );
};

export default CareersSection;
