import FeaturedInsights from './components/FeaturedInsights'
import HeroSection from './components/HeroSection'
import StatisticsSection from './components/StatisticsSection'
import ServicesSection from './components/ServicesSection'
import PartnersSection from './components/PartnersSection'
import CareersSection from './components/CareersSection'
import DeferredContactSection from './components/DeferredContactSection'

const Home = () => {
    return (
        <div className="w-full min-h-screen">
            <HeroSection />
            <FeaturedInsights />
            <StatisticsSection />
            <ServicesSection />
            <PartnersSection />
            <CareersSection />
            <DeferredContactSection />
            
        </div>
    )
}

export default Home
