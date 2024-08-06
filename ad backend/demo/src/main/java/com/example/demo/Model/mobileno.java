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
public class mobileno {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
private int user_id;
private int number;
private String operator;
}
