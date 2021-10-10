package com.skilldistillery.afterboot.controllers;

import java.util.List;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.afterboot.entities.Study;
import com.skilldistillery.afterboot.services.StudyService;

@RestController
@RequestMapping("api")
public class StudyController {

	@Autowired
	private StudyService studSvc;

//	Get all studies
	@GetMapping("studies")
	public List<Study> studyIndex() {
		return studSvc.getAllStudies();
	}
//	Get one study by id.
	@GetMapping("studies/{id}")
public Study findStudy(
		@PathVariable Integer id,
		HttpServletResponse res
		) {
		Study study = studSvc.findById(id);
		if (study == null) {
			res.setStatus(404);
		}
		return study;
	}


//  Create a new study
	@PostMapping("studies")
	public Study addStudy(
			@RequestBody Study study, 
			HttpServlet req, 
			HttpServlet res
			) {
		try {
			study = studSvc.addStudy(study);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(study.getId());
			res.setHeader("Location", url.toString());
		} catch (Exception e) {
			System.err.println(e);
			res.setStatus(400);
			study = null;
		}
		return study;
	}

//	Replace an existing study
	@PutMapping("studies/{id}")
	public Study updateStudy(@PathVariable Integer studyId, @RequestBody Study study, HttpServletResponse res) {
		try {
			study = studSvc.update(studyId, study);
			if (study == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			System.err.println(e);
			res.setStatus(400);
			study = null;
		}
		return study;
	}

//	Delete an existing study
	@DeleteMapping("studies/{id}")
	public void deleteStudy(
			@PathVariable Integer id,
			HttpServletResponse res
			){
		try {
			if (studSvc.deleteStudy(id));
			res.setStatus(204);
		} else {
			res.setStatus(404);
		}
		}catch(Exception e){
		System.err.println(e);
		res.setStatus(400);
	}
}

