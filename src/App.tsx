import axios from "axios";
import { useState } from "react";
import "./App.css";
import { Todo } from "./Todo";
import { Text } from "./Text";
import { TodoType } from "./type/TodoType";
import { UserProfile } from "./UserProfile";
import { UserType } from "./type/UserType";

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const user:UserType = {
    name:"hoge",
    hobbies : ["映画", "ゲーム"]
  }
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <Text color="red" fontSize="18px"/>
      <UserProfile user={user} />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  
  );
}

export default App;
