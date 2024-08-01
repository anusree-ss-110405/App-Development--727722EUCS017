package com.example.demo.model;

import java.util.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Recharge {
    @Id
    @GeneratedValue (strategy=GenerationType.IDENTITY)
    private int rechargeid;
    public Date date;
    public String plan;
    public int Amount;
    public int rechargetime;
}
