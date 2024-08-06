package com.example.demo.Repository;

import com.example.demo.Model.paymentsmethod;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentsMethodRepository extends JpaRepository<paymentsmethod, Integer> {
}
