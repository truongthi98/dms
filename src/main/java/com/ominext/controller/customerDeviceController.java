package com.ominext.controller;

import com.ominext.service.ServiceResult;
import com.ominext.service.customerDeviceService;
import com.ominext.entities.customerDevice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/customerdevices")
public class customerDeviceController {
    @Autowired
    customerDeviceService customerDeviceService;

    @GetMapping("/")
    public ResponseEntity<ServiceResult> findAllCustomerDevice(){
        return new ResponseEntity<ServiceResult>(customerDeviceService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/id={id}")
    public ResponseEntity<ServiceResult> findById(@PathVariable Long id){
        return new ResponseEntity<ServiceResult>(customerDeviceService.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ServiceResult> createCustomerDevice(@RequestBody customerDevice customerDevice){
        return new ResponseEntity<ServiceResult>(customerDeviceService.create(customerDevice), HttpStatus.OK);
    }

    @PutMapping(value = "/id={id}")
    public ResponseEntity<ServiceResult> updateCustomerDevice(@RequestBody customerDevice customerDevice){
        return new ResponseEntity<ServiceResult>(customerDeviceService.update(customerDevice),HttpStatus.OK);
    }

    @DeleteMapping(value = "/id={id}")
    public ResponseEntity<ServiceResult> deleteCustomerDevice(@RequestBody deleteRequest deleteRequest){
        return new ResponseEntity<ServiceResult>(customerDeviceService.delete(deleteRequest.getId()),HttpStatus.OK);
    }
}
