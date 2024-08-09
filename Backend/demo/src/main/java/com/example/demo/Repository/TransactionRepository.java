package com.example.demo.Repository;

import com.example.demo.Model.transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<transaction, Integer> {
}
