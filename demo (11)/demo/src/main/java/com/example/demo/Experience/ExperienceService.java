package com.example.demo.Experience;

import com.example.demo.Users.User;
import com.example.demo.Users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ExperienceService {

    private final ExperienceRepository experienceRepository;
    private final UserRepository userRepository;

    @Autowired
    public ExperienceService(ExperienceRepository experienceRepository, UserRepository userRepository){
        this.experienceRepository = experienceRepository;
        this.userRepository = userRepository;
    }

    public List<Experience> getExperiences(){ return experienceRepository.findAll(); }

    public List<Experience> getExperience(String username){
        return experienceRepository.findAllByUser_username(username);
    }

    public Experience addExperience(Experience experience){
        System.out.println(experience.getUser().getUsername());
        User user = userRepository.findByUsername(experience.getUser().getUsername());
        System.out.println(user);
        experience.setUser(user);
        System.out.println(user.toString());
        return experienceRepository.save(experience); }

    public void deleteExperience(String id){
        int Experience_id = Integer.valueOf(id);
        experienceRepository.deleteById(Experience_id);
    }

    public List<Experience> getAllExpByCountryName(String name){
        return experienceRepository.findAllBycountry(name);
    }

    public List<Experience> getAllExpByTagName(String name){
        return experienceRepository.findAllBytag(name);
    }

    public Experience getExperienceById(String id) {
        return experienceRepository.findById(Integer.valueOf(id)).orElse(null);
    }

}
