import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#111827] text-white">
            <div className="mx-auto max-w-360 px-6 py-16 lg:px-12">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Company */}
                    <div>
                        <Link
                            to="/"
                            className="inline-block text-2xl font-bold tracking-tight"
                        >
                            IGNO
                            <span className="text-blue-500">TEC</span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
                            Delivering innovative digital solutions that help
                            businesses transform, grow, and succeed in a
                            technology-driven world.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="mb-5 text-base font-semibold">
                            Company
                        </h3>

                        <div className="flex flex-col gap-3">
                            <Link
                                to="/about"
                                className="text-sm text-gray-400 transition-colors hover:text-white"
                            >
                                About Us
                            </Link>

                            <Link
                                to="/careers"
                                className="text-sm text-gray-400 transition-colors hover:text-white"
                            >
                                Careers
                            </Link>

                            <Link
                                to="/contact"
                                className="text-sm text-gray-400 transition-colors hover:text-white"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-5 text-base font-semibold">
                            Services
                        </h3>

                        <div className="flex flex-col gap-3">
                            <Link
                                to="/services"
                                className="text-sm text-gray-400 transition-colors hover:text-white"
                            >
                                Digital Transformation
                            </Link>

                            <Link
                                to="/services"
                                className="text-sm text-gray-400 transition-colors hover:text-white"
                            >
                                Cloud Solutions
                            </Link>

                            <Link
                                to="/services"
                                className="text-sm text-gray-400 transition-colors hover:text-white"
                            >
                                Software Development
                            </Link>

                            <Link
                                to="/services"
                                className="text-sm text-gray-400 transition-colors hover:text-white"
                            >
                                Data & AI
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-base font-semibold">
                            Get In Touch
                        </h3>

                        <div className="space-y-3 text-sm text-gray-400">
                            <p>
                                Karachi, Pakistan
                            </p>

                            <p>
                                info@ignotec.com
                            </p>

                            <p>
                                +92 300 0000000
                            </p>
                        </div>

                        <Link
                            to="/contact"
                            className="mt-6 inline-flex rounded-full border border-gray-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-blue-500 hover:bg-blue-500"
                        >
                            Let's Talk
                        </Link>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-14 flex flex-col gap-4 border-t border-gray-800 pt-7 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

                    <p>
                        © 2026 Ignotec. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link
                            to="/privacy-policy"
                            className="transition-colors hover:text-white"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            to="/terms"
                            className="transition-colors hover:text-white"
                        >
                            Terms & Conditions
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;