const StatisticCard = ({ item }) => {
    return (
        <div className="flex h-full flex-col items-start">

            {/* Purple Gradient Line */}
            <div className="mb-8 h-0.5 w-38 bg-linear-to-r from-purple-800 to-purple-400" />

            {/* Statistic Value */}
            <h3 className="bg-linear-to-r from-purple-900 to-purple-500 bg-clip-text text-6xl leading-tight font-light tracking-tight text-transparent md:text-7xl">
                {item.value}
            </h3>

            {/* Description */}
            <p className="mt-4 max-w-75 text-xl leading-relaxed font-normal text-black md:text-2xl">
                {item.label}
            </p>

        </div>
    );
};

export default StatisticCard;