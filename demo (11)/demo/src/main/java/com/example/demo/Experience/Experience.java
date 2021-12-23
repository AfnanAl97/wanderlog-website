package com.example.demo.Experience;

import com.example.demo.Users.User;

import javax.persistence.*;
import java.net.URL;

@Entity
@Table(name = "experience")
public class Experience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String description;
    private String tag;
    private String country;
    private String image;

    @ManyToOne(fetch = FetchType.EAGER, optional = true)
    @JoinColumn(name = "user_id")
    private User user;

    //Test
//    @ManyToOne(fetch = FetchType.EAGER, optional = true)
//    @JoinColumn(name = "image_id")
//    private Image image;

    public Experience() {
    }

    public Experience(int id, String title, String description, String tag, String country, String image, User user) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tag = tag;
        this.country = country;
        this.image = image;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "Experience{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", tag='" + tag + '\'' +
                ", country='" + country + '\'' +
                ", user=" + user +
                ", image=" + image +
                '}';
    }
}
