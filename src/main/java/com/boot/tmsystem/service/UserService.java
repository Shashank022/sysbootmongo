package com.boot.tmsystem.service;

import com.boot.tmsystem.model.Event;
import com.boot.tmsystem.model.User;
import com.mongodb.MongoException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    MongoTemplate mongoTemplate;


    public List<String> getUsersEmialList() throws MongoException {
        try {
            List<User> userList = mongoTemplate.findAll(User.class);
            List<String> userEmailList = new ArrayList<>();
//            Arrays.sort(userList.stream().toArray());
            userList.stream().filter((p) -> userEmailList.add(p.getEmail())).collect(Collectors.toList());
            userEmailList.sort((i1,i2) -> i1.compareTo(i2));
            return userEmailList;
        } catch (Exception e) {
            System.out.println("Information is still needed..!!!!!");
        }
        return null;
    }
}
