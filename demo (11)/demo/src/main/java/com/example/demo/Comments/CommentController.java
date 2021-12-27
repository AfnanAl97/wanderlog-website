package com.example.demo.Comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(path = "comments")
@CrossOrigin("*")
public class CommentController {

    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService){ this.commentService = commentService; }

    @GetMapping
    public List<Comment> getComments(@RequestParam(required = false) String filter){ return commentService.getComments(); }

    @GetMapping("/{id}")
    public Comment getComment(@PathVariable String id){ return commentService.getComment(id); }

    @PostMapping
    public Comment addComment(@RequestBody Comment comment){
        return commentService.addComment(comment);
    }

    @DeleteMapping("/{id}")
    public void deleteComment(@PathVariable String id){ commentService.deleteComment(id); }

//    @PutMapping("/{id}")
//    public void updateComment(@PathVariable String id, @RequestBody Comment data){ commentService.updateComment(id, data); }

    //Get all comments by experience ID
    @GetMapping("AllComment/{id}")
    public List<Comment> getAllCommentsByExpID(@PathVariable String id){
        return commentService.getAllCommentsByExpID(id);
    }
}

