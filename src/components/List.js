import React, {useState} from "react";

export default function List() {
  const btnStyle = {
    color: "#fff",
    padding: "5px 9px",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    float: "right",
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
