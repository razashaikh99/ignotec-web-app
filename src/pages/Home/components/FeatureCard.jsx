import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FeatureCard = ({ item }) => {
    return (
        <Link
            to={item.path}
            className="group relative block h-162 overflow-hidden rounded-xl bg-[#171717]"
        >
            {/* Default Content */}
            <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-20">

                {/* Image */}
                <div className="h-103 overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="p-7">
                    <p className="text-xs font-medium tracking-[0.18em] text-white/60">
                        {item.type}
                    </p>

                    <h3 className="mt-4 text-lg leading-7 font-semibold text-white">
                        {item.title}
                    </h3>
                </div>

            </div>

            {/* Hover Gradient */}
            <div className="absolute inset-0 translate-y-full bg-linear-to-b from-[#dd796e] via-[#d55a91] to-[#bd3aa4] transition-transform duration-500 ease-out group-hover:translate-y-0" />

            {/* Hover Content */}
            <div className="absolute inset-0 z-10 flex translate-y-8 flex-col justify-between p-7 opacity-0 transition-all delay-100 duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-white/80">
                        {item.type}
                    </p>

                    <h3 className="mt-5 text-xl leading-8 font-semibold text-white">
                        {item.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-white/90">
                        {item.description}
                    </p>
                </div>

                <div className="flex items-center gap-3 text-sm font-semibold text-white">
                    Read more

                    <ArrowRight
                        className="size-5 transition-transform duration-300 group-hover:translate-x-2"
                        strokeWidth={1.7}
                    />
                </div>

            </div>
        </Link>
    );
};

export default FeatureCard;