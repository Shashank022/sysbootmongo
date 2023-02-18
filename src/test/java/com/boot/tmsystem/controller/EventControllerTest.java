package com.boot.tmsystem.controller;

import com.boot.tmsystem.repository.EventRepository;
import com.boot.tmsystem.service.EventService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class EventControllerTest {

    @Mock
    EventRepository eventRepository;

    @InjectMocks
    EventService eventService;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void getAllEvents() {
        eventRepository.findAll();

    }

    @Test
    void getEventById() {
    }

    @Test
    void postEvent() {
    }

    @Test
    void deleteEvent() {
    }

    @Test
    void eventBetweenDates() {
    }

    @Test
    void deleteAllEvents() {
    }
}