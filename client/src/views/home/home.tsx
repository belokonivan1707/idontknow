import React from 'react';
import Banner from '../../ui/banner/banner';
import { HeroSection } from './hero-section/hero-section';
import { HOMEPAGE_BANNER_MESSAGE, HOMEPAGE_SECOND_BANNER_MESSAGE, HOMEPAGE_SECOND_HERO_SECTION_DESCRIPTION } from '../../common/constants/income.constants';
import MarilynMonroe from '../../assets/img/marilyn-monroe.webp';
import Rage from '../../assets/img/rage.jpeg';
import { HOMEPAGE_HERO_SECTION_DESCRIPTION } from '../../common/constants/income.constants';
import './home.css'

export const Home: React.FC = () => {
    return (
        <div className='homepage-wrapper'>
            <div className='homepage-banner-container'>
                <Banner words={HOMEPAGE_SECOND_BANNER_MESSAGE} repeatTime={1500} wordTime={1200} />
            </div>
            <div className='homepage-hero-section-container'>
                <HeroSection image={Rage} description={HOMEPAGE_SECOND_HERO_SECTION_DESCRIPTION} />
            </div>
            <div className='homepage-banner-container'>
                <Banner words={HOMEPAGE_BANNER_MESSAGE} repeatTime={1500} wordTime={800} />
            </div>
            <div className='homepage-hero-section-container'>
                <HeroSection image={MarilynMonroe} description={HOMEPAGE_HERO_SECTION_DESCRIPTION} />
            </div>
        </div>
    )
}