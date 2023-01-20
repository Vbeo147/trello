import { Draggable } from "react-beautiful-dnd";
import { A } from "./AppStyled";
import React from "react";

interface IDragabbleCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

function DragabbleCard({ toDoText, toDoId, index }: IDragabbleCardProps) {
  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <A.DraggableBox
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
        </A.DraggableBox>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
