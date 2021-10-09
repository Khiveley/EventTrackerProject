package com.skilldistillery.afterboot.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.afterboot.entities.Study;
import com.skilldistillery.afterboot.services.StudyService;

@RestController
@RequestMapping("api")
public class StudyController {
	
	@Autowired
	private StudyService studSvc;
	
	@GetMapping("studies")
	public List<Study> studyIndex(){
		return studSvc.getAllStudies();
	}

}
