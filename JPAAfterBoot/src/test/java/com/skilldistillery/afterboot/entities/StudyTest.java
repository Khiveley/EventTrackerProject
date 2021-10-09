package com.skilldistillery.afterboot.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class StudyTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Study study;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAAfterBoot");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		study = em.find(Study.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		study = null;
	}

	@Test
	void test() {
		assertNotNull(study);
		assertEquals("Java", study.getLanguage());
		assertEquals("Lambda Expressions", study.getFocus());
		assertEquals(2021, study.getStudyDate().getYear());
		assertEquals(10, study.getStudyDate().getMonthValue());
		assertEquals(8, study.getStudyDate().getDayOfMonth());
		assertEquals(17, study.getStart().getHour());
		assertEquals(30, study.getStart().getMinute());
		assertEquals(18, study.getEnd().getHour());
		assertEquals(15, study.getEnd().getMinute());
		assertEquals("Still not comfortable with lambdas.  Getting there.", study.getComment());
		assertEquals(
				"https://www.informit.com/ShowCover.aspx?isbn=9780135166307&type=f",study.getImageUrl());
		assertEquals("246-252", study.getPages());
		assertEquals("Core Java Volume I - Fundamentals Cay S. Horstmann", study.getSource());
	}
}
