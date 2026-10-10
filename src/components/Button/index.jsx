import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const variants = {
    solid: "rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-105",
    outline: "rounded-full border border-black px-7 py-3 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white",
    light: "rounded-full border border-white/60 px-7 py-3 text-xs font-semibold tracking-wide text-white transition-colors hover:border-white hover:bg-white hover:text-black",
    text: "text-xs font-medium text-black transition-colors hover:text-purple-700",
    subtle: "rounded-full border border-gray-300 bg-gray-200 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-300",
    footer: "rounded-full border border-gray-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-blue-500 hover:bg-blue-500",
};

const Button = ({ children, to, href, onClick, variant = "solid", showArrow = true,
    icon: Icon = ArrowRight, iconClassName = "size-5", className = "", type = "button", disabled = false, ...props }) => {
    const classes = `group/button inline-flex items-center justify-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant] || variants.solid} ${disabled ? "pointer-events-none opacity-50" : "cursor-pointer"} ${className}`;
    const content = <>{children}{showArrow && <Icon aria-hidden="true" className={`${iconClassName} shrink-0 transition-transform group-hover/button:translate-x-1 motion-reduce:transition-none`} />}</>;
    if (to !== undefined) return <Link to={to} onClick={disabled ? undefined : onClick} aria-disabled={disabled || undefined} tabIndex={disabled ? -1 : undefined} className={classes} {...props}>{content}</Link>;
    if (href !== undefined) return <a href={disabled ? undefined : href} onClick={disabled ? undefined : onClick} aria-disabled={disabled || undefined} tabIndex={disabled ? -1 : undefined} className={classes} {...props}>{content}</a>;
    return <button type={type} disabled={disabled} onClick={onClick} className={classes} {...props}>{content}</button>;
};

export default Button;
