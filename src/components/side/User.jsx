import { useState } from 'react'
import Address from "./Address";

function User({id, name, email, address, todos, selectedId, onUpdateUser, onDeleteUser, onEditUser, onCloseSide }){
    const [isExpand, setIsExpand] = useState(false);
    const [updatedName, setUpdatedName] = useState(name);
    const [updatedEmail, setUpdatedEmail] = useState(email);

    const isCurrent = selectedId === id;
    const userTask = todos.find(todo => todo.userId === id);
    const isCompleted = userTask && userTask.completed;

    const handleUpdate = () => {
        onUpdateUser(id, { name: updatedName, email: updatedEmail });
        //console.log({ name: updatedName, email: updatedEmail })
    }

    const handleDelete = () => {
        onDeleteUser(id)
    }
    const handleEdit = () => {   
        onEditUser(id)
        onCloseSide()
    }

    return(
        <div className={`user-box ${isCompleted? 'border-green-500' : 'border-red-500'} ${isCurrent? 'bg-orange-100' : ''} border rounded-md transition-all hover:shadow-lg overflow-hidden`}>
            <div className="user-box-top p-4 px-5 relative">
                <button onClick={handleEdit} className="bt-edit absolute top-3 right-3">
                    <span className="material-symbols-rounded mr-1">border_color</span>
                    Edit
                </button>
                <div onClick={handleEdit} className="text-gray-500 text-sm mb-4">Id {id}</div>
                <div className="mb-4">
                    <label className="label">Name</label>
                    <input type="text" value={updatedName}  className="input" onChange={e => setUpdatedName(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label className="label">Email</label>
                    <input type="text" value={updatedEmail}  className="input" onChange={e => setUpdatedEmail(e.target.value)}/>
                </div>
                <div className="flex items-center justify-end gap-3 pt-2">
                    {address && (
                        <button onClick={() => setIsExpand(!isExpand)} className="mr-auto flex items-center text-sm">
                            Show more
                            <span className={`material-symbols-rounded ${isExpand? 'rotate-180' : ''} mr-1 transition-all`}>expand_more</span>
                        </button>
                    )}
                   
                    <button onClick={handleDelete} className="flex items-center text-sm text-red-500">
                        <span className="material-symbols-rounded mr-1">delete</span>
                        Delete
                    </button>
                    <button onClick={handleUpdate} className="bt-primary !px-6 !h-[35px]">Update</button>
                </div>
            </div>
            <div className="user-box-open bg-blue-50" aria-expanded={isExpand? 'true' : 'false'}>
                <Address address={address}/>
            </div>
            
        </div>
    )
}

export default User;