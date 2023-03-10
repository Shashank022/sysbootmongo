package com.boot.tmsystem.service;

import com.boot.tmsystem.model.Event;
import com.boot.tmsystem.repository.EventRepository;
import com.mongodb.MongoException;
import com.mongodb.client.result.DeleteResult;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

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

    public List<Event> getLimitedEventsOnly(){
        Query query = new Query();
        query.addCriteria(Criteria.where("event_id").lt(100).gt(90));
        return mongoTemplate.find(query,Event.class);
    }

    public void updateAnEvent(String id, Event newEvent) throws ParseException {
        if(StringUtils.isEmpty(id) && newEvent != null){
            Integer data = Integer.parseInt(id);
            eventRepository.findById(data)
                    .map(nEvent -> {
                        nEvent.setEvent_name(newEvent.getEvent_name());
                        nEvent.setUpdated_by(newEvent.getUpdated_by());
                        return eventRepository.save(nEvent);
                    })
                    .orElseGet(() -> eventRepository.save(newEvent));
        }
    }

}
