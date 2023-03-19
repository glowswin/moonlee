package com.woo.leemoon.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class UserController {

    @RequestMapping("/")
    String indexPage(){
        return "index";
    }
    
    @RequestMapping("/intro")
    String introPage(){
        return "intro";
    }
}
