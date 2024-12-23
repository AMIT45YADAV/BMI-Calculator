import React, { useState } from 'react'

const Bmi = () => {
  const[weight,setWeight] = useState()
  const[height,setHeight] = useState()
  const[BmiResult,setBmiResult] = useState()
  const[msg,setMsg] = useState()

  const handleInput = (e) =>{
    // console.log(e.target.value)
    // console.log(e.target.name)

    if(e.target.name == 'weight'){
      setWeight(e.target.value)
    }
    if(e.target.name == 'height'){
      setHeight(e.target.value)
    }
  }


  const calculate = () =>{
    // formula BMI = weight/m*m
    // 1feet = 0.3048
    let meter = height*0.3048;
    let meterSquare = meter * meter;
    let BMI = (weight/meterSquare).toFixed(3);
    console.log(BMI)
    setBmiResult(`Your BMI result is : ${BMI}`)

    if(BMI < 18){
      setMsg("You are Underweight")
    }
    if(BMI >=18 && BMI <25){
      setMsg("You are Normal Weight")
    }
    if(BMI >= 25 & BMI < 30 ){
      setMsg("You are Overweight")
    }
    if(BMI >=30){
      setMsg("You are Obesity")
    }
  }

  const reloadBtn = () =>{
    window.location.reload()
  }

  return (
    <div className='container'>
      <div className="heading">
        <h1>BMI Calculator</h1>
      </div>
      <div className="inputs">
        <p>Enter your weight (kg)</p>
        <input type="text" placeholder='weight' name='weight' onChange={handleInput}/>
        <div className='height'>
        <p>Enter your Height (feet)</p>
        <input type="text" placeholder='Height' name='height' onChange={handleInput}/>
        </div>
      </div>
      <div className="btns">
        <button onClick={calculate}>Calculate</button>
        <button className='reloadBtn' onClick={reloadBtn}>Reload</button>
      </div>
      <div className="result">
        <p>{BmiResult}</p>
        <p>{msg}</p>
      </div>
    </div>
  )
}

export default Bmi
