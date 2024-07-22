// src/main/java/com/example/repository/QualificationRepository.java
package com.example.repository;

import com.example.model.Qualification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QualificationRepository extends JpaRepository<Qualification, Long> {
}
