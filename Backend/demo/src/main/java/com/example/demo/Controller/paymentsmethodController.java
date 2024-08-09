package com.example.demo.Controller;

import com.example.demo.Model.paymentsmethod;
import com.example.demo.Repository.PaymentsMethodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/paymentsmethods")
public class paymentsmethodController {

    @Autowired
    private PaymentsMethodRepository paymentsMethodRepository;

    // Create a new payment method
    @PostMapping
    public ResponseEntity<paymentsmethod> createPaymentsMethod(@RequestBody paymentsmethod paymentsmethod) {
        paymentsmethod savedPaymentsMethod = paymentsMethodRepository.save(paymentsmethod);
        return new ResponseEntity<>(savedPaymentsMethod, HttpStatus.CREATED);
    }

    // Get all payment methods
    @GetMapping
    public ResponseEntity<List<paymentsmethod>> getAllPaymentsMethods() {
        List<paymentsmethod> paymentsMethods = paymentsMethodRepository.findAll();
        return new ResponseEntity<>(paymentsMethods, HttpStatus.OK);
    }

    // Get a payment method by ID
    @GetMapping("/{id}")
    public ResponseEntity<paymentsmethod> getPaymentsMethodById(@PathVariable int id) {
        Optional<paymentsmethod> paymentsMethod = paymentsMethodRepository.findById(id);
        if (paymentsMethod.isPresent()) {
            return new ResponseEntity<>(paymentsMethod.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Update a payment method by ID
    @PutMapping("/{id}")
    public ResponseEntity<paymentsmethod> updatePaymentsMethod(@PathVariable int id, @RequestBody paymentsmethod paymentsMethodDetails) {
        Optional<paymentsmethod> paymentsMethodOptional = paymentsMethodRepository.findById(id);
        if (paymentsMethodOptional.isPresent()) {
            paymentsmethod paymentsMethod = paymentsMethodOptional.get();
            paymentsMethod.setUser_id(paymentsMethodDetails.getUser_id());
            paymentsMethod.setMethod_name(paymentsMethodDetails.getMethod_name());
            paymentsMethod.setCard_name(paymentsMethodDetails.getCard_name());
            paymentsMethod.setExpiry_date(paymentsMethodDetails.getExpiry_date());
            paymentsMethod.setCvv(paymentsMethodDetails.getCvv());

            paymentsmethod updatedPaymentsMethod = paymentsMethodRepository.save(paymentsMethod);
            return new ResponseEntity<>(updatedPaymentsMethod, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a payment method by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePaymentsMethod(@PathVariable int id) {
        Optional<paymentsmethod> paymentsMethodOptional = paymentsMethodRepository.findById(id);
        if (paymentsMethodOptional.isPresent()) {
            paymentsMethodRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

