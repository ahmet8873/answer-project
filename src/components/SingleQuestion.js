import React, { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const SingleQuestion = ({question,answer}) => {
    const[showanswer,setShowanswer]=useState(false)


  return (
    <section className='single-question'>
      {showanswer? <div>
        <header>
            <h4 className='question'>{question}</h4>
            <button className='show-answer'><AiOutlineMinus onClick={()=>setShowanswer(!showanswer)} /></button>
        </header>
        
        <p className='answer'>{answer}</p>
      </div>:<header>
            <h4 className='question'>{question}</h4>
            <button className='show-answer'><AiOutlinePlus onClick={()=>setShowanswer(!showanswer)} /></button>
        </header> }
        
     
    </section>
  )
}

export default SingleQuestion