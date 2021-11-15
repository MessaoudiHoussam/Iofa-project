
import img1 from '../../Images/svg-2.svg'
import aboutIMG from '../../Images/aboutInv.png'

import img2 from '../../Images/svg-1.svg'
import img3 from '../../Images/svg-3.svg'
import img4 from '../../Images/how.jpg'
import img5 from '../../Images/smart-farming-01.jpg'


<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');
</style>

export const homeOpjOne ={

    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About IOFA',
    //headLine: 'Send ',
    description: 'The complete device is equipped with multiple sensors each and their function, starting with the soil sensor that measures soil moisture and temperature, the atmosphere sensor, which predicts meteorology, and electronic device monitors that predict faults before they occur, through complex and accurate calculations Each sensor is located at the end of a cable with a waterproof cover and a shielded interior.',
    buttonLabel: 'Get STARTED',
    imgStart: false,
    img: aboutIMG,
    alt: 'arromar',
    dark: true,
    primary: true,
    darkText: false,
};

export const homeOpjTow ={

    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'How it works',
    headLine: '',
    description: 'Initially, wirelessly connected equipment such as sensors, communication devices and servers are responsible for capturing a very large number of different data: such as temperature, humidity, pressure, vibration, CO2 and  current, through various devices, etc., the possibilities remain numerous . Second, the various data are analyzed and sent to the farmer in an easy-to-read form illustrated with graphical data and curves that facilitate a correct understanding of them. Through our system, we can control the various components of the farm, after analyzing the results, either by order of the farmer or automatically by the system through its automatic programming, We can also avoid damage to mechanical devices by studying their behavior and monitoring the energy activity reaching them',
    buttonLabel: 'Loren More',
    imgStart: true,
    img: img4,
    alt: 'World',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeOpjThree ={

    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Technologies used',
    headLine: '',
    description: 'In our system based on modern technologies to increase the quantity and quality of products while improving the human labor required. we used',
    
    buttonLabel: 'Start Now',
    imgStart: false,
    img: img5,
    alt: 'tech',
    dark: false,
    primary: false,
    darkText: true,
    
    DtataTable: ['Communication: 2G / 3G /4G',
                'Location : GPS / Satellite',
                'Sensors: water, light,  soil, electricity, humidity, temperature management',
                'Robotics : drone',
                'data analysis :   analytics solutions, data pipelines for downstream solutions',
                'mobile app : iofa',]

};





