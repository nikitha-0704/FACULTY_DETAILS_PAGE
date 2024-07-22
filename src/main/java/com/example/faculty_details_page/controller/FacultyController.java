package com.example.controller;

import com.example.model.BasicDetails;
import com.example.model.ProfessionalDetails;
import com.example.model.Qualification;
import com.example.model.FacultyAppointment;
import com.example.repository.BasicDetailsRepository;
import com.example.repository.ProfessionalDetailsRepository;
import com.example.repository.QualificationRepository;
import com.example.repository.FacultyAppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/faculty")
public class FacultyController {

    @Autowired
    private BasicDetailsRepository basicDetailsRepository;

    @Autowired
    private ProfessionalDetailsRepository professionalDetailsRepository;

    @Autowired
    private QualificationRepository qualificationRepository;

    @Autowired
    private FacultyAppointmentRepository facultyAppointmentRepository;

    @PostMapping("/basic-details")
    public BasicDetails saveBasicDetails(@RequestBody BasicDetails basicDetails) {
        return basicDetailsRepository.save(basicDetails);
    }

    @PostMapping("/professional-details")
    public ProfessionalDetails saveProfessionalDetails(@RequestBody ProfessionalDetails professionalDetails) {
        return professionalDetailsRepository.save(professionalDetails);
    }

    @PostMapping("/qualification-details")
    public Qualification saveQualificationDetails(@RequestBody Qualification qualification) {
        return qualificationRepository.save(qualification);
    }

    @PostMapping("/appointment-details")
    public FacultyAppointment saveAppointmentDetails(@RequestBody FacultyAppointment facultyAppointment) {
        return facultyAppointmentRepository.save(facultyAppointment);
    }

    @GetMapping("/basic-details/{id}")
    public BasicDetails getBasicDetails(@PathVariable Long id) {
        return basicDetailsRepository.findById(id).orElse(null);
    }

    @GetMapping("/professional-details/{id}")
    public ProfessionalDetails getProfessionalDetails(@PathVariable Long id) {
        return professionalDetailsRepository.findById(id).orElse(null);
    }

    @GetMapping("/qualification-details/{id}")
    public Qualification getQualificationDetails(@PathVariable Long id) {
        return qualificationRepository.findById(id).orElse(null);
    }

    @GetMapping("/appointment-details/{id}")
    public FacultyAppointment getAppointmentDetails(@PathVariable Long id) {
        return facultyAppointmentRepository.findById(id).orElse(null);
    }
}
