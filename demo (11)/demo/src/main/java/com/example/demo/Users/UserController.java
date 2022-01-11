package com.example.demo.Users;

import com.example.demo.Experience.Experience;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path="users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("getOne/{username}")
    public User getUserByUsername(@PathVariable String username){
        return userService.getUserByUsername(username);
    }

    @PostMapping
    public User createUser(@RequestBody User user){
        return userService.createUser(user);
    }

    @PutMapping("/{id}")
    public void updateUser(@PathVariable String id){
        userService.updateUser(id);
    }

    @DeleteMapping("/{username}")
    public void deleteUser(@PathVariable String username){
        System.out.println(username);
        userService.deleteUser(username); }

}



