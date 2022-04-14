import React ,{useState} from "react";
import "./App.css";

import Button from "./components/Button";




const App  = () => {
    
    const [timerValue,setTimerValue] = useState(0);
    const [timerId , setTimerId] =useState();

    
    
    const startHandler = ()=> {
           setTimerId(setInterval( ()=>{ setTimerValue(timerValue=>timerValue+1)},    1000));
    }

    const stopHandler = ()=> {
        clearInterval(timerId);
    }

    const resetHandler = ()=> {
        stopHandler();
        setTimerValue(0);
    } 


    
return(
       <div className="container">
         
        <div className="wrapper">
          <p>
            
            <span>
                 { parseInt(timerValue/(60*60)) <10 ? "0"+parseInt(timerValue/(60*60)): parseInt(timerValue/(60*60) ) }:

                 { parseInt((timerValue/60) %60) <10 ? "0"+parseInt((timerValue/60)
                    %60) : parseInt((timerValue/60) %60)}:

                 { timerValue % 60 <10 ? "0"+timerValue % 60:timerValue % 60 } 
            
            </span>   
          
          </p><br></br>

           <Button click= {startHandler}  title= "Start"/>     
           <Button click= {stopHandler}  title= "Stop"/>  
           <Button  click= {resetHandler} title= "Reset"/> 
            </div>
    </div>
    )

}

export default App