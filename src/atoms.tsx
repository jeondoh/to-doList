import { atom, selector } from "recoil";

export interface ITodo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
});

// selector는 atom을 가져다 output을 변형할 수 있음
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const todos = get(toDoState);
    return [
      todos.filter((todo) => todo.category === "TO_DO"),
      todos.filter((todo) => todo.category === "DOING"),
      todos.filter((todo) => todo.category === "DONE"),
    ];
  },
});
