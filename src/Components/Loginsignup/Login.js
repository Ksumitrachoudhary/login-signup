import React, { useState } from 'react';
import '../../../src/App.css';

import user from '../Assets/img1.jpg';
import pass from '../Assets/img2.jpg';
import email from '../Assets/img3.jpg';

function Para() {
  const [action, setAction] = useState("Login");

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
          <div className='inputs'>
            {action==="Login"?<div> </div>:<div className="input">
        <img src={user} alt='User Icon'/>
        <input type='text' placeholder='Name'/>
      </div>}
     
      <div className="input">
        <img src={pass} alt='Password Icon' />
        <input type='password' placeholder='Password' />
      </div>
      <div className="input">
        <img src={email} alt='Email Icon' />
        <input type='email' placeholder='Email Id' />
      </div>
      </div>
          
      {action==="Signup"?<div></div>:<div className='forgot-password'>Lost Password?<span>Click Here!</span></div> }
           <div className='submit-container'>
        <div className={action==="Login"?"submit gray":"submit"} onClick={() => { setAction("SignUp") }}>
          Signup
        </div>
        <div className={action=== "SignUp"?"submit gray":"submit"} onClick={() => { setAction("Login") }}>
          Login
        </div>
      </div> 

      
    </div>
    
  );
}

export default Para;


