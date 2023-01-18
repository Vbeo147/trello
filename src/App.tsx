import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  background-color: #1076d6;
  width: 80vh;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
`;

const DroppableBox = styled.ul`
  width: 40%;
  height: 90%;
  background-color: lightgray;
  padding: 15px;
`;

const DraggableBox = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 5px;
  margin-bottom: 5px;
  border: 2px solid transparent;
  transition: border 0.3s ease-in-out;
  &:hover,
  &:active {
    border: 2px solid black;
  }
`;

const toDos = ["a", "b", "c", "d", "e", "f"];

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Droppable droppableId="one">
          {(magic) => (
            <DroppableBox ref={magic.innerRef} {...magic.droppableProps}>
              {toDos.map((a, b) => (
                <Draggable draggableId={a} index={b}>
                  {(magic) => (
                    <DraggableBox
                      ref={magic.innerRef}
                      {...magic.draggableProps}
                      {...magic.dragHandleProps}
                    >
                      {a}
                    </DraggableBox>
                  )}
                </Draggable>
              ))}
              {magic.placeholder}
            </DroppableBox>
          )}
        </Droppable>
      </Container>
    </DragDropContext>
  );
}

export default App;
