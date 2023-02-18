package com.boot.tmsystem.repository;

import com.boot.tmsystem.model.Event;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Date;
import java.util.List;

public interface EventRepository extends MongoRepository<Event, Integer> {

    @Query("{'created_date':{$gt:?0,$lt:?1}}")
    public List<Event> findAllEvents(Date someDate, Date today);
}