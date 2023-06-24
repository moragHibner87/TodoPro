import { useState, useEffect } from 'react'
import { getAll} from './utils'
import Side from './components/side/Side'
import Main from './components/main/Main';
import ModalAdd from "./components/modal/ModalAdd";


function App() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("");
  const [isSideOpen, setIsSideOpen] = useState(false)

  //fetch Users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const dataUsers = await getAll('https://jsonplaceholder.typicode.com/users');
        if (dataUsers.length > 0) {
          setUsers(dataUsers)
          //console.log('api users: ' + JSON.stringify(dataUsers))
        }
      } catch (error) {
        console.error('Error retrieving users:', error);
      }
    }
    fetchUsers()

  }, [])

  //fetch Todos
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const dataTodos = await getAll('https://jsonplaceholder.typicode.com/todos');
        if (dataTodos.length > 0) {
          setTodos(dataTodos)
          //console.log('api todos: ' + JSON.stringify(dataTodos))
        }
      } catch (error) {
        console.error('Error retrieving todos:', error);
      }  
    }
    fetchTodos()

  }, [])

   //fetch Posts
   useEffect(() => {
    const fetchPosts = async () => {
      try {
        const dataPosts = await getAll('https://jsonplaceholder.typicode.com/posts');
        if (dataPosts.length > 0) {
          setPosts(dataPosts)
          //console.log('api todos: ' + JSON.stringify(dataTodos))
        }
      } catch (error) {
        console.error('Error retrieving posts:', error);
      }  
    }
    fetchPosts()

  }, [])

  // update user
  const onUpdateUser = (userId, updatedUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map(user => {
        if (user.id === userId) {
          return { ...user, ...updatedUser };
        }
        return user;
      });
      return updatedUsers;
    });
  };

  // delete user
  const onDeleteUser = (userId) => {
    setUsers((prevUsers) => {
      const filteredUsers = prevUsers.filter(user => user.id !== userId);
      return filteredUsers;
    })
    setSelectedId(null)

  }
  const onEditUser = (userId) => {
    setSelectedId(userId)
    //console.log(userId)
  }

  // completed task
  const onTaskCompleted = (taskId , updateTask) => {
    console.log(taskId , updateTask)
    setTodos((prevTodos) => {
      const updateTodos = prevTodos.map(todo => {
        if(todo.id === taskId ){
          return {...todo, ...updateTask};
        }
        return todo;
      })
      return updateTodos;
    })
  }

  // add new user
  const onAddNewUser = (newObj) => {
    const highestId = Math.max(...users.map(user => user.id))
    const newId = highestId + 1
    const updateObj = {
      ...newObj,
      id : newId
    }
    setUsers((prevUsers) => {
      const updateUsers = [...prevUsers, updateObj];
      return updateUsers;
    })
  }

  // add new todo
  const onAddNewTodo = (newObj) => {
    const updateObj = {
      ...newObj,
      id : Date.now()
    }
    setTodos((prevTodos) => {
      const updateTodos = [...prevTodos, updateObj];
      return updateTodos;
    })
  }

  // add new post
  const onAddNewPost = (newObj) => {
    const updateObj = {
      ...newObj,
      id : Date.now()
    }
    setPosts((prevPosts) => {
      const updatePosts = [...prevPosts, updateObj];
      return updatePosts;
    })
  }

  // open modal
  const onOpenModal = () => {
    setIsModalOpen(true)
    //console.log(isModalOpen)
  }

  // close modal
  const onCloseModal = () => {
    setIsModalOpen(false)
  }

  // switch modal content
  const switchContent = (contentType) => {
    setActiveContent(contentType)
  }

  // mobile open side
  const handleMobileSide = () => {
    setIsSideOpen(true)
  }

   // mobile close side
   const onCloseSide = () => {
    setIsSideOpen(false)
  }
 

  return (
    <>
     <header className="lg:hidden bg-white py-3 px-5 flex items-center justify-between lg:justify-end fixed top-0 right-0 w-full shadow-lg">
          <div className="text-blue-600 font-semibold text-2xl">TodoPro</div>
          <button onClick={handleMobileSide} className='text-blue-600 text-2xl flex items-center'>
            <span className="material-symbols-rounded">menu_open</span>
          </button>
      </header>
      <main className='flex gap-8'>
        <Side 
          users={users} 
          todos={todos}
          selectedId={selectedId}
          isSideOpen={isSideOpen}
          onUpdateUser={onUpdateUser} 
          onDeleteUser={onDeleteUser} 
          onEditUser={onEditUser}
          onOpenModal={onOpenModal}
          switchContent={switchContent}
          onCloseSide={onCloseSide}
        />
        <Main 
          users={users} 
          todos={todos}
          posts={posts}
          selectedId={selectedId}
          onTaskCompleted={onTaskCompleted}
          onOpenModal={onOpenModal}
          switchContent={switchContent}
        />
      </main>

      {isModalOpen && (
          <ModalAdd 
          selectedId={selectedId}
          isModalOpen={isModalOpen}
          activeContent={activeContent}
          onCloseModal={onCloseModal}
          onAddNewUser={onAddNewUser}
          onAddNewTodo={onAddNewTodo}
          onAddNewPost={onAddNewPost}
          />
      )}
    </>
  )
}

export default App
