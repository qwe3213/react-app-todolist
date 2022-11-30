import React from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

export default function List({tododata, setTododata}) {
  const handleClick = (id) => {
    let newTodoData = tododata.filter((data) => data.id !== id); // 입력한것 지우기
    setTododata(newTodoData);
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
  const handleEnd = (result) => {
    if (!result.destination) return;
    const newdata = tododata;
    const [reorderItem] = newdata.splice(result.source.index, 1); //변경시키는 아이템을 제거하기
    newdata.splice(result.destination.index, 0, reorderItem);
    setTododata(newdata);
    console.log("result", result);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tododata.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snabshot) => (
                    <div
                      key={data.id}
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
                          defaultChecked={data.completed}
                          onChange={() => handleCompleteChange(data.id)}
                        />
                        {"  "}
                        <span
                          className={
                            data.completed ? "line-through" : undefined
                          }
                        >
                          {data.title}
                        </span>
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
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
