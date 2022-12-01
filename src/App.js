import React, {useState, useCallback} from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";
export default function App() {
  const [tododata, setTododata] = useState([]);
  const [value, setValue] = useState("");
  const handleClick = useCallback(
    (id) => {
      let newTodoData = tododata.filter((data) => data.id !== id); // 입력한것 지우기
      setTododata(newTodoData);
    },
    [tododata]
  );
  const handleAllDeleteclick = () => {
    setTododata([]);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100 ">
      <div className="w-full m-4 p-6 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleAllDeleteclick}>Delete All</button>
        </div>
        <Lists
          handleClick={handleClick}
          tododata={tododata}
          setTododata={setTododata}
        />

        <Form value={value} setValue={setValue} setTododata={setTododata} />
      </div>
    </div>
  );
}
