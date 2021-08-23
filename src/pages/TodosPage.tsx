import React, { useState, useEffect } from "react";
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { InterfaceTodo } from '../interfaces';

declare var confirm: (question: any) => boolean

export const TodosPage: React.FC = () => {

    const [todos, setTodos] = useState<InterfaceTodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as InterfaceTodo[]
        setTodos(saved)
    }, [])

    useEffect(() => { localStorage.setItem('todos', JSON.stringify(todos)) }, [todos])

    const addHandler = (title: string) => {
        const newTodo: InterfaceTodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        if (title.length !== 0) { setTodos(prev => [newTodo, ...todos]) }
    }
    const toggleHandler = (id: number) => {
        setTodos(prev =>
            prev.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
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
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    }
    return <React.Fragment>
        <TodoForm onAdd={addHandler} />

        <TodoList
            todos={todos}
            onRemove={removeHandler}
            onToggle={toggleHandler}
        />
    </React.Fragment>
}