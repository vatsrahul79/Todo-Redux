import './App.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import Total from './component/Total'

function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
      <Total />
    </div>
  );
}

export default App;
