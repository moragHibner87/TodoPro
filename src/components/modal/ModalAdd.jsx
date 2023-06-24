import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import AddPost from "./AddPost"
import AddUser from "./AddUser";

function ModalAdd({selectedId, isModalOpen, activeContent, onCloseModal, onAddNewUser, onAddNewTodo, onAddNewPost}){
    const [isOpen, setIsOpen] = useState(isModalOpen);

    useEffect(() => {
        setIsOpen(isModalOpen)
        //console.log(isOpen);
    }, [isModalOpen])

    const handleCloseModal = () => {
        setIsOpen(false)
        onCloseModal()
    }
  

    return(
        <div className={`modal ${activeContent} fixed inset-0 z-10 ${isOpen? 'open' : ''}`}>

            <div className="popup-wrap w-full h-full overflow-auto p-3 flex items-center justify-center">
                <div className="popup bg-white rounded-2xl p-8  px-6 lg:px-10 w-full max-w-[650px] relative z-[11]">
                    <button onClick={handleCloseModal} className="absolute top-0 right-0 p-3">
                        <span className="material-symbols-rounded mr-1">close</span>
                    </button>

                    {activeContent === 'user' && (
                         <AddUser
                         isModalOpen={isModalOpen}
                         onCloseModal={onCloseModal}
                         onAddNewUser={onAddNewUser}
                        />
                    )}

                    {activeContent === 'todo' && (
                        <AddTodo
                        selectedId={selectedId}
                        isModalOpen={isModalOpen}
                        onCloseModal={onCloseModal}
                        onAddNewTodo={onAddNewTodo}
                        />
                    )}

                    {activeContent === 'post' && (
                         <AddPost
                         selectedId={selectedId}
                         isModalOpen={isModalOpen}
                         onCloseModal={onCloseModal}
                         onAddNewPost={onAddNewPost}
                        />
                    )}

                 
                </div>
                <div onClick={handleCloseModal} className="fixed inset-0 z-10 bg-black/60"></div>
            </div>
           
        </div>
    )
    }

export default ModalAdd;