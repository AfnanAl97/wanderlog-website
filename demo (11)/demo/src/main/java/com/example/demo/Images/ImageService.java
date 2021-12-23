package com.example.demo.Images;

import com.example.demo.Experience.Experience;
import com.example.demo.Experience.ExperienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ImageService {

    private final ImageRepository imageRepository;
    private final ExperienceRepository experienceRepository;

    @Autowired
    public ImageService(ImageRepository imageRepository, ExperienceRepository experienceRepository){
        this.imageRepository = imageRepository;
        this.experienceRepository = experienceRepository;
    }

    public List<Image> getImages(){ return imageRepository.findAll(); }

    public Image getImage(String id){
        int Image_id = Integer.valueOf(id);
        return imageRepository.findById(Image_id).orElse(null);
    }

    public Image addImage(Image image){
        Experience experience = experienceRepository.findById(image.getExperience().getId()).orElse(null);
        image.setExperience(experience);
        return imageRepository.save(image);
    }

    public void deleteImage(String id){
        int Image_id = Integer.valueOf(id);
        imageRepository.deleteById(Image_id);
    }
}
