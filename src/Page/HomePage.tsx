import React,{useState} from 'react'
import {NavLink} from 'react-router-dom';
import Doctor from '../components/Doctor';

export default function HomePage() {
  const [name,setName]=useState('');

  
  return (
    <div style={{height:100}}>
      <Doctor speak='Hola... ! Bienvenido'></Doctor>
      <p>Para iniciar ingresa tu nombre</p>
      <input type="text" onChange={e => setName(e.target.value)}/>
      <br />
      <a className='btn-init'>
        <NavLink to={`/tests/${name}`}>Iniciar</NavLink>
      </a>
    </div>
  )
}