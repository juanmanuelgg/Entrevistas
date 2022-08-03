package com.example.demo.todo_list;

import org.springframework.data.repository.CrudRepository;

public interface ITodoListRepository extends CrudRepository<TodoList, Long> {
}