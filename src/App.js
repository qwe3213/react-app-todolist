import React, {useState, useCallback} from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";
const initialTodoData = localStorage.getItem("tododata")
  ? JSON.parse(localStorage.getItem("tododata"))
  : [];
export default function App() {
  const [tododata, setTododata] = useState([]);
  const [value, setValue] = useState("");
  const handleClick = useCallback(
    (id) => {
      let newTodoData = tododata.filter((data) => data.id !== id); // 입력한것 지우기
      setTododata(newTodoData);
      localStorage.setItem("tododata", JSON.stringify(newTodoData));
    },
    [tododata]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    //새로운 할일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTododata((prev) => [...prev, newTodo]); // prev 이전의값 ...prev는 이전의값 배열안의 것들 모두, newTodo는 새로운값    //원래 있던 할 일에 새로운 할 일 더해주기
    localStorage.setItem("tododata", JSON.stringify([...tododata, newTodo]));
    setValue(""); // value의 값을 빈값으로 설정
  };
  const handleAllDeleteclick = () => {
    setTododata([]);
    localStorage.setItem("tododata", JSON.stringify([]));
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

        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
