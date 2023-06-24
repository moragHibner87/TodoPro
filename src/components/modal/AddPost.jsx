import { useState, useEffect } from "react";

function AddPost({selectedId, isModalOpen, onCloseModal, onAddNewPost}){
    const [newTitle, setNewTitle] = useState('')
    const [newBody, setNewBody] = useState('')
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
                body: newBody,
            }
            onAddNewPost(newObj)
    
            setIsOpen(false);
            setNewTitle('');
            setNewBody('');
            onCloseModal()
        }
       
    }

    return(
        <div>
            <h2 className="text-2xl lg:text-3xl !leading-[1.2] font-semibold mb-5">Add New Post for Id {selectedId}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="label !text-sm mb-1">Post Title:</label>
                    <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)}  className="input rounded border border-gray-300 px-4" />
                </div>
                <div className="mb-4">
                    <label className="label !text-sm mb-1">Post Description:</label>
                    <textarea value={newBody} onChange={e => setNewBody(e.target.value)}  className="input rounded border border-gray-300 p-4 resize-none !h-[100px]"></textarea>
                </div>
                <div className="flex justify-center lg:justify-end pt-5 gap-3">
                    <button onClick={handleCloseModal} type="button" className="bt-primary !bg-white !text-blue-600 !border !border-solid border-blue-600 min-w-[120px]">
                        Cancel
                    </button>
                    <button type="submit" className="bt-primary">
                        <span className="material-symbols-rounded mr-1">post_add</span>
                        Add Post
                    </button>
                </div>
            </form>
        </div>
    )
    }

export default AddPost;