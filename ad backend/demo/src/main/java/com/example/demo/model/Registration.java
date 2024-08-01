package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Registration{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userid;
    private String UserName;
    private String Email;
    private String MobileNumber;
    private String Password;
    private String SecurityAnswer;
    private String Address;
    private String city;
    private String state;
    private String postalcode;
    private String country;
    private String referralcode;
}