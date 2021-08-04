package com.example.demo.todo_item;

import org.springframework.data.repository.CrudRepository;

public interface ITodoItemRepository extends CrudRepository<TodoItem, Long> {

}
