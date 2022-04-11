import React ,{useState} from "react";
import "./App.css";

import Button from "./Button";




const App  = () => {

    const [timerValue, setTimerValue] = useState(0);
    const [timerId,  setTimerId] =  useState(0);
    
    const startHandler = () => {
        
         setInterval( () => { setTimerValue((timerValue)=>timerValue+1);}
                        ,1000 )
                  
                                                   
    }

    const stopHandler = () => {
        
          clearInterval(timerId);

    }
    
    const resetHandler = () => {
      
        setTimerValue(0);
        clearInterval(timerId);
    }
  
    return(
        <div className="container">
         
            <div className="wrapper">
            <p>
                <span className="hrs">0</span>:
                <span className="mins">0</span>:
                <span className="secs">{timerValue}</span>
            </p> <br></br>
             <Button click= {startHandler}  title= "Start"/>
             <Button click= {stopHandler}   title= "Stop"/>
             <Button click= {resetHandler}  title= "Reset"/> 
            </div>
    </div>
    )

}
export default App;