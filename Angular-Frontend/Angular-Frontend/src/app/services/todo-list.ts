/*
 * Copyright (C) 2021 Juan Manuel González Garzón
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { TODO_ITEM } from "../todo-item/todo-item";
export interface TodoList {
    id: number,
    title: string,
    sumary: string,
    tasks: TODO_ITEM[],
    deleted: boolean,
    archived: boolean
}