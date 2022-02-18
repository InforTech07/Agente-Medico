import React from 'react'

interface Quest{
    question:string;
}

function Question(props: Quest) {
  return (
    <p>{props.question}</p>
  )
}

export default Question