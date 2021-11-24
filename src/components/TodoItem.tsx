import React from "react";
import { Todo } from "../entities/Todo";
import "./TodoItem.scss"

export const TodoItem: React.FC<Todo> = ({title, description, isCompleted}) => {
    return(
        <article className="todo-item">
            <section>
                <h3>{title}</h3>
                <p className="description">{description}</p>
            </section>
            <input type="checkbox" defaultChecked={isCompleted} />
        </article>
    )
}