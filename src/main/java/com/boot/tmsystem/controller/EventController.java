package com.boot.tmsystem.controller;

import com.boot.tmsystem.model.Event;
import com.boot.tmsystem.repository.EventRepository;
import com.boot.tmsystem.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class EventController {

        @Autowired
        EventRepository eventRepository;

        @Autowired
        EventService eventService;


        @GetMapping("/events")
        public ResponseEntity<List<Event>> getAllEvents() {
                List<Event> eventList = eventService.getLimitedEventsOnly();
                return new ResponseEntity<>(eventList, HttpStatus.OK);
        }

        @GetMapping("/events/{id}")
        public ResponseEntity<List<Event>> getEventById(@PathVariable("id") long id) {
                List<Event> eventList = eventService.getbyIdQuery(id);
                return new ResponseEntity<List<Event>>(eventList, HttpStatus.OK);
        }

        @DeleteMapping("/events/{id}")
        public ResponseEntity<HttpStatus> deleteEvent(@PathVariable("id") long id) {
                eventService.deletebyId(id);
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        @GetMapping("/eventsondate/{startDate}")
        public ResponseEntity<List<Event>> eventBetweenDates(@PathVariable("startDate") String startDate) throws ParseException {
                List<Event> eventList = eventService.getEventsOndate(startDate);
                return new ResponseEntity<>(eventList, HttpStatus.NOT_FOUND);
        }

        @PutMapping("/event/update")
        public ResponseEntity<Object> eventupdate(@RequestBody Event newEvent) throws ParseException {
                eventService.updateAnEvent(newEvent.getEvent_id(), newEvent);
                return new ResponseEntity<>(HttpStatus.OK);
        }

        @DeleteMapping("/events")
        public ResponseEntity<HttpStatus> deleteAllEvents() {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
}
