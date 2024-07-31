package com.example.demo.model;

import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
public class Registration{
    public String UserName;
    public String Email;
    public String MobileNumber;
    public String Password;
    public String SecurityAnswer;
    public String Address;
    public String city;
    public String state;
    public String postalcode;
    public String country;
    public String referralcode;
}
