import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import StatisticCard from "./StatisticCard";
import { statisticsContent } from "../../../config";

const StatisticsSection = () => {
    const { title, description, stats } = statisticsContent;

    return (
        <section className="w-full bg-white py-20 md:py-28 lg:py-32">

            <div className="mx-auto max-w-360 px-6 lg:px-14">

                {/* Heading */}
                <div className="mb-14 max-w-190 md:mb-16">

                    <h2 className="max-w-145 text-3xl leading-tight font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
                        {title}
                    </h2>

                    <p className="mt-6 text-base leading-7 text-gray-800 md:text-lg">
                        {description}
                    </p>

                </div>

                {/* Statistics Carousel */}
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    spaceBetween={24}
                    slidesPerGroup={1}
                    loop={true}
                    speed={800}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 32,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 48,
                        },
                    }}
                    className="w-full"
                >
                    {stats.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className="h-auto!"
                        >
                            <StatisticCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </section>
    );
};

export default StatisticsSection;