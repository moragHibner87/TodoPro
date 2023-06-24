import Todos from "./Todos";
import Posts from './Posts'

function Main({users, todos, posts, selectedId, onTaskCompleted, onOpenModal, switchContent}){
    return (
        <section className="main-area pt-20 lg:pt-10 px-5 lg:px-10 p-10 flex-1">
            
            {selectedId !== null ? (
                    <>
                    <Todos 
                        userId={selectedId} 
                        todos={todos} 
                        onTaskCompleted={onTaskCompleted} 
                        onOpenModal={onOpenModal}
                        switchContent={switchContent}

                    />
                    <Posts 
                        userId={selectedId} 
                        posts={posts}
                        onOpenModal={onOpenModal} 
                        switchContent={switchContent}
                    />
                    </>
                    
                ) : (
                <div className="pt-12">
                    <h1 className="text-5xl md:text-8xl !leading-[1.2] font-semibold mb-3">Welcome to<br/><span className="text-blue-600">TodoPro</span></h1>
                    <h2 className="text-2xl text-gray-700 mb-5">Simplify Your Tasks with Ease</h2>
                    <p className="text-base text-gray-700">Created by: Morag Hibner, FullStack Developer. <br/>
                    this project is about State management, Dynamic components, Props drilling and more</p>
                </div>
                )
            }
           
        </section>
    )
}

export default Main;