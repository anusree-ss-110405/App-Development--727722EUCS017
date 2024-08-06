package com.example.demo.Controller;

import com.example.demo.Model.mobileno;
import com.example.demo.Repository.mobilenoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/mobileno")
public class mobilenoController {

    @Autowired
    private mobilenoRepository mobilenoRepository;

    // Create a new mobile number
    @PostMapping
    public ResponseEntity<mobileno> createMobileno(@RequestBody mobileno mobileno) {
        mobileno savedMobileno = mobilenoRepository.save(mobileno);
        return new ResponseEntity<>(savedMobileno, HttpStatus.CREATED);
    }

    // Get all mobile numbers
    @GetMapping
    public ResponseEntity<List<mobileno>> getAllMobilenos() {
        List<mobileno> mobilenos = mobilenoRepository.findAll();
        return new ResponseEntity<>(mobilenos, HttpStatus.OK);
    }
    // Create multiple mobile numbers
@PostMapping("/bulk")
public ResponseEntity<List<mobileno>> createMobilenos(@RequestBody List<mobileno> mobilenos) {
    List<mobileno> savedMobilenos = mobilenoRepository.saveAll(mobilenos);
    return new ResponseEntity<>(savedMobilenos, HttpStatus.CREATED);
}

    // Get a mobile number by ID
    @GetMapping("/{id}")
    public ResponseEntity<mobileno> getMobilenoById(@PathVariable int id) {
        Optional<mobileno> mobileno = mobilenoRepository.findById(id);
        if (mobileno.isPresent()) {
            return new ResponseEntity<>(mobileno.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Update a mobile number by ID
    @PutMapping("/{id}")
    public ResponseEntity<mobileno> updateMobileno(@PathVariable int id, @RequestBody mobileno mobilenoDetails) {
        Optional<mobileno> mobilenoOptional = mobilenoRepository.findById(id);
        if (mobilenoOptional.isPresent()) {
            mobileno mobileno = mobilenoOptional.get();
            mobileno.setUser_id(mobilenoDetails.getUser_id());
            mobileno.setNumber(mobilenoDetails.getNumber());
            mobileno.setOperator(mobilenoDetails.getOperator());

            mobileno updatedMobileno = mobilenoRepository.save(mobileno);
            return new ResponseEntity<>(updatedMobileno, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a mobile number by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMobileno(@PathVariable int id) {
        Optional<mobileno> mobilenoOptional = mobilenoRepository.findById(id);
        if (mobilenoOptional.isPresent()) {
            mobilenoRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

