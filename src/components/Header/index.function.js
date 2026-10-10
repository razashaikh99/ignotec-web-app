import { useCallback, useEffect, useRef, useState } from "react";

const useHeader = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef(null);

    const handleToggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleCloseMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return;

        const handleOutsidePointer = (event) => {
            if (!headerRef.current?.contains(event.target)) handleCloseMenu();
        };

        // Page scrolls reach window; submenu scrolls do not bubble here.
        document.addEventListener("pointerdown", handleOutsidePointer);
        window.addEventListener("scroll", handleCloseMenu, { passive: true });

        return () => {
            document.removeEventListener("pointerdown", handleOutsidePointer);
            window.removeEventListener("scroll", handleCloseMenu);
        };
    }, [isMenuOpen, handleCloseMenu]);

    return {
        headerRef,
        isMenuOpen,
        handleToggleMenu,
        handleCloseMenu,
    };
}

export default useHeader;
