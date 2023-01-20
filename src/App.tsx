import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { A } from "./components/AppStyled";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";
import Board from "./components/Board";

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    const { destination, source } = info;
    if (!destination) return;
    const destinationId = destination.droppableId;
    const sourceId = source.droppableId;
    if (destinationId === sourceId) {
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[sourceId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, taskObj);
        return {
          ...allBoards,
          [sourceId]: boardCopy,
        };
      });
    }
    if (destinationId !== sourceId) {
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[sourceId]];
        const taskObj = sourceBoard[source.index];
        const destinationBoard = [...allBoards[destinationId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, taskObj);
        return {
          ...allBoards,
          [sourceId]: sourceBoard,
          [destinationId]: destinationBoard,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <A.Container>
        {Object.keys(toDos).map((boardId) => (
          <Board key={boardId} toDos={toDos[boardId]} boardId={boardId} />
        ))}
      </A.Container>
    </DragDropContext>
  );
}

export default App;
