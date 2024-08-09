package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class paymentsmethod {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
private int user_id;
private String method_name;
private String card_name;
private int expiry_date;
private int cvv;
public int getId() {
    return id;
}
public void setId(int id) {
    this.id = id;
}
public int getUser_id() {
    return user_id;
}
public void setUser_id(int user_id) {
    this.user_id = user_id;
}
public String getMethod_name() {
    return method_name;
}
public void setMethod_name(String method_name) {
    this.method_name = method_name;
}
public String getCard_name() {
    return card_name;
}
public void setCard_name(String card_name) {
    this.card_name = card_name;
}
public int getExpiry_date() {
    return expiry_date;
}
public void setExpiry_date(int expiry_date) {
    this.expiry_date = expiry_date;
}
public int getCvv() {
    return cvv;
}
public void setCvv(int cvv) {
    this.cvv = cvv;
}
}
