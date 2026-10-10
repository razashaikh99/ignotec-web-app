const StatisticCard = ({ item }) => {
    return (
        <div className="flex h-full flex-col items-start">

            {/* Purple Gradient Line */}
            <div className="mb-8 h-0.5 w-42 bg-linear-to-r from-purple-800 to-purple-400" />

            {/* Statistic Value */}
            <h3 className="bg-linear-to-r from-purple-800 to-purple-500 bg-clip-text text-6xl leading-tight font-normal tracking-tight text-transparent md:text-7xl lg:text-7xl">
                {item.value}
            </h3>

            {/* Description */}
            <p className="mt-5 max-w-100 text-xl leading-relaxed font-normal tracking-tight text-black md:text-2xl lg:text-2xl">
                {item.label}
            </p>

        </div>
    );
};

export default StatisticCard;
