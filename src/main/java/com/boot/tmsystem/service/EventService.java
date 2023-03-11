package com.boot.tmsystem.service;

import com.boot.tmsystem.model.Event;
import com.boot.tmsystem.repository.EventRepository;
import com.mongodb.MongoException;
import com.mongodb.client.result.DeleteResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class EventService {

    @Autowired
    MongoTemplate mongoTemplate;

    @Autowired
    EventRepository eventRepository;

    public List<Event> getbyIdQuery(long id) throws MongoException {
        Query query = new Query();
        query.addCriteria(new Criteria().andOperator(Criteria.where("event_id").is(id)));
        return mongoTemplate.find(query, Event.class);
    }

    public DeleteResult deletebyId(long id) throws MongoException{
        Query query = new Query();
        query.addCriteria(new Criteria().andOperator(Criteria.where("event_id").is(id)));
        return mongoTemplate.remove(new Query(Criteria.where("event_id").is(id)), Event.class);
    }

    public List<Event> getEventsOndate(String startDate){
        startDate = startDate.replace("-","/");
        Query query = new Query();
        query.addCriteria(new Criteria().andOperator(Criteria.where("created_date").is(startDate)));
        List<Event> listedDates = mongoTemplate.find(query,Event.class);
        return listedDates;
    }

    public List<Event> getLimitedEventsOnly() throws ParseException {
        Query query = new Query();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
        query.addCriteria(Criteria.where("created_date").gt(dateFormat.format(new Date())));
        System.out.println(query);
        return mongoTemplate.find(query,Event.class);
    }

    public void updateAnEvent(int id, Event newEvent) throws MongoException {
        if(Optional.ofNullable(id).orElse(0) != 0 && newEvent != null){
            List<Event> eve = getbyIdQuery(id);
                    eve.forEach((nEvent)->{
                        nEvent.setId(nEvent.getId());
                        nEvent.setEvent_name(newEvent.getEvent_name());
                        nEvent.setUpdated_by(newEvent.getUpdated_by());
                        nEvent.setCreated_by(newEvent.getCreated_by());
                        nEvent.setCreated_date(newEvent.getCreated_date());
                        nEvent.setEvent_id(newEvent.getEvent_id());
                        nEvent.setTeam_id(newEvent.getTeam_id());
                        eventRepository.save(nEvent);
                    });
        }
    }

}
