import { Droppable } from "react-beautiful-dnd";
import DragabbleCard from "./DragabbleCard";
import { A } from "./AppStyled";

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(magic) => (
        <A.BoardContainer>
          <A.Title>{boardId}</A.Title>
          <A.DroppableBox ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((toDo, index) => (
              <DragabbleCard key={toDo} toDo={toDo} index={index} />
            ))}
            {magic.placeholder}
          </A.DroppableBox>
        </A.BoardContainer>
      )}
    </Droppable>
  );
}

export default Board;
