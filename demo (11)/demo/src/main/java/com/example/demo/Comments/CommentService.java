package com.example.demo.Comments;

import com.example.demo.Experience.Experience;
import com.example.demo.Experience.ExperienceRepository;
import com.example.demo.Users.User;
import com.example.demo.Users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final ExperienceRepository experienceRepository;
    private final UserRepository userRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository, ExperienceRepository experienceRepository, UserRepository userRepository){
        this.commentRepository = commentRepository;
        this.experienceRepository = experienceRepository;
        this.userRepository = userRepository;
    }

    public List<Comment> getComments(){ return commentRepository.findAll(); }

    public Comment getComment(String id){
        int Comment_id = Integer.valueOf(id);
        return commentRepository.findById(Comment_id).orElse(null);
    }

    public Comment addComment(Comment comment){
        Experience experience = experienceRepository.findById(comment.getExperience().getId()).orElse(null);
        User user = userRepository.findById(comment.getUser().getId()).orElse(null);
        comment.setExperience(experience);
        comment.setUser(user);
        commentRepository.save(comment);
        experience.addComment(comment);
        System.out.println(experience);
        return comment;
    }

    public void deleteComment(String id){
        int Comment_id = Integer.valueOf(id);
        commentRepository.deleteById(Comment_id);
    }

    public Comment updateComment(Comment data){
        int Comment_id = data.getId();
        Comment comment = commentRepository.findById(Comment_id).orElse(null);

        if(comment != null){
            comment.setBody(data.getBody());
            commentRepository.save(comment);
        }
        return comment;
    }

    public List<Comment> getAllCommentsByExpID(String id){
        int Experience_id = Integer.valueOf(id);
        return commentRepository.findAllByexperience_id(Experience_id);

    }
}
