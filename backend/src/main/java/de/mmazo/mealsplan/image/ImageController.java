package de.mmazo.mealsplan.image;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/images")
public class ImageController {

    private final ImageRepository imageRepository;

    @Autowired
    public ImageController(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    @PostMapping(value = "")
    public Pic uploadImage(@RequestParam("file") MultipartFile file) throws IOException {
        Pic image = new Pic();
        image.setImage(file.getBytes());
        return this.imageRepository.save(image);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable(value="id") long id) {
        byte[] image = this.imageRepository.findById(id).get().getImage();
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(image);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteImage(@PathVariable(value="id") long id) {
        this.imageRepository.delete(this.imageRepository.findById(id).get());
    }

}
