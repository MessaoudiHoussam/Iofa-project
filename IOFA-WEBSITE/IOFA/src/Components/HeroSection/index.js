import React, {useState} from 'react'
import  Video from '../../Videos/video.mp4'
import HeroCover from '../../Images/backCover02.png'
//import {} from '../../Videos/vide'
import { Button } from '../ButtonElements';
import  { HeroContainer, HeroBg, VideoBg,ImageBg, HeroH1, HeroContant, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import './style.css'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
    <HeroContainer id="home">
        <HeroBg>
           {/* <VideoBg autoPlay loop muted src={Video} type='Video/mp4' /> */}
           <ImageBg src={HeroCover} /> 
           {/*<img src={HeroCocer} alt =""/>*/}
           
            
        </HeroBg>
        <HeroContant>
            <HeroH1> IOFA. THE FUTURE OF AGRICULTURE Dz</HeroH1>
            <HeroP>
            Connected farming is the smartest way to be successful and sustainable.
            IOFA use the Internet of Things to monitor and extract data from the connected farm, works directly to increase revenue and profits for agribusiness.</HeroP>
            <HeroBtnWrapper>
                <Button 
                to='signup' 
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary='true'
                dark='true'>
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContant>
    </HeroContainer>
    )
};

export default HeroSection




