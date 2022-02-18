import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h2>Not Found 404</h2>
      <h3>Ingrese un nombre valido</h3>
      <li className='btn-init'>
        <NavLink to={`/`}>Regresar</NavLink>
      </li>
    </div>
  )
}
