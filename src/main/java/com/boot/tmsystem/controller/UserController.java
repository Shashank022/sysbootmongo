package com.boot.tmsystem.controller;

import com.boot.tmsystem.model.User;
import com.boot.tmsystem.repository.UserRepository;
import com.boot.tmsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> userList = userRepository.findAll().stream().limit(100).collect(Collectors.toList());
        return new ResponseEntity<>(userList, HttpStatus.OK);
    }

    @GetMapping("/emaillist")
    public ResponseEntity<List<String>> getAllUsersEmailList() {
        List<String> userEmailList = userService.getUsersEmialList();
        Map<String, Long> listMap = userEmailList.stream()
                .collect(Collectors.groupingBy(Function.identity(),Collectors.counting()));
        System.out.println(listMap);
        return new ResponseEntity<List<String>>(userEmailList,HttpStatus.OK);
    }
}
