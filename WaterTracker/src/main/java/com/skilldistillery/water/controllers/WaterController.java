package com.skilldistillery.water.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.water.entities.Water;
import com.skilldistillery.water.services.WaterService;

@RequestMapping("api")
@RestController
public class WaterController {
	
	@Autowired
	private WaterService waterServ;
	
	
	@GetMapping("water")
	public List<Water> index(){
		return waterServ.index(); 
	}
	
	@GetMapping("water/{id}")
	public Water getWaterLogById(@PathVariable int id){
		return waterServ.showLogById(id);  
	}
	/*
	 * 
		@PostMapping(path = "posts")
	public Post createNewPost(@RequestBody Post post, HttpServletResponse resp, HttpServletRequest req) {
		try {
			post = postDao.createPost(post);
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(post.getId());
			resp.setHeader("Location", url.toString()); 
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
			post = null;
		} 
		return post; 
	}
	 */
	@PostMapping("water")
	public Water createWaterLog(@RequestBody Water water, HttpServletResponse resp, HttpServletRequest req) {
		try {
			water = waterServ.createNewWaterLog(water);
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(water.getId());
			resp.setHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
			water = null;
		}
		
		return water;
	}

}
