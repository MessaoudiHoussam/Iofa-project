import styled from "styled-components";

export const ServicesContainer =styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: linear-gradient(to right,#052932,#005432);
padding-top:3rem;
padding-bottom:3rem;


}
`
//height: 800px;
//padding-top:4rem;
//padding-bottom:5rem;

// @media screen and (max-width: 768px){
//     height: 1100px;
// }
// @media screen and (max-width: 480px){
//     height: 1300px;
// }
export const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 10px;

@media screen and (max-width:1000px){
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width:768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`;
export const ServicesCard = styled.div`
background:#fff;
display: flex;
flex-direction: column;
justify-content:flex-start ;
align-items: center;
border-radius: 10px;

padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
max-height:360px;


overflow: hidden;


&hover {
transform: scale(1.02);
transition: all 0.2s ease-in-out;
cursor: pointer;
}

`;

//max-height:340px;

export const ServicesIcon = styled.img`
height: 80px;

margin-bottom:10px;

`;
export const ServicesH1 = styled.h1`
font-size: 2.4rem;
color: #fff;
margin-bottom: 64px;
@media screen and (maw-width:480px){
    font-size: 2rem;
}

`;
export const ServicesH2 = styled.h2`
font-size: .9rem;
margin-bottom: 10px;
height:20px;
`;
export const ServicesP = styled.p`
font-size: 1rem;

line-height:1.2em;
height:4.8em;
overflow: hidden;
`;
