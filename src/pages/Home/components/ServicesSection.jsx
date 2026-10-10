import { useRef } from "react";
import Button from "../../../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { servicesContent } from "../../../config";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
    const swiperRef = useRef(null);
    const { title, buttonText, cards } = servicesContent;

    return (
        <section className="overflow-hidden bg-linear-to-b from-white via-[#e4d4e8] to-white py-16 lg:py-24">
            <div className="mx-auto max-w-360 px-6 lg:px-14">
                <div className="mb-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center lg:mb-16">
                    <h2 className="text-3xl font-semibold tracking-tight text-black lg:text-4xl">{title}</h2>
                    <Button variant="text" onClick={() => swiperRef.current?.slideNext()}
                        aria-label="Show next services" aria-controls="services-carousel"
                        iconClassName="size-4" className="py-3 text-left sm:text-sm">
                        {buttonText}
                    </Button>
                </div>
                <Swiper id="services-carousel" onSwiper={(swiper) => { swiperRef.current = swiper; }}
                    slidesPerView="auto" spaceBetween={24} slidesPerGroup={1} rewind speed={650}
                    className="overflow-visible! cursor-grab active:cursor-grabbing">
                    {cards.map((item) => (
                        <SwiperSlide key={item.id} className="w-72! sm:w-80! xl:w-76! 2xl:w-96!">
                            <ServiceCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ServicesSection;
