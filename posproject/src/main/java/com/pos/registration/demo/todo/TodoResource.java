package com.pos.registration.demo.todo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoResource {

    @Autowired
     private  TodoHardcodedService todoHardcodedService;
// retrieve all pos from database
    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
      return todoHardcodedService.findAll();
    }
    @GetMapping("/users/{username}/todos/{id}")
    public Todo  getTodo( @PathVariable String username,@PathVariable long id){
        return todoHardcodedService.findById(id);
    }
    // DELETE /users/{username}/todos/{id}

@DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){

       Todo todo = todoHardcodedService.deleteById(id);
        if(todo!=null){
            return  ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
}
//update specific pos
@PutMapping("/users/{username}/todos/{id}")
public ResponseEntity<Todo> updateTodo(@PathVariable String username,
                                       @PathVariable long id,
                                       @RequestBody Todo todo){
       Todo todoUpdated =  todoHardcodedService.save(todo);
       return new ResponseEntity<Todo>(todo, HttpStatus.OK);
                                       }
// update pos
    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Void> updateTodo(@PathVariable String username,
                                           @RequestBody Todo todo){
        Todo createdTodo =  todoHardcodedService.save(todo);

    URI uri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
