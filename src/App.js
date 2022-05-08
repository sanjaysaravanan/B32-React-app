import logo from './logo.svg';
import './App.css';
import { ID } from './main';
import MainCompoent from './NewComponent';
import SampleComponent from './SampleComponent';
import Counter from './Counter';
import TodoInput from './TodoInput';
import { useState } from 'react';
import SomeComponent from './Components/SampleComnponent/SampleComponent';
import ProdComponent from './Components/CardComponent/CardComponent';
import Header from './Components/Header/Header';


const products = [
  {id: 1, name: "Mobile Phone", description: 'Used to Call, Surf Internet', picture: 'https://picsum.photos/id/1/200/300', price: 100},
  {id: 2, name: "Mobile Phone", description: 'Used to Call, Surf Internet', picture: 'https://picsum.photos/id/2/200/300', price: 45},
  {id: 3, name: "Mobile Phone", description: 'Used to Call, Surf Internet', picture: 'https://picsum.photos/id/3/200/300', price: 150}
]

function App() {

  // const [count, setCount] = useState(0);

  // const handleIncrement = () => setCount(count + 1);
  // const handleDecrement = () => setCount(count - 1);

  const [todoList, setTodoList] = useState([]);

  const handleNewTodo = (todo) => {
    setTodoList([...todoList, todo]);
  }

  const [cart, setCart] = useState([]);


  const handleAddToCart = (prod) => {
    setCart([...cart, prod]);
  }

  console.log(cart);



  return ( 
    <div className="App" >
      
      <div 
        className="App-header"
      >
        <Header cartValue={cart.length} />
        {/* <MainCompoent name="Sanjay" age="35" /> */}
        {/* <SampleComponent name="Sanjay" age="35" /> */}
        {/* {console.log()}
        {console.log()}
        {varName} */}

        {/* <Counter count={count} />
        <div>
          <button onClick={handleIncrement}>Increment</button> <button onClick={handleDecrement} >Decrement</button>
        </div> */}

        {/* <TodoInput handleNewTodo={handleNewTodo} />

        <SomeComponent todoList={todoList}  /> */}
        <div style={{ display: 'flex' }} >
          {products.map(prod => (
            <ProdComponent prodDetails={prod}  handleAddToCart={handleAddToCart} />
          ))}
        </div> 
      </div>
    </div>
  );
}

export default App;
