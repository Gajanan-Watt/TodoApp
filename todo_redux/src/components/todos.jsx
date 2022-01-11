import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo, addTodoError, addTodoLoading, addTodoSuccess } from "../store/actions";

export const Todos = () => {
    const [text, setText] = useState("")
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    console.log(todos);
    return <div>
        <input value={text} type="text" placeholder="Enter Todos" 
            onChange={(e) => setText (e.target.value)} />
    
        <button onClick={() => {
            dispatch(addTodoLoading());
            fetch("http://localhost:3001/todos", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body:JSON.stringify({status: false, title: text}),
            })
            .then((d) => d.json())
            .then((res) => {
                //success
                dispatch(addTodoSuccess(res));
                // dispatch(addTodo(res));
            })
            .catch((err) => {
                //error
                dispatch(addTodoError());
            })
        }}>
            Add Todos
        </button>
        
            {todos.map((e) => 
            <div key={e.id}> {e.title}-{e.status ? "Done": "Not Done"}</div>)}
        
    
    </div>
}