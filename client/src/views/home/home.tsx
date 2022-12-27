import React from 'react';
import Banner from '../../ui/banner/banner';
import { HeroSection } from './hero-section/hero-section';
import { HOMEPAGE_BANNER_MESSAGE } from '../../common/constants/income.constants';
import './home.css'

export const Home: React.FC = () => {
    return (
        <div className='homepage-wrapper'>
            <div className='homepage-banner-container'>
                <Banner words={HOMEPAGE_BANNER_MESSAGE} repeatTime={1500} wordTime={800} />
            </div>
            <div className='homepage-hero-section-container'>
                <HeroSection />
            </div>
        </div>
    )
}