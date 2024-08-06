package com.example.demo.Controller;

import com.example.demo.Model.mobilePlan;
import com.example.demo.Repository.MobilePlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/mobileplans")
public class mobileplanController {

    @Autowired
    private MobilePlanRepository mobilePlanRepository;

    // Create a new mobile plan
    @PostMapping
    public ResponseEntity<mobilePlan> createMobilePlan(@RequestBody mobilePlan mobilePlan) {
        mobilePlan savedMobilePlan = mobilePlanRepository.save(mobilePlan);
        return new ResponseEntity<>(savedMobilePlan, HttpStatus.CREATED);
    }

    // Get all mobile plans
    @GetMapping
    public ResponseEntity<List<mobilePlan>> getAllMobilePlans() {
        List<mobilePlan> mobilePlans = mobilePlanRepository.findAll();
        return new ResponseEntity<>(mobilePlans, HttpStatus.OK);
    }

    // Get a mobile plan by ID
    @GetMapping("/{id}")
    public ResponseEntity<mobilePlan> getMobilePlanById(@PathVariable int id) {
        Optional<mobilePlan> mobilePlan = mobilePlanRepository.findById(id);
        if (mobilePlan.isPresent()) {
            return new ResponseEntity<>(mobilePlan.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Update a mobile plan by ID
    @PutMapping("/{id}")
    public ResponseEntity<mobilePlan> updateMobilePlan(@PathVariable int id, @RequestBody mobilePlan mobilePlanDetails) {
        Optional<mobilePlan> mobilePlanOptional = mobilePlanRepository.findById(id);
        if (mobilePlanOptional.isPresent()) {
            mobilePlan mobilePlan = mobilePlanOptional.get();
            mobilePlan.setOperator(mobilePlanDetails.getOperator());
            mobilePlan.setPlan_name(mobilePlanDetails.getPlan_name());
            mobilePlan.setAmount(mobilePlanDetails.getAmount());
            mobilePlan.setValidity_days(mobilePlanDetails.getValidity_days());

            mobilePlan updatedMobilePlan = mobilePlanRepository.save(mobilePlan);
            return new ResponseEntity<>(updatedMobilePlan, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a mobile plan by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMobilePlan(@PathVariable int id) {
        Optional<mobilePlan> mobilePlanOptional = mobilePlanRepository.findById(id);
        if (mobilePlanOptional.isPresent()) {
            mobilePlanRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
