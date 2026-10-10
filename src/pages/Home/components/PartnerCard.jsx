const PartnerCard = ({ partner }) => (
    <div className="flex h-28 items-center justify-center rounded-2xl bg-white p-5 shadow-sm sm:h-31 sm:p-6">
        <img src={partner.image} alt={partner.name} loading="lazy"
            className="max-h-16 w-full max-w-50 object-contain" />
    </div>
);

export default PartnerCard;
