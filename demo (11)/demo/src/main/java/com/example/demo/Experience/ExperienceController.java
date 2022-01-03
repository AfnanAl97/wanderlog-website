package com.example.demo.Experience;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(path = "experience")
@CrossOrigin("*")
public class ExperienceController {

    private final ExperienceService experienceService;

    @Autowired
    public ExperienceController(ExperienceService experienceService){ this.experienceService = experienceService; }

    @GetMapping
    public List<Experience> getExperiences(@RequestParam(required = false) String filter){ return experienceService.getExperiences(); }

    @GetMapping("/{username}")
    public List<Experience> getExperience(@PathVariable String username){
        return experienceService.getExperience(username);
    }

    @GetMapping("getOne/{id}")
    public Experience getExperienceById(@PathVariable String id){
        return experienceService.getExperienceById(id);
    }

    @PostMapping
    public Experience addExperience(@RequestBody Experience experience){
        return experienceService.addExperience(experience);
    }

    @DeleteMapping("/{id}")
    public void deleteExperience(@PathVariable String id){ experienceService.deleteExperience(id); }

    //Get all experience by country name
    @GetMapping("country/{country}")
    public List<Experience> getAllExpByCountryName(@PathVariable String country){
        return experienceService.getAllExpByCountryName(country);
    }

    //Get all experience by tag name
    @GetMapping("tag/{tag}")
    public List<Experience> getAllExpByTagName(@PathVariable String tag){
        return experienceService.getAllExpByTagName(tag);
    }
}


