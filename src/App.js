import './App.css';
import { useState, useEffect } from "react";
import { Form } from './components/form';
import { Todolist } from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);


  // useEffect
  useEffect(() => {
    getLocaltodos();
  },[])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos, status]);

  //functions
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));  
        break;
      default:
        setFilteredTodos(todos);  
        break;
    }
  };
// local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocaltodos = () => {
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify(todos));
    }else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Srujan's Todo List</h1>
      </header>
      <Form  inputText={inputText} todos={todos} setTodos = {setTodos} setInputText = {setInputText} setStatus={setStatus}/>
      <Todolist filteredTodos={filteredTodos} todos = {todos} setTodos = {setTodos}/>
    </div>
  );
}

export default App;
