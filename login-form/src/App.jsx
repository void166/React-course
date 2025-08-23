import { useState } from 'react'

import './App.css'

function App(){
  const [showPassword, setShowPassword] = useState(false);

  function click(){
      setShowPassword(!showPassword);
  }
  return(
      <div className="container">
          <p>Hello, Welcome to my site</p>
          <div className="input-container">
              <input className="input" placeholder="type ur email" type="text" name="" id="" />
              <div>
                  <input 
                      className="input" 
                      placeholder="type ur password" 
                      type={showPassword ? "text":"password"} name="" id="" />                            
              </div>
              <button onClick={click}>
                      {showPassword ? "hide" : "show"}
              </button>
          </div>
          <div>
              <button className="btn">Log in</button>
              <button className="btn">Sign up</button>
          </div>
      </div>
  );
}

export default App
