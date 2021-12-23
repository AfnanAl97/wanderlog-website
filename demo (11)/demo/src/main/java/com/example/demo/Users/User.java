package com.example.demo.Users;

import com.example.demo.Experience.Experience;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String password;

//    @OneToMany(mappedBy = "user")
//    private Collection<Experience> experiences = new ArrayList<>();

    public User() {
    }

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public User(String name, String email, String password, Collection<Experience> experiences) {
        this.name = name;
        this.email = email;
        this.password = password;
//        this.experiences = experiences;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

//    public Collection<Experience> getExperiences() {
//        return experiences;
//    }
//
//    public void setExperiences(Collection<Experience> experiences) {
//        this.experiences = experiences;
//    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
//                ", experiences=" + experiences +
                '}';
    }
}
