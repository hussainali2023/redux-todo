import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput(" ")
    
  };

  return (
    <>
      <form onSubmit={addTodoHandler} action="">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter a todo"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
