import React,{useState} from 'react';
import {Navbar} from './components/Navbar'
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { InterfaceTodo } from './interfaces';

declare var confirm: (question: any) => boolean

const App: React.FC = () =>{
  const [todos, setTodos] = useState<InterfaceTodo[]>([])

  const addHandler=(title:string)=> {
    const newTodo: InterfaceTodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    if (title.length !== 0){setTodos(prev=>[newTodo, ...todos])}
  }
const toggleHandler= (id: number) => {
  setTodos(prev => 
    prev.map(todo => {
      if (todo.id === id) {
        return {...todo,
          completed: !todo.completed
        }
      }
    return todo
    })
  )
}

const removeHandler = (id: number) => {
  const shoudRemove = confirm('Вы уверены, что хотите удалить ?')
  if (shoudRemove) {
    setTodos(prev=>prev.filter(todo =>todo.id !== id))
  }
}
  return (
    <>
      <Navbar/>
        <div className="container">
          <TodoForm onAdd={addHandler}/>
          <TodoList 
          todos={todos} 
          onRemove={removeHandler} 
          onToggle={toggleHandler}
          />
        </div>
   </>
  );
}

export default App;
