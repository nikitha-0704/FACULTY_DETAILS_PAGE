// src/main/java/com/example/repository/FacultyAppointmentRepository.java
package com.example.repository;

import com.example.model.FacultyAppointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FacultyAppointmentRepository extends JpaRepository<FacultyAppointment, Long> {
}
