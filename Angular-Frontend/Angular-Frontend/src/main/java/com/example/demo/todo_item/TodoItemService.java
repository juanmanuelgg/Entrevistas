package com.example.demo.todo_item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoItemService {
	@Autowired
	private ITodoItemRepository todoItemRepository;
}
