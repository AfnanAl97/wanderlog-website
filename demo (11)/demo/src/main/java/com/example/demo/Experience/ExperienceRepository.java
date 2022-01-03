package com.example.demo.Experience;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExperienceRepository extends JpaRepository<Experience, Integer>{
    List<Experience> findAllBycountry(String country);
    List<Experience> findAllBytag(String tag);

    List <Experience> findAllByUser_username(String username);
}
