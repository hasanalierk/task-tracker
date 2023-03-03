
import "./Task.css"
import { MdDeleteForever } from "react-icons/md"

const Task = ({appTaskData, setAppTaskData, setLocal}) => {
   console.log(appTaskData)

    const handleDelete = (id) =>{
        setAppTaskData(appTaskData.filter((item) => item.id !== id))
        console.log(id)
    }

    const handleDoubleClick = (id) =>{
      setAppTaskData(appTaskData.map((item) => item.id === id ? {...item, rol: !item.rol} : item  ))

      
    }

  return (
    <div>
        <div className="task-container-div">
            {
                appTaskData.map((item) =>{
                    const {id, task, day, rol} = item
                    return(
                        <div onDoubleClick={() => handleDoubleClick(id)} key={id} className={rol ? "map-div" : "map-div through"}  >
                            <h3> {task} </h3>
                            <h3> {new Date(day).toLocaleDateString()} / {new Date(day).toLocaleTimeString()} </h3>
                          
                           <MdDeleteForever onClick={ () => handleDelete(id)} type="button"  className="delete-icon fs-2 text-danger" />
                           
                        </div>
                        
                        
                    )
                })
            }
        </div>
        
    </div>
  )
}

export default Task


