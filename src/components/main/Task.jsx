import { useState } from "react";

function Task({id, title, completed, onTaskCompleted}){
    const [isCompleted, setIsCompleted] = useState(completed)

    const handleCompleted = () => {
        const updateCompleted = !isCompleted;
        setIsCompleted(updateCompleted)
        onTaskCompleted(id, {completed: updateCompleted})
    }
    return (
        <div className="task flex justify-between items-center py-3 border-b border-gray-300">
            <h3 className="text-base flex-1">{title}</h3>
            <button onClick={handleCompleted} className={`bt-edit ${isCompleted? 'bg-green-500 !text-white !border-green-500' : ''}`}>
                <span className="material-symbols-rounded mr-1"></span>
                {!isCompleted && 'Mark as'} Done
            </button>
        </div>
    )
}

export default Task;