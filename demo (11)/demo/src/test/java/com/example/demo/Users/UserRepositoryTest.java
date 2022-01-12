package com.example.demo.Users;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class UserRepositoryTest {

    private final UserRepository userRepository;

    @Autowired
    public UserRepositoryTest(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Test
    void itShouldFindUser() {
        User user = new User("a@a.com", "123");
        User savedUser = userRepository.save(user);
        User result = userRepository.findById(savedUser.getId()).orElse(null);
        assertNotNull(result);
    }

    @Test
    void itShouldSaveUser() {
        User user = new User("a@a.com", "123");
        User result = userRepository.save(user);
        assertTrue(result.getId() != 0);
    }

    @Test
    void itShouldFindUserByEmail() {
        String email = "a@a.com";
        User user = new User(email, "123");
        userRepository.save(user);

        User result = userRepository.findByEmail(email);

        assertEquals(email, result.getEmail());
        assertNotEquals("b@b.com", result.getEmail());
    }

    @Test
    void itShouldUpdateUser() {
        User user = new User("a@a.com", "123");
        userRepository.save(user);
        user.setEmail("b@b.com");
        userRepository.save(user);
        assertEquals(user.getEmail(), "b@b.com");
    }

    @Test
    void itShouldDeleteUser() {
        User user = new User("a@a.com", "123");
        userRepository.save(user);
        userRepository.delete(user);
        User result = userRepository.findById(user.getId()).orElse(null);
        assertNull(result);
    }
}