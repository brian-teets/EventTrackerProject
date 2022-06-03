package com.skilldistillery.water.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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

}
