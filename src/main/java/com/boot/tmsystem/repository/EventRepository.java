package com.boot.tmsystem.repository;

import com.boot.tmsystem.model.Event;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface EventRepository extends MongoRepository<Event, Integer> {

    @Query("{'event_id' : {$lte : 10} }")
    public List<Event> getLimitedEvents();

}