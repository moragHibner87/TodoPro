import { useState, useEffect } from "react";

function AddUser({selectedId, isModalOpen, onCloseModal, onAddNewUser}){
    const [newName, setNewName] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [isOpen, setIsOpen] = useState(isModalOpen);

    useEffect(() => {
        setIsOpen(isModalOpen)
    }, [isModalOpen])

    const handleCloseModal = () => {
        setIsOpen(false);
        setNewName('');
        setNewEmail('');
        onCloseModal()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newName !== ''){
            const newObj = {
                name: newName,
                email: newEmail,
            }
            onAddNewUser(newObj)
    
            setIsOpen(false);
            setNewName('');
            setNewEmail('');
            onCloseModal()
        }
       
    }

    return (
        <div>
            <h2 className="text-2xl lg:text-3xl !leading-[1.2] font-semibold mb-5">Add New User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="label !text-sm mb-1">User Full Name:</label>
                    <input type="text" value={newName} onChange={e => setNewName(e.target.value)}  className="input rounded border border-gray-300 px-4" />
                </div>
                <div className="mb-4">
                    <label className="label !text-sm mb-1">User Email:</label>
                    <input type="text" value={newEmail} onChange={e => setNewEmail(e.target.value)}  className="input rounded border border-gray-300 px-4" />
                </div>
                <div className="flex justify-center lg:justify-end pt-5 gap-3">
                    <button onClick={handleCloseModal} type="button" className="bt-primary !bg-white !text-blue-600 !border !border-solid border-blue-600 min-w-[120px]">
                        Cancel
                    </button>
                    <button type="submit" className="bt-primary">
                        <span className="material-symbols-rounded mr-1">account_circle</span>
                        Add User
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddUser;