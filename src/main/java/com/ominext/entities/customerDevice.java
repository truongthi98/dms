package com.ominext.entities;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "customerdevice")
public class customerDevice {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "device_code")
    private String deviceCode;

    @Column(name = "device_id")
    private Long deviceId;

    @Column(name = "device_description")
    private String description;

    @Column(name = "staff_id")
    private Long staffId;

    @Column(name = "staff_name")
    private String staffName;

    @Column(name = "staff_email")
    private String staffEmail;

    @Column(name = "devicemanager_name")
    private String deviceManagerName;

    @Column(name = "gen_code_date")
    private Date genCodeDate;

    @Column(name = "hand_over_date")
    private Date handOverDate;

    @Column(name = "revoke_date")
    private Date revokeDate;

    @Column(name = "return_date")
    private Date returnDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDeviceCode() {
        return deviceCode;
    }

    public void setDeviceCode(String deviceCode) {
        this.deviceCode = deviceCode;
    }

    public Long getDeviceId() {
        return deviceId;
    }

    public void setDeviceId(Long deviceId) {
        this.deviceId = deviceId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getStaffId() {
        return staffId;
    }

    public void setStaffId(Long staffId) {
        this.staffId = staffId;
    }

    public String getStaffName() {
        return staffName;
    }

    public void setStaffName(String staffName) {
        this.staffName = staffName;
    }

    public String getStaffEmail() {
        return staffEmail;
    }

    public void setStaffEmail(String staffEmail) {
        this.staffEmail = staffEmail;
    }

    public String getDeviceManagerName() {
        return deviceManagerName;
    }

    public void setDeviceManagerName(String deviceManagerName) {
        this.deviceManagerName = deviceManagerName;
    }

    public Date getGenCodeDate() {
        return genCodeDate;
    }

    public void setGenCodeDate(Date genCodeDate) {
        this.genCodeDate = genCodeDate;
    }

    public Date getHandOverDate() {
        return handOverDate;
    }

    public void setHandOverDate(Date handOverDate) {
        this.handOverDate = handOverDate;
    }

    public Date getRevokeDate() {
        return revokeDate;
    }

    public void setRevokeDate(Date revokeDate) {
        this.revokeDate = revokeDate;
    }

    public Date getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(Date returnDate) {
        this.returnDate = returnDate;
    }

    public customerDevice(){}
}
