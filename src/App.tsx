import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { A } from "./components/AppStyled";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    setToDos((oldToDos) => {
      const toDosCopy = [...oldToDos];
      toDosCopy.splice(source.index, 1);
      toDosCopy.splice(destination?.index, 0, draggableId);
      return toDosCopy;
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <A.Container>
        <Droppable droppableId="one">
          {(magic) => (
            <A.DroppableBox ref={magic.innerRef} {...magic.droppableProps}>
              {toDos.map((toDo, index) => (
                <Draggable key={toDo} draggableId={toDo} index={index}>
                  {(magic) => (
                    <A.DraggableBox
                      ref={magic.innerRef}
                      {...magic.draggableProps}
                      {...magic.dragHandleProps}
                    >
                      {toDo}
                    </A.DraggableBox>
                  )}
                </Draggable>
              ))}
              {magic.placeholder}
            </A.DroppableBox>
          )}
        </Droppable>
      </A.Container>
    </DragDropContext>
  );
}

export default App;
