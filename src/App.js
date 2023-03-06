
import Header from "./components/Header/Header";
import "./App.css"
import Task from "./components/Task/Task";
import { data } from "./helper/data";
import { useEffect, useState } from "react";

function App() {
  const [appTaskData, setAppTaskData] = useState(JSON.parse(localStorage.getItem("appTaskDataLocal")) || data)

  const getLocal = () =>{
    const appTaskDataGetItemLocal = localStorage.getItem("appTaskDataLocal")
   setAppTaskData(JSON.parse(appTaskDataGetItemLocal))
   console.log(appTaskDataGetItemLocal)
  }

  const setLocal = () =>{
    localStorage.setItem("appTaskDataLocal",JSON.stringify(appTaskData))
  }



  // useEffect(() => {
  // getLocal()
  
  // }, [])

  
  useEffect(() => {
    setLocal()
    
  },[appTaskData])
  
  
  
  return (
    <div className="container">
      <Header appTaskData={appTaskData} setAppTaskData={setAppTaskData} />
      <Task appTaskData={appTaskData} setAppTaskData={setAppTaskData}  />
      
    </div>
  );
}

export default App;


// en son tıklananın üstünü çizme mevzusunda kaldım bir hata alıyodum ordan devame edersin

