package com.skilldistillery.afterboot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.afterboot.entities.Study;
import com.skilldistillery.afterboot.repositories.StudyRepository;

@Service
public class PetServiceImpl implements StudyService {
	
	@Autowired
	private StudyRepository studRepo;

	@Override
	public List<Study> getAllStudies() {
		// TODO Auto-generated method stub
		return studRepo.findAll();
	}

}
