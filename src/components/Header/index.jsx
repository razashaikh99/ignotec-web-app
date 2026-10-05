import { Link, NavLink } from "react-router-dom";
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

const Header = () => {
    const {
        isMenuOpen,
        handleToggleMenu,
        handleCloseMenu,
    } = useHeader();

    return (
        <header className="absolute top-0 left-0 z-50 w-full border-b border-white/15 bg-black/20 text-white backdrop-blur-sm">

            {/* Desktop Header */}
            <div className="mx-auto flex h-22 max-w-360 items-center justify-between px-6 lg:px-10 xl:px-14">

                {/* Logo */}
                <Link to='/'>
                    <img src={logo} alt='Ignotec' className='cursor-pointer w-40' />
                </Link>

                {/* Main Navigation */}
                <nav className="hidden items-center gap-7 xl:flex 2xl:gap-10">
                    {navItems.map((item) => (
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
                    ))}
                </nav>

                {/* Right Navigation */}
                <div className="hidden items-center xl:flex">
                    <div className="flex items-center gap-8">
                        <NavLink
                            to="/careers"
                            className="text-sm font-medium text-white/90 transition-colors hover:text-white"
                        >
                            Careers
                        </NavLink>

                        <NavLink
                            to="/about"
                            className="flex items-center gap-1.5 text-sm font-medium text-white/90 transition-colors hover:text-white"
                        >
                            About Us

                            <ChevronDown
                                className="size-4 transition-transform duration-300 group-hover:rotate-180"
                                strokeWidth={4}
                            />
                        </NavLink>
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
                className={`overflow-hidden border-t border-white/15 bg-black/95 transition-all duration-300 xl:hidden ${isMenuOpen
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col px-6 py-6">

                    {navItems.map((item) => (
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
                    ))}

                    <NavLink
                        to="/careers"
                        onClick={handleCloseMenu}
                        className="border-b border-white/10 py-4 text-base font-medium text-white/90"
                    >
                        Careers
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={handleCloseMenu}
                        className="flex items-center justify-between border-b border-white/10 py-4 text-base font-medium text-white/90"
                    >
                        About Us

                        <ChevronDown className="size-5" />
                    </NavLink>

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