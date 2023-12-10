package com.onlineacademy.managementsystem.sideMenuController;

import jakarta.persistence.*;

@Entity
@Table(name = "Submenus")
public class SubmenuEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long submenuId;

    private String html;
    private String controller;
    private String title;

    // getters and setters

    public Long getSubmenuId() {
        return submenuId;
    }

    public String getHtml() {
        return html;
    }

    public String getController() {
        return controller;
    }

    public String getTitle() {
        return title;
    }

    public void setSubmenuId(Long submenuId) {
        this.submenuId = submenuId;
    }

    public void setHtml(String html) {
        this.html = html;
    }

    public void setController(String controller) {
        this.controller = controller;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
