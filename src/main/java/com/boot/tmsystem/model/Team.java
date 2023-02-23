package com.boot.tmsystem.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigInteger;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Team {
    @Id
    private BigInteger id;
    private int team_id;
    private String team_name;
    private int event_id;
    private int task_id;
}
