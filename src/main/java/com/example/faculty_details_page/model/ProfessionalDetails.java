package com.example.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "professionaldetails")
public class ProfessionalDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String areaOfResearch;
    private int experienceAtNITC;
    private int teachingExperiencePriorToNITC;
    private int industryExperiencePriorToNITC;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAreaOfResearch() {
        return areaOfResearch;
    }

    public void setAreaOfResearch(String areaOfResearch) {
        this.areaOfResearch = areaOfResearch;
    }

    public int getExperienceAtNITC() {
        return experienceAtNITC;
    }

    public void setExperienceAtNITC(int experienceAtNITC) {
        this.experienceAtNITC = experienceAtNITC;
    }

    public int getTeachingExperiencePriorToNITC() {
        return teachingExperiencePriorToNITC;
    }

    public void setTeachingExperiencePriorToNITC(int teachingExperiencePriorToNITC) {
        this.teachingExperiencePriorToNITC = teachingExperiencePriorToNITC;
    }

    public int getIndustryExperiencePriorToNITC() {
        return industryExperiencePriorToNITC;
    }

    public void setIndustryExperiencePriorToNITC(int industryExperiencePriorToNITC) {
        this.industryExperiencePriorToNITC = industryExperiencePriorToNITC;
    }
}
