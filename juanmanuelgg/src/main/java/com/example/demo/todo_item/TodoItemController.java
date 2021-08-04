package com.example.demo.todo_item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TodoItemController {
	@Autowired
	public TodoItemService todoItemService;
}
