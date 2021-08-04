package com.example.demo.todo_item;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.example.demo.todo_list.TodoList;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "todo_item")
public class TodoItem {
	@Id
	private long id;
	private long fk_todo_list;
	private String task;
	private boolean completed;
	@ManyToOne(fetch = FetchType.EAGER, optional = false)	
	@JoinColumn(name = "fk_todo_list", nullable = false, insertable=false, updatable=false)
	@JsonBackReference
	private TodoList todoList;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	public long getFk_todo_list() {
		return fk_todo_list;
	}

	public void setFk_todo_list(long fk_todo_list) {
		this.fk_todo_list = fk_todo_list;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public boolean isCompleted() {
		return completed;
	}

	public void setCompleted(boolean completed) {
		this.completed = completed;
	}

	public TodoList getTodoList() {
		return todoList;
	}

	public void setTodoList(TodoList todoList) {
		this.todoList = todoList;
	}
}