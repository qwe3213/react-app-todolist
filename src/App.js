import React, {useState} from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
export default function App() {
  const [tododata, setTododata] = useState([]);
  const [value, setValue] = useState("");

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100 ">
      <div className="w-full m-4 p-6 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
        </div>
        <List tododata={tododata} setTododata={setTododata} />

        <Form value={value} setValue={setValue} setTododata={setTododata} />
      </div>
    </div>
  );
}
