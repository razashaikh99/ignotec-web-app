import { lazy, Suspense, useEffect, useRef, useState } from "react";

const ContactSection = lazy(() => import("./ContactSection"));

const DeferredContactSection = () => {
    const containerRef = useRef(null);
    const [isNearViewport, setIsNearViewport] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsNearViewport(true);
                observer.disconnect();
            }
        }, { rootMargin: "600px" });
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    const placeholder = <div className="min-h-160 bg-black" role="status" aria-label="Loading contact form" />;
    return <div ref={containerRef}>{isNearViewport ? <Suspense fallback={placeholder}><ContactSection /></Suspense> : placeholder}</div>;
};

export default DeferredContactSection;
