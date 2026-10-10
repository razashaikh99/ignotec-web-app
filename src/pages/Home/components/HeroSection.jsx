import Button from "../../../components/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { heroSlides } from "../../../config";

const HeroSection = () => {
    return (
        <section className="relative h-[85svh] min-h-160 w-full overflow-hidden sm:h-screen sm:min-h-175">

            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                slidesPerView={1}
                loop
                speed={900}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: ".hero-prev",
                    nextEl: ".hero-next",
                }}
                pagination={{ el: ".hero-pagination", clickable: true }}
                className="hero-carousel h-full w-full"
            >
                {heroSlides.map((item) => (
                    <SwiperSlide key={item.id}>

                        <div
                            className="relative h-full w-full bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${item.image})`,
                            }}
                        >
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/35" />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />

                            {/* Content */}
                            <div className="relative mx-auto flex h-full max-w-360 items-center px-6 pt-22 pb-24 lg:px-14 lg:pb-0">

                                <div className="max-w-180">

                                    <h1 className="text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                                        {item.title}
                                    </h1>

                                    <p className="mt-7 max-w-170 text-base leading-6 md:leading-8 text-white/90 sm:text-lg lg:text-xl">
                                        {item.description}
                                    </p>

                                    <Button
                                        to={item.buttonPath}
                                        className="mt-10"
                                    >
                                        {item.buttonText}

                                    </Button>

                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                ))}
                <div slot="container-end" className="hero-pagination" />
            </Swiper>

            {/* Previous */}
            <button
                type="button"
                aria-label="Previous slide"
                className="hero-prev absolute top-1/2 left-6 z-20 hidden size-11 -translate-y-1/2 cursor-pointer items-center justify-center text-white transition-transform hover:scale-110 lg:flex"
            >
                <ChevronLeft
                    className="size-9"
                    strokeWidth={1.8}
                />
            </button>

            {/* Next */}
            <button
                type="button"
                aria-label="Next slide"
                className="hero-next absolute top-1/2 right-6 z-20 hidden size-11 -translate-y-1/2 cursor-pointer items-center justify-center text-white transition-transform hover:scale-110 lg:flex"
            >
                <ChevronRight
                    className="size-9"
                    strokeWidth={1.8}
                />
            </button>

        </section>
    );
};

export default HeroSection;
