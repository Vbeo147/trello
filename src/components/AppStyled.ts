import styled from "styled-components";

export const A = {
  Container: styled.div`
    background-color: #1076d6;
    width: 80vh;
    height: 80vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
  `,
  DroppableBox: styled.ul`
    width: 30%;
    height: 90%;
    background-color: lightgray;
    padding: 15px;
    overflow-y: auto;
    overflow: hidden;
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
    &:hover,
    &:active {
      border: 2px solid black;
    }
  `,
};