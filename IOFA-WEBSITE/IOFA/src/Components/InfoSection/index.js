import React from 'react';
import {Button} from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitel, BtnWrap, ImgWrap, Img} from './InfoElements'
import './style.css'


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, dark, dark2, primary, DtataTable}) => {

const Datatablefun =() => {
    DtataTable.map(i=>{
        return 
        (<Subtitel darkText = {darkText}>{DtataTable[i]}</Subtitel>)
        }
    ) 

     
}
    
    return (
        <>
         <InfoContainer lightBg={lightBg} id={id}>
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                    <Column1>
                     <TextWrapper>
                         <TopLine>{topLine}</TopLine>
                         <Heading lightText={lightText}>{headLine}</Heading>
                         <Subtitel darkText = {darkText}>{description}</Subtitel>
                         {DtataTable?  
                         DtataTable.map(i => 
                         <h3 className='elementsind'>{i}</h3>
                         )
                         : null}
                                      
                         
                         
                         <BtnWrap>
                             <Button to='home' 
                             smooth={true} 
                             duration={500}
                             spy={true}
                             exact="true"
                             offset={-80}
                             primary={primary ? 1 : 0}
                             dark={dark ? 1 : 0}
                             dark2={dark2 ? 1 : 0}
                             >{buttonLabel}</Button>
                         </BtnWrap>
                     </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                        <Img  src={img} alt={alt}/>
                    </ImgWrap>
                    </Column2>
                 </InfoRow>
             </InfoWrapper>
         </InfoContainer> 
        </>
    )
}

export default InfoSection
