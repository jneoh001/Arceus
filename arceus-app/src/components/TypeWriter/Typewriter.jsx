import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Typewriter() {
    
    const [text] = useTypewriter({
        words: ['Recipe','Tracker','Solution'],
        loop: {},
        typeSpeed: 120,
        cursorColor : 'red',
        cursorStyle : "<",
        cursorBlinking: false,
        delaySpeed: 2000
      });

    return (
    <div className='mx-auto h-1/5'>
        <h1 
        className="text-7xl" 
        style={{
            lineHeight: 1.6,
            color: "white",
        }}
        >
        Looking for a  <br /> 
        <span style={{fontWeight: 'bold', color:'#FFBF00'}}>
          &nbsp; &nbsp;{text}
          ?
        </span>
        <Cursor />
        </h1>
    </div>
   
  )
}
