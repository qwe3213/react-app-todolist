import React, {useState} from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
export default function App() {
  const [tododata, setTododata] = useState([]);
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
        <List tododata={tododata} setTododata={setTododata} />

        <Form value={value} setValue={setValue} setTododata={setTododata} />
      </div>
    </div>
  );
}
