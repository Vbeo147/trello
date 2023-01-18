import { Draggable } from "react-beautiful-dnd";
import { A } from "./AppStyled";
import React from "react";

interface IDragabbleCardProps {
  toDo: string;
  index: number;
}

function DragabbleCard({ toDo, index }: IDragabbleCardProps) {
  return (
    <Draggable draggableId={toDo} index={index}>
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
  );
}

export default React.memo(DragabbleCard);
