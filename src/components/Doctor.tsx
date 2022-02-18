import React,{useState} from 'react';
import vdoctor from './bg.gif';

interface SpeakDoctor{
    speak:string;
}

export default function Doctor(props: SpeakDoctor) {       
  return (
    <div>
        <img src={vdoctor} style={{width:200}} />    
        <p>{props.speak}</p>
        <hr />
    </div>
  )
}
