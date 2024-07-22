// src/main/java/com/example/repository/BasicDetailsRepository.java
package com.example.repository;

import com.example.model.BasicDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BasicDetailsRepository extends JpaRepository<BasicDetails, Long> {
}
