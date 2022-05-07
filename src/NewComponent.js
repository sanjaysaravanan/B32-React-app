import { useState } from "react"


function NewCompoenent({ name, age }) {
  
  // let word = "Fox";
  const [word, setWord] = useState("Fox");

  const handleClick = () => {
    console.log("OnClick Func")
    setWord("Loin");
    // word = 'Loin'
  }

  const names = ["Sanjay", "Raji", "Dinakaran", "Arun"];

  // console.log(word);

  const [boolVal, setBoolVal] = useState(true);

console.log(boolVal);
  return (
    <> {/* Fragment */}
      <h1>Functional Component</h1>
      {/* <h2>{word}</h2>
      <button onClick={() => handleClick()} >Click Me to Change the above value</button> */}
      {/* <h2>Name-1: {names[0]}</h2>
      <h2>Name-2: {names[1]}</h2>
      <h2>Name-3: {names[2]}</h2>
      <h2>Name-4: {names[3]}</h2> */}
      {/* {names.map((ele, index) => <h2 key={ele}>Name-{index}: {ele}</h2>)} */}
      <h2>
        {/* Animal Name: {boolVal ? "Fox" : "Loin"} */}
        Animal Name: 
        {boolVal && "Fox"}
        {!boolVal && "Loin"}
      </h2>
      <button onClick={() => setBoolVal(!boolVal)} >Change Name</button>
    </>
  )
}

export default NewCompoenent;