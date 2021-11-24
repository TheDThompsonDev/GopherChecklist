import { Todo } from "../entities/Todo";
import React from "react";
import { TodoItem } from "./TodoItem";
import "./TodoList.scss";
type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, i) => (
        <li key={i}>
          <TodoItem
            title={todo.title}
            description={todo.description}
            isCompleted={todo.isCompleted}
          />
        </li>
      ))}
    </ul>
  );
};
