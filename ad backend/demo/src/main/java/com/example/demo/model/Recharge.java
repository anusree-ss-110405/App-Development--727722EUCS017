package com.example.demo.model;

import java.util.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import java.time.LocalTime;

@Entity
@Data
public class Recharge {
    @Id
    @GeneratedValue (strategy=GenerationType.IDENTITY)
    private int rechargeid;
    private Date date;
    private String plan;
    private long Amount;
    private LocalTime rechargetime;
}
