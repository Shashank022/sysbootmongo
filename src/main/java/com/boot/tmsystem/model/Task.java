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
public class Task {
	@Id
	private BigInteger id;
	private int task_id;
	private String task_name;
	private String team_id;
	private String task_created;
	private String task_updated;
	private int event_id;
}
