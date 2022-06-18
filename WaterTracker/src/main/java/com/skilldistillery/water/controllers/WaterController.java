package com.skilldistillery.water.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.water.entities.Water;
import com.skilldistillery.water.services.WaterService;

@RequestMapping("api")
@RestController
@CrossOrigin({ "*", "http://localhost:4202" })
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
	
	@PatchMapping("water/{id}")
	public Water update(@RequestBody Water water, @PathVariable int id, HttpServletResponse resp) {
		Water updated = null;
		try {
			updated = waterServ.updateWaterLog(water, id);
			resp.setStatus(200);
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
		return updated;
	}
	
	@DeleteMapping("water/{id}")
	public Boolean delete(@PathVariable int id, HttpServletResponse resp) {
		Boolean deleted = false;
		try {
			deleted = waterServ.deleteWaterLogEntry(id);
			if(deleted) {
				resp.setStatus(204);
			}
			else {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(500);
		}
		return deleted;
	} 

}
