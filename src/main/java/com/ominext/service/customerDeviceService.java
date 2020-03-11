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

    public customerDevice addCustomerDevice(customerDevice cd){
        cd.setType(cd.getType());
        cd.setCode(cd.getCode());
        cd.setDescription(cd.getDescription());
        cd.setStatus(cd.getStatus());
        cd.setStaffName(cd.getStaffName());
        cd.setStaffEmail(cd.getStaffEmail());
        cd.setGenCodeDate(cd.getGenCodeDate());
        cd.setHandOverDate(cd.getHandOverDate());
        cd.setRevokeDate(cd.getRevokeDate());
        cd.setReturnDate(cd.getReturnDate());
        customerDAO.save(cd);
        return cd;
    }
}
