package com.boot.tmsystem.controller;

import com.boot.tmsystem.model.Role;
import com.boot.tmsystem.model.User;
import com.boot.tmsystem.repository.RoleRepository;
import com.boot.tmsystem.repository.UserRepository;
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
public class RoleController {

    @Autowired
    private RoleRepository roleRepository;

    @GetMapping("/roles")
    public ResponseEntity<List<Role>> getAllRoles() {
        List<Role> roleList = roleRepository.findAll();
        return new ResponseEntity<>(roleList, HttpStatus.OK);
    }
}
