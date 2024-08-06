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
public class mobilePlan {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int ID;
private String operator;
private String plan_name;
private int amount;
private int validity_days;
public int getID() {
    return ID;
}
public void setID(int iD) {
    ID = iD;
}
public String getOperator() {
    return operator;
}
public void setOperator(String operator) {
    this.operator = operator;
}
public String getPlan_name() {
    return plan_name;
}
public void setPlan_name(String plan_name) {
    this.plan_name = plan_name;
}
public int getAmount() {
    return amount;
}
public void setAmount(int amount) {
    this.amount = amount;
}
public int getValidity_days() {
    return validity_days;
}
public void setValidity_days(int validity_days) {
    this.validity_days = validity_days;
}
}
