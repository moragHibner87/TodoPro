import { useState, useEffect } from "react";

function AddTodo({selectedId, isModalOpen, onCloseModal, onAddNewTodo}){
    const [newTitle, setNewTitle] = useState('')
    const [isOpen, setIsOpen] = useState(isModalOpen);

    useEffect(() => {
        setIsOpen(isModalOpen)
    }, [isModalOpen])

    const handleCloseModal = () => {
        setIsOpen(false);
        setNewTitle('');
        onCloseModal()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newTitle !== ''){
            const newObj = {
                userId: selectedId,
                title: newTitle,
                completed: false,
            }
            onAddNewTodo(newObj)
    
            setIsOpen(false);
            setNewTitle('');
            onCloseModal()
        }
       
    }

    return(
        <div>
            <h2 className="text-2xl lg:text-3xl !leading-[1.2] font-semibold mb-5">Add New Todo for Id {selectedId}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="label !text-sm mb-1">Task Title:</label>
                    <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)}  className="input rounded border border-gray-300 px-4" />
                </div>
                <div className="flex justify-center lg:justify-end pt-5 gap-3">
                    <button onClick={handleCloseModal} type="button" className="bt-primary !bg-white !text-blue-600 !border !border-solid border-blue-600 min-w-[120px]">
                        Cancel
                    </button>
                    <button type="submit" className="bt-primary">
                        <span className="material-symbols-rounded mr-1">checklist</span>
                        Add Todo
                    </button>
                </div>
            </form>
        </div>
    )
    }

export default AddTodo;