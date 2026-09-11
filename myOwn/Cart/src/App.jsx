import { useState,useRef } from 'react'
import './App.css'
function App() {
let list=["100% Aim Lock","AntiBand","100% Head Shot","Working all android","Free skins","Free Diamonds 1000"];
return (
  <>
  <h1> Hacker's Story</h1>
  <Cart list={list} ></Cart>
  </>
)
}
function Cart(props){
const[value,setValue]=useState(props.list);
const[input1,setinput1]=useState("");


console.log(value);

function dele(itemtodelete){
  setValue(value.filter(function(item){
return item !==itemtodelete;
  }));
}
return (
  <div>
    <h2> THis is list of ITems </h2>
    <ul>
      <ol>
      {value.map(function(item){
        return <li>{item} <button  onClick={function(){
          dele(item);
        }} > delete</button>   </li>

        
      })}
      </ol>
    </ul>
    <button onClick={function(){
        setValue(props.list);
      // window.location.reload();

    }} > Refresh</button>

    <input type="text" placeholder='type your Detail'  onKeyDown={function(event){
      console.log(event.key);
      if(event.key==="Enter"){
        setValue([...value,input1]);
      setinput1("");
      }
    }}     value={input1} onChange={function(event){
       return setinput1(event.target.value);
     
    }}    />
    <button  onClick={function(){
      setValue([...value,input1]);
      setinput1("");
      // value.push(inputRef.current.value);
      // console.log("i am list here",props.list)
      
      
    }}   >Add1 </button>

  </div>
)
}
export default App
