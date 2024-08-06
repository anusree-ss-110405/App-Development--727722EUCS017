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
public class transaction {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
   private int ID;
   private int user_id;
   private int mobile_no_id;
   private int recharge_plan_id;
   private int transaction_date;
   private String status;
public int getID() {
    return ID;
}
public void setID(int iD) {
    ID = iD;
}
public int getUser_id() {
    return user_id;
}
public void setUser_id(int user_id) {
    this.user_id = user_id;
}
public int getMobile_no_id() {
    return mobile_no_id;
}
public void setMobile_no_id(int mobile_no_id) {
    this.mobile_no_id = mobile_no_id;
}
public int getRecharge_plan_id() {
    return recharge_plan_id;
}
public void setRecharge_plan_id(int recharge_plan_id) {
    this.recharge_plan_id = recharge_plan_id;
}
public int getTransaction_date() {
    return transaction_date;
}
public void setTransaction_date(int transaction_date) {
    this.transaction_date = transaction_date;
}
public String getStatus() {
    return status;
}
public void setStatus(String status) {
    this.status = status;
}
}
