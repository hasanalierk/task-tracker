import "./AddTask.css";

import { useState } from "react";


const AddTask = ({appTaskData, setAppTaskData, setLocal}) => {


  const [taskValue, setTaskValue] = useState("");
  const [dayValue, setDayValue] = useState("");

  const handleChangeTask = (e) => {
    setTaskValue(e.target.value);
  };

  const handleChangeValue = (e) => {
    setDayValue(e.target.value);
  };

  const handleSave = (e) =>{
   
    e.preventDefault()
    setAppTaskData([...appTaskData,{
      id: appTaskData.length+1,
      task: taskValue,
      day: dayValue,
      rol:true
    }])
   
    setDayValue("")
    setTaskValue("")
    

   
  }

 
  return (
    <div>
      <form onSubmit={ (e) => handleSave(e)} className="text-center mt-4">
        <div className="mb-1">Task</div>
        <input
          type="text"
          placeholder="AddTask"
          onChange={(e) => handleChangeTask(e)}
          value={taskValue}
        />

        <div className="mt-4 mb-1">Day & Time</div>
        <input
          type="datetime-local"
          placeholder="Add Day & Time"
          onChange={(e) => handleChangeValue(e)}
          value={dayValue}
        />

        <div className="mt-4">
          <button className="save-button" >Save Task</button>
        </div>
      </form>

      
    </div>
  );
};

export default AddTask;
