import { useEffect, useState } from "react";
import { Todo } from "../../types/Todo";

type Props = {
  todo: Todo[];
}

const TodoList = ({todo}: Props) => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTodos();
  }, [])

  const loadTodos = async () => {

    setLoading(true);

    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const list: Todo[] = await res.json();

    setTodos(list);

    setLoading(false);

  }
  return (
    <>
      <div>Tasks List</div>
      { loading && <div>Loading</div> }
      <ul>
        { todos.map(item => (
          <li key={item.id}>{item.title} - {item.completed.toString()}</li>
        )) }
      </ul>
    </>
  )
}

export default TodoList;

//Server-side rendering: para sites que mudam rapidamente
export const getServerSideProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);

  const todoList: Todo[] = await res.json();

  return {
    props: {
      todo: todoList
    }
  }
}