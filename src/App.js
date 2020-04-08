import React from 'react';
const cashFlows = [];


function App() {
  //plain variables in the app function are set back to default every change

const [currentCFValue, setCurrentCFValue] = React.useState();
const [r, setr] = React.useState(50);
const [initialInvest, setInitialInvest] = React.useState();
const [theNpv, setNpv] = React.useState(0);
const [cashFlowsString, setCashFlowsString] = React.useState("");




  function handleCashFlows() {
    let strungOut = "";
    cashFlows.push(currentCFValue);
    for (let entry in cashFlows) {
      strungOut += cashFlows[entry].toString();
      strungOut += ",";
    }
    setCashFlowsString(strungOut);
    console.log(cashFlows);
  }

  return (
  <div>
    
    <div>
      <h1>{theNpv}</h1>
      <button name="findNPV" onClick ={() => setNpv(findNPV)}>find NPV</button>
    </div>

    <div>
      <div>Initial Investment: {initialInvest}</div>
      <input type="text" name ="initialInv" onChange={(event) => setInitialInvest(event.target.value)} />  
    </div>

    <div>
      <div>Target ROR: {r}%</div>
      <input type="range" min="0" max="100" step="1" name ="ROR" onChange={(event) => setr(event.target.value)} />
    </div>

    <div>
      <div>Cash Flows: {cashFlowsString}</div>
      <input type="text" name ="cashFlow" onChange={(event) => setCurrentCFValue(event.target.value)} />
      <button name="cashFlowBtn" onClick ={handleCashFlows}>Add Cash Flow</button>
    </div>

  </div>
    
  )
  function findNPV() {
    let rDec = r/100;
    console.log("before r " + r);
    var npv = null;
    for (var flow in cashFlows) {
      var powerOf=parseInt(flow) +  1;
      npv += cashFlows[flow] / Math.pow(1 + rDec,  powerOf);
    }
    console.log("r " + r);
    console.log("cashflows " + cashFlows);
    console.log("initial Invest " + initialInvest);
    console.log("npv " + npv);
    console.log(theNpv);
    return ((npv - initialInvest).toFixed(2));
  }
  //{cashFlows.map((number) => <li key ={number.toString()}>{number}




























} 

export default App;