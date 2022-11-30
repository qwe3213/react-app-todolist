import React from "react";

export default function List({tododata, setTododata}) {
  const handleCompleteChange = (id) => {
    let newTodoData = tododata.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTododata(newTodoData);
  };

  const handleClick = (id) => {
    let newTodoData = tododata.filter((data) => data.id !== id); // 입력한것 지우기
    setTododata(newTodoData);
  };

  return (
    <div>
      {tododata.map((data) => (
        <div
          key={data.id}
          className="flex items-center justify-between w-full  px-3 py-1 my-2 text-gray-600 bg-gray-100 border rounded "
        >
          <div className="items-center">
            <input
              type="checkbox"
              defaultChecked={data.completed}
              onChange={() => handleCompleteChange(data.id)}
            />
            {"  "}
            <sapn className={data.completed ? "line-through" : undefined}>
              {data.title}
            </sapn>
          </div>
          <div className="items-center">
            <button
              className="px-4 py-2 float-right "
              onClick={() => handleClick(data.id)}
            >
              x
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
