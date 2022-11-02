import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateTodo() {
    const navigate = useNavigate()
    const params = useParams()
    const [todo, setTodo] = useState({
        Name: '',
        description: ''
    });

    const handleUpdateTodo = async (event, id) => {
        event.preventDefault()
        await axios.put('http://localhost:3000/Todos/' + params.idTodo, todo)
        navigate('/ListTodo')
    }
    const handleChange = (e) => {
        const id = e.target.id
        const value = e.target.value
        setTodo({ ...todo, [id]: value })
    }
    useEffect(() => {
        const getTodo = async () => {
            const todofromServer = await axios.get('http://localhost:3000/Todos/' + params.idTodo)
            setTodo(todofromServer.data);
        };
        getTodo();
    }, [params]);

    return (
        <div className='row'>
                <div className="col-md-6 offset-md-3">
                <form className='mt-4' onSubmit={handleUpdateTodo} >
                    <h1 className="text-center text-primary ">Update-Todo</h1>
                    <div>
                        <div className="mb-3">
                            <label>Nom:</label>
                            <input type="text"
                                className="form-control"
                                id="Name"
                                value={todo.Name}
                                onChange={handleChange}
                                placeholder="Name of Todo" />
                        </div>
                        <div className="mb-3">
                            <label>Description:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                value={todo.description}
                                onChange={handleChange}
                                placeholder="Description"
                            />
                        </div>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="update"
                            className="btn btn-danger
                           btn-lg w-100 " />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateTodo







