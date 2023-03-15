package com.boot.tmsystem.repository;

import com.boot.tmsystem.model.User;
import com.boot.tmsystem.model.UserData;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserDataRepository  extends MongoRepository<UserData, Integer> {
}
