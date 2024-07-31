package com.example.demo.model;

import java.util.*;
import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
public class Recharge {
    public Date date;
    public String plan;
    public int Amount;
    public int rechargetime;
}
