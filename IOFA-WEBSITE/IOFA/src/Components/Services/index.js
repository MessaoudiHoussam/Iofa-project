import React,{useState} from "react";
import Icon1 from "../../Images/svg-123.svg";
import Icon2 from "../../Images/svg-5.svg";
import Icon3 from "../../Images/svg-6.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

import './style.css'
const Services = () => {
  const [openModel01, setOpenModel01] = useState(false)
  const [models, setmodels] = useState([
    {id: 0, satuts:false }, {id: 1, satuts:false }, {id: 2, satuts:false }, {id: 3, satuts:false },
    {id: 4, satuts:false }, {id: 5, satuts:false }, {id: 6, satuts:false }, {id: 7, satuts:false },
  ]);


  const setOpenModelfun= (i) =>{

  
    let newArr = [...models]; 
    newArr[i].satuts = !newArr[i].satuts;
    setmodels(newArr);


   if (!newArr[i].satuts) {
      document.querySelector("body").style.overflow = "auto";

    }else{
      document.querySelector("body").style.overflow = "hidden";
    }

  }

  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1> Our Services </ServicesH1>
        <ServicesWrapper>
          <ServicesCard 
           onClick={() => setOpenModelfun(0)}>
             <div className={models[0].satuts? 'services_modal_container ' : '' } >
             <div className={models[0].satuts? 'services_normal services_modal' : 'services_normal' }>
            <ServicesIcon src={require('../../Images/Services/control-panel.png').default} />
            
            <ServicesH2> Control of the farm </ServicesH2>
            <ServicesP>
            Our product is a system based primarily on the Internet of Things. Which aims at smart 
            operation and environmental preservation by using digital solutions by means of various
            sensors, drones, communication, networks, etc. techniques to collect, store and analyze 
            data related to the farm, and finally monitor and control it manually and programmatically.
            </ServicesP>
            <button>
              Show More
            </button>
            </div>
            </div>
          </ServicesCard>

          <ServicesCard 
           onClick={() => setOpenModelfun(1)}>
             <div className={models[1].satuts? 'services_modal_container ' : '' } >
             <div className={models[1].satuts? 'services_normal services_modal' : 'services_normal' }>
          <ServicesIcon src={require('../../Images/Services/data-collectin-01.png').default} />    
            <ServicesH2>Data collection </ServicesH2>
            <ServicesP>
             Collecting basic information for farmers to manage their farms from soil moisture, plant growth, 
             treatment and geographic location, in addition to the amount of water consumed and the amount of
             energy wasted, this digital transformation allows the sector to optimally manage agricultural 
             production and natural resources consumed.
            </ServicesP>

            <button>
              Show More
            </button>
            </div>
            </div>
          </ServicesCard>

          <ServicesCard 
           onClick={() => setOpenModelfun(2)}>
             <div className={models[2].satuts? 'services_modal_container ' : '' } >
             <div className={models[2].satuts? 'services_normal services_modal' : 'services_normal' }>

          <ServicesIcon src={require('../../Images/Services/pollution-01.png').default} />      
            <ServicesH2> Reduce the environmental impact </ServicesH2>
            <ServicesP>
            Agriculture is one of the areas with the most impact on the environment, so the surplus of 
            fertilizers and the consumption of water and electricity should be among the things that the
            farmer must care about to be responsible and explicitly committed to preserving our planet
            </ServicesP>

            <button>
              Show More
            </button>
            </div>
            </div>
          </ServicesCard>

          <ServicesCard 
           onClick={() => setOpenModelfun(3)}>
             <div className={models[3].satuts? 'services_modal_container ' : '' } >
             <div className={models[3].satuts? 'services_normal services_modal' : 'services_normal' }>
          <ServicesIcon src={require('../../Images/Services/economic.png').default} />            <ServicesH2> Economy in material and human resources </ServicesH2>
            <ServicesP>
            To master and control the consumption of water, electricity or any other alternative energy. 
            Because one of the main issues of agriculture is related to the correct use of material resources,
             and this is through the ability to analyze evidence, correct understanding of the condition of 
             the soil and what the plant needs, and the amount of existing resources, to reach the last stage, 
             which is to control the resource and divide it according to need.
            </ServicesP>

            <button>
              Show More
            </button>
            </div>
            </div>
          </ServicesCard>

          <ServicesCard 
           onClick={() => setOpenModelfun(4)}>
             <div className={models[4].satuts? 'services_modal_container ' : '' } >
             <div className={models[4].satuts? 'services_normal services_modal' : 'services_normal' }>
          <ServicesIcon src={require('../../Images/Services/machine-error-01.png').default} />            <ServicesH2> Predicting and avoiding hardware failures</ServicesH2>
            <ServicesP>
              By means of sensors distributed on all pumps and other mechanical machines,
              we can gather information about the energy consumption of each machine, the effort 
              exerted, and behavior changes. Alert in the alerts section within the application,
              and the command can be programmed to stop the intended devices automatically every
              time something goes wrong.
            </ServicesP>


            <button>
              Show More
            </button>
            </div>
            </div>
          </ServicesCard>

        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
