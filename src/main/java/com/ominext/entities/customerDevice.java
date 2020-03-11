package com.ominext.entities;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "customerdevice")
public class customerDevice {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name ="device_type")
    private String type;
    @Column(name = "device_code")
    private String code;

    @Column(name = "device_description")
    private String description;

    @Column(name = "status")
    private String status;

    @Column(name = "staff_name")
    private String staffName;

    @Column(name = "staff_email")
    private String staffEmail;

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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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

    public customerDevice(String type, String code, String description, String status, String staffName, String staffEmail, Date genCodeDate, Date handOverDate, Date revokeDate, Date returnDate) {
        this.type = type;
        this.code = code;
        this.description = description;
        this.status = status;
        this.staffName = staffName;
        this.staffEmail = staffEmail;
        this.genCodeDate = genCodeDate;
        this.handOverDate = handOverDate;
        this.revokeDate = revokeDate;
        this.returnDate = returnDate;
    }

}
