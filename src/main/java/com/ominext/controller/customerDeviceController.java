package com.ominext.controller;

import com.ominext.service.customerDeviceService;
import com.ominext.entities.customerDevice;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/customerdevices")
public class customerDeviceController {
    @Autowired
    customerDeviceService customerDeviceService;

    @GetMapping
    public List<customerDevice> findAllCustomerDevice(){
    	ArrayList<customerDevice> re = new ArrayList<>(customerDeviceService.findAll());
    	System.out.println(re.size());
        return re;
    }
    @PostMapping(produces = { "application/json"})
    public void saveNewCustomerDevice(@RequestBody customerDevice cd){
        customerDeviceService.save(cd);

    }

  
}
