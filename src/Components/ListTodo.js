import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const ListTodo = () => {
    const [todos, setTodos] = useState([])
    const handleTodoList = async () => {
        try {
            const todolist = await axios.get('http://localhost:3000/Todos')
            setTodos(todolist.data)
        } catch (error) {
            console.log(error)
        }
    }
    const DeleteTodo = async (id) => {
        try {
          await axios.delete(`http://localhost:3000/Todos/${id}`)
          handleTodoList()
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
             handleTodoList() ;
    }, [])
    return (
        <div className='row'>

            <h1 className='text-center text-primary mb-5'>List To-do</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className='text-secondary'>#</th>
                        <th className='text-secondary'>Name</th>
                        <th className='text-secondary'>Description</th>
                        <th className='text-secondary'>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo) => {
                            return (
                                <tr key={todo.id}>
                                    <td>{todo.id} </td>
                                    <td>{todo.Name}</td>
                                    <td>{todo.description}</td>
                                    <td> <Link to={'/UpdateTodo/' + todo.id} className="btn btn-info mx-3">Modifier</Link>
                                        <button type="button" onClick={()=>DeleteTodo(todo.id)}className="btn btn-danger">Supprimer</button></td>
                                </tr>
                                
                            )
                        })
                    }
                </tbody>
            </table>
            <div>
            <Link to={'/AddTodo'} className="btn btn-secondary mx-5" >Add Todo</Link></div>
        </div>
    )
}
export default ListTodo