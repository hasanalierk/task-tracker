
import { useState } from "react"
import AddTask from "../AddTask/AddTask"
import Task from "../Task/Task"
import "./Header.css"


const Header = ({appTaskData, setAppTaskData, setLocal}) => {
    const [show, setShow] = useState(true)

    const handleShow = () =>{
        setShow(!show)
    }
  return (
    <div>
        <div>
            <h1 className="text-center mt-3">Task Tracker</h1>
        </div>
        <div className=" text-center mt-3">
            <button className="header-button p-2 rounded bg-success" onClick={handleShow}> {show ? <span>Close Add Bar</span> : <span>Open Add Bar</span>  } </button>
        </div>

        {
            show &&  <AddTask appTaskData={appTaskData} setAppTaskData={setAppTaskData} setLocal={setLocal} /> 
        }
       
       
    </div>
  )
}

export default Header