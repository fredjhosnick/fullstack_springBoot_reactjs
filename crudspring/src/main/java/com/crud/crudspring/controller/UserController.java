package com.crud.crudspring.controller;

import com.crud.crudspring.entity.User;
import com.crud.crudspring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserController {
   @Autowired
    private UserService userService;

    @PostMapping("/user")
    public User postUser(@RequestBody User user){
        return  userService.postUser(user);
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userService.getAllUser();
    }
    @DeleteMapping("/user/{id}")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        User user = userService.getUserById(id);
        if(user == null) return  ResponseEntity.notFound().build();
        return ResponseEntity.ok(user);
    }
    @PatchMapping("/user/{id}")
    public ResponseEntity<User>  updateUser(@PathVariable Long id, @RequestBody User user){
        User updateUser = userService.updateUser(id,user);

        if(updateUser != null) return  ResponseEntity.ok(updateUser);
        return  ResponseEntity.notFound().build();
    }


}
