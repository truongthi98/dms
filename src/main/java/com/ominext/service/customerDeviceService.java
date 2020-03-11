package com.ominext.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ominext.dao.customerDAO;
import com.ominext.entities.customerDevice;

import java.util.List;

@Service
public class customerDeviceService {
    @Autowired
    private  customerDAO customerDAO;

    public List<customerDevice> findAll() {
        
        return customerDAO.findAll();
    }

    public void save(customerDevice cd){
        customerDAO.save(cd);
    }
    
}
