import { Categories, ITodo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

function ToDo({ id, text, category }: ITodo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    // 버튼을 누르면 todo의 상태(category) 가 바뀌게
    setToDos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((toDo) => toDo.id === id); // 버튼 클릭한 객체내의 인덱스 찾기
      const newToDo = { text, id, category: name as any }; // 버튼을 누르면 해당 상태로 변경
      // 배열 속성들을 slice로 자른다음(버튼 누르기전 to do 제거) 새로운 배열(바뀐 newToDo)를 넣는 방식
      return [
        ...oldTodos.slice(0, targetIndex),
        newToDo,
        ...oldTodos.slice(targetIndex + 1),
      ];
      // 위를 splice 함수로 대체가능
      // splice는 원본 array가 변형되고 삭제된 elements를 return함
      /*
      // 원본 array를 직접적으로 splice를 하게되면 삭제되므로 spread연산자를 통해 새로운 배열 생성
      const newTodos = [...oldTodos];
      newTodos.splice(targetIndex, 1, newToDo);
      return newTodos;
      */
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To-Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}
export default ToDo;
