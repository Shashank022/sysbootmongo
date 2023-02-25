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
public class User {

    @Id
    private BigInteger _id;
    private int user_id;
    private String firstname;
    private String lastname;
    private String email;
    private String gender;
    private String address;
    private String userrole;
}
