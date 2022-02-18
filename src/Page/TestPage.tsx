import React,{useEffect, useState} from 'react';
import {NavLink,useParams} from 'react-router-dom';

import Doctor from '../components/Doctor';
import Question from '../components/Question';

export default function TestPage(){ 
  const params = useParams();
  const [sy1,setSy1]=useState([
    "Hinchazón o distensión abdominal",
    "Diarrea",
    "Gases",
    "Náuseas",
    "Dolor en el abdomen",
    "vómito",
    "Gruñidos o ruidos estomacales"])
  const [sy2,setSy2]=useState([
    "Nauseas y vomitos",
    "Acidez estomacal frecuente",
    "dificultad al tragar",
    "Perdida de peso",
    "Hinchazón constante",
    "Heces con sangre",
    "Ojos o piel amarillos",
    "Fatiga excesiva",
    "Dolor de estomago"])
  const [sy3,setSy3]=useState([
    "Diarrea",
    "Estrechamiento de las heces",
    "Sensaciones de querer ir al baño falso",
    "Heces oscuras o sangrado",
    "Calambres o dolor abdominal",
    "Debilidad o fatiga",
    "Perdida de peso"])

  const [numQuestion,setNumQuestion]=useState(0);
  const [question,setQuestion]=useState('');
  const [symptoms,setSymptoms]=useState('');
  const [diagnosis,setDiagnosis]=useState({
    namePatient:'',
    e1:0,
    e2:0,
    e3:0
  })
  

  const nextQuestion1=(por:number)=>{
    setQuestion(sy1.pop()+'');
    setDiagnosis({... diagnosis,e1: diagnosis.e1 + por});
    setNumQuestion(numQuestion + 1);
  }

  const nextQuestion2=(p:number)=>{
    setQuestion(sy2.pop()+'')
    setDiagnosis({... diagnosis,e2: diagnosis.e2 + p});
    setNumQuestion(numQuestion + 1);
  }
  
  const nextQuestion3=(pr:number)=>{
    setQuestion(sy3.pop()+'')
    setDiagnosis({... diagnosis,e3:diagnosis.e3 + pr});
    setNumQuestion(numQuestion + 1);
  }

  
  
  const updateSymptoms=()=>{
    let symNow = symptoms;
    if(symNow ==='sy1'){
      setSymptoms('sy2')
    }
    if(symNow ==='sy2'){
      setSymptoms('sy3')
    }
    if(symNow === 'sy3'){
      setSymptoms('sy1')
    }
  }
 

  const changeQuestion= (p:number)=>{
    let symptomsN = symptoms;
    if(symptomsN ==='sy1'){
      nextQuestion1(p)
      return;
    }
    if(symptomsN ==='sy2'){
      nextQuestion2(p)
      return;
    }
    if(symptomsN === 'sy3'){
      nextQuestion3(p);
      return;
    }
  }
  

  const handleClick=(response:number)=>{
    switch (response) {
      case 1:
        console.log("Si")
        changeQuestion(10);
        break;
      case 2:
        console.log("No")
        changeQuestion(0);
        updateSymptoms();
        break;
      case 3:
        console.log("A veces")
        changeQuestion(5);
        break;
    }
    console.log(diagnosis)
  }
  
  const renderBtn=()=>{
    if(numQuestion < 8){
      return(
        <>
          <p>Dime si tienes este sintoma: </p>
          <Question question={question}></Question>
          <div className='btn-option'>
            <button className='btn btn-primary' onClick={e=>handleClick(1)}>Si</button>
            <button className='btn btn-secondary' onClick={e=>handleClick(2)}>No</button>
            <button className='btn btn-primary' onClick={e=>handleClick(3)}>A veces</button>
          </div>
        </>
      )
    }else{
      let e='';
      let por = '';
      if(diagnosis.e1 > diagnosis.e2 && diagnosis.e1 > diagnosis.e3){
        e="posibilidad de sufrir por Intolerancia a la lactosa"
        if(diagnosis.e1 > 50){
          por="Tienes Alta"
        }else{
          por="Tienes Baja"
        }
      }else if(diagnosis.e2 > diagnosis.e1 && diagnosis.e2 > diagnosis.e3){
        e="posibilidad de sufrir por Cancer en el estomago"
        if(diagnosis.e2 > 50){
          por="Tienes Alta"
        }else{
          por="Tienes Baja"
        }
      }else if(diagnosis.e3 > diagnosis.e1 && diagnosis.e3 > diagnosis.e2){
        e="posiblidiad de sufrir por Cancer de colon"
        if(diagnosis.e3 > 50){
          por="Tienes una Alta"
        }else{
          por="Tienes una Baja"
        }
      }else{
        por="Felicidades Te has cuidado !!"
        e="Estas sano"
      }
      return (
        <>
          <h2>Test Finalizado</h2>
          <h3>{por} {e}</h3>
        </>
      )
    }
  }


  
  useEffect(() => {
      setSymptoms('sy1');
      nextQuestion1(0);
      setDiagnosis({... diagnosis,namePatient:params.name+''})
      setNumQuestion(numQuestion + 1)
  },[]);

  return (
      <div>
        <Doctor speak={`Hola... ! ${params.name}, Un gusto atenderte.`}></Doctor>
        {renderBtn()}
      <div>
      </div>
      <a className='btn-init'>
        <NavLink to="/">Regresar</NavLink>
      </a>
      </div>
  )
}