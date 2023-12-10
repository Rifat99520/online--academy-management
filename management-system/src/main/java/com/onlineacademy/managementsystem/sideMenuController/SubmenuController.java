package com.onlineacademy.managementsystem.sideMenuController;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SubmenuController {

    @Autowired
    private SubmenuRepository submenuRepository;

    private static final Logger logger = LoggerFactory.getLogger(SubmenuController.class);

    @RequestMapping(value = "submenu/getSubmenuData", method = RequestMethod.GET)
    public List<SubmenuEntity> listSubmenus() {
        logger.info("Submenu Data fetched");
        return submenuRepository.findAll();
    }
}
