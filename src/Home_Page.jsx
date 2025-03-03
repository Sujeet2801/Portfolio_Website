import React from 'react'
import HeroMain from './components/heroSection/HeroMain'
import HeroGradient from './components/heroSection/HeroGradient'
import SubHeroSection from './components/heroSection/SubHeroSection'
import AboutMeMain from './components/aboutMeSection.jsx/AboutMeMain'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'
import ProjectsMain from './components/projectsSection/ProjectsMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import FooterMain from './components/footer/FooterMain'

function Home_Page() {
    return (
        <div>
            <HeroMain />
            <HeroGradient />
            <SubHeroSection />
            <AboutMeMain />
            <SkillsMain />
            <SubSkills />
            <ProjectsMain />
            <ContactMeMain />
            <FooterMain />
        </div>
    )
}

export default Home_Page