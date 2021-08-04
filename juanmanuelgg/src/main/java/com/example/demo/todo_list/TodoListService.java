package com.example.demo.todo_list;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TodoListService {

	@Autowired
	private ITodoListRepository todoListRepository;

	@Transactional
	public List<TodoList> findAll() {
		return (List<TodoList>) todoListRepository.findAll();
	}

	@Transactional
	public TodoList findById(Long id) {
		return todoListRepository.findById(id).orElse(null);
	}

	@Transactional
	public TodoList save(TodoList todoList) {
		return todoListRepository.save(todoList);
	}

	@Transactional
	public void delete(Long id) {
		todoListRepository.deleteById(id);
	}
}