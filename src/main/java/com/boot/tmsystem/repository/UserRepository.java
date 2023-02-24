package com.boot.tmsystem.repository;

import com.boot.tmsystem.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, Integer> {
//
//    @Query("{'emial' : {$lte : 10} }")
//    public List<Event> getAllUsersEmailList();
}
