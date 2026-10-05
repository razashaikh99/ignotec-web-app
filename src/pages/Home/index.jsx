import FeaturedInsights from './components/FeaturedInsights'
import HeroSection from './components/HeroSection'

const Home = () => {
    return (
        <div className="w-full min-h-screen">
            <HeroSection />
            <FeaturedInsights />
        </div>
    )
}

export default Home
