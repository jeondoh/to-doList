import CreateToDo from "./CreateToDo";
import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import ToDo from "./ToDo";

function ToDoList() {
  const todos = useRecoilValue(toDoState);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {todos.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
