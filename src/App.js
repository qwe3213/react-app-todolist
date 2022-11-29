import React, {useState} from "react";
import "./App.css";
export default function App() {
  const [tododata, setTododata] = useState([]);
  const [value, setValue] = useState("");
  const btnStyle = {
    color: "#fff",
    padding: "5px 9px",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    float: "right",
  };
  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    let newTodoData = tododata.filter((data) => data.id !== id); // 입력한것 지우기
    setTododata(newTodoData);
  };
  const handleChange = (e) => {
    setValue(e.target.value); //입렵한 것이 text에 보이게 하기.
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //새로운 할일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    //원래 있던 할 일에 새로운 할 일 더해주기
    setTododata((prev) => [...prev, newTodo]); // prev 이전의값 ...prev는 이전의값 배열안의 것들 모두, newTodo는 새로운값
    setValue(""); // value의 값을 빈값으로 설정
  };
  const handleCompleteChange = (id) => {
    let newTodoData = tododata.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTododata(newTodoData);
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        {tododata.map((data) => (
          <div style={getStyle(data.completed)} key={data.id}>
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => handleCompleteChange(data.id)}
            />
            {data.title}
            <button style={btnStyle} onClick={() => handleClick(data.id)}>
              x
            </button>
          </div>
        ))}
        <form style={{display: "flex"}} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            placeholder="해야 할일을 입력해주세요"
            style={{flex: "10", padding: "5px"}}
            value={value}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{flex: "1"}}
          />
        </form>
      </div>
    </div>
  );
}
