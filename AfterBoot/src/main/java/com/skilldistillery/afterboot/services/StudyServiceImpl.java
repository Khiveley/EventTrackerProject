package com.skilldistillery.afterboot.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.afterboot.entities.Study;
import com.skilldistillery.afterboot.repositories.StudyRepository;

@Service
@Transactional
public class StudyServiceImpl implements StudyService {
	
	@Autowired
	private StudyRepository studRepo;

	@Override
	public List<Study> getAllStudies() {
		return studRepo.findAll();
	}
	
	@Override
	public Study findById(int studyId) {
		Optional<Study>studyOpt = studRepo.findById(studyId);
		return studyOpt.get();
		
	}
	
	@Override
	public Study addStudy(Study study) {
		studRepo.saveAndFlush(study);
		return study;
	}
	
	@Override
	public boolean deleteStudy(int studyId) {
		boolean isDeleted = false;
		Optional<Study> studyOpt = studRepo.findById(studyId);
		if (studyOpt.isPresent()) {
			studRepo.deleteById(studyId);
			isDeleted = true;
		}
		return isDeleted;
	}

	@Override
	public Study update(Integer id, Study study) {
	Optional<Study> studyOpt = studRepo.findById(id);
	Study managedStudy = null;
	if(studyOpt.isPresent()) {
		managedStudy = studyOpt.get();
		managedStudy.setLanguage(study.getLanguage());
		managedStudy.setFocus(study.getFocus());
		managedStudy.setStudyDate(study.getStudyDate());
		managedStudy.setStart(study.getStart());
		managedStudy.setEnd(study.getEnd());
		managedStudy.setComment(study.getComment());
		managedStudy.setSource(study.getSource());
		managedStudy.setPages(study.getPages());
		managedStudy.setImageUrl(study.getImageUrl());
		studRepo.saveAndFlush(managedStudy);
	}
	return managedStudy;
	}

}
