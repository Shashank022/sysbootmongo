package com.boot.tmsystem.controller;

import com.boot.tmsystem.model.Task;
import com.boot.tmsystem.model.Team;
import com.boot.tmsystem.repository.TaskRepository;
import com.boot.tmsystem.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TeamController {
    @Autowired
    private TeamRepository teamRepository;

    @GetMapping("/teams")
    public ResponseEntity<List<Team>> getAllEvents() {
        List<Team> teamList = teamRepository.findAll();
        return new ResponseEntity<>(teamList, HttpStatus.OK);
    }
}
