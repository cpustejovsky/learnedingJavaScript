import axios from "axios";

const url: string = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo with id: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};

axios.get(url).then(response => {
  const todo: Todo = response.data;
  const id: number = todo.id;
  const title: string = todo.title;
  const completed: boolean = todo.completed;
  logTodo(id, title, completed);
});
