import React, {useState} from "react";

/* Fuction to create an Array of our requirement */
const generateOutputArr = (startRange,endRange) => {

  var outArr = [];

  startRange == '' ? 1 : parseInt(startRange)
  endRange == '' ? 100 : parseInt(endRange)

  if(!(startRange == '' && endRange == '')){

    for(i=startRange;i<=endRange;i++){
      if(i%3==0 && i%5==0){
        outArr.push("RobotICT");
      }
      else if(i%3==0){
        outArr.push("Robot")
      }
      else if(i%5==0){
        outArr.push("ICT")
      }
      else{
        outArr.push(i.toString())
      }
    }
    return outArr;
  }
  else{
    outArr.push("Enter Some Range")
     return outArr
  }
  
}



export const App = () =>{

  /* Setting the initial state of range between 1 to 100 */
  const [state, setState] = React.useState({
    startRange: 1,
    endRange: 100
  })
  var initalList = generateOutputArr(1,100)

  var [numberlist,setList] = useState(initalList);





  const  handleInputChange = event => {
  event.preventDefault();
  const value = event.target.value;
    /*Setting the state whenever there is a change*/
  setState({
    ...state,
    [event.target.name]: value
  });

  }

  Handlechange = event =>{
    setList(generateOutputArr(state.startRange,state.endRange))
  }
  
  return (
    <div>
            <h2 style={{backgroundColor: "orange"}}>
            RobotICT</h2>
            <br></br>
    
            <label>Start Range:   </label>
           
    
            <input
              type="text"
              name="startRange"
              value={state.startRange}
              onChange={handleInputChange}
            />
    <br></br>
    <br></br>
     <label>End Range:    </label>
   
    <input
              type="text"
              name="endRange"
              value={state.endRange}
              onChange={handleInputChange}
            />
    <br></br>
    <button onClick={Handlechange}>
      Change
    </button>
    
     <br></br>
     <br></br>
   
     {numberlist.map(function(d, idx){
         return (<ul key={idx}>{d}</ul>)
       })}
    </div>
        );
}