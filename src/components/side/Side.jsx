import { useState, useEffect } from 'react'
import User from "./User";

function Side({users, todos, selectedId, isSideOpen, onUpdateUser, onDeleteUser, onEditUser, onOpenModal, switchContent, onCloseSide}){
    const [searchValue, setSearchValue] = useState('')
    const [isOpen, setIsOpen] = useState(isSideOpen);

    useEffect(() => {
        setIsOpen(isSideOpen)
        //console.log(isOpen);
    }, [isSideOpen])

    const searchResults = users && searchValue ? users.filter(user => {
        return  user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                user.email.toLowerCase().includes(searchValue.toLowerCase())
    }) : [];

    const handleOpenModal = () => {
        onOpenModal()
        switchContent('user')
    }
    const handleCloseSide = () => {
        onCloseSide()
    }

    return(
        <div className={`side ${isOpen? 'slideIn' : ''} max-w-[450px] bg-white shadow-lg h-[100svh] overflow-auto has-scroll fixed lg:sticky top-0`}>
            <div className='py-3 px-4 lg:hidden flex justify-end'>
                <button onClick={handleCloseSide} className='text-blue-600 text-2xl flex items-center'>
                    <span className="material-symbols-rounded">arrow_right_alt</span>
                </button>
            </div>
            
            <div className="bg-blue-100 py-3 px-4 flex items-center gap-2">
                <div className="relative flex-1">
                    <label className="sr-only">Search</label>
                    <input onChange={e => setSearchValue(e.target.value)} value={searchValue} type="text" placeholder="Search.." className="w-full rounded-[60px] h-[45px] px-6 pl-10 outline-none focus:outline-none"/>
                    <span className="absolute flex items-center h-full px-2 top-0 left-0 text-blue-500">
                        <span className="material-symbols-rounded">search</span>
                    </span>
                    {searchValue && (
                        <button onClick={() => setSearchValue('')} className="absolute flex items-center h-full px-2 right-0 top-0 text-gray-400">
                            <span className="material-symbols-rounded">close</span>
                        </button>
                    )}
                   
                </div>
                <button onClick={handleOpenModal} className="bt-primary">
                    <span className="material-symbols-rounded mr-1">account_circle</span>
                    Add New
                </button>
            </div>
            <div className="side-list p-5 grid gap-3">

                {searchValue === '' && (
                    users.map(user => (
                        <User 
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            address={user.address}
                            todos={todos}
                            selectedId={selectedId}
                            onUpdateUser={onUpdateUser}
                            onDeleteUser={onDeleteUser}
                            onEditUser={onEditUser}
                            onCloseSide={onCloseSide}
                        />
                        
                    ))
                )}

                {searchValue && searchResults.length === 0 && (
                    <div className='text-center p-4 text-xl text-gray-500'>
                        <span className="material-symbols-rounded">
                            sentiment_dissatisfied
                        </span>
                        <p>No matching users found.</p>
                    </div>
                )}

                {searchValue &&
                    searchResults.map((user) => (
                        <User
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            address={user.address}
                            todos={todos}
                            selectedId={selectedId}
                            onUpdateUser={onUpdateUser}
                            onDeleteUser={onDeleteUser}
                            onEditUser={onEditUser}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Side;