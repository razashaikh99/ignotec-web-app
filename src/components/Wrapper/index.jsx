import Footer from "../Footer"
import Header from "../Header"
import useWrapper from "./index.function"

const Wrapper = ({ children }) => {
    const { } = useWrapper();

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <div className="flex-1">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Wrapper;
