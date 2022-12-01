import React from "react";

const List = React.memo(
  ({
    setTododata,
    tododata,
    id,
    title,
    snabshot,
    provided,
    completed,
    handleClick,
  }) => {
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
      <div
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${
          snabshot.isDragging ? "bg-gray-400" : "bg-gray-100"
        } flex items-center justify-between w-full  px-3 py-1 my-2 text-gray-600 bg-gray-100 border rounded `}
      >
        <div className="items-center">
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={() => handleCompleteChange(id)}
          />
          {"  "}
          <span className={completed ? "line-through" : undefined}>
            {title}
          </span>
        </div>
        <div className="items-center">
          <button
            className="px-4 py-2 float-right "
            onClick={() => handleClick(id)}
          >
            x
          </button>
        </div>
      </div>
    );
  }
);

export default List;
