import { useState } from "react";

export default () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return {
        isMenuOpen,
        handleToggleMenu,
        handleCloseMenu,
    };
}