import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ item }) => {
    return (
        <article className="group relative flex h-95 min-w-0 flex-col overflow-hidden rounded-t-2xl bg-white transition-shadow duration-300 hover:shadow-xl">

            {/* Card Content */}
            <div className="relative z-10 p-6 lg:p-7">

                <h3 className="text-2xl leading-tight font-semibold tracking-tight text-black">
                    {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-black lg:text-base">
                    {item.description}
                </p>

                <Link
                    to={item.path}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-black transition-colors duration-300 hover:text-purple-700"
                >
                    LEARN MORE

                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

            </div>

            {/* Bottom Abstract Image */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-42 overflow-hidden">

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