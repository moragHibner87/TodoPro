import Task from "./Task";

function Todos({userId, todos, onTaskCompleted, onOpenModal, switchContent}){

    const handleOpenModal = () => {
        onOpenModal()
        switchContent('todo')
    }

    const userTodos = todos.filter(todo => todo.userId === userId);

    return (
        <section className="todos mb-8">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-2xl lg:text-3xl !leading-[1.2] font-semibold">Todos: <span>Id {userId}</span></h2>
                <button onClick={handleOpenModal} className="bt-primary">
                    <span className="material-symbols-rounded mr-1">checklist</span>
                    Add New
                </button>
            </div>
            <div className="border-t border-gray-300">
                {userTodos.length > 0 ? (
                    userTodos.map(task => (
                        <Task 
                        key={task.id} 
                        id={task.id} 
                        title={task.title} 
                        completed={task.completed} 
                        onTaskCompleted={onTaskCompleted}
                        />
                    ))
                ) : (
                    <div className='py-8 text-xl text-gray-500'>
                        <span className="material-symbols-rounded">
                            sentiment_dissatisfied
                        </span>
                        <p>No todos found for this user. Start adding new todos for them!</p>
                    </div>

                )}

               
            </div>
        </section>
    )
}

export default Todos;