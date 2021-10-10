package com.skilldistillery.afterboot.services;

import java.util.List;

import com.skilldistillery.afterboot.entities.Study;

public interface StudyService {
	
 List<Study> getAllStudies();
Study addStudy(Study study);
boolean deleteStudy(int id);
Study update(Integer studyId, Study study);
Study findById(int studyId);
 

}
