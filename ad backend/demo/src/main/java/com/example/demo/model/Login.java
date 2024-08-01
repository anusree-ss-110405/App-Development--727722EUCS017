package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Login {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int userid;
    private long MobileNumber;
    private boolean status;
}
