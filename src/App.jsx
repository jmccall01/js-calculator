import React from 'react'
import './App.css'

function App() {
  const [calculation, setCalculation] = React.useState("");
  const [current, setCurrent] = React.useState("0");

  function handleNumber(e) {
    const num = e.target.innerHTML;
    console.log(num)
    if(calculation.slice(-1)=="="){
      setCalculation(num);
      setCurrent(num);
    }
    else if (current=="0" || [ "/", "+", "*", "-"].includes(current) ){
      setCurrent(num)
      setCalculation(pre => pre + num)
    }
    else{
      setCurrent(pre => pre + num);
      setCalculation(pre => pre + num)
    }

  }

  function handleOperand(e){
    let operand = e.target.innerHTML;
    if (operand=="x"){
      operand="*";
    }
    const operandArr = [ "/", "+", "*"];
    const operandArr2 = [ "/", "+", "*", "-", "."];
    const lastInput = calculation.slice(-1);
    const secondLastInput = calculation.slice(-2, -1);

    if (operandArr2.includes(lastInput) && operandArr2.includes(secondLastInput)){
      setCurrent(operand);
      setCalculation(pre => pre.slice(0, -2) + operand)}
    else if (operandArr2.includes(lastInput) && operandArr.includes(operand)){
      setCurrent(operand);
      setCalculation(pre => pre.slice(0, -1) + operand)
    }
    else if (lastInput=="="){
      setCalculation(current + operand);
      setCurrent(operand)
    }
    else if (operand=="."){
      if(current.includes(".")){
        return;
      };
      setCurrent(pre => pre + operand);
      setCalculation(pre => pre + operand);
    }
    else{
      setCurrent(operand);
      setCalculation(pre => pre + operand)
    }
  }

  function handleClear(){
    setCalculation("");
    setCurrent("0");
  }

  function handleEquals(){
    if(calculation.slice(-1)!=="="){
      setCalculation(pre => pre + "=")
    }
    setCurrent(eval(calculation))
  }

  return (
    <>
    <h1 className='heading'>(React) JavaScript Calculator - Josh McCall</h1>
      <div className='calculator'>
        <div className='calc-component'>
          {calculation}
        </div>
        <div className='display' id="display">
          {current}
        </div>
        <div className='input-grid'>
          <div className="input-button clear" id="clear" onClick={handleClear}>AC</div>
          <div className="input-button divide" id="divide" onClick={handleOperand}>/</div>
          <div className="input-button multiply" id="multiply" onClick={handleOperand}>x</div>
          <div className="input-button seven" id="seven" onClick={handleNumber}>7</div>
          <div className="input-button eight" id="eight" onClick={handleNumber}>8</div>
          <div className="input-button nine" id="nine" onClick={handleNumber}>9</div>
          <div className="input-button subtract" id="subtract" onClick={handleOperand}>-</div>
          <div className="input-button four" id="four" onClick={handleNumber}>4</div>
          <div className="input-button five" id="five" onClick={handleNumber}>5</div>
          <div className="input-button six" id="six" onClick={handleNumber}>6</div>
          <div className="input-button add" id="add" onClick={handleOperand}>+</div>
          <div className="input-button one" id="one" onClick={handleNumber}>1</div>
          <div className="input-button two" id="two" onClick={handleNumber}>2</div>
          <div className="input-button three" id="three" onClick={handleNumber}>3</div>
          <div className="input-button equals" id="equals" onClick={handleEquals}>=</div>
          <div className="input-button zero" id="zero" onClick={handleNumber}>0</div>
          <div className="input-button decimal" id="decimal" onClick={handleOperand}>.</div>
        </div>

      </div>
    </>
  )
}

export default App
