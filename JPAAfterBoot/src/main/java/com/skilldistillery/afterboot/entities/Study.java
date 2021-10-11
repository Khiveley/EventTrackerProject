package com.skilldistillery.afterboot.entities;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Study {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String language;

	private String focus;
	
	@Column(name = "study_date")
	private LocalDate studyDate;

	private LocalTime start;

	private LocalTime end;

	private String comment;

	@Column(name = "image_url")
	private String imageUrl;

	private String pages;

	private String source;

//	No Arg Constructor

	public Study() {
		super();
	}

// Constructor Generated w/ all Fields

	public Study(int id, String language, String focus, LocalDate studyDate, LocalTime start, LocalTime end,
			String comment, String imageUrl, String pages, String source) {
		super();
		this.id = id;
		this.language = language;
		this.focus = focus;
		this.studyDate = studyDate;
		this.start = start;
		this.end = end;
		this.comment = comment;
		this.imageUrl = imageUrl;
		this.pages = pages;
		this.source = source;
	}

//	Setter and Getters

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getFocus() {
		return focus;
	}

	public void setFocus(String focus) {
		this.focus = focus;
	}

	public LocalDate getStudyDate() {
		return studyDate;
	}

	public void setStudyDate(LocalDate studyDate) {
		this.studyDate = studyDate;
	}

	public LocalTime getStart() {
		return start;
	}

	public void setStart(LocalTime start) {
		this.start = start;
	}

	public LocalTime getEnd() {
		return end;
	}

	public void setEnd(LocalTime end) {
		this.end = end;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getPages() {
		return pages;
	}

	public void setPages(String pages) {
		this.pages = pages;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

//	To String

	@Override
	public String toString() {
		return "Study [id=" + id + ", language=" + language + ", focus=" + focus + ", studyDate=" + studyDate
				+ ", start=" + start + ", end=" + end + ", comment=" + comment + ", imageUrl=" + imageUrl + ", pages="
				+ pages + ", source=" + source + "]";
	}

// Hashcode and Equals

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Study other = (Study) obj;
		return id == other.id;
	}

}
