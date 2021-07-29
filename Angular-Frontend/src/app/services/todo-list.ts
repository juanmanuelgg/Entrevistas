import { TODO_ITEM } from "../todo-item/todo-item";
export interface TodoList {
    id: number,
    title: string,
    sumary: string,
    tasks: TODO_ITEM[],
    deleted: boolean,
    archived: boolean
}