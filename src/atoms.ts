import { atom } from "recoil";

interface ItoDoState {
  [key: string]: string[];
}

export const toDoState = atom<ItoDoState>({
  key: "toDo",
  default: {
    To_do: ["1", "2", "3"],
    Doing: ["4", "5", "6"],
    Done: ["7", "8", "9"],
  },
});
