package com.ominext.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ominext.repositories.customerDeviceRepository;
import com.ominext.entities.customerDevice;
import javax.persistence.*;

@Service
public class customerDeviceService {
    @Autowired
    private  customerDeviceRepository customerDeviceRepository;

    public ServiceResult findAll() {
        ServiceResult result = new ServiceResult();
        result.setData(customerDeviceRepository.findAll());
        return result;
    }
    public ServiceResult findById(Long id) {
        ServiceResult result = new ServiceResult();
        customerDevice customer = customerDeviceRepository.findById(id).orElse(null);
        result.setData(customer);
        return result;
    }
    public ServiceResult create(customerDevice customer) {
        ServiceResult result = new ServiceResult();
        result.setData(customerDeviceRepository.save(customer));
        return result;
    }
    public ServiceResult update(customerDevice customer) {
        ServiceResult result = new ServiceResult();
        if (!customerDeviceRepository.findById(customer.getId()).isPresent()) {
            result.setStatus(ServiceResult.Status.FAILED);
            result.setMessage("Customer Not Found");
        } else {
            result.setData(customerDeviceRepository.save(customer));
        }
        return result;
    }
    public ServiceResult delete(Long id) {
        ServiceResult result = new ServiceResult();
        customerDevice customer = customerDeviceRepository.findById(id).orElse(null);
        if (customer == null) {
            result.setStatus(ServiceResult.Status.FAILED);
            result.setMessage("Customer Not Found");
        } else {
            customerDeviceRepository.delete(customer);
            result.setMessage("success");
        }
        return result;
    }
}
