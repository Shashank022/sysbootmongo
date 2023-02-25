package com.boot.tmsystem.repository;

import com.boot.tmsystem.model.Event;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface EventRepository extends MongoRepository<Event, Integer> {

    @Query("{'event_id' : {$lte : 10} }")
    public List<Event> getLimitedEvents();

}