package com.example.demo.todo_list;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.example.demo.todo_item.TodoItem;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "todo_list")
public class TodoList {
	@Id
	private long id;
	private String title;
	private String sumary;
	@OneToMany(mappedBy="todoList", fetch = FetchType.LAZY)
	@JsonManagedReference
    private Set<TodoItem> tasks;
	private boolean deleted;
	private boolean archived;
		
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getSumary() {
		return sumary;
	}
	public void setSumary(String sumary) {
		this.sumary = sumary;
	}
	public Set<TodoItem> getTasks() {
		return tasks;
	}
	public void setTasks(Set<TodoItem> tasks) {
		this.tasks = tasks;
	}
	public boolean isDeleted() {
		return deleted;
	}
	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}
	public boolean isArchived() {
		return archived;
	}
	public void setArchived(boolean archived) {
		this.archived = archived;
	}
}
