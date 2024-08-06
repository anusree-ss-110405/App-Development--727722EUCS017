package com.example.demo.Controller;

import com.example.demo.Model.transaction;
import com.example.demo.Repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/transactions")
public class transactionController {

    @Autowired
    private TransactionRepository transactionRepository;

    // Create a new transaction
    @PostMapping
    public ResponseEntity<transaction> createTransaction(@RequestBody transaction transaction) {
        transaction savedTransaction = transactionRepository.save(transaction);
        return new ResponseEntity<>(savedTransaction, HttpStatus.CREATED);
    }

    // Get all transactions
    @GetMapping
    public ResponseEntity<List<transaction>> getAllTransactions() {
        List<transaction> transactions = transactionRepository.findAll();
        return new ResponseEntity<>(transactions, HttpStatus.OK);
    }

    // Get a transaction by ID
    @GetMapping("/{id}")
    public ResponseEntity<transaction> getTransactionById(@PathVariable int id) {
        Optional<transaction> transaction = transactionRepository.findById(id);
        if (transaction.isPresent()) {
            return new ResponseEntity<>(transaction.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Update a transaction by ID
    @PutMapping("/{id}")
    public ResponseEntity<transaction> updateTransaction(@PathVariable int id, @RequestBody transaction transactionDetails) {
        Optional<transaction> transactionOptional = transactionRepository.findById(id);
        if (transactionOptional.isPresent()) {
            transaction transaction = transactionOptional.get();
            transaction.setUser_id(transactionDetails.getUser_id());
            transaction.setMobile_no_id(transactionDetails.getMobile_no_id());
            transaction.setRecharge_plan_id(transactionDetails.getRecharge_plan_id());
            transaction.setTransaction_date(transactionDetails.getTransaction_date());
            transaction.setStatus(transactionDetails.getStatus());

            transaction updatedTransaction = transactionRepository.save(transaction);
            return new ResponseEntity<>(updatedTransaction, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a transaction by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTransaction(@PathVariable int id) {
        Optional<transaction> transactionOptional = transactionRepository.findById(id);
        if (transactionOptional.isPresent()) {
            transactionRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
