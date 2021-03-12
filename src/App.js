import { useState } from 'react';
import './App.scss';
import TodoList from './component/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
      {id: 1, title: 'front-end'},
      {id: 2, title: 'demo front-end'},
      {id: 3, title: 'demo react front-end'},
    ]);
  
  function handleTodoClick(todo){
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if(index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>React hook - TodoList</h1>
      {/* <ColorBox /> */}
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;