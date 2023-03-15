package com.boot.tmsystem.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigInteger;
import java.util.ArrayList;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("userdata")
public class UserData {

    @Id
    private BigInteger _id;
    private int user_id;
    private String first_name;
    private String last_name;
    private String email;
    private String gender;
    private ArrayList<Address> address;
    private String userrole;
}
