package com.example.demo.Users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    public User findByUsername(String username);
    public User findByEmail (String email);

    void deleteByUsername(String username);
}

