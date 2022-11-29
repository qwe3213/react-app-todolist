import React from "react";

export default function List({tododata, setTododata}) {
  const btnStyle = {
    color: "#fff",
    padding: "5px 9px",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    float: "right",
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

  return (
    <div>
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
    </div>
  );
}
