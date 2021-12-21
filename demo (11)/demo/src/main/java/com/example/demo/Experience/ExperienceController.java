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

    @GetMapping("/{id}")
    public Experience getExperience(@PathVariable String id){ return experienceService.getExperience(id); }

    @PostMapping
    public Experience addExperience(@RequestBody Experience experience){
        return experienceService.addExperience(experience);
    }

    @DeleteMapping("/{id}")
    public void deleteExperience(@PathVariable String id){ experienceService.deleteExperience(id); }

    @GetMapping("country/{country}")
    public List<Experience> getAllExpByCountryName(@PathVariable String country){
        return experienceService.getAllExpByCountryName(country);
    }

    @GetMapping("tag/{tag}")
    public List<Experience> getAllExpByTagName(@PathVariable String tag){
        return experienceService.getAllExpByTagName(tag);
    }
}


