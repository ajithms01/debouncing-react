import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App() {
  const[data,setData]=useState([]);
  useEffect(()=>{
    async ()=>{
      const result=await axios.get('./jsonfile');
      setData(result);
    }
  },[])
  return (
    <div className="app">
      <input
        placeholder="Search Input.."
        onChange={(event) => setPinCode(event.target.value)}
      />
    </div>
  );
}
