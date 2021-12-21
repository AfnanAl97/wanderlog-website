package com.example.demo.Images;

import com.example.demo.Experience.Experience;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(path = "images")
@CrossOrigin("*")
public class ImageController {

    private final ImageService imageService;

    @Autowired
    public ImageController(ImageService imageService){ this.imageService = imageService; }

    @GetMapping
    public List<Image> getImages(@RequestParam(required = false)String filter){ return imageService.getImages(); }

    @GetMapping("/{id}")
    public Image getImage(@PathVariable String id){ return imageService.getImage(id); }

    @PostMapping
    public Image addImage(@RequestBody Form form){
        return imageService.addImage(form.getImage(), form.getExperience());
    }

    @DeleteMapping("/{id}")
    public void deleteImage(@PathVariable String id){ imageService.deleteImage(id); }
}

class Form {
    private Image image;
    private Integer experience;

    public Form(Image image, Integer experience) {
        this.image = image;
        this.experience = experience;
    }

    public Image getImage() {
        return image;
    }

    public Integer getExperience() {
        return experience;
    }
}
