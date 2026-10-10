import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
    ChevronDown,
    Globe,
    Menu,
    Search,
    X,
} from "lucide-react";

import useHeader from "./index.function";
import { navItems } from "../../config";
import { logo } from "../../assets/images";
import ServicesDropdown from "./components/ServicesDropdown";
import SolutionsDropdown from "./components/SolutionsDropdown";
import DigitalAssetsDropdown from "./components/DigitalAssetsDropdown";
import StartupDropdown from "./components/StartupDropdown";
import AboutDropdown from "./components/AboutDropdown";
import MobileDropdown from "./components/MobileDropdown";

const dropdownComponents = {
    "/services": ServicesDropdown,
    "/solutions": SolutionsDropdown,
    "/digital-assets": DigitalAssetsDropdown,
    "/startup-enablement": StartupDropdown,
    "/about": AboutDropdown,
};

const HeaderDropdown = ({ path, ...props }) => {
    const Dropdown = dropdownComponents[path];
    return <Dropdown {...props} />;
};

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
    const toggleMobileDropdown = (path) => {
        setActiveMobileDropdown((active) => active === path ? null : path);
    };
    const closeDropdown = () => setActiveDropdown(null);
    const {
        headerRef,
        isMenuOpen,
        handleToggleMenu,
        handleCloseMenu,
    } = useHeader();

    return (
        <header ref={headerRef} onKeyDown={(event) => {
            if (event.key === "Escape") {
                closeDropdown();
                handleCloseMenu();
            }
        }} className={`absolute top-0 left-0 z-50 w-full border-b border-white/15 text-white backdrop-blur-sm ${activeDropdown ? "bg-[#111117]" : "bg-black/20"}`}>

            {/* Desktop Header */}
            <div className="mx-auto flex h-16 md:h-22 max-w-360 items-center justify-between px-6 lg:px-10 xl:px-14">

                {/* Logo */}
                <Link to='/'>
                    <img src={logo} alt='Ignotec' className='cursor-pointer w-40' />
                </Link>

                {/* Main Navigation */}
                <nav className="hidden h-full items-center gap-7 xl:flex 2xl:gap-10">
                    {navItems.map((item) => (
                        dropdownComponents[item.path] ? (
                            <div key={item.id} className="flex h-full items-center" onMouseEnter={() => setActiveDropdown(item.path)} onMouseLeave={closeDropdown}
                                onBlur={(event) => {
                                    if (!event.currentTarget.contains(event.relatedTarget)) closeDropdown();
                                }}>
                                <button type="button" aria-expanded={activeDropdown === item.path} aria-controls={`${item.path.slice(1)}-dropdown`} onFocus={() => setActiveDropdown(item.path)} onClick={() => setActiveDropdown(item.path)} className="flex h-full cursor-pointer items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white">
                                    {item.label}
                                    <ChevronDown aria-hidden="true" className={`size-4 transition-transform ${activeDropdown === item.path ? "rotate-180" : ""}`} strokeWidth={4} />
                                </button>
                                {activeDropdown === item.path && (
                                    <div id={`${item.path.slice(1)}-dropdown`} className="services-dropdown absolute top-full left-0 max-h-[calc(100dvh-88px)] w-full overflow-y-auto">
                                        <HeaderDropdown path={item.path} onNavigate={closeDropdown} />
                                    </div>
                                )}
                            </div>
                        ) : (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            className="group flex items-center gap-1.5 text-sm font-medium whitespace-nowrap text-white/90 transition-colors hover:text-white"
                        >
                            {item.label}

                            {item.hasDropdown && (
                                <ChevronDown
                                    className="size-4 transition-transform duration-300 group-hover:rotate-180"
                                    strokeWidth={4}
                                />
                            )}
                        </NavLink>
                        )
                    ))}
                </nav>

                {/* Right Navigation */}
                <div className="hidden h-full items-center xl:flex">
                    <div className="flex h-full items-center gap-8">
                        <NavLink
                            to="/careers"
                            className="text-sm font-medium text-white/90 transition-colors hover:text-white"
                        >
                            Careers
                        </NavLink>

                        <div className="flex h-full items-center" onMouseEnter={() => setActiveDropdown("/about")} onMouseLeave={closeDropdown}
                            onBlur={(event) => {
                                if (!event.currentTarget.contains(event.relatedTarget)) closeDropdown();
                            }}>
                            <button type="button" aria-expanded={activeDropdown === "/about"} aria-controls="about-dropdown" onFocus={() => setActiveDropdown("/about")} onClick={() => setActiveDropdown("/about")} className="flex h-full cursor-pointer items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white">
                                About Us
                                <ChevronDown aria-hidden="true" className={`size-4 transition-transform ${activeDropdown === "/about" ? "rotate-180" : ""}`} strokeWidth={4} />
                            </button>
                            {activeDropdown === "/about" && (
                                <div id="about-dropdown" className="services-dropdown absolute top-full left-0 max-h-[calc(100dvh-88px)] w-full overflow-y-auto">
                                    <AboutDropdown onNavigate={closeDropdown} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="ml-8 flex h-22 items-center border-l border-white/15">
                        <button
                            type="button"
                            aria-label="Search"
                            className="flex h-full w-16 cursor-pointer items-center justify-center border-r border-white/15 transition-colors hover:bg-white/10"
                        >
                            <Search
                                className="size-5"
                                strokeWidth={2}
                            />
                        </button>

                        <button
                            type="button"
                            aria-label="Change language"
                            className="flex h-full w-16 cursor-pointer items-center justify-center transition-colors hover:bg-white/10"
                        >
                            <Globe
                                className="size-5"
                                strokeWidth={2}
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={handleToggleMenu}
                    aria-label="Toggle navigation"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10 xl:hidden"
                >
                    {isMenuOpen ? (
                        <X className="size-6" />
                    ) : (
                        <Menu className="size-6" />
                    )}
                </button>

            </div>

            {/* Mobile / Tablet Menu */}
            <div
                id="mobile-navigation"
                inert={!isMenuOpen}
                className={`overflow-hidden border-t border-white/15 bg-black/95 transition-all duration-300 xl:hidden ${isMenuOpen
                    ? "max-h-[calc(100dvh-64px)] overflow-y-auto opacity-100 md:max-h-[calc(100dvh-88px)]"
                    : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col px-6 py-6">

                    {navItems.map((item) => (
                        dropdownComponents[item.path] ? (
                            <MobileDropdown key={item.id} label={item.label} isOpen={activeMobileDropdown === item.path} onToggle={() => toggleMobileDropdown(item.path)}>
                                <HeaderDropdown path={item.path} mobile onNavigate={handleCloseMenu} />
                            </MobileDropdown>
                        ) : (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            onClick={handleCloseMenu}
                            className="flex items-center justify-between border-b border-white/10 py-4 text-base font-medium text-white/90"
                        >
                            {item.label}

                            {item.hasDropdown && (
                                <ChevronDown className="size-5" />
                            )}
                        </NavLink>
                        )
                    ))}

                    <NavLink
                        to="/careers"
                        onClick={handleCloseMenu}
                        className="border-b border-white/10 py-4 text-base font-medium text-white/90"
                    >
                        Careers
                    </NavLink>

                    <MobileDropdown label="About Us" isOpen={activeMobileDropdown === "/about"} onToggle={() => toggleMobileDropdown("/about")}>
                        <AboutDropdown mobile onNavigate={handleCloseMenu} />
                    </MobileDropdown>

                    {/* Mobile Actions */}
                    <div className="mt-6 flex items-center gap-3">
                        <button
                            type="button"
                            aria-label="Search"
                            className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/20"
                        >
                            <Search className="size-5" />
                        </button>

                        <button
                            type="button"
                            aria-label="Change language"
                            className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/20"
                        >
                            <Globe className="size-5" />
                        </button>
                    </div>

                </nav>
            </div>

        </header>
    );
};

export default Header;
