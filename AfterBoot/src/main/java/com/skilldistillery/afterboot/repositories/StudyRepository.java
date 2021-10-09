package com.skilldistillery.afterboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.afterboot.entities.Study;

public interface StudyRepository extends JpaRepository<Study, Integer> {

}
