package com.boot.tmsystem.controller;

import com.boot.tmsystem.model.Task;
import com.boot.tmsystem.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping("/tasks")
    public ResponseEntity<List<Task>> getAllTasks() {
        List<Task> taskList = taskRepository.findAll();
        return new ResponseEntity<>(taskList, HttpStatus.OK);
    }

    @PostMapping("/task")
    public ResponseEntity<Task> postNewTask(@RequestBody Task newTask) throws ParseException {
        Task taskList = taskRepository.insert(newTask);
        return new ResponseEntity<Task>(taskList, HttpStatus.OK);
    }

    @DeleteMapping("/task")
    public ResponseEntity<HttpStatus> deleteAllTask() {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/tasks/{id}")
    public ResponseEntity<HttpStatus> deleteEvent(@PathVariable("id") long id) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
