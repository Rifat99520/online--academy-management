package com.onlineacademy.managementsystem.sideMenuController;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SubmenuRepository extends JpaRepository<SubmenuEntity, Long> {
}
