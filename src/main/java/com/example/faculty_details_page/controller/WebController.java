// src/main/java/com/example/controller/WebController.java
package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {
    @RequestMapping(value = {"/", "/login", "/dashboard", "/faculty-details", "/display-faculty-details"})
    public String index() {
        return "index";
    }
}
