package com.crud.crudspring.service;

import com.crud.crudspring.entity.User;
import com.crud.crudspring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User postUser(User user){
       return  userRepository.save(user);
    }
    public List<User> getAllUser(){
         return userRepository.findAll();
    }
    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }

    public User getUserById(Long id){ return userRepository.findById(id).orElse(null);}

    public User updateUser(Long id, User user){
        Optional<User> optionalUser = userRepository.findById(id);
        if(optionalUser.isPresent()){
            User existingUser = optionalUser.get();
            existingUser.setUsername(user.getUsername());
            existingUser.setEmail(user.getEmail());
            existingUser.setPhoneNumber(user.getPhoneNumber());
            existingUser.setAddress(user.getAddress());
            return userRepository.save(existingUser);


        }else {
            return  null;
        }
    }

}
