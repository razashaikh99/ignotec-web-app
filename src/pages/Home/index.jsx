import FeaturedInsights from './components/FeaturedInsights'
import HeroSection from './components/HeroSection'
import StatisticsSection from './components/StatisticsSection'

const Home = () => {
    return (
        <div className="w-full min-h-screen">
            <HeroSection />
            <FeaturedInsights />
            <StatisticsSection />
            
        </div>
    )
}

export default Home
