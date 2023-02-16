package com.boot.tmsystem.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigInteger;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Event {

	@Id
	private BigInteger _id;
	private String event_name;
	private String created_by;
	private Date created_date;
	private String updated_by;
	private int team_id;
}