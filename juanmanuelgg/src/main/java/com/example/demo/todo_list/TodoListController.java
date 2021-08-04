package com.example.demo.todo_list;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/todo_list")
public class TodoListController {
	@Autowired
	private TodoListService todoListService;

	@GetMapping("")
	public List<TodoList> index() {
		return todoListService.findAll();
	}
	
	@GetMapping("/{id}")
	public TodoList index(@PathVariable Long id) {
		return todoListService.findById(id);
	}
	
	@PostMapping("")
	public TodoList create(@RequestBody TodoList topic) {
		return todoListService.save(topic);
	}

	@PutMapping("/{id}")
	public TodoList update(@RequestBody TodoList topic, @PathVariable Long id) {
		TodoList actual = todoListService.findById(id);

		// No me alcanzo el tiempo para editar el subchapter
		// actual.setSubchapter(topic.getSubchapter());
		// actual.setText(topic.getText());

		return todoListService.save(actual);
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		todoListService.delete(id);
	}
}