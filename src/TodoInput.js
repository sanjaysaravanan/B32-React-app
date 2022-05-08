import { useState } from "react"

function TodoInput({ handleNewTodo }) {

  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  }

  const handleSubmit = () => {
    handleNewTodo(inputVal);
    setInputVal("");
  }

  return (
    <>
      <input value={inputVal}  onChange={handleInputChange} />
      <button onClick={handleSubmit} >Submit</button>
    </>
  )
}

export default TodoInput;