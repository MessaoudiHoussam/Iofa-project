import React, {useState} from 'react'
//import { Container, FormWrap, Icon, FormContant,  } from './SigninElements'

import {Container,  Row, Col } from "react-bootstrap";
import Input from "../Forms/Input/Input"
import BackIm from "../../Images/SignUpCover.png"
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

//import { FaCheckCircle } from "react-icons/fa";


//import { FaExclamationCircle } from "react-icons/fa";

import './style.css'



const Signin = () => {


    const [email,setEmail] = useState ("");
    const [firstName, setFirstName] = useState ("");
    const [lastName, setLastName] = useState ("");
    const [password,setPassword] = useState ("");
    const [passwordCnx,setPasswordCnx] = useState ("");   
    const [emailCnx,setEmailCnx] = useState ("");



    const [errorInput, setErrorInput] = useState (false);
    const [rightSide, setRightSide] = useState (false);
    



  

   
   

   const ChangeSide = () => {
    setRightSide(!rightSide)
   
    }

    

   /* const SignUpFun = () =>{

        const form = new FormData();

        if (1)  
        {

            form.append('email', email);
        
            alert('Save New updates')
            //dispatch(updateProductByAdmin(formUpd))


        }else {
            setErrorInput(true)
        }

    

    }
*/
    return (
        <>

            <div className="GrapAL" style={{ backgroundImage:`url(${BackIm})` }}>
                <div className="OverlayB"> </div>
            
           <h2>Get started with a free IOFA account. </h2>
           {/* <FormWrap>
                <Icon to='/'>SMS</Icon>
                <FormContant>

                </FormContant>
           </FormWrap> 

         
                <Col md={6}>
                    <Input
                        label=" Email "
                        placeholder=" Email "
                        value={email}
                        type="text"
                        onChange={(e) =>{setEmail(e.target.value)}}
                        required="required"
                       
                    />

                    <input type="text"/> 

                       
                        errorInput ?
                        
                        ((email.replace(/^\s+|\s+$/g,"")) ? 
                        <FaCheckCircle className="inputIconCheck" />
                        :<FaExclamationCircle className="inputIconNotCheck" />
                        )
                                   
                        :null

                    
                    

                </Col>
                
            </Row>
                */}

                         
            <div class={rightSide ? 'container rp-active' : 'container'} id="container">
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>SIGN UP</h1>
                        <div class="socialMedia-container">
                            <a href="#"><FaGoogle /></a>
                            <a href="#" ><FaFacebookF /> </a>
                            <a href="#" ><FaLinkedinIn /></a>
                            
                        </div>
                       {/* <span>or use your email for registration</span> */}
                        <h5> Already have an account ? <span onClick={ChangeSide} > Sign In. </span> </h5>
                        <Input
                            placeholder="First Name "
                            value={firstName}
                            type="text"
                            onChange={(e) =>{setFirstName(e.target.value)}}
                            required="required"
                        />
                       <Input
                            placeholder="Last Name "
                            value={lastName}
                            type="text"
                           onChange={(e) =>{setLastName(e.target.value)}}
                            required="required"
                        />

                         <Input
                            placeholder="Email "
                            value={email}
                            type="email"
                            onChange={(e) =>{setEmail(e.target.value)}}
                            required="required"
                        />
                     
                     <Input
                           // placeholder="Password (+15 Characters) "
                            placeholder="Must be at least 6 Characters "
                            value={password}
                            type="password"
                            onChange={(e) =>{setPassword(e.target.value)}}
                            
                        />
                        <div className="checkBoxContainer">
                    
                            <input type ="checkbox"/>
                            <h5 className="checkMark">
                                sign up for email updates.
                            </h5>
                        
                        </div>
                        
                        <button > Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div class="socialMedia-container">
                            <a href="#"><FaGoogle /></a>
                            <a href="#" ><FaFacebookF /> </a>
                            <a href="#" ><FaLinkedinIn /></a>
                            
                        </div>
                        <h6>Or Enter your email and password to sign in</h6>

                        <Input
                     
                        placeholder="Email "
                        value={emailCnx}
                        type="email"
                        onChange={(e) =>{setEmailCnx(e.target.value)}}
                        required="required"
                          />

                           <Input
                     
                        placeholder="Password "
                        value={passwordCnx}
                        type="password"
                        onChange={(e) =>{setPasswordCnx(e.target.value)}}
                        required="required"
                          />
                       
                        <button>Sign In</button>

                        <h5> Don’t have an account yet? <span onClick={ChangeSide} > Sign up for free.</span> </h5>

                    </form>
                </div>
                <div class="overlay-container-ALL">
                    <div class="overlay">
                        <div class="overlay-InPa overlay-InPa-left">
                            <h1>One of us ?</h1>
                            <p>If you already has an account, just sign in. We've missed you!</p>
                            <button class="ghost" id="signIn" onClick={ChangeSide} >Sign In</button>
                        </div>
                        <div class="overlay-InPa overlay-right">
                            <h1>New here ?</h1>
                            <p>Sign up and discover great amount of new opportunities! </p>
                            <button class="ghost" id="signUp" onClick={ChangeSide} >Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <p>
                  
                </p>
            </footer>

            </div>


            
                
            
        </>
    )
}

export default Signin
