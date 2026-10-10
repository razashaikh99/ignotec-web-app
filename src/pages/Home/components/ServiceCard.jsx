import Button from "../../../components/Button";

const ServiceCard = ({ item }) => {
    return (
        <article className="group relative flex h-108 min-w-0 flex-col overflow-hidden rounded-t-2xl bg-white transition-shadow duration-300 hover:shadow-xl">

            {/* Card Content */}
            <div className="relative z-10 shrink-0 px-6 pt-8 pb-3 lg:px-7 2xl:px-8">

                <h3 className="text-2xl leading-tight font-semibold tracking-tight text-black 2xl:text-3xl">
                    {item.title}
                </h3>

                <p className="mt-3 text-sm leading-snug text-black lg:text-base">
                    {item.description}
                </p>

                <Button
                    to={item.path}
                    variant="text" iconClassName="size-3.5" className="mt-3"
                >
                    LEARN MORE

                </Button>

            </div>

            {/* Bottom Abstract Image */}
            <div className="pointer-events-none min-h-0 flex-1 overflow-hidden">

                <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover object-bottom transition-transform duration-500 group-hover:scale-110"
                />

            </div>

        </article>
    );
};

export default ServiceCard;
