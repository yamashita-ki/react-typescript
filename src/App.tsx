import axios from "axios";
import { useState } from "react";
import "./App.css";
import { Text } from "./Text";
import { TodoType } from "./type/TodoType";
import { UserCard } from "./UserCard";

function App() {
  const user = {
    id:1,
    name:"hoge",
    email:"hoge@gmail.com",
    address:"hogehoge"
  }
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}

export default App;
