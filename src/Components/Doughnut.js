import React,{useState} from 'react';
// import './Doughnut.css';
import '../Components/Doughnut.css'
import { GiNextButton } from "react-icons/gi";
import { GiPauseButton } from "react-icons/gi";



const Doughnut = () => {


  const addbutton=()=>  {

  }

  const pausebutton = () =>{
    
  }


  return (
   <>
    <div className="rectangle">
        <div className='wheel'>
        <div className="left-text"> <GiNextButton/> </div>
        <div className="right-text"> <GiNextButton/> </div>
          <div className="top-text"> Menu </div>
          <div className='bottom-txt'> <GiNextButton/> <GiPauseButton /> </div>
        <div className='wheel1'> </div>
        </div>
        
    </div>
   </>
  )
}

export default Doughnut