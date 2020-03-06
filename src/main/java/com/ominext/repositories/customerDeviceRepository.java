package com.ominext.repositories;

import com.ominext.entities.customerDevice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import javax.persistence.*;
@Repository
public interface customerDeviceRepository extends JpaRepository<customerDevice, Long> {

}
