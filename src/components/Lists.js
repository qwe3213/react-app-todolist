import React from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import List from "./List";

const Lists = React.memo(({tododata, setTododata, handleClick}) => {
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
                    <List
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      completed={data.completed}
                      tododata={tododata}
                      setTododata={setTododata}
                      provided={provided}
                      snabshot={snabshot}
                      handleClick={handleClick}
                    />
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
});
export default Lists;
