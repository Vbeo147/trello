import styled from "styled-components";

export const A = {
  Container: styled.div`
    background-color: #1076d6;
    width: 80vw;
    height: 80vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
  `,
  DroppableBox: styled.ul<{ isDraggingOver: boolean }>`
    width: 90%;
    height: 90%;
    background-color: lightgray;
    padding: 15px;
    overflow-y: auto;
    overflow: hidden;
    transition: background 0.3s ease-in-out;
    background: ${(props) => (props.isDraggingOver ? "pink" : "lightgray")};
  `,
  DraggableBox: styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding: 5px;
    margin-bottom: 5px;
    border: 2px solid transparent;
    transition: border 0.3s ease-in-out;
    user-select: none;
    background: white;
    &:hover,
    &:active {
      border: 2px solid black;
    }
  `,
  BoardContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 100%;
  `,
  Title: styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10%;
  `,
};
