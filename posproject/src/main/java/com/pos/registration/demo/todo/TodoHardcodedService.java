package com.pos.registration.demo.todo;


import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList();

    private static long idCounter = 0;
    static {
        todos.add(new Todo(++idCounter, 5,"inginicio", "Peter",new Date(),4,5));
        todos.add(new Todo(++idCounter, 7,"ingenico", "Evans",new Date(),4,5));
       todos.add(new Todo(++idCounter, 8,"jam", "Maurice",new Date(),5,8));
        todos.add(new Todo(++idCounter, 10,"ingenico", "hhhh",new Date(),10,14));
        todos.add(new Todo(++idCounter, 11,"ingenico", "hezzy",new Date(),15,16));
    }

 // retrieve all pos
    public List<Todo> findAll(){
      return  todos;
    }
    // add pos to database
     public Todo save(Todo todo){
        if(todo.getId()==-1){
            todo.setId(++idCounter);
            todos.add(todo);
        } else{
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
     }
// delete by id
    public  Todo deleteById(long id){
        Todo todo = findById(id);
        if(todo == null) return null;
        if(todos.remove(todo)) {
            return todo;
        }
        return  null;
    }
    // delete by id
    public Todo findById(long id){
        for(Todo todo:todos){
            if(todo.getId() == id){
                return todo;
            }
        }
        return null;
    }
}
