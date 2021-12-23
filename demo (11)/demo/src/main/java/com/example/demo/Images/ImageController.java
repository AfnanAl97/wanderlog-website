package com.example.demo.Images;

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
    public Image addImage(@RequestBody Image image){
        return imageService.addImage(image);
    }

    @DeleteMapping("/{id}")
    public void deleteImage(@PathVariable String id){ imageService.deleteImage(id); }
}

