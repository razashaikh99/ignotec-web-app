import { featuredInsights } from "../../../config";
import FeatureCard from "./FeatureCard";

const FeaturedInsights = () => {
    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="mx-auto max-w-360 px-6 lg:px-14">

                <h2 className="mb-10 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                    Featured insights
                </h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {featuredInsights.map((item) => (
                        <FeatureCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturedInsights;