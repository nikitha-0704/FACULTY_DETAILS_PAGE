package com.example.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "qualificationdetails")
public class Qualification { 

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String qualification;
    private String specialization;
    private String boardOrUniversity;
    private String divisionClass;
    private String yearOfPassing;
    private String percentageOrCGPA;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public String getBoardOrUniversity() {
        return boardOrUniversity;
    }

    public void setBoardOrUniversity(String boardOrUniversity) {
        this.boardOrUniversity = boardOrUniversity;
    }

    public String getDivisionClass() {
        return divisionClass;
    }

    public void setDivisionClass(String divisionClass) {
        this.divisionClass = divisionClass;
    }

    public String getYearOfPassing() {
        return yearOfPassing;
    }

    public void setYearOfPassing(String yearOfPassing) {
        this.yearOfPassing = yearOfPassing;
    }

    public String getPercentageOrCGPA() {
        return percentageOrCGPA;
    }

    public void setPercentageOrCGPA(String percentageOrCGPA) {
        this.percentageOrCGPA = percentageOrCGPA;
    }
}
