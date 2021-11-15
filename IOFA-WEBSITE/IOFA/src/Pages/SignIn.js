import React, {useState} from 'react'

import Signin from '../Components/Signin'
import Navbar from '../Components/NavAlt/Index'





const SigninPage= () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    
    return (
        <div>

          {/* <Navbar /> */}
          <Navbar />
            <Signin /> 

        </div>
    )
}

export default SigninPage
