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
public class Role {

    @Id
    private BigInteger id;
    private int roleid;
    private String role_name;
    private String role_user_id;
}
