// src/main/java/com/example/repository/ProfessionalDetailsRepository.java
package com.example.repository;

import com.example.model.ProfessionalDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessionalDetailsRepository extends JpaRepository<ProfessionalDetails, Long> {
}
