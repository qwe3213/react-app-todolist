import React, {useState} from "react";

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
    const [isediting, setIsediting] = useState(false);
    const [edittitle, setEditTitle] = useState(title);
    const handleCompleteChange = (id) => {
      let newTodoData = tododata.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTododata(newTodoData);
    };

    const handleChange = (event) => {
      setEditTitle(event.target.value);
    };
    const handlesubmit = (event) => {
      event.preventDefault();
      let newTodoData = tododata.map((data) => {
        if (data.id === id) {
          data.title = edittitle;
        }
        return data;
      });
      setTododata(newTodoData);
      setIsediting(false);
    };
    if (isediting) {
      return (
        <div
          className={`flex items-center justify-between w-full  px-3 py-1 my-2 bg-gray-100  text-gray-600  border rounded `}
        >
          <div className="items-center">
            <form onSubmit={handlesubmit}>
              <input
                value={edittitle}
                onChange={handleChange}
                className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
              />
            </form>
          </div>
          <div className="items-center">
            <button
              className="px-4 py-2 float-right "
              onClick={() => setIsediting(false)}
            >
              x
            </button>
            <button
              onClick={handlesubmit}
              className="px-4 py-2 float-right "
              type="submit"
            >
              save
            </button>
          </div>
        </div>
      );
    } else {
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
            <button
              className="px-4 py-2 float-right "
              onClick={() => setIsediting(true)}
            >
              edit
            </button>
          </div>
        </div>
      );
    }
  }
);

export default List;
