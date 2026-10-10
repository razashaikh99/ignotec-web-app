import { useId } from "react";
import { ChevronDown } from "lucide-react";

const MobileDropdown = ({ label, children, isOpen, onToggle }) => {
    const panelId = useId();

    return (
        <div className="border-b border-white/10 py-4">
            <button type="button" aria-expanded={isOpen} aria-controls={panelId}
                onClick={onToggle}
                className="flex w-full cursor-pointer items-center justify-between text-left text-base font-medium text-white/90">
                {label}
                <ChevronDown aria-hidden="true" className={`size-5 transition-transform duration-300 motion-reduce:transition-none ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <div id={panelId} inert={!isOpen}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="min-h-0 overflow-hidden">
                    <div className="pt-4">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default MobileDropdown;
