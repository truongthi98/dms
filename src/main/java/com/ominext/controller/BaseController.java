package com.ominext.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BaseController {

    @RequestMapping(value = { "/", "/login" })
    public String login(@RequestParam(required = false) String message, final Model model) {
        if (message != null && !message.isEmpty()) {
            if (message.equals("logout")) {
                model.addAttribute("message", "Logout!");
            }
            if (message.equals("error")) {
                model.addAttribute("message", "Login Failed!");
            }
        }
        return "login";
    }

    @RequestMapping("/index")
    public String index() {
        return "index";
    }

    @RequestMapping("/deviceManage")
    public String deviceManage() {
        return "deviceManage";
    }

    @RequestMapping("/deviceCompany")
    public String deviceCompany() {
        return "deviceCompany";
    }

    @RequestMapping("/deviceCustomer")
    public String deviceCustomer() {
        return "deviceCustomer";
    }

    @RequestMapping("/devicePersonal")
    public String devicePersonal() {
        return "devicePersonal";
    }

    @RequestMapping("/deviceStaff")
    public String deviceStaff() {
        return "deviceStaff";
    }

    @RequestMapping("/403")
    public String accessDenied() {
        return "403";
    }

    @RequestMapping("userManage")
    public String userManage(){return "userManage";}
}
