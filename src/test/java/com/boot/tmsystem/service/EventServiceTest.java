package com.boot.tmsystem.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class EventServiceTest {

    @Autowired
    EventService eventService;

    @Test
    void getbyIdQuery() {
        assertEquals("Hello JUnit 5", eventService.getbyIdQuery(2));
    }

    @Test
    void deletebyId() {
    }

    @Test
    void postNewEvent() {
    }

}